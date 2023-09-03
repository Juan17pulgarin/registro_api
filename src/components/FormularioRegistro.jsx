import React, { useState } from "react";
import formularioRegistro from './FormularioRegistro.css'
import { useNavigate } from "react-router-dom"
import fondo  from '../assets/video/fondo.mp4'
import axios from 'axios'
import Swal from "sweetalert2";

const FormularioRegistro= () =>{
    const [nombre, setNombres] = useState("");
    const [apellido, setApellidos] = useState("");
    const [email, setEmail] = useState("");
    const [usuario, setUsuario] = useState("");
    const [password, setPasword] = useState("");
    const navigate = useNavigate();
  
    const registro = async (e)=>{
        e.preventDefault()
        console.log("nombres:", nombre)
        console.log("apellidos:", apellido)
        console.log("email:", email)
        console.log("usuario:", usuario)
        console.log("Password:", password)
    
        const data = {
          nombre: nombre,
          apellido: apellido,
          email: email,
          usuario: usuario,
          password: password
        }
    
        //Consumo de Servicio Login
        await axios.post("http://89.116.25.43:3500/api/usuarios/registrar", data)
        .then((resp)=>{
          console.log(resp);
          localStorage.setItem("token", resp.data.jwt)
          localStorage.setItem("email", resp.data.email)
          localStorage.setItem("usuario", resp.data.usuario)
          navigate("/dashboard")

          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
          })

        })
        .catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error
              })
        })
    
      }

    return (
    <>
    <div className="video">
      <video autoPlay muted loop id="fondo">
        <source src={fondo} type="video/mp4" />
      </video>
    </div>
    <div className="contenedor">
        <form>
            <h2>Registro</h2>
            <label>Nombres</label>
            <input type="text" placeholder="Ingrese su nombre completo" 
            onChange={(e)=>{setNombres(e.target.value)}} 
            />
            <label>Apellidos</label>
            <input type="text" placeholder="Ingrese su apellido completo"
            onChange={(e)=>{setApellidos(e.target.value)}} 
            />
            <label>Email</label>
            <input type="text" placeholder="Ingrese su correo"
            onChange={(e)=>{setEmail(e.target.value)}} 
            />
            <label>Usuario</label>
            <input type="text" placeholder="Ingrese un usuario"
             onChange={(e)=>{setUsuario(e.target.value)}} 
            />
            <label>Contraseña</label>
            <input  type="password" placeholder="Ingrese una contraseña"
            onChange={(e)=>{setPasword(e.target.value)}} 
            />
            <button onClick={registro} >Registrarse</button>
        </form>
    </div>
    </>
  )
}

export default FormularioRegistro
