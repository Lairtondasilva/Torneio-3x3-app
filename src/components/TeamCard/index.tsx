import { Box, Center, HStack, Image, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

export default function TeamCard({logo, teamName}){
    return(
        <TouchableOpacity style={{flex:1}}>
            <VStack flex={1} bg={"gray.200"} borderRadius={4}>
                <Text textAlign={'center'} fontFamily={'heading'} fontSize={'md'} >{teamName}</Text>
                <Center flex={1} width={"full"}>
                    <Image source={{
                                uri: logo ? logo: "https://i.imgur.com/dyqbpEd.jpg"
                            }
                        } alt="logo do Time" size={16} borderRadius={32} borderWidth={2} borderColor={"yellow.500"} resizeMode="contain" />
                </Center>
            </VStack>
        </TouchableOpacity>
    );
}