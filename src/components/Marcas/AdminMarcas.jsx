import {React, useState, useEffect} from 'react'
import FormMarca from './FormMarcas';
import ListMarcas from './ListMarcas';

import Header from 'components/Headers/Header';
import {

    
  Button,

  
} from "reactstrap";





const AdminMarcas =() =>{
   
  const[marcas, setMarcas]=useState([]);
  const[edMarcas,setEdMarcas] = useState({})

  //Llamando al LS
  useEffect( () => {
    const obetenerLS = () => {
    const marcasLS = JSON.parse(localStorage.getItem('marcas')) ?? [];
    setMarcas(marcasLS)
  }
  obetenerLS();
  },[]);


  //local
  useEffect(()=>{
    localStorage.setItem('marcas', JSON.stringify(marcas))
  }, [marcas])


  //Eliminar proveedor
  const EliminarPaciente = (id) => {
    const marcasActualizadas = marcas.filter( edMarcas => edMarcas.id !== id);
    console.log(marcasActualizadas)
    setMarcas(marcasActualizadas)
  }



  //Aparicion de formulario
  const [modal, setModal] = useState(false)

  //on click
  const handleNuevaMarca = () =>{
    if(modal === false){
      setModal(true)
    }else{
      setModal(false)
    }
      
     
    }
    
  
 



  return (
    <div>

      <Header/>
      
      <div>
        
        <Button
        className='mt-3'
        color='success'
        type='submit'
        onClick={handleNuevaMarca}
        
        >Nueva Marca</Button>
        {modal && 

      
        <FormMarca
        marcas={marcas}
        setMarcas={setMarcas}
        edMarcas={edMarcas}
        setEdMarcas={setEdMarcas}

        />
      }
     


      <ListMarcas
      
        marcas={marcas}
        edMarcas={edMarcas}
        setEdMarcas={setEdMarcas}
        EliminarPaciente={EliminarPaciente}
       
      />

      

      

      </div>
    </div>
  )
}



export default AdminMarcas;