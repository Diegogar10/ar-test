import { ReactNode, createContext, useState} from "react";

const ContextApp = createContext();

const ProviderApp = ({ children } : {children: ReactNode}) => {
  
  const [videoId, setVideoId ] = useState(0); 
  const [visible, setVisible] = useState(false);

  const handleVideoId = (num: number) : void => {
    setVideoId(num);
  }
  
  const globalValues = {
    handleVideoId,
    setVisible,
    videoId,
    visible, 

  }

  return(
    <ContextApp.Provider value={globalValues}>
      {children}
    </ContextApp.Provider>
  )
}

export {ContextApp, ProviderApp};