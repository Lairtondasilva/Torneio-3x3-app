import { Center, Image, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

export default function CardAction(props: { bg : string, icon: string, cardName: string, navigationValue, navigation}){
    const navigateToScreen = () => {
        props.navigation.navigate(props.navigationValue)
    }

    return(
            <TouchableOpacity  onPress={navigateToScreen} style={{flex: 1}}>
                <VStack flex={1}  borderRadius={4} bg={props.bg} shadow={-8}>
                    <Center flex={1}>
                        <VStack space={3}>
                            <Center>
                                <Image source={
                                    {
                                        uri: props.icon
                                    }
                                } alt="Icone do ranking" size={8} />
                            </Center>
                            <Text color={"white"} fontSize={12} fontFamily={'medium'}>{props.cardName}</Text>
                        </VStack>
                    </Center>
                </VStack>
            </TouchableOpacity>
    )
}