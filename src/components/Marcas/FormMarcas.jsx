import {React, useState, useEffect} from 'react'

import {
    Button,
    Card,
    Form,
    Input,
    Row,
    Alert,
    
  } from "reactstrap";




const FormMarca=({marcas, setMarcas, setEdMarcas, edMarcas}) =>{
    const[nombre, setNombre] = useState('')
    const[descripcion, setDescripcion] = useState('')
 

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
        if(Object.keys(edMarcas).length>0){

            setNombre(edMarcas.nombre)
            setDescripcion(edMarcas.telefono)
           
        }
    }, [edMarcas])








    //Al presionar guardar ocurre esto:
    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre,descripcion,].includes('')) {
            console.log('Todos los campos son obligatorios');
            setError(true);
            return;
            
        }else{
            setError(false)
           
            const datosMarca = {
                nombre,
                descripcion,
                
            }
            if(edMarcas.id) {
                //EDITANDO

                console.log('tiene id editando')
                datosMarca.id = edMarcas.id
                const marcasActualizadas = marcas.map(setEdMarcas => setEdMarcas.id ===
                    edMarcas.id ? datosMarca: setEdMarcas )

                setMarcas(marcasActualizadas)
            }else{

                //HACIENDO NUEVO FORMULARIO
                console.log("no tiene id creando")
                datosMarca.id = IdGen();
                setMarcas([...marcas ,datosMarca])
            }   
            
                setNombre("")
                setDescripcion("")
                
        }                 
    }


    

    return(
        
       <Form

       onSubmit = {handleSubmit}
       >
           <Card>
           {error && (<Alert color='danger'>Es obligatorio llenar todos los campos</Alert>) }
            <div>
                <Row className="-block ml-3">Nombre de Marca:</Row>
                    <Input
                        id='marca'
                        type='text'
                        placeholder='Insertar Nombre de Marca'
                        value={nombre}
                        onChange = {(e) => setNombre(e.target.value)}

                    />
            </div>
            <div>
                <Row  className='ml-3'>Descripcion:</Row>
                    <textarea
                        type='text-area'
                        id='telefono'
                        placeholder='Insertar descripcion'
                        value={descripcion}
                        onChange = {(e) => setDescripcion(e.target.value)}
                    />
            </div>

            <div>
            <Button
                className='bg-indigo-600 '
                value={ edMarcas.id ? "Editar Paciente" : "Agregar Paciente"}
                type='submit'
                
            >Guardar</Button>
            </div>
            </Card>
       </Form> 
       
    )
}

export default FormMarca;