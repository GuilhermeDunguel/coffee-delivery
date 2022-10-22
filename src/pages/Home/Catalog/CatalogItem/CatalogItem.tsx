import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useRef, useState } from 'react';
import { ShoppingCartContext, ShoppingCartProps } from '../../../../contexts/ShoppingCartContext';

import './CatalogItem.scss'


interface CatalogItemProps {
  imgSrc: string;
  tags: string[];
  name: string;
  description: string;
  price: number;
}

export function CatalogItem(props: CatalogItemProps) {

  const numberOfCupsInput = useRef<any>(null);
  const inputValue = Number(numberOfCupsInput.current?.value)

  const {
    CartItens,
    numberOfCups,
    setCartItem,
    setCupsNumber
  } = useContext(ShoppingCartContext)

  const newItemAtCart = {
    imgSrc: props.imgSrc,
    name: props.name,
    price: props.price,
    value: numberOfCups
  }

  function handleAddToCart(data: ShoppingCartProps) {
    setCartItem([...CartItens, data])
  }

  return (
    <div className='catalogItemWrapper'>
      <div className='coffeeImageDiv'>
        <img src={props.imgSrc} alt="" />
      </div>
      <div className='tagsDiv'>
        {props.tags.map(tag => {
          return (
            <span key={tag}>{tag}</span>
          )
        })}
      </div>
      <h3 className='coffeeNameHeading'>{props.name}</h3>
      <p className='coffeeDescriptionParagraph'>{props.description}</p>
      <div className='catalogItemFooter'>
        <span className='moneySignSpan'>
            R$
            <strong className='coffeePrice'> {props.price.toFixed(2)}</strong>
        </span>
        <form onSubmit={(event) => {
          event.preventDefault()
        }} className='quantityAndAddToCartDiv'>
          <input 
            ref={numberOfCupsInput}
            className='quantityInput'
            placeholder='0' 
            type="number" 
            id='quantity'
            min={1}
            max={9}
            required
            onChange={(event) => {
              setCupsNumber(Number(event.target.value))
            }}
            />
          <button 
            onClick={() => {
              inputValue < 1 ? true : handleAddToCart(newItemAtCart)
            }} 
            className='addToCartButton'
            ><ShoppingCartSimple size={22} weight={'fill'}/></button>
        </form>
      </div>
    </div>
  )
}
