import {useState, useEffect} from "react"
import {Link} from "react-router-dom";
import {collection, getDocs, deleteDoc, doc} from "firebase/firestore"
import {db} from "../utils/FirebaseConfig"
import jQuery from "jquery";
import DataTable from 'datatables.net-bs5';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content' 

function UsersTable() {
  const [users, setUsers] = useState([])
  const usersCollection = collection(db, "users")

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollection)

      setUsers(data.docs.map(
        (doc) => ({
          ...doc.data(),
          id: doc.id
        })
      ))
    }
    getUsers()
  }, [users]);

  const removeUser = async (e) => {
    e.preventDefault();
    const id = e.target.dataset.id
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)
  }

  return (
    <>
      <div className="container-md d-flex my-5 p-5 justify-content-center">
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr className="border-bottom border-bottom-2 border-danger">
              <th className="text-center text-danger">Nombre</th>
              <th className="text-center text-danger">Apellido</th>
              <th className="text-center text-danger">Email</th>
              <th className="text-center text-danger">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {console.log(users)}
            {users.map((user) => (
              <tr key={user.id}>
                <td className="align-middle text-capitalize">{user.firstName}</td>
                <td className="align-middle text-uppercase">{user.lastName}</td>
                <td className="align-middle">{user.email}</td>
                <td className="align-middle text-center">
                  <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type={"button"} data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fa-solid fa-bars"></i>
                    </button>
                    <ul className="dropdown-menu bg-dark">
                      <li><Link to={`/edit/${user.id}`} className="dropdown-item text-light"><i className="fa-solid fa-user-pen"></i> Modificar</Link></li>
                      <li><a className="dropdown-item text-light" href="#" data-id={user.id} onClick={e => removeUser(e)}><i className="fa-solid fa-trash-can"></i> Eliminar</a></li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default UsersTable