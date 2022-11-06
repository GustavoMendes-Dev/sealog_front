import { createContext } from "react";

export interface PropsVesselTypes {
  data: any;
}

export const TravelsContext = createContext({} as PropsVesselTypes);

export function TravelsProvider({ children }: any) {}