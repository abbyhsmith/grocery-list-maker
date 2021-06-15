import React from 'react'

const ClearButton = ({handleClearListItems}) => {
	return (
		<button type="button" onClick={handleClearListItems} className="clearButton">Clear All Items</button>
	)
}

export default ClearButton
