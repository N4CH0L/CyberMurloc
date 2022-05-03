import {React, useState, useEffect} from 'react'

import {
    Button,
    Card,
    Form,
    Input,
    Row,
    Alert,
    
  } from "reactstrap";




const FormProveedor=({proveedores, setProveedores, setEdProvedor, edProveedor}) =>{
    const[nombre, setNombre] = useState('')
    const[telefono, setTelefono] = useState('')
    const[direccion, setDireccion] = useState('')
    const[eleccion, setEleccion] = useState('')

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
        if(Object.keys(edProveedor).length>0){

            setNombre(edProveedor.nombre)
            setTelefono(edProveedor.telefono)
            setDireccion(edProveedor.direccion)
            setEleccion(edProveedor.eleccion)
        }
    }, [edProveedor])








    //Al presionar guardar ocurre esto:
    const handleSubmit = (e) => {
        e.preventDefault();
        if([nombre,telefono,direccion,eleccion].includes('')) {
            console.log('Todos los campos son obligatorios');
            setError(true);
            return;
            
        }else{
            setError(false)
           
            const datosProveedor = {
                nombre,
                telefono,
                direccion,
                eleccion,
                
            }
            if(edProveedor.id) {
                //EDITANDO

                console.log('tiene id editando')
                datosProveedor.id = edProveedor.id
                const proveedoresActualizados = proveedores.map(setEdProvedor => setEdProvedor.id ===
                edProveedor.id ? datosProveedor: setEdProvedor )

                setProveedores(proveedoresActualizados)
            }else{

                //HACIENDO NUEVO FORMULARIO
                console.log("no tiene id creando")
                datosProveedor.id = IdGen();
                setProveedores([...proveedores ,datosProveedor])
            }   
            
                setNombre("")
                setTelefono("")
                setDireccion("")
                setEleccion("")
        }                 
    }


    

    return(
        
       <Form 

       onSubmit = {handleSubmit}
       >
           <div className=''>
           <Card>
           {error && (<Alert color='danger'>Es obligatorio llenar todos los campos</Alert>) }
            <div>
                <Row className=" ml-3">Nombre de Proveedor:</Row>
                    <Input
                        id='proveedor'
                        type='text'
                        placeholder='Insertar Nombre de proveedor'
                        value={nombre}
                        onChange = {(e) => setNombre(e.target.value)}

                    />
            </div>
            <div>
                <Row  className='ml-3'>Nro de Telefono:</Row>
                    <Input
                        type='text'
                        id='telefono'
                        placeholder='Insertar Nro de Telefono'
                        value={telefono}
                        onChange = {(e) => setTelefono(e.target.value)}
                    />
            </div>
            <div>
                <Row className='ml-3'>Direccion:</Row>
                    <Input
                        type='text'
                        id='direccion'
                        placeholder='Insertar Direccion del Proveedor'
                        value={direccion}
                        onChange = {(e) => setDireccion(e.target.value)}
                    />
            </div>
            <div>
                <Row className='ml-3'>Marcas Trabajadas:</Row>
                    <select 
                    id='eleccion'
                    type='text'
                    value={eleccion}
                    onChange = {(e) => setEleccion(e.target.value)}
                    >
                    <option value="0"></option>
                    <option value="grido" id='grido'>grido</option>
                    <option value="lomito 2x1" id='lomito 2x 1'>lomito 2x 1</option>
                    
                    </select>
            </div>
            <div>
            <Button
                className='bg-indigo-600 '
                value={ edProveedor.id ? "Editar Paciente" : "Agregar Paciente"}
                type='submit'
                
            >Guardar</Button>
            </div>
            </Card>

            </div>
       </Form> 
       
    )
}

export default FormProveedor;