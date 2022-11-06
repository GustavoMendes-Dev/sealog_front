import { createContext, useState } from "react";
import { ITravelsDto } from "../types/travels";

export interface PropsTravelsTypes {
  travelsList: ITravelsDto[];
  total: number;
  setTotal: (number: number) => void;
}

export const TravelsContext = createContext({} as PropsTravelsTypes);

export function TravelsProvider({ children }: any) {
  const [ total, setTotal ] = useState<number>(0);

  const [travelsList] = useState<ITravelsDto[]>([
    {
      id: 1,
      name: "Beetlejuice",
      date: new Date("2022-01-10"),
      phone: "Teste",
      paths: [
        {
          id: 1,
          name: "Rota 1",
          origin: "P-12",
          destination: "P-10",
          departure: "20/10/2022 - 12:10",
          arrival: "20/10/2022 - 12:10",
          distance: "4.3km",
          cost: "US$ 560",
        },
        {
          id: 2,
          name: "Rota 2",
          origin: "P-12",
          destination: "P-10",
          departure: "20/10/2022 - 12:10",
          arrival: "20/10/2022 - 12:10",
        },
        {
          id: 3,
          name: "Rota 3",
          origin: "P-12",
          destination: "P-10",
          departure: "20/10/2022 - 12:10",
          arrival: "20/10/2022 - 12:10",
        },
        {
          id: 4,
          name: "Rota 4",
          origin: "P-12",
          destination: "P-10",
          departure: "20/10/2022 - 12:10",
          arrival: "20/10/2022 - 12:10",
        },
      ],
    },
    {
      id: 2,
      name: "Ghostbusters",
      date: new Date("2022-02-08"),
      phone: "Teste",
      paths: [
        {
          id: 1,
          name: "Rota 1",
          origin: "P-12",
          destination: "P-10",
          departure: "20/10/2022 - 12:10",
          arrival: "20/10/2022 - 12:10",
        },
      ],
    },
    {
      id: 3,
      name: "Ghostbusters",
      date: new Date("2022-02-10"),
      phone: "Teste",
      paths: [
        {
          id: 1,
          name: "Rota 3",
          origin: "P-12",
          destination: "P-10",
          departure: "20/10/2022 - 12:10",
          arrival: "20/10/2022 - 12:10",
        },
      ],
    },
    {
      id: 4,
      name: "Ghostbusters",
      date: new Date("2022-02-10"),
      phone: "Teste",
      paths: [
        {
          id: 1,
          name: "Rota 1",
          origin: "P-12",
          destination: "P-10",
          departure: "20/10/2022 - 12:10",
          arrival: "20/10/2022 - 12:10",
        },
        {
          id: 2,
          name: "Rota 2",
          origin: "P-12",
          destination: "P-10",
          departure: "20/10/2022 - 12:10",
          arrival: "20/10/2022 - 12:10",
        },
        {
          id: 3,
          name: "Rota 3",
          origin: "P-12",
          destination: "P-10",
          departure: "20/10/2022 - 12:10",
          arrival: "20/10/2022 - 12:10",
        },
      ],
    },
    {
      id: 5,
      name: "Ghostbusters",
      date: new Date("2022-02-10"),
      phone: "Teste",
      paths: [
        {
          id: 1,
          name: "Rota 1",
          origin: "P-12",
          destination: "P-10",
          departure: "20/10/2022 - 12:10",
          arrival: "20/10/2022 - 12:10",
        },
      ],
    },
  ]);

  return (
    <TravelsContext.Provider
      value={{
        travelsList,
        total,
        setTotal,
      }}
    >
      {children}
    </TravelsContext.Provider>
  );
}
