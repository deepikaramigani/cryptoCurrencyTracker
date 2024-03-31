// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyDetails} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currencyDetails

  return (
    <li className="header-values">
      <div className="logo-container">
        <img src={currencyLogo} alt={currencyName} className="currency-logo" />
        <p className="font-weight">{currencyName}</p>
      </div>
      <div className="currency-values font-weight">
        <p>{usdValue}</p>
        <p className="margin">{euroValue}</p>
      </div>
    </li>
  )
}
export default CryptocurrencyItem
