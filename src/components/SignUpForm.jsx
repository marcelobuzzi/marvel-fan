import {useState} from "react"
import {Link} from "react-router-dom"
import TextInput from "./TextInput.jsx"
import {collection, addDoc} from "firebase/firestore"
import {db} from "../utils/FirebaseConfig.js"

function RegisterForm() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName]   = useState('')
  const [email, setEmail]         = useState('')
  const [password, setPassword]   = useState('')
  const [confirm, setConfirm]     = useState('')
  const [errors, setErrors]       = useState({
    firstName: {estado: false, message: ''},
    lastName : {estado: false, message: ''},
    email    : {estado: false, message: ''},
    password : {estado: false, message: ''},
    confirm  : {estado: false, message: ''},
  })

  const regEx = {
    alpha  : /^[a-zA-Z áéíóúñÑâêîôû]*$/,
    numeric: /^[0-9]+$/,
    email  : /^\w+([\.\+\-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/,
  };

  const usersCollection = collection(db, 'users')

  const addUser = async(e)=>{
    await addDoc(usersCollection, {
      firstName: firstName,
      lastName : lastName,
      email    : email,
      password : password
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {
      firstName: { estado: false, message: '' },
      lastName : { estado: false, message: '' },
      email    : { estado: false, message: '' },
      password : { estado: false, message: '' },
      confirm  : { estado: false, message: '' },
    }

    if(firstName === '') newErrors.firstName = { estado: true, message: 'El nombre no no puede estar vacío.' }
    if(!regEx.alpha.test(firstName)) newErrors.firstName = { estado: true, message: 'El nombre no es válido. Sólo se caracteres de la A..Z.' }

    if(lastName === '') newErrors.lastName = { estado: true, message: 'El apellido no no puede estar vacío.' }
    if(!regEx.alpha.test(lastName)) newErrors.lastName = { estado: true, message: 'El apellido no es válido. Sólo se caracteres de la A..Z.' }

    if (email === '') newErrors.email = { estado: true, message: 'El correo de usuario no puede estar vacío.' }
    if (email.length < 6 && email.length > 0) newErrors.email = { estado: true, message: 'El correo no es válido.' }
    if(!regEx.email.test(email)) newErrors.email = { estado: true, message: 'El correo de usuario no es válido.' }

    if (password === '') newErrors.password = { estado: true, message: 'El password no puede estar vacío.' }
    if (password.length < 6 && password.length > 0) newErrors.password = { estado: true, message: 'El password debe tener al menos 6 caracteres.' }

    if (confirm !== password) newErrors.confirm = { estado: true, message: 'El password no ha sido confirmado.' }

    setErrors(newErrors)

    if (!newErrors.firstName.estado && !newErrors.lastName.estado && !newErrors.email.estado && !newErrors.password.estado) {
      addUser()
      setFirstName('')
      setLastName('')
      setEmail('')
      setPassword('')
      setConfirm('')
    }
  }

  return (
    <>
      <div className="container-md d-flex my-5 p-5 justify-content-center">
        <form id="frmSignUp" className="card p-3 shadow opacity-50" onSubmit = {handleSubmit}>

          <h4>Registro de Usuarios</h4>

          <hr className="border-danger border-2" />

          <div className="row w-100 m-0 p-0">
            <div className="col-6 my-0 mx-0 py-0 px-2">
              <TextInput
                label="Nombre"
                type="text"
                name="firstName"
                id="firstName"
                inputClasses={"text-capitalize"}
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                error={errors.firstName}
              />
            </div>
            <div className="col-6 my-0 mx-0 py-0 px-2">
              <TextInput
                label="Apellido"
                type="text"
                name="lastName"
                id="lastName"
                inputClasses={"text-uppercase"}
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                error={errors.lastName}
              />
            </div>
          </div>

          <div className="row w-100 m-0 p-0">
            <div className="col-12 my-0 mx-0 py-0 px-2">
              <TextInput
                label="Email"
                type="email"
                name="email"
                id="email"
                inputClasses={"text-lowercase"}
                value={email}
                onChange={e => setEmail(e.target.value)}
                error={errors.email}
              />
            </div>
          </div>

          <div className="row w-100 m-0 p-0">
            <div className="col-6 my-0 mx-0 py-0 px-2">
              <TextInput
                label="Contraseña"
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                error={errors.password}
              />
            </div>
            <div className="col-6 my-0 mx-0 py-0 px-2">
              <TextInput
                label="Confirmar contraseña"
                type="password"
                name="confirm"
                id="confirm"
                value={confirm}
                onChange={e => setConfirm(e.target.value)}
                error={errors.confirm}
              />
            </div>
          </div>

          <hr className="border-danger border-2" />

          <div className="row w-100 m-0 p-0">
            <div className="col-12 my-0 mx-0 py-0 px-2 d-flex justify-content-end">
              <button type="submit" className="btn btn-primary mx-2">GUARDAR</button>
              <Link to={'/'} className="btn btn-secondary mx-2">CANCELAR</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default RegisterForm