import { Box, Button, Center, Image, Link, Text, VStack } from 'native-base';
import { useEffect, useState } from 'react';
import { api } from './../../services/Api';
import { useAuth } from '../../hooks/useAuth';
import {GoogleLogo} from 'phosphor-react-native'
import CardGame from '../../components/CardGames';

interface HomeProps{
  id: string
  title: string
  enrollmentDate: string
}

export default function SignIn(){
    const [content, setContent] = useState<HomeProps>({id:"", title:"", enrollmentDate: ""});
    const getHomePageContent = async ()=>{
      const response = await api.get("/homeScreen");
      setContent(response.data);
    }
    useEffect(()=>{
      getHomePageContent()
    },[])

    const {signIn, user} = useAuth();


  return (
    <VStack flex={1} bg={"dark.50"} pl={2}>
        <Image source={{
          uri: "https://i.imgur.com/1slIwzZ.png"
        }} alt="Imagem com jogador de basquete e logo do basquete de floresta no fundoa" size={"50%"} width={"full"} resizeMode={"contain"} mb={2} />
        <Box mx={10}>
          <Text color={"white"} fontFamily={"heading"} fontSize={"rt"}>
            2° Torneio 3x3 de <Text color={"yellow.500"}>Floresta</Text> 🏀 🏆</Text>
          <Text color={"white"} fontFamily={"heading"} fontSize={"sm"} mt={4}>
            Inscrições abertas até o dia <Text color={"yellow.500"}>{content.enrollmentDate}.</Text>
          </Text>
          <Text color={"gray.200"} fontFamily={"heading"} fontSize={"sm"} mt={4}>
            Entre para garantir sua vaga ou acompanhar o torneio.
          </Text>
          <Button onPress={signIn} mt={8} h={12} _text={{fontFamily:"heading", fontSize:"sm"}} bg={"green.500"}  >
            <Box flexDirection={"row"} justifyContent={"center"} alignItems={"center"}>
              <GoogleLogo size={32} color={"white"} weight={"bold"}/>
              <Text marginLeft={1} alignItems={"center"} justifyContent={"center"} fontFamily={"heading"} color={"white"}>Entrar com o Google </Text>
            </Box>
          </Button>
        </Box>
      </VStack>
  )
}
