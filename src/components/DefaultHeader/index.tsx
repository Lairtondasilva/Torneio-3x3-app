import { getHeaderTitle } from '@react-navigation/elements';
import { ArrowBackIcon, Button, Center, HStack, Text } from 'native-base';

export default function DefaultHeader ({navigation,route, back}){
    const title = getHeaderTitle(route.params, route.name);
    return (
        <HStack position={"relative"} h={16} alignItems={"center"} mx={4}>
           { back ? <Button bg={"dark.50"} position={"absolute"} zIndex={100} onPress={navigation.goBack}>
                <ArrowBackIcon color={"white"} size={6} />
            </Button>: undefined}
            <Center flex={1}>
                <Text fontSize={"md"} fontFamily={"heading"} color={"gray.100"}>{title}</Text>
            </Center>
      </HStack>
    );
}