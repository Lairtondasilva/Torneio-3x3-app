import { Box, Center, HStack, Image, Text, View, VStack } from 'native-base';

export default function CardGameHistory(props: {borderColor: string | null, resultados:{timeA: number, timeB: number}}){

    return (
    <VStack py={4} px={2} borderRadius={16}  w={"90%"} bg={"dark.100"} justifyContent={'center'} alignItems={'center'} borderWidth={2} borderColor={props.borderColor ? props.borderColor : "#9C5C5C"}>
        <HStack borderRadius={16} space={3} justifyContent={'center'} alignItems={'center'}>
             <Box borderRadius={32} width={16} height={16}>
                        <Image source={{
                            uri: "https://th.bing.com/th/id/R.b0fe4e4bdb9a43e5b7dbe720e217f865?rik=985RiwT07NLu8A&pid=ImgRaw&r=0"
                        }} borderRadius={32}  size={"100%"} resizeMode={"contain"} width={"100%"} alt={"Logo do time"} />
             </Box>
             <VStack>
                <HStack alignItems={"center"} space={3}  position={"relative"}>
                    <Text fontFamily={"heading"} fontSize={'4xl'} color={'gray.100'}>{props.resultados.timeA}</Text>
                    <Text  fontFamily={"body"} fontSize={'xs'} color={"gray.100"} bg={"#9C5C5C"} px={1.5} borderRadius={8} >Fim</Text>
                    <Text fontFamily={"heading"} fontSize={'4xl'} color={'gray.100'}>{props.resultados.timeB}</Text>
                </HStack>
                 <Center w={'132'}>
                    <Text  fontSize={"xs"} textAlign={'center'} fontFamily={"body"} color={"gray.100"} >Instituto Federal</Text>
                 </Center>
             </VStack>
             <Box borderRadius={20} width={16} height={16}>
                        <Image source={{
                            uri: "https://th.bing.com/th/id/OIP.zRLiRW_WsZkXh8G-9-JZpgHaFT?pid=ImgDet&rs=1"
                        }} borderRadius={32}  size={"100%"} resizeMode={"contain"} width={"100%"} alt={"Logo do time"} />
             </Box>
            </HStack>
        </VStack>
    )
}