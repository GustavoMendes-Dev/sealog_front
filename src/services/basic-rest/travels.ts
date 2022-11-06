import { ITravelsDto } from "../../types/travels";
import { apiSeaLog } from "../http";

export const getTravelAll = async (idVessel: string): Promise<ITravelsDto[]> => {
  const response = apiSeaLog().get(`/travel/all/${idVessel}`).then(({ data }) => data);
  return response;
};

export const getTravelById = async (id: string): Promise<ITravelsDto> => {
  const response = apiSeaLog().get(`/travel/${id}`).then(({ data }) => data);
  return response;
};