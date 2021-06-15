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
		const newListItems = [...listItems]
		const itemToEdit = newListItems[i]
		
		if (itemToEdit.quantity > 1) {
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
		<table className="listTable">
			<tr className="titleLine">
				<th className="itemTitle">
					Item Name:
				</th>
				<th className="quantityTitle">
					Quantity:
				</th>
				<th className="buttonTitle">

				</th>
			</tr>
				{
					listItems.map((item, i) => {
						return(
							<tr className="itemRow" key={`userItem-${i}`}>
								<td className="userItem">
									{item.name}
								</td>
								<td className="userQuantity">
									{item.quantity}
								</td>
								<td className="userButtons" valign="center" align="center">
									<button type="button" onClick={() => handleIncreaseQuantity(i)}><SvgPlus /></button>
									<button type="button" onClick={() => handleDecreaseQuantity(i)}><SvgMinus /></button>
									<button type="button" onClick={() => handleDeleteItem(i)}><SvgDelete /></button>
								</td>
							</tr>
						)
					})
				}
		</table>
	)
}

export default List
