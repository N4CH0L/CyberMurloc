import {React, useState, useEffect} from 'react'

import {
    Button,
    Card,
    Form,
    Input,
    Row,
    Alert,
    
    
  } from "reactstrap";




const FormTipoMaquina=({maquina, setMaquina, setEdMaquina, edMaquina}) =>{
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
        if(Object.keys(edMaquina).length>0){

            setNombre(edMaquina.nombre)
            setDescripcion(edMaquina.descripcion)
           
        }
    }, [edMaquina])








    //Al presionar guardar ocurre esto:
    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre,descripcion].includes('')) {
            console.log('Todos los campos son obligatorios');
            setError(true);
            return;
            
        }else{
            setError(false)
           
            const datosMaquina = {
                nombre,
                descripcion,
                
            }
            if(edMaquina.id) {
                //EDITANDO

                console.log('tiene id editando')
                datosMaquina.id = edMaquina.id
                const maquinaActualizados = maquina.map(setEdMaquina => setEdMaquina.id ===
                edMaquina.id ? datosMaquina: setEdMaquina )

                setMaquina(maquinaActualizados)
            }else{

                //HACIENDO NUEVO FORMULARIO
                console.log("no tiene id creando")
                datosMaquina.id = IdGen();
                setMaquina([...maquina ,datosMaquina])
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
            <h1 className="display-4 mt-4">Nombre de Tipo de Maquina:</h1>
                    <Input
                        id='proveedor'
                        type='text'
                        placeholder='Insertar Nombre de tipo de maquina'
                        value={nombre}
                        onChange = {(e) => setNombre(e.target.value)}

                    />
            </div>
            <div>
                <Row  className='ml-3'>Descripcion:</Row>
                    <Input
                        type='text'
                        id='descripcion'
                        placeholder='Insertar Una breve descripcion de su persona'
                        value={descripcion}
                        onChange = {(e) => setDescripcion(e.target.value)}
                    />
            </div>
            
            <div>
            <Button
                className='bg-indigo-600 mt-3'
                value={ edMaquina.id ? "Editar Paciente" : "Agregar Paciente"}
                type='submit'
                
            >Guardar</Button>
            </div>
            </Card>
       </Form> 
       
    )
}

export default FormTipoMaquina;