import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<Hero />
		</div>
	);
}

export default App;
