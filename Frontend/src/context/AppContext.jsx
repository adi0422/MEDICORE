import { createContext } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext()

const AppContextProvider = (props) => {
    console.log(doctors); // Log the doctors data to debug
    const currencySymbol = '$' // for doctor appoinment fees
    const value = { doctors,currencySymbol };
    return (
      <AppContext.Provider value={value}>
        {props.children}
      </AppContext.Provider>
    );
  };
   
export default AppContextProvider;