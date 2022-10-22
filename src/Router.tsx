import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { ShoppingCartContext } from "./contexts/ShoppingCartContext";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Checkout } from "./pages/Checkout/Checkout";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage";
import Home from "./pages/Home/Home";
import { Sucess } from "./pages/Sucess/Sucess";

export function Router() {

  const {CartItens} = useContext(ShoppingCartContext)


  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path='/' element={<Home />}/>
        <Route path='/checkout' element={CartItens.length === 0 ? <ErrorPage /> : <Checkout />}/>
        <Route path="/sucess" element={<Sucess />} />
      </Route>
    </Routes>
  )
}