// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, deleteArrow} = props
  const {id, suggestion} = suggestionDetails

  const onDeleteArrow = () => {
    deleteArrow(id)
  }

  return (
    <li className="suggestion-item">
      <p className="suggestion">{suggestion}</p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        alt="arrow"
        className="arrow-icon"
        onClick={onDeleteArrow}
      />
    </li>
  )
}

export default SuggestionItem
