import {React, Fragment} from 'react'
import Usuario from './Usuario';
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

const ListProveedores= ({usuarios, setEdUsuarios, EliminarPaciente}) =>{
    return(
        <Fragment >


            <div className='md:w-1/2 lg:w-3/5'>
            
            <H2 className='ml-3 text-black'>Usuarios</H2>
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
            
            {usuarios.map( ( edUsuarios)=>{
                    return(
                        <div >
                        <Usuario
                            id={edUsuarios.id}
                            edUsuarios={edUsuarios}
                            setEdUsuarios={setEdUsuarios}
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