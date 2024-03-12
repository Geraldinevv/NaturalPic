import { useContext } from 'react';
import { FavoritoContext } from '../context/ContextProvider';
import { PhotoCard } from '../components/PhotoCard';
import { PhotoCardSkeleton } from '../components/PhotoCardSkeleton';



export const Favoritos = () => {
	const { photos } = useContext(FavoritoContext);
	const photosFiltered = photos.filter((photo) => photo.favoritos === true);

	return (
		<div>
			<h1>Photos favorito</h1>
			<div className="flex flex-wrap gap-3 p-3">
				{photosFiltered.length ? (
					photosFiltered.map((photo, key) => (
						<PhotoCard
							key={key}
							id={photo.id}
							nombre={photo.nombre}
							nombre_photos={photo.nombre_photos}
							edad={photo.edad}
							ciudad={photo.ciudad}
							pais={photo.pais}
							email={photo.email}
							avatar={photo.avatar}
							descripcion_corta={photo.descripcion_corta}
							filled={photo.favoritos}
						/>
					))
				) : (
					<>
						<h1>No photos favoritos</h1>
						<hr />
						<PhotoCardSkeleton />
						<PhotoCardSkeleton />
						<PhotoCardSkeleton />
						<PhotoCardSkeleton />
						<PhotoCardSkeleton />
					</>
				)}
			</div>
		</div>
	);
};
