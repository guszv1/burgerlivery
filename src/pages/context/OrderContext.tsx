import { createContext, useState } from "react";

type OrderContextProps = {
    appetizer: any;
    hamburger: any;
    combo: any;
    desert: any;
    beveragee: any;
    totalValue: number;
};


const OrderContext = createContext({})
interface OrderContextProviderProps{
    children: React.ReactNode;
};


const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
    const[hamburgerOrder, setHamburgerOrder]= useState();
    //const [appettizer, setApettizer] = useState();
    return( <OrderContext.Provider value= {{
        hamburgerOrder, setHamburgerOrder,}}>

        {children}</OrderContext.Provider> )    
};


export {OrderContextProvider}
export default OrderContext