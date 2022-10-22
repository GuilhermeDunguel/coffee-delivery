import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { BenefitSpan } from '../../../components/BenefitSpan/BenefitSpan'

import backgroundBlur from '../../../assets/Background.svg'
import CoffeeImage from '../../../assets/CoffeeImage.png'

import './Intro.scss'

export function Intro() {
  return (
    <section className='homeIntro'>
      <div className='titleAndBenefitsDiv'>
        <div className='introTitleAndSubtitleDiv'>
          <h1 className='introTitle'>Encontre o café perfeito para qualquer hora do dia</h1>
          <p className='introSubtitle'>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </div>
        <div className='introBenefitsDiv'>
          <BenefitSpan 
            color={'darkYellow'}
            text={'Compra simples e segura'} 
            icon={<ShoppingCart size={16} weight={'fill'} />} 
          />
          <BenefitSpan 
            color={'yellow'}
            text={'Entrega rápida e rastreada'} 
            icon={<Timer size={16} weight={'fill'} />} 
          />
          <BenefitSpan 
            color={'baseText'}
            text={'Embalagem mantém o café intacto'} 
            icon={<Package size={16} weight={'fill'} />} 
          />
          <BenefitSpan 
            color={'purple'}
            text={'O café chega fresquinho até você'} 
            icon={<Coffee size={16} weight={'fill'} />} 
          />
        </div>
      </div>
      <div className='coffeeImageDiv'>
        <img src={CoffeeImage} alt="" />
      </div>
      <img className='introBackground' src={backgroundBlur} />
    </section>
  )
}
