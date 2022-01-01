import './index.css'

const SuggestionItem = props => {
  const {eachLi, tochagetheInput} = props
  const {suggestion} = eachLi

  const clickedButton = () => {
    tochagetheInput(suggestion)
  }

  return (
    <li className="list-container">
      <p className="suggestion">{suggestion}</p>
      <button type="button" onClick={clickedButton} className="arrow-button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
