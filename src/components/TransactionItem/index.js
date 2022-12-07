import './index.css'

const TransactionItems = props => {
  const {all, key, dell} = props
  const {id, title1, amount1, type1} = all
  const change = () => {
    console.log(key)
    dell(id)
  }
  return (
    <li className="unorder table-row1" type="none">
      <p className="table-cell1 name-column1">{title1}</p>
      <hr className="separator" />
      <p className="table-cell1 name-column1">{amount1}</p>
      <hr className="separator" />
      <p className="table-cell1 name-column1">{type1}</p>
      <hr className="separator" />
      <button type="button" onClick={change} className="button1">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="button1"
        />
      </button>
    </li>
  )
}
export default TransactionItems
