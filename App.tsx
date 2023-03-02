import 'react-native-gesture-handler';
import { NativeBaseProvider, StatusBar, View } from 'native-base';
import { THEME } from './src/styles/theme';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Loading from './src/components/Loading';
import { AuthContextProvider } from './src/context/authContext';
import { Routes } from './src/routes';
import { Provider } from 'react-redux';
import { store } from './src/store';


export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium,Roboto_700Bold});
  return (
  <Provider store={store}>
    <NativeBaseProvider theme={THEME}>
        <AuthContextProvider>
          <View flex={1} bg={"dark.50"}>
          {fontsLoaded ? <Routes/> : <Loading/>}
          <StatusBar barStyle='light-content'backgroundColor={"#1F2430"}/>
          </View>
        </AuthContextProvider>
      </NativeBaseProvider>
  </Provider>
  );
}

