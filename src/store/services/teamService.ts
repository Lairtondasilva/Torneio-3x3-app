import { api } from "../../services/Api"

export const getAllTeams = async ()=>{
    const reqUrl = '/teams/search/all';
    const response = await api.get(reqUrl);
    return response;
}


export const findUserTeam = async ({userId})=>{
    const reqUrl = `/teams/search/${userId}`;
    const response = await api.get(reqUrl);
    return response;
}

export const create = async (body)=>{
    console.log(body);
    const response = await api.post('/team/create', body)
    return response;
}
