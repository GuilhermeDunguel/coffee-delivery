import { createContext, ReactNode, useState } from "react";

export interface ShoppingCartProps {
  imgSrc: string;
  name: string;
  price: number;
  value: number;
}

interface ShoppingCartContextProps {
  CartItens: ShoppingCartProps[];
  setCartItem: (props: ShoppingCartProps[]) => void;
  numberOfCups: number;
  setCupsNumber: (number: number) => void;
  removeCartItem: (itemName: string) => void;
}

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {

  const [numberOfCups, setNumberOfCups] = useState(0)

  const [CartItens, setCartItens] = useState<ShoppingCartProps[]>([])

  function setCartItem(props: ShoppingCartProps[]) {
    setCartItens(props)
  }

  function removeCartItem(itemName: string) {
    const CartItensUpdated = CartItens.filter(item => {
      return item.name !== itemName
    })

    setCartItens(CartItensUpdated)
  }

  function setCupsNumber(number: number) {
    setNumberOfCups(number)
  }

  return (
    <ShoppingCartContext.Provider value={
      {
        CartItens,
        setCartItem,
        numberOfCups,
        setCupsNumber,
        removeCartItem
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}