import { useContext } from 'react';
import { FavoritoContext } from '../context/ContextProvider';
import { Link } from 'react-router-dom';
import IconHeart from './IconHeart';

export const PhotoCard = ({
  id,
  nombre,
  nombre_usuario,
  edad,
  ciudad,
  pais,
  email,
  avatar,
  descripcion_corta,
  filled,
  handleFavorito,
}) => {
  const { setFotos } = useContext(FavoritoContext);

  const handleClick = () => {
    handleFavorito(id);
  };

  return (
    <div className="flex flex-col gap-2 justify-center w-[250px] bg-black rounded-lg p-3 ">
      <div className="flex items-center justify-center">
        <figure className="w-[100px]">
          <img
            className="w-full object-contain"
            src={avatar}
            alt="foto de photo"
          />
        </figure>
      </div>
      <div>
        <strong>
          <Link to={`/foto/${id}`} className="text-white">
            {nombre}
          </Link>
        </strong>
      </div>
      <div>
        <p>{nombre_usuario}</p>
      </div>
      <div>
        <p>{edad} </p>
      </div>
      <div>
        <p>{ciudad}, {pais}</p>
      </div>
      <div>
        <p>{email}</p>
      </div>
      <div>
        <p>{descripcion_corta}</p>
      </div>
      <hr />
      <div className="flex items-center justify-end cursor-pointer">
        <button onClick={handleClick}>
          <IconHeart filled={filled} />
        </button>
      </div>
    </div>
  );
};