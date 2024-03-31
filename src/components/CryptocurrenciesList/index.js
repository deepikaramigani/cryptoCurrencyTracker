// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.renderCurrency()
  }

  renderCurrency = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const responseData = await response.json()
    const data = responseData.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    console.log(data)
    this.setState({currencyList: data, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div className="currency-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="container">
            <h1 className="heading">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="crypto-img"
            />
            <div className="currency-list-container">
              <div className="header">
                <p className="lm">Coin Type</p>
                <div className="currency-value">
                  <p>USD</p>
                  <p className="margin">EURO</p>
                </div>
              </div>
              <ul className="ul-style">
                {currencyList.map(each => (
                  <CryptocurrencyItem currencyDetails={each} key={each.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
