import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Alert() {
  const [count, setCount] = useState(0)

  const MySwal = () => {
    withReactContent(Swal).fire({
      icon: "error",
      title: "Error",
      text: "Le erraste feo",
    });
  } 

  return (
    <>
      <button onClick={MySwal} className='btn btn-outline-warning'>Alerta</button>
    </>
  )
}

export default Alert