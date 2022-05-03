import {React, useState, useEffect} from 'react'

import {
    Button,
    Card,
    Form,
    Input,
    Row,
    Alert,
    
  } from "reactstrap";
import Roles from './Roles';




const FormUsuario=({usuarios, setUsuarios, setEdUsuarios, edUsuarios}) =>{
    const[user, setUser] = useState('')
    const[email, setEmail] = useState('')
    const[rol, setRol] = useState('')
    const[estado, setEstado] = useState(false)



    //error
    const [error, setError] = useState(false)

    //Generador de ID de proveedor
    const IdGen =() => {
        const random = Math.random().toString(22).substr(2);
        const date = Date.now().toString(22);

        return random + date
    }



    //Adquirir datos de proveedor
    useEffect(() => {
        if(Object.keys(edUsuarios).length>0){

            setUser(edUsuarios.nombre)
            setEmail(edUsuarios.email)
            setRol(edUsuarios.rol)
        }
    }, [edUsuarios])

    const HandleStado = () =>{
        if(estado === false){
          setEstado(true)
          console.log('algo ando')
        }else{
          setEstado(false)  
          console.log('algo no anda')
      }}






    //Al presionar guardar ocurre esto:
    const handleSubmit = (e) => {
        e.preventDefault();
        if([user, email, estado].includes('')) {
            console.log('Todos los campos son obligatorios');
            setError(true);
            return;
            
        }else{
            setError(false)
           
            const datosUser = {
                user,
                email,
                rol,
                estado,
                
            }
            if(edUsuarios.id) {
                //EDITANDO

                console.log('tiene id editando')
                datosUser.id = edUsuarios.id
                const usuariosActualizados = usuarios.map(setEdUsuarios => setEdUsuarios.id ===
                edUsuarios.id ? datosUser: setEdUsuarios )

                setUsuarios(usuariosActualizados)
            }else{

                //HACIENDO NUEVO FORMULARIO
                console.log("no tiene id creando")
                datosUser.id = IdGen();
                setUsuarios([...usuarios ,datosUser])
            }   

                setUser("")
                setEmail("")
                rol(false)
                setEstado(false)
        }                 
    }
    

    

    return(
        
       <Form 

       onSubmit = {handleSubmit}
       >
           <div className='md:w-1/2 lg:w-2/5'>
           <Card>
           {error && (<Alert color='danger'>Es obligatorio llenar todos los campos</Alert>) }
            <div>
                <Row className="-block ml-3">Nombre de Usuario:</Row>
                    <Input
                        id='user'
                        type='text'
                        placeholder='Insertar Nombre de usuarior'
                        value={user}
                        onChange = {(e) => setUser(e.target.value)}

                    />
            </div>
            <div>
                <Row  className='ml-3'>Email:</Row>
                    <Input
                        type='text'
                        id='email'
                        placeholder='Insertar Email'
                        value={email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
            </div>
            <div>
            <Row  className='ml-3'>Estado:</Row>
                <Button 
                className='bg-indigo-600 mt-3 mb-3'
            
                type='button'
                onClick={HandleStado}
                
            >Estado</Button>
            </div>
            <div>
              <Roles    
              rol={rol} 
              setRol={setRol}
              /> 
            </div>
            <div>
            <Row  className='ml-3'>Roles:</Row>
            <Button 
                color='danger'
                className='bg-indigo-600 '
                value={ setEdUsuarios.id ? "Editar Paciente" : "Agregar Paciente"}
                type='submit'
                
            >Guardar</Button>
            </div>
            </Card>

            </div>
       </Form> 
       
    )
}

export default FormUsuario;