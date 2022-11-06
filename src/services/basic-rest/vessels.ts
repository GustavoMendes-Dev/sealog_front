import { apiSeaLog } from "../http";

export const getVesselsAll = async (): Promise<any[]> => {
  const response = apiSeaLog().get("/ship").then(({ data }) => data);
  return response;
};

