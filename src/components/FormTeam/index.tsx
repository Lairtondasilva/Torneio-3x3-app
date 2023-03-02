import { Box, Button, Center, HStack, VStack, FormControl, Input, Image, View, TextArea } from 'native-base';
import { useState, useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';
import { Camera, FileImage } from 'phosphor-react-native';
import { Storage} from '../../../firebase';
import { ref,  uploadBytesResumable, getDownloadURL} from 'firebase/storage';
import { Team } from '../../interfaces';
import { NativeSyntheticEvent, TextInputChangeEventData } from 'react-native';
import { useAuth } from '../../hooks/useAuth';

interface FormTeam{
    logo?: string
    teamName ?: string
    descricao ?: string
    onSubmit : (e:any, body: Team)=>Promise<void>
}

export default function FormTeam(props : FormTeam){
  const [logo, setLogo] = useState(props.logo? props.logo : "");
  const [teamName, setTeamName] = useState(props.teamName? props.teamName : "");
  const [descricao, setDescricao] = useState(props.descricao? props.descricao: "");
  const [isSending, setIsSending] = useState(props.logo ? true : false);
  const [fileLogo, setFileLogo] = useState("");
  const {user} = useAuth();

  useEffect(()=>{
    setIsSending(false)
  },[fileLogo,setFileLogo])


  const handleUpload = async () : Promise<string> =>{
    const response = await fetch(fileLogo);
    const blob = await response.blob();
    const fileName = `images/${Date.now()}-${blob.type}`;
    const imageRef = ref(Storage,fileName);
    
    const uploadTask = uploadBytesResumable(imageRef, blob);
    return new Promise((resolve, reject)=>{
      uploadTask.on(
        'state_changed',
        (snapshot) => {
        },
        (error) => {
         console.log(error)
         reject(error)
        },
        async () => {
          const url = await getDownloadURL(imageRef);
          setIsSending(true)
          console.log("Imagem enviada com sucesso");
        resolve(url);
        }
      );
    })
    }

    const handleOnSubmit = async (e:any) => {
      try {
        if (!isSending && fileLogo !=="") {
          const url = await handleUpload();
          props.onSubmit(e, { logo: url, teamName, descricao, ownerId: user.sub });
        }else{
        props.onSubmit(e,{ logo, teamName, descricao, ownerId: user.sub });
        }
      } catch (err) {
        console.log(err);
      }
    };
      
    
  const pickImage = async () => {
    try{
    // No permissions request is necessary for launching the image library
    let result: any = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [12,12],
      quality: 1,
    });
    setFileLogo(result.assets[0].uri);
    setIsSending(false)
}
catch(e){
    console.log(e)
}
};

return (
        <VStack mt={4} mx={8} flex={1} pb={6}>
          <FormControl>
            <VStack space={6}>
              <View>
                <FormControl.Label _text={{
                  fontFamily: 'body',
                  fontSize: 'md',
                  color: 'gray.100'
                }}>Logo do Time</FormControl.Label>
                <Center h={'32'}>
                  {props.logo?
                  <Box size={32} borderRadius={64} bgColor={"dark.100"} position={"relative"}>
                  <Center  flex={1} borderRadius={64}>
                  <Image 
                    source={{
                      uri: logo
                    }} alt="Foto do Perfil" resizeMode='contain'w={"1/2"} h={"1/2"} /></Center>
                  <Button onPress={pickImage} position={"absolute"} bottom={0} size={12} borderRadius={24} bgColor={"yellow.500"}>
                    <Camera />
                  </Button>
                </Box>
                : <Box size={32} borderRadius={64} bgColor={"dark.100"} position={"relative"}>
                  <Center flex={1}>
                      {fileLogo != "" ? <Image 
                    source={{
                      uri: fileLogo 
                    }} alt="Foto do Perfil" resizeMode='contain'w={"1/2"} h={"1/2"} /> : <FileImage size={"50%"}/>}
                      
                    </Center>
                    <Button onPress={pickImage} position={"absolute"} bottom={0} size={12} borderRadius={24} bgColor={"yellow.500"}>
                      <Camera />
                    </Button>
                  </Box>}
                </Center>
              </View>
              <VStack space={2}>
              <FormControl.Label 
                    _text={{
                      fontFamily: 'body',
                      fontSize: 'md',
                      color: 'gray.100'
                    }}
                  >
                    Nome do Time
                  </FormControl.Label>
                  <Input flex={1} color={'gray.100'} h={12} borderRadius={8} value={teamName} onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>)=>{setTeamName(e.nativeEvent.text)}} borderWidth={0} bgColor={"dark.100"} />
                <HStack justifyContent={"space-between"}>
                  <FormControl.Label 
                    _text={{
                      fontFamily: 'body',
                      fontSize: 'md',
                      color: 'gray.100'
                    }}
                  >
                    Descrição
                  </FormControl.Label>
                  <FormControl.HelperText>
                    Max. 300 caractéres
                  </FormControl.HelperText>
                </HStack>
                <TextArea maxLength={300} value={descricao} onChange={(e: NativeSyntheticEvent<TextInputChangeEventData>)=>{setDescricao(e.nativeEvent.text)}} color={"white"} borderWidth={0} borderRadius={16} bgColor={"dark.100"} w="100%" maxH={32} h={24} numberOfLines={8} autoCompleteType={""}/>
              </VStack>
              <Button bgColor={"green.500"} borderRadius={8} onTouchEnd={(e)=>{handleOnSubmit(e)}}>{props.teamName != "" ? "Cadastrar" : "Confirmar"}</Button>
            </VStack>
          </FormControl>
          </VStack>
    );
}