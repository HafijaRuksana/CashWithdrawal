// Write your code here
import {Component} from 'react'
import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  onWithdrawal = amount => {
    this.setState(prevState => ({balance: prevState.balance - amount}))
  }

  render() {
    const {balance} = this.state
    const {denominationsList} = this.props

    return (
      <div className="cash-withdrawal-app">
        <div className="content-card">
          <div className="name-container">
            <h1 className="dp">S</h1>
            <p className="name">Sarah Williams</p>
          </div>
          <div className="balance-details-container">
            <div className="balance-details">
              <p className="balance-heading">Your Balance</p>
              <p className="balance-amount">{balance}</p>
            </div>
            <p className="currency-type">In Rupees</p>
          </div>
          <p className="action-name">Withdraw</p>
          <p className="action-name-description">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationDetails={eachDenomination}
                withdrawalAmount={this.onWithdrawal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
