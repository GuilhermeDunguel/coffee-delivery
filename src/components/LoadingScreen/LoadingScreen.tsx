import './LoadingScreen.scss'
import logoImg from '../../assets/coffeeDeliveryLogo.svg'
import { CircleNotch } from 'phosphor-react'

export function LoadingScreen() {
  
  return (
    <div className='loadingScreenWrapper'>
      <img src={logoImg} alt="" />
      <h1>Seja bem vindo(a)!</h1>
      <CircleNotch className="loadingIcon" size={55} weight="bold" />
    </div>
  )
}
