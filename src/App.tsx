import { BrowserRouter } from "react-router-dom";
import { CatalogDataContextProvider } from "./contexts/CatalogDataContext";
import { CheckoutDataProvider } from "./contexts/CheckoutDataContext";
import { ShoppingCartProvider } from "./contexts/ShoppingCartContext";

import { Router } from './Router'

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CheckoutDataProvider>
        <CatalogDataContextProvider>
          <ShoppingCartProvider>
            <Router />
          </ShoppingCartProvider>
        </CatalogDataContextProvider>
      </CheckoutDataProvider>
      </BrowserRouter>
    </div>
  )
}
