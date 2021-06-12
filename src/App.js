import './App.scss';
import InputBar from './components/InputBar.js'
import List from './components/List.js'
import Footer from './components/Footer.js'
import {useState, useEffect} from 'react'

function App() {
	const [listItems, setListItems] = useState([])

	useEffect(() => {
		const cookies = document.cookie
		const savedListItemsCookie = cookies.split('=')
		const savedListItems = JSON.parse(savedListItemsCookie[1])
		if (savedListItems && savedListItems.length > 0) {
			setListItems(savedListItems)
		}
	}, [])

	useEffect(() => {
		if (listItems.length > 0) {
			document.cookie = `savedListItems=${JSON.stringify(listItems)}`
		}
	}, [listItems])

	const handleSubmit = (item, quantity) => {
		if (item === "" || quantity === '' || quantity.isNaN) {
			document.getElementById('errorArea').innerHTML = "Please enter valid values in both fields"
		} else {
			setListItems([
				...listItems, {
					name: item,
					quantity: quantity
				}
			])
			document.getElementById('errorArea').innerHTML = ""
		}
	}

	return (
		<div className="App">
			<h1 className="head">Grocery List</h1>
			<InputBar handleSubmit={handleSubmit} />
			<List listItems={listItems} setListItems={setListItems} />
			<Footer />
		</div>
	);
}

export default App;
