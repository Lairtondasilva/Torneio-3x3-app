import { ReactElement, createContext, useState, useEffect } from 'react';
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { api } from '../services/Api';

WebBrowser.maybeCompleteAuthSession();

interface UserProps {
    name: string
    avatarUrl: string
    sub: string
    roles: string
}

export interface AuthContextDataProps{
    user: UserProps;
    signIn:()=>Promise<void>;
    isUserLoading: boolean;
    updateRole: (role:string)=>Promise<void>;
}

interface AuthProviderProps{
    children: ReactElement
}

export const AuthContext = createContext({} as AuthContextDataProps);

export function AuthContextProvider({children}: AuthProviderProps){
    const [isUserLoading, setIsUserLoading] = useState(false);
    const [user, setUser] = useState<UserProps>({} as UserProps);

    const [request, response, promptAsync] = Google.useAuthRequest({
        clientId: '661895576190-9ld4cjhkh2do6t49mmg7n39cku8fp0ac.apps.googleusercontent.com',
        redirectUri: AuthSession.makeRedirectUri({useProxy: true}),
        scopes: ['profile', 'email']
    });

    async function updateRole (role: string){
        try{
            setIsUserLoading(true);

            const tokenResponse = await api.put(`users/role`, {
                role
            })

            api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`;
            
            const userInfo = await api.get('/users/me');

            setUser(userInfo.data.user);

        } catch(error){
            throw error;
        }
        finally{
            setIsUserLoading(false);
        }
    }

    async function signIn() {
        try{
            setIsUserLoading(true);
            await promptAsync({useProxy:true});
        }
        catch(error){
            throw error;
        }finally{
            setIsUserLoading(false);
        }
    }

    async function signInWithGoogle (access_token: string){
       try{
        setIsUserLoading(true);
       const tokenResponse = await api.post("/users",{
            access_token
        })

        api.defaults.headers.common['Authorization'] = `Bearer ${tokenResponse.data.token}`;

        const userInfo = await api.get('/users/me');
        setUser(userInfo.data.user)
       }catch(error){
            throw error;
       }finally{
            setIsUserLoading(false)
       }
    }
    
    useEffect(()=>{
        if(response?.type === 'success' && response.authentication?.accessToken){
            signInWithGoogle(response.authentication.accessToken);
        }
    },[response])


    return (
        <AuthContext.Provider 
        value={{
            signIn,
            user,
            isUserLoading,
            updateRole
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}