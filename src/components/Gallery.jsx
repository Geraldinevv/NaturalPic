import { useContext } from 'react';
import { FavoritoContext } from '../context/ContextProvider';
import { PhotoCard } from './PhotoCard';
import { PhotoCardSkeleton } from './PhotoCardSkeleton';

export const Gallery = () => {
  const { photos, setPhotos } = useContext(FavoritoContext);

  const handleFavorito = (id) => {
    const newFavorito = photos.map((photo) =>
      photo.id === id ? { ...photo, favorito: !photo.favorito } : photo
    );

    setPhotos(newFavorito);
  };

  console.log(photos)

  return (
    <div className="flex flex-wrap gap-3 p-3">
      {photos.length ? (
        
        photos.map((photo, key) => (
          <PhotoCard
            key={key}
            id={photo.id}
            nombre={photo.nombre}
            nombre_usuario={photo.nombre_usuario}
            edad={photo.edad}
            ciudad={photo.ciudad}
            pais={photo.pais}
            email={photo.email}
            avatar={photo.src.medium}
            descripcion_corta={photo.descripcion_corta}
            filled={photo.favorito}
            handleFavorito={handleFavorito}
          />
        ))
      ) : (
        <>
          <PhotoCardSkeleton />
          <PhotoCardSkeleton />
          <PhotoCardSkeleton />
          <PhotoCardSkeleton />
          <PhotoCardSkeleton />
        </>
      )}
    </div>
  );
};
