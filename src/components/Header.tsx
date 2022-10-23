import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import logoSvg from '../assets/coffeeDeliveryLogo.svg';
import { ShoppingCartContext } from '../contexts/ShoppingCartContext';

import './Header.scss'

export function Header() {

  const localStorageData = localStorage.getItem('@ignite-coffee-delivery:adress-state-1.0.0');

  const localStorageAdressData = JSON.parse(localStorageData!)

  const {
    CartItens
  } = useContext(ShoppingCartContext)

  const userAdress = `${localStorageAdressData?.city}, ${localStorageAdressData?.uf}`

  const [isAdviceActive, setIsAdviceActive] = useState(false)
  
  function handleCheckingIfCartIsEmpty() {
    if(CartItens.length === 0) {
      setIsAdviceActive(true)
      setTimeout(() => {
        setIsAdviceActive(false);
      }, 4000)
    }
  }

  return (
    <header className='headerWrapper'>
      <div className='headerLogoDiv'>
        <NavLink to={'/'}>
          <img src={logoSvg} />
        </NavLink>
      </div>
      <nav className='headerNavbar'>
        <span className='headerAdressSpan'>
          <MapPin size={22} weight="fill" />
          {localStorageAdressData === null ? 'Brasil' : userAdress}
        </span>
        <NavLink to={CartItens.length === 0 ? '/' : '/checkout'}>
          <button onClick={handleCheckingIfCartIsEmpty} className='headerCartButton'>
            <ShoppingCart size={22} weight="fill" />
            {CartItens.length !== 0 ? <span className='numberOfItens'>{CartItens.length}</span> : null}
            <dialog open={isAdviceActive} className='cartEmptyDialog'><span>Seu carrinho está vazio!</span></dialog>
          </button>
        </NavLink>
      </nav>
    </header>
  )
}