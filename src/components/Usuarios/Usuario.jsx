import React from 'react'
import styled from 'styled-components';
import {
    Button,
    Row,
    Table,

  } from "reactstrap";

 const BtPass = styled.button`
    color: #000000;
    background-color: #4bfa62;
    border: 0ch;
    border-radius: 1ch;
 `
const BtNoPass = styled.button`
color: #000000;
background-color: #fa3a3a;
border: 0ch;
border-radius: 1ch;`




const Usuario = ({edUsuarios, setEdUsuarios, EliminarPaciente }) => {
    

    return(
        <div>
        <div>
        
            <Row>
               
            <Table >
                <thead className="thead-bold">
                    <tr
                    
                    >
                       
                        <th scope="col">Nombre de Usuario</th>
                        <th scope="col">Email</th>
                        <th scope="col">Estado</th>
                  
                        
                    </tr>
                </thead>
            <tbody className="thead-light">
                    <tr
                    
                    >
                       
                       <th scope="col">{edUsuarios.user}</th>
                        <th scope="col"> {edUsuarios.email}</th>
                        {edUsuarios.estado && (<BtPass  color="success"className='text-color-black' >Habilitado</BtPass>)}
                        {edUsuarios.estado || (<BtNoPass className='text-color-black' color="danger">Inhabilitado</BtNoPass>)}
                  
                        
                    </tr>
                    </tbody>
                    </Table>
                <Button
                    className='ml-4'
                    onClick={()=>setEdUsuarios(edUsuarios)}s
                >Editar</Button>
                <Button
                className='ml-4'
                onClick={()=>EliminarPaciente(edUsuarios.id)}
                
                >Borrar</Button>
            </Row>
        </div>
        </div>
    )
}

export default Usuario;