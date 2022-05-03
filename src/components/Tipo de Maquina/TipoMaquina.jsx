import React from 'react'

import {
    Button,
    Row,
    Table,
  } from "reactstrap";

 





const TipoMaquina = ({edMaquina, setEdMaquina, EliminarPaciente }) => {
    

    return(
        <div>
        <div>
        
            <Row>
               
            <Table
            className='ml-3'
            >

               
                    <tbody>
                  <tr> 
                        <th scope="col">{edMaquina.nombre}</th>
                        <th scope="col"> {edMaquina.descripcion}</th>
                        
                  </tr>
                </tbody>
             
                
                
                </Table>
                <Button
                    className='ml-4'
                    onClick={()=>setEdMaquina(edMaquina)}s
                >Editar</Button>
                <Button
                className='ml-4'
                onClick={()=>EliminarPaciente(edMaquina.id)}
                
                >Borrar</Button>
            </Row>
        </div>
        </div>
    )
}

export default TipoMaquina;