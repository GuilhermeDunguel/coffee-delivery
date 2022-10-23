import { createContext, ReactNode, useState } from "react";

export interface ShoppingCartProps {
  imgSrc: string;
  name: string;
  price: number;
  value: number;
}

interface ShoppingCartContextProps {
  CartItens: ShoppingCartProps[];
  setCartItem: (props: ShoppingCartProps) => void;
  numberOfCups: number;
  setCupsNumber: (number: number) => void;
  removeCartItem: (itemName: string) => void;
  handleEdittingCartItem: (CartSelected: string, ItemValueUpdated: number) => void;
}

interface ShoppingCartProviderProps {
  children: ReactNode;
}

export const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {

  const [numberOfCups, setNumberOfCups] = useState(0)

  const [CartItens, setCartItens] = useState<ShoppingCartProps[]>([])

  function setCartItem(props: ShoppingCartProps) {
    const itemEqual = CartItens.filter(item => item.name === props.name)
    if(itemEqual.length === 0) {
      setCartItens([...CartItens, props])
    } else {
      CartItens.map(item => item.name === props.name ?
        item.value = item.value + props.value : null )
    }
  }

  function removeCartItem(itemName: string) {
    const CartItensUpdated = CartItens.filter(item => {
      return item.name !== itemName
    })

    setCartItens(CartItensUpdated)
  }

  function handleEdittingCartItem(CartSelected: string, ItemValueUpdated: number) {
    const selectedItem: ShoppingCartProps = CartItens.find(item => item.name === CartSelected)!

    const newItems = CartItens.map(item => item.name === selectedItem.name ? 
      {...selectedItem, value: ItemValueUpdated} : item)
      
    setCartItens(newItems)
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
        removeCartItem,
        handleEdittingCartItem
      }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}