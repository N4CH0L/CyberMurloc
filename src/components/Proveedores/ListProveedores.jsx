import {React, Fragment} from 'react'
import Proveedor from './Proveedor';
import {

    
    Table,

    
  } from "reactstrap";
import styledComponents from 'styled-components';

const H2 = styledComponents.h2`
  
  background-color: #b1aeae19;
  border-radius: 7px;
  margin-bottom: 2rem;
  color: #000000;
  font-size: 1.5em;
`

const ListProveedores= ({proveedores, setEdProveedor, EliminarPaciente}) =>{
    return(
        <Fragment >


            <div className='md:w-1/2 lg:w-3/5'>
            
            <H2 className='ml-3 text-black'>PROVEEDORES</H2>
            <Table >
            <thead className="thead-light">
                    <tr
                    
                    >
                       
                        <th
                        scope="col ml.3">Nombre</th>
                        <th scope="col">Direccion</th>
                        <th scope="col">Telefono</th>
                        <th scope="col">Marca</th>
                        <th scope="col" />
                    </tr>
                    </thead>
                    </Table>
            
            {proveedores.map( ( edProveedor)=>{
                    return(
                        <div >
                        <Proveedor
                            id={edProveedor.id}
                            edProveedor={edProveedor}
                            setEdProveedor={setEdProveedor}
                            EliminarPaciente={EliminarPaciente}
                            
                        
                        />
                        </div>
                    )
                })}

                </div>
             </Fragment>
        
        

    )
}



export default ListProveedores;