import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react"

interface catalogItensProps {
  imgSrc: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

interface CatalogDataProps {
  catalogItens: catalogItensProps[],
}


interface CatalogDataProvider {
  children: ReactNode;
}

export const CatalogDataContext = createContext({} as CatalogDataProps)

export function CatalogDataContextProvider({children}: CatalogDataProvider) {

  const [catalogItens, setCatalogItens] = useState<catalogItensProps[]>([])

  useEffect(() => {
    axios.get('https://api.npoint.io/a380939a53668d2393dd', {
    })
    .then(response => setCatalogItens(response.data))
  }, [])
  

  return (
    <CatalogDataContext.Provider value={{catalogItens}}>
      {children}
    </CatalogDataContext.Provider>
  )
}
