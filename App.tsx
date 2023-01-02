import Home from './src/pages/home';
import { NativeBaseProvider, StatusBar, View } from 'native-base';
import { THEME } from './src/styles/theme';
import {useFonts, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Loading from './src/components/Loading';
import RegisterTeam from './src/pages/RegisterTeam/Index';

export default function App() {

  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_500Medium,Roboto_700Bold});
  return (
    <NativeBaseProvider theme={THEME}>
      <View flex={1} bg={"dark.50"}>
      {fontsLoaded ? <Home/> : <Loading/>}
      <StatusBar barStyle='light-content'backgroundColor={"#18181b"}/>
      </View>
    </NativeBaseProvider>
  );
}

