import React from 'react'
import SvgDelete from '../svgs/SvgDelete.js'
import SvgPlus from '../svgs/SvgPlus.js'
import SvgMinus from '../svgs/SvgMinus.js'

const List = ({listItems, setListItems}) => {
	const handleIncreaseQuantity = (i) => {
		const newListItems = [...listItems]
		const itemToEdit = newListItems[i]
		itemToEdit.quantity += 1
		setListItems(newListItems)
	}

	const handleDecreaseQuantity = (i) => {
		if (listItems.length > 1) {
			const newListItems = [...listItems]
			const itemToEdit = newListItems[i]
			itemToEdit.quantity -= 1
			setListItems(newListItems)
		} else {
			handleDeleteItem(i)
		}
	}

	const handleDeleteItem = (indexToDelete) => {
		const newListItems = [...listItems]
		const result = newListItems.filter((newListItem, i) => i !== indexToDelete)
		setListItems(result)
	}

	return (
		<div className="listDiv">
			<div className="titleLine">
				<div className="itemTitle">
					Item Name:
				</div>
				<div className="quantityTitle">
					Quantity:
				</div>
				<div className="buttonDiv">

				</div>
			</div>
			<div className="userItems">
				{
					listItems.map((item, i) => {
						return(
							<React.Fragment key={`userItem-${i}`}>
								<div className="userItem">
									{item.name}
								</div>
								<div className="userQuantity">
									{item.quantity}
								</div>
								<div className="userButtons">
									<button type="button" onClick={() => handleIncreaseQuantity(i)}><SvgPlus /></button>
									<button type="button" onClick={() => handleDecreaseQuantity(i)}><SvgMinus /></button>
									<button type="button" onClick={() => handleDeleteItem(i)}><SvgDelete /></button>
								</div>
							</React.Fragment>
						)
					})
				}
			</div>
		</div>
	)
}

export default List
