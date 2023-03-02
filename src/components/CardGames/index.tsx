import { Text, Image, View, Box, VStack, Button } from 'native-base';
import { TouchableOpacity} from 'react-native';


export interface Game{
    times: Array<Time>
    horario: string
}

export interface Time{
    id: string
    name: string
    logo: string | null 
}

export interface CardGameProps{
    game: Game,
}

export default function CardGame(props: CardGameProps){
    let x = 0;

    return (
            <VStack minH={40} pb={16} py={3}  width={32} borderStyle={"solid"}  borderRadius={16} bgColor={"dark.100"}>
                    <View mb={4} alignItems={'center'}>
                        <Text color={"white"}>{props.game.horario}</Text>
                    </View>
                <View pl={3} >
                    <View flexDirection={"row"} height={'50%'} >
                    {props.game.times.map((time)=>{
                        x+=1
                        if(time.logo) return (
                        <Box borderRadius={20} width={10} height={10} key={time.id} mr={2}>
                            <Image source={{
                                uri: time.logo
                            }} borderRadius={20}  size={"100%"} resizeMode={"cover"} width={"100%"} alt={"Logo do time"} />
                        </Box>)

                        return <View  marginRight={2} borderRadius={20} width={10} height={10} backgroundColor={'gray.200'} key={x}>
                    </View>
                    })}
                    </View>
                    <View mr={3}>
                        <View flexDirection={'row'} justifyContent={'space-between'}>
                            <Text fontFamily={'medium'} color={'white'}>GCDE</Text>
                            <Text fontFamily={'heading'} color={'white'}>0</Text>
                        </View>
                        <View flexDirection={'row'} justifyContent={'space-between'}>
                            <Text fontFamily={'medium'} color="white">Bad Boys</Text>
                            <Text fontFamily={'heading'} color={'white'}>10</Text>
                        </View>
                    </View>
                </View>
            </VStack>
    )
}