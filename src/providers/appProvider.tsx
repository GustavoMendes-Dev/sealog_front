import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";
import { IAlert } from "../components/Alert";

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
}

export const AppContext = createContext({} as PropsAppTypes);

export function AppProvider({ children }: any) {
  const history = useHistory();
  const [user, setUser] = useState<IUser | null>(null);
  const [ alertMessage, setAlertMessage ] = useState<IAlert | null>(null);

  const handleLogoutUser = () => {
    localStorage.removeItem("access_token");
    history.push("/entrar");
  };

  return (
    <AppContext.Provider
      value={{
        user,
        setUser,
        handleLogoutUser,
        alertMessage,
        setAlertMessage,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
