import { ShoppingCartSimple } from 'phosphor-react'
import { useContext, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
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

  const {
    setCartItem,
  } = useContext(ShoppingCartContext)

  const [localNumberOfCups, setLocalNumberOfCups] = useState(0)

  const newItemAtCart = {
    imgSrc: props.imgSrc,
    name: props.name,
    price: props.price,
    value: localNumberOfCups,
  }

  function handleAddToCart(data: ShoppingCartProps) {
    setCartItem(data)
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
        <div className='quantityAndAddToCartDiv'>
          <input 
            className='quantityInput'
            placeholder='0' 
            type="number" 
            id='quantity'
            min={1}
            max={9}
            value={localNumberOfCups}
            onChange={(event) => setLocalNumberOfCups(Number(event?.target.value))}
            required
            />
          <button 
            onClick={() => {
              handleAddToCart(newItemAtCart)
              setLocalNumberOfCups(0)
            }}
            className='addToCartButton'
            disabled={localNumberOfCups === 0}
            ><ShoppingCartSimple size={22} weight={'fill'}/></button>
        </div>
      </div>
    </div>
  )
}
