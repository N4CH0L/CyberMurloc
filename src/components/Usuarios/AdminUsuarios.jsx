import {React, useState, useEffect} from 'react'
import FormUsuarios from './FormUsuario';
import ListUsuarios from './ListUsuarios';
import UserHeaderTP from 'components/Headers/HeaderTipoMaquina';


import {
    Button,
    
    
  } from "reactstrap";







const AdminUsuarios =() =>{
   
  const[usuarios, setUsuarios]=useState([]);
  const[edUsuarios,setEdUsuarios] = useState({})

  //Llamando al LS
  useEffect( () => {
    const obetenerLS = () => {
    const usuariosLS = JSON.parse(localStorage.getItem('usuarios')) ?? [];
    setUsuarios(usuariosLS)
  }
  obetenerLS();
  },[]);


  //local
  useEffect(()=>{
    localStorage.setItem('usuarios', JSON.stringify(usuarios))
  }, [usuarios])


  //Eliminar
  const EliminarPaciente = (id) => {
    const usuariosActualizados = usuarios.filter( edUsuarios => edUsuarios.id !== id);
    
    setUsuarios(usuariosActualizados)
  }



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
    
  
 



  return (
    <div>

      <UserHeaderTP/>
      
      <div>
        
        <Button
        className='mt-3'
        type='submit'
        color="success"
        onClick={handleNuevaMaquina}
        
        >Agregar Usuario</Button>
        {modal && 

      
        <FormUsuarios
        usuarios={usuarios}
        setUsuarios={setUsuarios}
        edUsuarios={edUsuarios}
        setEdUsuarios={setEdUsuarios}

        />
      }
     


      <ListUsuarios
      
        usuarios={usuarios}
        edUsuarios={edUsuarios}
        setEdUsuarios={setEdUsuarios}
        EliminarPaciente={EliminarPaciente}
       
      />

      

      

      </div>
    </div>
  )
}



export default AdminUsuarios;