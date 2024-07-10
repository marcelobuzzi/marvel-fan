import { useState } from "react"
import TextInput from "./TextInput.jsx"

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    email   : {estado: false, message: ''},
    password: {estado: false, message: ''},
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    const newErrors = {
      email   : { estado: false, message: '' },
      password: { estado: false, message: '' },
    }

    if (email === '') newErrors.email = { estado: true, message: 'El correo de usuario no puede estar vacío.' }
    if (password === '') newErrors.password = { estado: true, message: 'El password no puede estar vacío.' }

    if (email.length < 6 && email.length > 0) newErrors.email = { estado: true, message: 'El correo no es válido.' }
    if (password.length < 6 && password.length > 0) newErrors.password = { estado: true, message: 'El password debe tener al menos 6 caracteres.' }

    setErrors(newErrors)

    if (!newErrors.email.estado && !newErrors.password.estado) {
      console.log("Formulario válido")
    }
  }

  return (
    <>
      <div className="container-md d-flex my-5 p-5 justify-content-center">
        <form className="card p-3 shadow opacity-50" onSubmit = {handleSubmit}>
          <TextInput
            label="Email"
            type="email"
            name="email"
            id="email"
            placeholder="Escriba su correo"
            value={email}
            onChange={e => setEmail(e.target.value)}
            error={errors.email}
          />
          <TextInput
            label="Contraseña"
            type="password"
            name="password"
            id="password"
            placeholder="Escriba su contraseña"
            value={password}
            onChange={e => setPassword(e.target.value)}
            error={errors.password}
          />
          <button type="submit" className="btn btn-primary">ENTRAR</button>
        </form>
      </div>
    </>
  )
}

export default LoginForm