import { Image, Text, VStack, HStack, Button, Center } from 'native-base';
import DefaultHeader from '../../components/DefaultHeader/index';
import TeamCard from '../../components/TeamCard/index';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { TeamsActions} from '../../store/ducks/teamReducer';
import { useAuth } from '../../hooks/useAuth';
import { Team } from '../../interfaces/index';
import CardPlayer from '../../components/CardPlayer';


export default function MyTeam({navigation, route, back}){

    const { userTeam} = useSelector((state: any) => state.teams);
    const dispatch = useDispatch();
    const {user} = useAuth();
    useEffect(()=>{
        if(!userTeam?.name){
            dispatch(TeamsActions.getUserTeam({userId: user.sub}));
        }
    },[])

    return(

        <VStack bg={"dark.50"} flex={1}>
             <DefaultHeader  navigation={{...navigation}} route={{...route}} back={{...back}} />
             { userTeam?.name ?
             <>
             <VStack w={"full"} h={"1/4"} position={"relative"} justifyContent={"flex-end"}>
                <Image source={{
                    uri: "https://firebasestorage.googleapis.com/v0/b/torneio-3x3-app.appspot.com/o/app%2Fbanner.png?alt=media&token=5f32688e-ceeb-44c7-b14f-e8653cea53a1"
                }
            } alt="banner" w={"full"} h={"full"} resizeMode="cover" position={"absolute"} zIndex={-100} />
                    <VStack px={4} mb={4} space={2}>
                        <Text color={"white"} fontSize={"2xl"} fontFamily={"heading"}>{userTeam.name}</Text>
                        <Text color={"white"} fontSize={"sm"} fontFamily={"body"}>{userTeam.description}</Text> 
                    </VStack>
             </VStack>
                <VStack mt={12} mx={4} space={8} flex={1} position={"relative"}>
                    <HStack justifyContent={"space-between"}>
                        <Text color={"white"} fontSize={"sm"} fontFamily={"heading"}>Jogadores</Text>
                        <Text color={"gray.200"} fontSize={"sm"} fontFamily={"heading"}>Total: {}</Text>
                    </HStack>
                    <VStack space={4}>
                        <CardPlayer nome={"Lairton"} foto={user.avatarUrl} status={"Disponível"} />
                        <CardPlayer nome={"Lairton"} foto={user.avatarUrl} status={"Disponível"} />
                        <CardPlayer nome={"Lairton"} foto={user.avatarUrl} status={"Disponível"} />    
                    </VStack>
                    <Button position={"absolute"} bgColor={"green.500"} bottom={8} w={"full"}>Inscrever minha equipe</Button>
                </VStack>
            </>:
            <Center flex={1} px={4} >
                <Text color={"gray.200"} mb={4} textAlign={"center"}>Você ainda não possui nenhum time cadastrado</Text>
                <Button onPress={()=>{
                    navigation.navigate("register-team")
                }} w={"1/2"} bg={"green.500"}>Criar meu time</Button>
            </Center>
                }
        </VStack>
    );
}