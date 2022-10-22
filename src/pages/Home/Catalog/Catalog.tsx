import { CatalogItem } from "./CatalogItem/CatalogItem";

import './Catalog.scss'

import { useContext } from "react";
import { CatalogDataContext } from "../../../contexts/CatalogDataContext";

export function Catalog() {

  const {catalogItens} = useContext(CatalogDataContext)

  return (
    <section className="catalogWrapper">
      <h2>Nossos cafés</h2>
      <div className="catalogMenuDiv">
        {catalogItens.map(item => {
            return (
              <CatalogItem
                key={item.name}
                imgSrc={item.imgSrc} 
                tags={item.tags} 
                name={item.name} 
                description={item.description} 
                price={item.price} 
              />
            )
          })
        }
      </div>
    </section>
  )
}
