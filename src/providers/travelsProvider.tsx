import { createContext, useState } from "react";
import { ITravelsDto } from "../types/travels";

export interface PropsTravelsTypes {
  total: number;
  setTotal: (number: number) => void;
  travelsList: ITravelsDto[];
  setTravelsList: (list: ITravelsDto[]) => void;
}

export const TravelsContext = createContext({} as PropsTravelsTypes);

export function TravelsProvider({ children }: any) {
  const [ total, setTotal ] = useState<number>(0);
  const [ travelsList, setTravelsList ] = useState<ITravelsDto[]>([]);

  return (
    <TravelsContext.Provider
      value={{
        setTravelsList,
        travelsList,
        total,
        setTotal,
      }}
    >
      {children}
    </TravelsContext.Provider>
  );
}
