import { createContext, useState} from "react";

const AppContext = createContext();

function AppProvider({children}){
  const [ email, setEmail ] = useState('')
  const [name, setName] = useState(undefined);
  const [ userInfo, setUserInfo ] = useState();
  const [ userUID, setUserUID] =useState();
  const [password, setPassword] = useState(undefined);
  const [preloader, setPreloader] =useState(false);
  const [Fjackets, setFjackets] =useState([]);
  const [jackets, setJackets] = useState([]);
  ;
  


  return(
    <AppContext.Provider value={{ email, setEmail, password, setPassword, preloader, setPreloader,
      userInfo, setUserInfo,
      userUID, setUserUID,
      Fjackets, setFjackets,
       jackets,setJackets,
     name, setName,}}>
      {children}
    </AppContext.Provider>
  )
}

export { AppContext, AppProvider}