import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, Watch } from 'phosphor-react'
import { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { CheckoutDataContext } from '../../contexts/CheckoutDataContext'

import { ShoppingCartContext } from '../../contexts/ShoppingCartContext'
import './Checkout.scss'
import { CoffeeCard } from './CoffeeCard/CoffeeCard'


interface adressDataProps{ 
  cep: string;
  city: string;
  complement: string;
  district: string;
  number: number;
  road: string;
  uf: string;
}

interface checkoutData{
  adressData: adressDataProps,
  paymentMethod: string,
}

export function Checkout() {

  const {
    CartItens,
  } = useContext(ShoppingCartContext)

  const {
    handleSavingCheckoutData
  } = useContext(CheckoutDataContext)

  const CartItensPrice = CartItens.map(item => item.price * item.value)

  const CartItensPriceSum = CartItensPrice.reduce(
    (prevValue, currentValue) => prevValue + currentValue, 0
  )

  const deliveryFee = CartItensPriceSum < 15 ? 5.00 : 3.50

  const {register, handleSubmit} = useForm()
  
  const navigate = useNavigate()

  const [paymentMethod, setPaymentMethod] = useState('')

  function handleSavingData(data: any) {
    const dataToSave: checkoutData = {
      adressData: data,
      paymentMethod: paymentMethod,
    }
    handleSavingCheckoutData(dataToSave)
    navigate('/sucess');
  }
  
  return (
    <main className='checkoutWrapper'>
      <div className='leftColumn'>
        <h2>Complete seu pedido</h2>
        <section className='adressSection'>
          <header className='adressHeader'>
            <MapPinLine size={22} weight={'regular'} />
            <div>
              <span className='adressHeaderTitle'>Endereço de Entrega</span>
              <span className='adressHeaderSubtitle'>Informe o endereço onde deseja receber o pedido</span>
            </div>
          </header>
          <form onSubmit={handleSubmit(data => handleSavingData(data))} className='adressForm' id='adressDataForm'>
            <input {...register('cep')} type="text" placeholder='CEP' required />
            <input {...register('road')} type="text" placeholder='Rua' required />
            <input {...register('number')} type="number" placeholder='Número' required />
            <input {...register('complement')} type="text" placeholder='Complemento' />
            <input {...register('district')} type="text" placeholder='Bairro' required />
            <input {...register('city')} type="text" placeholder='Cidade' required />
            <input {...register('uf')} type="text" placeholder='UF' required />
          </form>
        </section>
        <section className='paymentMethodSection'>
          <header className='paymentMethodHeader'>
            <CurrencyDollar size={22} weight={'regular'} />
            <div>
              <span className='paymentMethodHeaderTitle'>Pagamento</span>
              <span className='paymentMethodHeaderSubtitle'>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
            </div>
          </header>
          <div className='paymentMethodButtons'>
            <button  
              className={paymentMethod.includes('Crédito') ? 'active' : ''} 
              onClick={() => setPaymentMethod('Cartão de Crédito')}>
              <CreditCard width={16} weight={'regular'} />
              CARTÃO DE CRÉDITO
            </button>
            <button 
              className={paymentMethod.includes('Débito') ? 'active' : ''} 
              onClick={() => setPaymentMethod('Cartão de Débito')}>
              <Bank width={16} weight={'regular'} />
              CARTÃO DE DÉBITO
            </button>
            <button 
              className={paymentMethod.includes('Dinheiro') ? 'active' : ''} 
              onClick={() => setPaymentMethod('Dinheiro')}>
              <Money width={16} weight={'regular'} />
              DINHEIRO
            </button>
          </div>
        </section>
      </div>
      <div className='rightColumn'>
        <h2>Cafés selecionados</h2>
        <section className='orderSummarySection'>
          <div className='orderDetailsDiv'>
            {CartItens.length === 0 ? 
              <span className='ifCartEmpty'>Seu carrinho está vazio :/</span> :
              CartItens.map(item => {
                return (
                  <CoffeeCard 
                    key={item.name}
                    imgSrc={item.imgSrc}
                    name={item.name}
                    price={Number(item.price.toFixed(2))}
                    value={item.value}
                  />
                )
              })
            }
          </div>
          <div className='orderSubtotal'>
            <div className='subtotal smallFont'>
              <span>Total de itens</span>
              <span>R$ {CartItensPriceSum.toFixed(2)}</span>
            </div>
            <div className='subtotal smallFont'>
              <span>Entrega</span>
              <span>R$ {deliveryFee.toFixed(2)}</span>
            </div>
            <div className='subtotal biggerFont'>
              <span>Total</span>
              <span>R$ {(CartItensPriceSum + deliveryFee).toFixed(2)}</span>
            </div>
          </div>
            <button type='submit' disabled={!paymentMethod} form="adressDataForm" className='placeOrderButton'>
              CONFIRMAR PEDIDO
            </button> 
        </section>
      </div>
    </main>
  )
}
