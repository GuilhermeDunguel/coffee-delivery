import { Trash } from 'phosphor-react'
import { useContext, useState } from 'react';
import { ShoppingCartContext } from '../../../contexts/ShoppingCartContext';
import './CoffeeCard.scss'

interface CoffeeCardProps {
  imgSrc: string,
  name: string,
  price: number
  value: number;
}

export function CoffeeCard(props: CoffeeCardProps) {

  const [isRemoveCardPopUpOpen, setIsRemoveCardPopUpOpen] = useState(false)

  const {removeCartItem} = useContext(ShoppingCartContext)
 
  return (
    <div className='coffeeCardWrapper'>
      <div className='coffeeImageDiv'>
        <img src={props.imgSrc} alt="" />
      </div>
      <div className='orderDataAndEditDiv'>
        <div className='orderDataDiv'>
          <span className='coffeeName'>{props.name}</span>
          <span className='coffeePrice'>R$ {(props.price * props.value).toFixed(2)}</span>
        </div>
        <div className='orderEditDiv'>
          <input 
            type="number" 
            placeholder='0' 
            defaultValue={props.value}
            max={9} 
            min={1}
          />
          <button onClick={() => setIsRemoveCardPopUpOpen(true)}>
            <Trash size={16} />
            REMOVER
          </button>
        </div>
        <div 
          className={
            isRemoveCardPopUpOpen ? 'removeCardPopUp open' : 'removeCardPopUp'
          }>
          <span>Tem certeza que deseja remover?</span>
          <div className='removeCardButtonsPopUp'>
            <button className='confirm' onClick={() => removeCartItem(props.name)}>SIM</button>
            <button onClick={() => setIsRemoveCardPopUpOpen(false)}>NÃO</button>
          </div>
        </div>
      </div>
    </div>
  )
}
