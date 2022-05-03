import {React, useState, useEffect} from 'react'
import FormProveedor from '../Proveedores/FormProveedor';
import ListProveedores from '../Proveedores/ListProveedores';

import Header from 'components/Headers/Header';

import {

    
  Button,

  
} from "reactstrap";








const AdminProveedores =() =>{
   
  const[proveedores, setProveedores]=useState([]);
  const[edProveedor,setEdProveedor] = useState({})

  //Llamando al LS
  useEffect( () => {
    const obetenerLS = () => {
    const proveedoresLS = JSON.parse(localStorage.getItem('proveedores')) ?? [];
    setProveedores(proveedoresLS)
  }
  obetenerLS();
  },[]);


  //local
  useEffect(()=>{
    localStorage.setItem('proveedores', JSON.stringify(proveedores))
  }, [proveedores])


  //Eliminar proveedor
  const EliminarPaciente = (id) => {
    const proveedoresActualizados = proveedores.filter( edProveedor => edProveedor.id !== id);
    console.log(proveedoresActualizados)
    setProveedores(proveedoresActualizados)
  }



  //Aparicion de formulario
  const [modal, setModal] = useState(false)

  //on click
  const handleNuevoProveedor = () =>{
    if(modal === false){
      setModal(true)
    }else{
      setModal(false)
    }
      
     
    }
    
  
 



  return (
    <div >
    <div  >

      <Header/>
      
        

        <Button
        className='mt-3 mb-4' 
        color='success'
        type='submit'
        onClick={handleNuevoProveedor}
        
        >Nuevo Proveedor</Button>
        {modal && 

      
        <div > <FormProveedor
        proveedores={proveedores}
        setProveedores={setProveedores}
        edProveedor={edProveedor}
        setEdProveedor={setEdProveedor}

        /></div>
        }
     

      <row>
     
        <div className='align-bottom'> <ListProveedores
        
          proveedores={proveedores}
          edProveedor={edProveedor}
          setEdProveedor={setEdProveedor}
          EliminarPaciente={EliminarPaciente}
        
        /> </div>

      

    
    </row>
  </div>
</div>
  )
}



export default AdminProveedores;