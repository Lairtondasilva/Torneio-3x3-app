import { Box, HStack, Image, Text, VStack } from 'native-base';
export default function CardPlayer(props:{nome: string, status: string, foto: string }){

    return (
        <HStack space={2} alignItems={"center"}>
             <Box width={12} height={12} borderWidth={2} borderColor={"#243189"} borderRadius={8}>
                    <Image source={{
                                    uri: props.foto
                                }} size={"100%"} resizeMode={"cover"} width={"100%"} alt={"Logo do time"} borderRadius={4} />
                </Box>
                <VStack>
                    <Text color={"white"} fontSize={"sm"} fontFamily={"heading"}>{props.nome+ " da Silva"}</Text>
                    <Text color={"white"} fontSize={"sm"} fontFamily={"body"}><Box w={3} h={3} bgColor={"green.500"} borderRadius={6}></Box>  {props.status}</Text>
                </VStack>
        </HStack>
    )
}