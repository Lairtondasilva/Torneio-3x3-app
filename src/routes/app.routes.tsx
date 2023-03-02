import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import RegisterTeam from '../pages/RegisterTeam/Index';
import {Notebook, House} from 'phosphor-react-native'
import Home from '../pages/home';
import ChooseProfile from '../pages/ChooseProfile/index';
import MatchHistory from '../pages/MatchHistory/index';
import { MyStack } from './stack.routes';

const {Navigator, Screen} = createBottomTabNavigator();

export function AppRoutes(){
    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarInactiveBackgroundColor:'#2A2F3B',
            tabBarActiveBackgroundColor:'#2A2F3B',
            tabBarActiveTintColor:'#fff',
            tabBarShowLabel: false
        }  
        }>
            <Screen
                name='home'
                component={Home}
                options={{
                    tabBarIcon: House
                }}
            />
             <Screen
                name='historic'
                component={MatchHistory}
                options={{
                    tabBarIcon: Notebook
                }}
            />
        </Navigator>
    );
}