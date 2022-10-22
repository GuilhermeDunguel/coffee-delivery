import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { LoadingScreen } from "../components/LoadingScreen/LoadingScreen";
import { CatalogDataContext } from "../contexts/CatalogDataContext";

export function DefaultLayout() {

  const {catalogItens} = useContext(CatalogDataContext)

  return (
    <div>
      {catalogItens.length === 0 ? <LoadingScreen /> :
        <>
          <Header />
          <Outlet />
        </>
      }
    </div>
  )
}
