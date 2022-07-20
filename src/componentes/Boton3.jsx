import { useNavigate } from 'react-router-dom';

export const Boton3 = ({ texto }) => {

  const navigate = useNavigate();



  const handleClick = () => {
    navigate("/Quemadores")
  }




  return (

    <>

      <button className='btn btn-info' onClick={handleClick}>{texto}</button>


    </>




  )
}

export default Boton3