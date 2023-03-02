import {NavigationContainer, StackRouter, TabRouter} from '@react-navigation/native';
import { AppRoutes } from './app.routes';
import { useAuth } from '../hooks/useAuth';
import SignIn from '../pages/signIn';
import Loading from '../components/Loading';
import ChooseProfile from '../pages/ChooseProfile/index';
import { MyStack } from './stack.routes';



export function Routes(){
    const {user, isUserLoading} = useAuth();
    return(
    <NavigationContainer>
        {isUserLoading ? <Loading/> : user.name ? user.roles? <MyStack/> : <ChooseProfile/> : <SignIn/>}

    </NavigationContainer>
    );
}