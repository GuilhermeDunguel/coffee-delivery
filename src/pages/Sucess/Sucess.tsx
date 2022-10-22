import { useContext, useEffect } from "react"
import { CheckoutDataContext } from "../../contexts/checkoutDataContext"

import deliveryManSvg from '../../assets/deliveryManIllustration.svg'
import { CurrencyDollar, MapPin, Timer } from "phosphor-react"

import './Sucess.scss'

export function Sucess() {

  const {
    checkoutData
  } = useContext(CheckoutDataContext)

  const adress = checkoutData?.adressData
  const paymentMethod = checkoutData?.paymentMethod

  useEffect(() => {
    localStorage.setItem('@ignite-coffee-delivery:adress-state-1.0.0', JSON.stringify(checkoutData?.adressData))
  }, [checkoutData])

  return (
    <main className="sucessWrapper">
      <section className="leftColumn">
        <div className="sucessMessageDiv">
          <h1 className="sucessHeading">Uhu! Pedido confirmado</h1>
          <span className="sucessSpan">Agora é só aguardar que logo o café chegará até você.</span>
        </div>
        <div className="orderInfoBorderDiv">
          <div className="orderInfoDiv">
            <div className="adressDiv orderInfoItem">
              <MapPin size={20} weight='fill' />
              <div className="deliveryData">
                <span>Entrega em <strong>{adress!.road}, {adress!.number}</strong></span>
                <span>{adress!.district} - {adress!.city}, {adress!.uf}</span>
              </div>
            </div>
            <div className="deliveryTimeDiv orderInfoItem">
              <Timer size={20} weight='fill' />
              <div className="deliveryData">
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </div>
            <div className="paymentMethodDiv orderInfoItem">
              <CurrencyDollar size={20} weight='regular' />
              <div className="deliveryData">
                <span>Pagamento na entrega</span>
                <strong>{paymentMethod}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="rightColumn">
        <div className="deliveryIllustrationDiv">
          <img src={deliveryManSvg} alt="" />
        </div>
      </section>
    </main>
  )
}
