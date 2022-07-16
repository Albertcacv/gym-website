import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Join from './components/Join';
import Plans from './components/Plans';
import Programs from './components/Pograms';
import Reasons from './components/Reasons';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<Hero />
			<Programs />
			<Reasons />
			<Plans />
			<Join />
			<Footer />
		</div>
	);
}

export default App;
