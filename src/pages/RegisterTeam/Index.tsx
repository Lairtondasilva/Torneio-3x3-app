import { ScrollView, Text, Toast } from "native-base"
import DefaultHeader from "../../components/DefaultHeader"
import FormTeam from "../../components/FormTeam"
import { api } from "../../services/Api"
import { Team } from "../../interfaces"
import { useState, useEffect } from 'react';
import { useToast } from "native-base"
import { useDispatch } from 'react-redux';
import { TeamsActions } from "../../store/ducks/teamReducer"

export default function RegisterTeam({navigation,route, back}){

  const [message, setMessage] = useState("");
  const[messageOn, setMessageOn] = useState(false);
  const toast = useToast();
  const dispatch = useDispatch();

  const handleSubmit = async(e: any, req)=>{
    if(messageOn) return;
      setMessageOn(true)
      console.log("Meu body:", req)
      dispatch(TeamsActions.createTeam({...req}))
}
  return(
    <ScrollView flex={1} bgColor={"dark.50"} >
    <DefaultHeader  navigation={{...navigation}} route={{...route}} back={{...back}} />
    <FormTeam onSubmit={handleSubmit}/>
  </ScrollView>
  )
}