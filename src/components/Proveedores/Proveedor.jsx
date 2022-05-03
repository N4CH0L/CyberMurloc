import React from 'react'

import {
    Button,
    Row,
    Table,
  } from "reactstrap";

 





const Proveedor = ({edProveedor, setEdProveedor, EliminarPaciente }) => {
    

    return(
        <div>
        <div>
        
            <Row>
               
            <Table
            className='ml-3'
            >

               
                    <tbody>
                  <tr> 
                        <th scope="col">{edProveedor.nombre}</th>
                        <th scope="col"> {edProveedor.direccion}</th>
                        <th scope="col">{edProveedor.telefono}</th>
                        <th scope="col">{edProveedor.eleccion}</th>
                  </tr>
                </tbody>
             
                
                
                </Table>
                <Button
                    className='ml-4'
                    onClick={()=>setEdProveedor(edProveedor)}s
                >Editar</Button>
                <Button
                className='ml-4'
                onClick={()=>EliminarPaciente(edProveedor.id)}
                
                >Borrar</Button>
            </Row>
        </div>
        </div>
    )
}

export default Proveedor;