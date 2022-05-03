import React from 'react'

import {
    Button,
    Row,
    Table,
  } from "reactstrap";

 





const Marcas = ({edMarcas, setEdMarcas, EliminarPaciente }) => {
    

    return(
        <div>
        <div>
        
            <Row>
               
            <Table
            className='ml-3'
            >

               
                    <tbody>
                  <tr> 
                        <th scope="col">{edMarcas.nombre}</th>
                        <th scope="col"> {edMarcas.descripcion}</th>
                        
                  </tr>
                </tbody>
             
                
                
                </Table>
                <Button
                    className='ml-4'
                    onClick={()=>setEdMarcas(edMarcas)}s
                >Editar</Button>
                <Button
                className='ml-4'
                onClick={()=>EliminarPaciente(edMarcas.id)}
                
                >Borrar</Button>
            </Row>
        </div>
        </div>
    )
}

export default Marcas;