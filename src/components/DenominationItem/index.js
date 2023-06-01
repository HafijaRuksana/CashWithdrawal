// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, withdrawalAmount} = props

  const {value} = denominationDetails
  const onClickWithdraw = () => withdrawalAmount(value)
  return (
    <li>
      <button type="button" onClick={onClickWithdraw} className="button">
        {value}
      </button>
    </li>
  )
}
export default DenominationItem
