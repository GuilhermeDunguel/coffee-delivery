import './ErrorPage.scss'

import errorImg from '../../assets/coffeeError.png'
import { NavLink } from 'react-router-dom'

export function ErrorPage() {
  return (
    <main className='errorPageWrapper'>
      <div className='errorImageDiv'>
        <img src={errorImg} alt="" /> 
      </div>
      <div className='errorMessageDiv'>
        <h2 className='errorMessageHeading'>Ooops, parece que você deixou sua xícara cair!</h2>
        <span className='errorMessageSpan'>Adicione novos itens ao seu carrinho e tente novamente.</span>
      </div>
      <NavLink to={'/'}>
        <button className='backToHomeButton'>VOLTAR À PÁGINA PRINCIPAL</button>
      </NavLink>
    </main>
  )
}
