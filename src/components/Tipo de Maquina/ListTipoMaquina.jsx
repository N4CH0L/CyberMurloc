import {React, Fragment} from 'react'
import TipoMaquina from './TipoMaquina';
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

const ListTipoMaquina= ({maquina, setEdMaquina, EliminarPaciente}) =>{
    return(
        <Fragment >



            
            <H2 className='ml-3 text-black mt-5'>TIPO DE MAQUINA</H2>
            <Table >
            <thead className="thead-light">
                    <tr
                    
                    >
                       
                        <th
                        scope="col ml.3">Nombre</th>
                        <th scope="col">Descripcion</th>
                     
                    </tr>
                    </thead>
                    </Table>
            
            {maquina.map( ( edMaquina)=>{
                    return(
                        <div >
                        <TipoMaquina
                            id={edMaquina.id}
                            edMaquina={edMaquina}
                            setEdMaquina={setEdMaquina}
                            EliminarPaciente={EliminarPaciente}
                            
                        
                        />
                        </div>
                    )
                })}
             </Fragment>
        
        

    )
}



export default ListTipoMaquina;