import React, {useState} from 'react'

const InputBar = ({handleSubmit}) => {
	const [item, setItem] = useState('')
	const [quantity, setQuantity] = useState('')

	const handleOnClick = () => {
		handleSubmit(item, quantity)
		setItem('')
		setQuantity('')
	}

	return (
		<div className="inputBar">
			<form className="inputForm">
				<div className="labelDiv">
					<label className="itemLabel" htmlFor="item">Item:</label>
					<label className="quantityLabel" htmlFor="quantity">Quantity:</label>
				</div>
				<div className="inputFieldDiv">
					<input type="text" className="item" name="item" placeholder="Enter name of item" onChange={(e) => setItem(e.target.value)} value={item} />
					<input type="number" className="quantity" name="quantity" onChange={(e) => setQuantity(parseInt(e.target.value))} value={quantity} />
					<button type="button" onClick={handleOnClick}>Add Item</button>
				</div>
			</form>
		</div>
	)
}

export default InputBar
