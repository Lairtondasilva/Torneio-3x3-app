import {useContext} from 'react'

import { AuthContext, AuthContextDataProps } from '../context/authContext';

export function useAuth():AuthContextDataProps{
    const context = useContext(AuthContext);
    return context;
}