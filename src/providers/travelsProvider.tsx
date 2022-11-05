import { createContext, useState } from "react";
import { ITravelsDto } from "../types/travels";

export interface PropsTravelsTypes {
  travelsList: ITravelsDto[];
}

export const TravelsContext = createContext({} as PropsTravelsTypes);

export function TravelsProvider({ children }: any) {
  const [travelsList] = useState<ITravelsDto[]>([
    {
      id: 1,
      name: "Beetlejuice",
      document: "1988",
      phone: "Teste",
    },
    {
      id: 2,
      name: "Ghostbusters",
      document: "1984",
      phone: "Teste",
    },
    {
      id: 3,
      name: "Ghostbusters",
      document: "1984",
      phone: "Teste",
    },
    {
      id: 4,
      name: "Ghostbusters",
      document: "1984",
      phone: "Teste",
    },
    {
      id: 5,
      name: "Ghostbusters",
      document: "1984",
      phone: "Teste",
    },
  ]);

  return (
    <TravelsContext.Provider
      value={{
        travelsList,
      }}
    >
      {children}
    </TravelsContext.Provider>
  );
}
