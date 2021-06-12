import InputBar from './components/InputBar.js'
import List from './components/List.js'
import Footer from './components/Footer.js'
import {useState, useEffect} from 'react'

function App() {
	const [listItems, setListItems] = useState([])

	useEffect(() => {
		const cookies = document.cookie
		if (cookies) {
			const savedListItemsCookie = cookies.split('=')
			const savedListItems = JSON.parse(savedListItemsCookie[1])
			if (savedListItems && savedListItems.length > 0) {
				setListItems(savedListItems)
			}
	}}, [])

	useEffect(() => {
		if (listItems.length > 0) {
			document.cookie = `savedListItems=${JSON.stringify(listItems)}`
		} else {
			document.cookie = 'savedListItems=; max-age=-1'
		}
	}, [listItems])

	const handleSubmit = (item, quantity) => {
		setListItems([
			...listItems, {
				name: item,
				quantity: quantity
			}
		])
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
