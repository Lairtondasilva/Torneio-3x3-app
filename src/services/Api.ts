import axios from "axios";
import { API_URL } from "@env";

export const api = axios.create({
    baseURL: "https://fa10-138-122-29-219.ngrok.io",
    timeout: 60000
})