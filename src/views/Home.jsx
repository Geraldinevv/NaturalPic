import { useContext } from 'react';
import { Gallery } from '../components/Gallery';
import { FavoritoContext } from '../context/ContextProvider';

const Home = () => {
	return (
		<div className="App">
			<h1>Instagram Copy</h1>
			<Gallery />
		</div>
	);
};
export default Home;
