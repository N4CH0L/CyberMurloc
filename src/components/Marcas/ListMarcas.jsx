import {React, Fragment} from 'react'
import Marcas from './Marcas';
import {

    
    Table,

    
  } from "reactstrap";
import styledComponents from 'styled-components';

const H2 = styledComponents.h2`
  background-color: #b1aeae19;
  border-radius: 7px;
  margin-top: 2rem;
  color: #000000;
  font-size: 1.5em;
`

const ListMarcas= ({marcas, setEdMarcas, EliminarPaciente}) =>{
    return(
        <Fragment >



            
            <H2 className='ml-3 font-weigth-bold'>MARCAS</H2>
            <Table >
            <thead className="thead-light">
                    <tr
                    
                    >
                       
                        <th
                        scope="col ml.3">Nombre</th>
                        <th scope="col">descripcion</th>
                      
                    </tr>
                    </thead>
                    </Table>
            
            {marcas.map( ( edMarcas)=>{
                    return(
                        <div >
                        <Marcas
                            id={edMarcas.id}
                            edMarcas={edMarcas}
                            setEdMarcas={setEdMarcas}
                            EliminarPaciente={EliminarPaciente}
                            
                        
                        />
                        </div>
                    )
                })}
             </Fragment>
        
        

    )
}



export default ListMarcas;