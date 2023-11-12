import { api } from "../api";


export const getPacients = async () => {
  const { data } = await api.get('/pacients');

  return data
}