import { useNavigate } from 'react-router-dom';

export const Boton2 = ({ texto }) => {

  const navigate = useNavigate();



  const handleClick = () => {
    navigate("/Creatina")
  }




  return (

    <>

      <button className='btn btn-warning' onClick={handleClick}>{texto}</button>


    </>




  )
}

export default Boton2; 