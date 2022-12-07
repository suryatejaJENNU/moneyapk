import './index.css'

const MoneyDetails = props => {
  const {items, key} = props
  const {id, name, image, style, testid, paisal} = items
  return (
    <li className={style} type="none">
      <div>
        <img src={image} alt={style} className="image" />
      </div>
      <div>
        <p>{name}</p>
        <p>{paisal}</p>
      </div>
    </li>
  )
}
export default MoneyDetails
