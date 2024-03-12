import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './views/Home';
import { Favoritos } from './views/Favoritos';

const App = () => {
	return (
		<div>
			<Navbar />

			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/favoritos"
					element={<Favoritos />}
				/>
			</Routes>
		</div>
	);
};
export default App;
