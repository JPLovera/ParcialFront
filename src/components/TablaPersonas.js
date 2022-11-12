import React from 'react'
import DataTable from 'react-data-table-component';
import {useState, useEffect} from 'react';
import axios from 'axios'


const TablaPersonas = () => {


    const [data,setData] = useState([]);

    const columns = [
        {
            name:'Código persona',
            selector:(row) => row.id
        },
        {
            name:'Nombre',
            selector:(row) => row.nombre
        },
        {
            name:'Apellido',
            selector:(row) => row.apellido
        },
        {
            name:'Alias',
            selector:(row) => row.alias
        },
        {
            name:'Email',
            selector:(row) => row.email
        }
    ];

useEffect(()=>{
    axiosTabla(); 
    
  }, []);

  async function axiosTabla() {
    const response= await axios.get('http://localhost:3001/uno')
    const usuarios = await response.data.persona;
    console.log(response.data)
    setData(usuarios);
  }

  return (

    <DataTable

    title='Personas'
    columns={columns}
    data={data}

    
    
    
    />   
  )
}

export default TablaPersonas