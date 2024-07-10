import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Alert() {

  const MySwal = () => {
    withReactContent(Swal).fire({
      title: "Esta seguro?",
      text: "Este preceso de eliminar es irreversible",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "SI"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Borrado!",
          text: "El registro se eliminó correctamente.",
          icon: "success"
        });
      }
    });
  }

  return (
    <>
      <button onClick={MySwal} className='btn btn-outline-warning'>Alerta</button>
    </>
  )
}

export default Alert