import { useNavigate } from 'react-router-dom';

export const Boton = ({ texto }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/Motivacion")
  }

  return (
    <>
    <button className='btn btn-danger' onClick={handleClick}>{texto}</button>
    </>
  )
}

export default Boton; 




