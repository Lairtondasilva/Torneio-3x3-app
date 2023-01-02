import { Box, Button, Center, Link, Text } from 'native-base';
import { useEffect, useState } from 'react';
import { api } from './../../services/Api';

interface HomeProps{
  id: string
  title: string
  enrollmentDate: string
}

export default function Home(){
    const [content, setContent] = useState<HomeProps>({id:"", title:"", enrollmentDate: ""});
    const getHomePageContent = async ()=>{
      const response = await api.get("/homeScreen");
      console.log(response.data)
      setContent(response.data);
    }
    useEffect(()=>{
      getHomePageContent()
    },[])

  return (
      <Center flex={1} bg={"dark.50"}>
        <Box mx={12}>
          <Text color={"white"} fontFamily={"heading"} fontSize={"rt"} textAlign={"center"}>
            {content.title}</Text>
          <Text color={"white"} fontFamily={"heading"} fontSize={"md"} mt={10} textAlign={"center"}>
            Inscrições abertas até o dia <Text color={"yellow.500"}>{content.enrollmentDate}</Text> 
          </Text>
          <Button mt={8} _text={{fontFamily:"heading", fontSize:"xs"}} bg={"green.500"} >Inscrever minha equipe</Button>
          <Center>
            <Link _text={{color:"white", fontFamily:"heading", fontSize:"xs"}} mt={6}>Acompanhar o Torneio</Link>
          </Center>
        </Box>
      </Center>
  )
}

