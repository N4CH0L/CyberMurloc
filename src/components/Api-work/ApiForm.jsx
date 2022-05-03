import React from 'react'
import { Container } from 'reactstrap';

const CATEGORIA = [
    {value: 'general', label: 'general'},
    {value: 'business', label: 'negocios'},
    {value: 'entertainment', label: 'entretenimiento'},
    {value: 'healt', label: 'salud'},
]


const ApiForm = () =>{

    
    return(
        
            <Container>
        <div>
            <select
            label='categoria'
            >
            {CATEGORIA.map(categoria => (
                <option
                    key={categoria.value}
                    value={categoria.value}
                >{categoria.label}</option>
                ))}
            </select>
        </div>        
        </Container>

       
    )
}

export default ApiForm