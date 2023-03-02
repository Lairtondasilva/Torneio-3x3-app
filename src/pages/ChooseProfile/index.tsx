import { VStack, Center, Text, HStack, Button, Image, Modal, Alert} from 'native-base';
import Animated, { useAnimatedStyle } from 'react-native-reanimated';
import { useState, useEffect } from 'react';
import { THEME } from '../../styles/theme';
import { useAuth } from '../../hooks/useAuth';


export default function ChooseProfile (){
    const [buttonActive, setButtonActive] = useState({btn1: false, btn2: false});
    const {updateRole} = useAuth();
    const [erro, setErro] = useState("");
    const styles1 = useAnimatedStyle(()=>{
        return {
            transform: [{scale: buttonActive.btn1 ? 1.1 : 1.0}],
            borderWidth: buttonActive.btn1 ? 2 : 0,
            borderColor: buttonActive.btn1 ? `${THEME.colors.yellow[500]}` : '#ffffff'
        }
    },[buttonActive])
    const styles2 = useAnimatedStyle(()=>{
        return {
            transform: [{scale: buttonActive.btn2 ? 1.1 : 1.0}],
            borderWidth: buttonActive.btn2 ? 2 : 0,
            borderColor: buttonActive.btn2 ? `${THEME.colors.yellow[500]}` : '#ffffff'
        }
    },[buttonActive])

    function removeAlert(){
        setTimeout(()=>{
            setErro("")
        }, 3000)
    }
    useEffect(()=>{
        if(!erro){
        removeAlert()
        }
    },[erro])

    return (
        <Center flex={1} position={'relative'} >
            {(erro)?
             <Alert status={'error'} w={'50%'} h={12} mt={2}>
                    {erro}
            </Alert>
        :<></>}
            <VStack space={8} w={'full'} px={8}>
                <Text fontFamily={'heading'} color={'white'} fontSize={'xl'} textAlign={'center'}>Obrigado por fazer parte dessa história!</Text>
                <Text fontFamily={'medium'} color={'white'} fontSize={'md'}>Está na hora de escolher o seu perfil:</Text>
                <HStack justifyContent={"space-between"}>
                    <Animated.View key={1} onTouchStart={()=>{
                        setButtonActive({btn1:true, btn2: false});
                    }} style={[{ height: THEME.sizes[40], width:THEME.sizes[32], backgroundColor: THEME.colors.gray[300], borderRadius: THEME.sizes[4]},styles1]}>

                    <Center flex={1}>
                            <VStack space={2}>
                                <Center>
                                    <Image source={{
                                        uri: 'https://i.imgur.com/SfjJASR.png'
                                    }} alt="Icone do ranking" size={16} resizeMode={'contain'} />
                                </Center>
                                <Text fontFamily={'medium'} color={'white'} fontSize={'md'}>
                                    Jogador
                                </Text>
                            </VStack>
                        </Center>
                    </Animated.View >
                    <Animated.View key={2} onTouchStart={()=>{
                        setButtonActive({btn1:false, btn2: true});
                    }} style={[{ height: THEME.sizes[40], width:THEME.sizes[32], backgroundColor: THEME.colors.gray[300], borderRadius: THEME.sizes[4]},styles2]}>
                        <Center flex={1}>
                            <VStack space={2}>
                                <Center>
                                    <Image source={{
                                        uri: 'https://i.imgur.com/Kh4EgT3.png'
                                    }} alt="Icone do ranking" size={16} resizeMode={'contain'} />
                                </Center>
                                <Text fontFamily={'medium'} color={'white'} fontSize={'md'}>
                                    Torcedor
                                </Text>
                            </VStack>
                        </Center>
                    </Animated.View>
                </HStack>
                <Text fontFamily={'body'} color={'gray.100'} fontSize={'xs'}>Não se preocupe seu perfil poderá ser alterado a qualquer momento! Está escolha serve para tornamos melhor sua experiência dentro do app.</Text>
                <Button onPress={ async ()=>{
                    try{
                        if(buttonActive.btn1 || buttonActive.btn2){
                            await updateRole(buttonActive.btn1 ? "Jogador" : "Torcedor");
                        }
                        else{
                            throw new Error("Selecione um perfil");
                        }
                    }
                    catch(error){
                        setErro(error?.message)
                    }
                }} _text={{fontFamily:"heading", fontSize:"sm"}} bg={"green.500"}>Prosseguir</Button>
            </VStack>
        </Center>
    )
}