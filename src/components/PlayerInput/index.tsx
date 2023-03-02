import { FormControl, Input, VStack, HStack, Button, SearchIcon } from 'native-base';

interface PlayerInputProps {
    label: string | undefined
    value: string
    onChange: (e:any)=> void

}
export default function PlayerInput(props: PlayerInputProps){

    return(
        <VStack space={2} w={"full"}>
            <FormControl.Label 
                    _text={{
                      fontFamily: 'body',
                      fontSize: 'md',
                      color: 'gray.100'
                    }}
                  >
                   {props.label}
            </FormControl.Label>
            <HStack space={2}>
                <Input flex={1} color={'gray.100'} h={12} borderRadius={8} value={props.value} onChange={(e)=>{props.onChange(e)}} borderWidth={0} bgColor={"dark.100"} />
                <Button bgColor={"green.500"} w={12} h={12}  borderRadius={8}>
                    <SearchIcon size={6} color={"white"} ></SearchIcon>
                </Button>
            </HStack>
          
        </VStack>
    )
}