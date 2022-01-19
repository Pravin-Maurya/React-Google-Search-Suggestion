// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionDetails, updateSearchSuggestion} = props
  const {suggestion} = suggestionDetails

  const onClickSuggestion = () => {
    updateSearchSuggestion(suggestion)
  }

  return (
    <li className="suggestion-container">
      <p className="suggested-text">{suggestion}</p>
      <button type="button" className="arrow-btn" onClick={onClickSuggestion}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-img"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
