import { createContext, ReactNode, useState } from 'react'

interface adressDataProps{ 
  cep: string;
  city: string;
  complement: string;
  district: string;
  number: number;
  road: string;
  uf: string;
}

interface checkoutData{
  adressData: adressDataProps,
  paymentMethod: string,
}

interface CheckoutDataContextProps {
  checkoutData: checkoutData | undefined;
  handleSavingCheckoutData: (dataToSave: checkoutData) => void;
}

interface CheckoutDataProviderProps {
  children: ReactNode;
}

export const CheckoutDataContext = createContext({} as CheckoutDataContextProps)

export function CheckoutDataProvider({children}: CheckoutDataProviderProps) {

  const [checkoutData, setCheckoutData] = useState<checkoutData>()

  function handleSavingCheckoutData(dataToSave: checkoutData) {
    setCheckoutData(dataToSave)
  }

  return (
    <CheckoutDataContext.Provider value={{
      checkoutData,
      handleSavingCheckoutData
    }}>
      {children}
    </CheckoutDataContext.Provider>
  )
}
