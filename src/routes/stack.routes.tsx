import { createStackNavigator } from "@react-navigation/stack";
import RegisterTeam from '../pages/RegisterTeam/Index';
import { AppRoutes } from './app.routes';
import MyTeam from "../pages/myTeam";

const Stack = createStackNavigator();

export function MyStack() {
    return (
      <Stack.Navigator 
        screenOptions={{
            headerShown: false,
        }}
      >
        <Stack.Screen name="tabRoutes" component={AppRoutes} options={{
        title: "Meu App"
        }} />
        <Stack.Screen  name="register-team" component={RegisterTeam} options={{
          headerTitle: "Criar Time"
        }}
        initialParams={{
          headerTitle: "Criar time"
        }}
        />
        <Stack.Screen  name="my-team" component={MyTeam} options={{
          headerTitle: "Meu Time"
        }}
        initialParams={{
          headerTitle: "Meu time"
        }}
        />
      </Stack.Navigator>
    );
  }