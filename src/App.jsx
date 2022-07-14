import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Programs from './components/Pograms';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<Hero />
			<Programs />
		</div>
	);
}

export default App;
