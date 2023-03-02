import { Box, HStack, Image, Text, VStack, View, ZStack, ScrollView, Stack, Modal, Popover, Button } from 'native-base';
import { useAuth } from '../../hooks/useAuth';
import {Plus} from 'phosphor-react-native'
import CardAction from '../../components/CardAction/index';
import CardGame from '../../components/CardGames';
import { useState, useEffect } from 'react';
import { TeamsActions} from '../../store/ducks/teamReducer';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


export default function Home({navigation}){
    const [patrocinadores, setPatrocinadores] =  useState(["https://th.bing.com/th/id/R.12bd6e07015b12e97a7364fe1a728606?rik=0BrFUPw%2b%2b8eZVQ&riu=http%3a%2f%2fwww.riverstudios.be%2fwp-content%2fuploads%2f2017%2f07%2friverstudiosRET1.jpg&ehk=Z114V25dV%2fi2Py0Bq%2filYw%2b9LXX9ilJeTQsnIzzz45k%3d&risl=&pid=ImgRaw&r=0","https://3.bp.blogspot.com/-ByPhGOQb1U8/TnK7sjP8guI/AAAAAAAAADc/FcKuEQOeUzc/s1600/coca_cola_banner.jpg"]);
    const [trocarSlide, setTrocarSlide] = useState(false);
    const {user} = useAuth();
    const [championshipDate, setChampionshipDate] = useState(new Date(2023,2,21));
    const [isOpen, setIsOpen] = useState(false);
    const [goRegisterTeam, setGoRegisterTeam] = useState(false);
    const { teamList} = useSelector((state: any) => state.teams);
    const dispatch = useDispatch();

    useEffect(() => {
          dispatch(TeamsActions.getTeamsList());
      }, []);
      
      
      

    function handleChangeSlide(){
        const endOfTheQueue = patrocinadores.shift();
        patrocinadores.push(endOfTheQueue);
        setPatrocinadores(patrocinadores);
    }

    useEffect(()=>{
        if(trocarSlide){
            handleChangeSlide()
        }
        countsTimePartnerSlider()
    },[trocarSlide])

    useEffect(() => {
        if (!isOpen && goRegisterTeam) {
            navigation.navigate("register-team");
        }
      }, [isOpen, navigation]);
      

    function countsTimePartnerSlider(){
    setTimeout(()=>{
        setTrocarSlide(!trocarSlide)
    }, 3000)
}
    return(
<ScrollView bg={"dark.50"}  h={"full"} position={"relative"}>
    <VStack  mb={4} >
           <Box h={"40"} position={"absolute"} w={"full"} bg={"dark.100"}  borderTopRadius={0} borderBottomRadius={"100"} zIndex={-100}>
           </Box>
        <HStack px={6} pt={6} pb={6} justifyContent={"space-between"}>
            <HStack space={3} alignItems={"flex-start"}>
                <Box width={12} height={12} borderWidth={1} borderColor={"white"} borderRadius={4}>
                    <Image source={{
                                    uri: user.avatarUrl
                                }} size={"100%"} resizeMode={"cover"} width={"100%"} alt={"Logo do time"} borderRadius={4} />
                </Box>
                <VStack>
                    <Text fontSize={"md"} fontFamily={"heading"} color={"white"}>
                      <Text fontSize={"md"} color="gray.100" fontFamily={"body"} >Olá,</Text> {user.name.substring(0, user.name.indexOf(" "))}
                    </Text>
                    <Text color={"gray.100"}>
                    Hoje é dia de vitória
                    </Text>
                </VStack>
            </HStack>
        </HStack>
        <VStack px={6} maxH={40} space={4} >
            <ZStack h={"full"} alignItems={"center"} >
                <Box bgColor={"green.200"} h={"full"} w={"92%"} borderRadius={16} >
                <Image source={{
                        uri: patrocinadores[0]
                    }} alt="patrocinadores" resizeMode="contain" size={"full"} borderRadius={16}/>
                </Box>
                <Box bgColor={"green.200"} width={"full"} h={"92%"} borderRadius={16} shadow={8}>
                    <Image source={{
                        uri:patrocinadores[1]
                    }} alt="patrocinadores" resizeMode="contain" size={"full"} borderRadius={16}/>

                </Box>
            </ZStack>
        </VStack>
        <VStack mt={5} pl={6}>
                <Text color={"gray.100"} fontFamily={"heading"} fontSize={"md"} >Meu painel</Text>
            <HStack h={'24'} w={'full'} position="relative" my={5} pr={6}>
                    <HStack  w={'100%'} space={3}>
                        <CardAction navigationValue={"register-team"} navigation={navigation} icon='https://i.imgur.com/6BiS57I.png' bg="green.500" cardName='Ranking' />
                        <CardAction navigationValue={"register-team"} navigation={navigation} icon='https://i.imgur.com/e1fMBG1.png' bg="green.500" cardName='Partidas' />
                        <CardAction navigationValue={"my-team"} navigation={navigation} icon='https://i.imgur.com/MBpQ78T.png' bg="green.500" cardName={user.roles === 'Jogador'? "Meu Time" : "Torcedômetro"} />
                    </HStack>
            </HStack>
        </VStack>
        {championshipDate <= new Date() ?
        <Box  pl={6} backgroundColor={'dark.50'} pb={2}>
            <Text color={"gray.100"} fontFamily={"heading"} fontSize={"md"} >
                    Partidas Agendadas
            </Text>
            <HStack h={'40'} w={'full'} position="relative" mt={5}>
                <ScrollView horizontal={true}  w={"100%"} h="40" position="absolute" >
                    <HStack  space={3} >
                        <CardGame  game={{times:[{id:"1", logo: "https://th.bing.com/th/id/OIP.zRLiRW_WsZkXh8G-9-JZpgHaFT?pid=ImgDet&rs=1", name: "GCDE"},{id:"4", logo: "https://th.bing.com/th/id/R.b0fe4e4bdb9a43e5b7dbe720e217f865?rik=985RiwT07NLu8A&pid=ImgRaw&r=0", name: "GCDE"}], horario: "8:00"}}></CardGame>
                        <CardGame game={{times:[{id:"2", logo: "https://th.bing.com/th/id/OIP.zRLiRW_WsZkXh8G-9-JZpgHaFT?pid=ImgDet&rs=1", name: "GCDE"},{id:"5", logo: "https://th.bing.com/th/id/R.b0fe4e4bdb9a43e5b7dbe720e217f865?rik=985RiwT07NLu8A&pid=ImgRaw&r=0", name: "GCDE"}], horario: "8:15"}}></CardGame>
                        <CardGame   game={{times:[{id:"3", logo: "https://th.bing.com/th/id/OIP.zRLiRW_WsZkXh8G-9-JZpgHaFT?pid=ImgDet&rs=1", name: "GCDE"},{id:"6", logo: "https://th.bing.com/th/id/R.b0fe4e4bdb9a43e5b7dbe720e217f865?rik=985RiwT07NLu8A&pid=ImgRaw&r=0", name: "GCDE"}], horario: "8:30"}}></CardGame>
                    </HStack>
                </ScrollView>
            </HStack>
        </Box>
: <Stack h={32} direction={"row-reverse"} alignItems={"flex-end"} w={"full"} position={"relative"} mt={5}>
    
    <Popover defaultIsOpen={false} placement='right' trigger={triggerProps => {
      return <Button {...triggerProps} onPress={()=>{setIsOpen
      (true)}} w={16} h={16} mr={2} bgColor={"green.500"} borderRadius={32} justifyContent={"center"} alignItems={"center"} position={"relative"}>
                <Plus color="white"/>
             </Button>
    }} isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <Popover.Content accessibilityLabel="Delete Customerd" w="56">
          <Popover.Arrow/>
          <Popover.Body>
            <VStack space={2}>
                <Button borderRadius={4} onPress={()=>{
                        setIsOpen(false)
                        setGoRegisterTeam(true)
                    }}>Criar meu Time</Button>
                <Button borderRadius={4} onPress={()=>{}}>Encontrar Time</Button>
            </VStack>
          </Popover.Body>
        </Popover.Content>
    </Popover>
</Stack>}
    </VStack>
    </ScrollView>
    )
}