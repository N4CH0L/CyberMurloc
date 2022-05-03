import {React, useState} from 'react'   

import {
    Button,
    
    
  } from "reactstrap";

const Roles=({rol, setRol}) =>{

  //error
  const [error, setError] = useState(false)
  const [error2, setError2] = useState(false)
  const [error3, setError3] = useState(false)
  const [error4, setError4] = useState(false)
  const [error5, setError5] = useState(false)



     //Aparicion de formulario
   const [modal, setModal] = useState(false)
   //on click
const handleNuevaMaquina = () =>{
    if(modal === false){
      setModal(true)
    }else{
      setModal(false)
    }
    }
    console.log(rol)

    //Handle changes para roles   perdon no se me ocurrio otra forma -_-

    const HandleChange1 = () =>{
      if(error === false){
        setError(true)
        
        setRol(rol + 'Administrador ')
        
      }else{
        setError(false)
        setRol(rol - 'Administrador ')
        }
    }

    const HandleChange2 = () =>{
      if(error2 === false){
        setError2(true)
      
        setRol(rol + 'Usuario ')
 
      }else{
        setError2(false)
        setRol(rol - 'Usuario ')
       }
    }

    const HandleChange3 = () =>{
      if(error3 === false){
        setError3(true)
        
        setRol(rol + 'Moderador ')
        
      }else{
        setError3(false)
        setRol(rol - 'Moderador ')
        }
    }

    const HandleChange4 = () =>{
      if(error4 === false){
        setError4(true)
        console.log('verdadero')
        setRol(rol + 'Encargado ')
        console.log(setRol)
      }else{
        setError4(false)
        setRol(rol - 'Encargado ')
        console.log('falso')}
    }

    const HandleChange5 = () =>{
      if(error5 === false){
        setError5(true)
        console.log('verdadero')
        setRol(rol + 'Operario ')
        console.log(setRol)
      }else{
        setError5(false)
        setRol(rol - 'Operario ')
        console.log('falso')}
    }


    return(
      <div>

 

        <Button
        className='mt-3 block'
        type='button'
        color="success"
        onClick={handleNuevaMaquina}>
            MOSTRAR ROLES
        </Button>
        {modal && 


        <label className="toggle" >
          
      <input type="checkbox" name="Administrador" id="Administrador" value='Administrador'  onClick={HandleChange1} /> <label htmlFor="Moderador">Administrador</label>
      <br />
     
      
      <input type="checkbox" name="Usuario" id="Usuario" value='Usuario'  onClick={HandleChange2} /> <label htmlFor="Usuario">Usuario</label>
      <br />
     
     
      <input type="checkbox" name="Moderador" id="Moderador" value='Moderador' onClick={HandleChange3}/> <label htmlFor="Moderador">Moderador</label>
      <br />
    

      <input type="checkbox" name="Encargado" id="Encargado" value='5' onClick={HandleChange4}/> <label htmlFor="Encargado">Encargado</label>
      <br />
 

      <input type="checkbox" name="Operario" id="Operario" value='6' onClick={HandleChange5}/> <label htmlFor="Operario">Operario</label>
      <br />
        </label>
        
        
        }
        
        </div>

    )
}

export default Roles;