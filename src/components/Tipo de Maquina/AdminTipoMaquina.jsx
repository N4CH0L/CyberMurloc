import {React, useState, useEffect} from 'react'
import FormTipoMaquina from './FormTipoMaquina';
import ListTipoMaquina from './ListTipoMaquina';

import Header from 'components/Headers/Header';

import {
    Button,
    
    
  } from "reactstrap";







const AdminMaquina =() =>{
   
  const[maquina, setMaquina]=useState([]);
  const[edMaquina,setEdMaquina] = useState({})

  //Llamando al LS
  useEffect( () => {
    const obetenerLS = () => {
    const maquinaLS = JSON.parse(localStorage.getItem('maquina')) ?? [];
    setMaquina(maquinaLS)
  }
  obetenerLS();
  },[]);


  //local
  useEffect(()=>{
    localStorage.setItem('maquina', JSON.stringify(maquina))
  }, [maquina])


  //Eliminar
  const EliminarPaciente = (id) => {
    const maquinaActualizados = maquina.filter( edMaquina => edMaquina.id !== id);
    console.log(maquinaActualizados)
    setMaquina(maquinaActualizados)
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


      <Header/>
      <div>
        
        <Button
        className='mt-3'
        type='submit'
        color="success"
        onClick={handleNuevaMaquina}
        
        >Nuevo Tipo de Maquina</Button>
        {modal && 

      
        <FormTipoMaquina
        maquina={maquina}
        setMaquina={setMaquina}
        edMaquina={edMaquina}
        setEdMaquina={setEdMaquina}

        />
      }
     


      <ListTipoMaquina
      
        maquina={maquina}
        edMaquina={edMaquina}
        setEdMaquina={setEdMaquina}
        EliminarPaciente={EliminarPaciente}
       
      />

      

      

      </div>
    </div>
  )
}



export default AdminMaquina;