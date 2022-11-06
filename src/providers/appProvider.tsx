import React, { useState, createContext, useEffect } from "react";
import { useQuery } from "react-query";
import { useHistory } from "react-router-dom";
import { IAlert } from "../components/UI/Alert";
import { getVesselsAll } from "../services/basic-rest/vessels";

export type IUser = {
  name: string;
  email: string;
};
export interface PropsAppTypes {
  user: IUser | null;
  setUser: (user: IUser) => void;
  handleLogoutUser: () => void;
  alertMessage: IAlert | null;
  setAlertMessage: (alertMessage: IAlert | null) => void;
  vessels: any[];
}

export const AppContext = createContext({} as PropsAppTypes);

export function AppProvider({ children }: any) {
  const history = useHistory();
  const [user, setUser] = useState<IUser | null>(null);
  const [ alertMessage, setAlertMessage ] = useState<IAlert | null>(null);
  const [ vessels, setVessels ] = useState<any>(null);

  const handleLogoutUser = () => {
    localStorage.removeItem("access_token");
    history.push("/entrar");
  };

  const {
    data: dataVessels, 
    isLoading,
    error,
  } = useQuery("vesselsList", getVesselsAll, {
    // cacheTime: 10,
    refetchOnWindowFocus: false,
  });

  console.log(dataVessels)

  useEffect(() => {
    setVessels(dataVessels as any[]);
  }, [dataVessels, setVessels]);

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        handleLogoutUser,
        alertMessage,
        setAlertMessage,
        vessels,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
