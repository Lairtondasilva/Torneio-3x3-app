import { Box, Center, HStack, Image, Text, VStack, View } from 'native-base';
import { week } from '../../utils/week';
import CardGameHistory from '../../components/CardGameHistory/Index';

export default function MatchHistory (){
    const daysOfWeek = [0,1]
    return (
    <VStack position={'relative'} w={'full'} h={'full'} bgColor={'dark.50'}>
            <Image position={'absolute'} zIndex={-100} source={
                {
                    uri: 'https://i.imgur.com/6Tm8Fev.png'
                }
            }
            alt={'imagem de fundo'} w={'full'} h={'1/4'} resizeMode={'cover'}
            />
        <VStack space={6}>
            <HStack px={3} mt={8} space={8} alignItems={'center'}>
                <Box w={12} h={12} borderRadius={24} bgColor={'dark.50'} justifyContent={'center'} alignItems={'center'}>
                    <Image w={'8'} h={12}  source={
                        {
                            uri: 'https://i.imgur.com/T0k8WUe.png'
                        }
                    }
                    alt={'imagem de fundo'} resizeMode={'contain'}
                    />
                </Box>
                <Text fontFamily={"heading"} fontSize={'md'} color={"gray.100"}>
                    Histórico de Partidas
                </Text>
            </HStack>
            <HStack px={2} space={2}>
                    {daysOfWeek.map((e, day=0)=>{
                        day = new Date().getDay() + e;
                        if(day>6){
                            day = day-7
                        }
                        return (
                            <Box key={e} w={12} h={16} borderRadius={4} borderWidth={2} borderColor={(day==new Date().getDay())?"#F24E1E":"gray.200"} >
                            <Center  flex={1}>
                                <Text color={(day==new Date().getDay())?"#F24E1E":"gray.200"}>
                                    {week[day]}
                                </Text>
                                <Text color={(day==new Date().getDay())?"#F24E1E":"gray.200"}>
                                    {new Date().getDate()+e}
                                </Text>
                            </Center>
                        </Box>
                        )
                    })}
            </HStack>
            <VStack alignItems={"center"} space={4} justifyContent={"center"}>
                <CardGameHistory borderColor='' resultados={{timeA:12, timeB: 18}}/>
                <CardGameHistory borderColor={'#889C5C'} resultados={{timeA:20, timeB: 12}}/>
                <CardGameHistory borderColor={'#889C5C'} resultados={{timeA:21, timeB: 11}}/>
            </VStack>
        </VStack>
    </VStack>)
}