import { createContext, useEffect, useState } from 'react';

export const FavoritoContext = createContext();

export const ContextProvider = ({ children }) => {
	const [photos, setPhotos] = useState([]);

	const FetchPhotos = async () => {
		const photosJson = await fetch('/photos.json');
		const { photos } = await photosJson.json();
		const photoData = photos.map((photo) => {
			return {
				...photo,
				favoritos: false,
			};
		});

		setPhotos(photoData);
	};

	useEffect(() => {
		FetchPhotos();
	}, []);

	return (
		<FavoritoContext.Provider value={{ photos, setPhotos }}>
			{children}
		</FavoritoContext.Provider>
	);
};
