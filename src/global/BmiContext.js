import React,{useState} from 'react';
export const BmiContext = React.createContext();

const BmiProvider = ({children}) => {


const[bmi,setBMI] = useState(0);

return <BmiContext.Provider value={[bmi,setBMI]}>
    {children}
    </BmiContext.Provider>
}
export default BmiProvider;