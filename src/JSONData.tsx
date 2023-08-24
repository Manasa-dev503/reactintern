import React from 'react';
import {useEffect} from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DataTree from './DataTree';
import { useNavigate } from 'react-router-dom';


function JSONData(){
    const [users,setusers] = React.useState([])
    useEffect(()=>{
        if(localStorage.getItem('name')){
            fetch("https:jsonplaceholder.typicode.com/users")
            .then(res=>res.json())
            .then(data=>setusers([...data]))
        }
        else{
            navigation('/Userdata')
        }
        
    },[])
    const department=[
        {
          "department": "customer_service",
          "sub_departments": [
            "support",
            "customer_success"
          ]
        },
        {
          "department": "design",
          "sub_departments": [
            "graphic_design",
            "product_design",
            "web_design"
          ]
        },
        {
            "department": "CSE",
            "sub_departments": [
              "IT",
              "AI-ML",
              "DS"
            ]
          }
        
      ]
    
    return (
       <>
       {
        users.map((user)=>{
            console.log(user)

        })
        
       }
       {
        department.map((a)=>{
            return <DataTree department={a}></DataTree>
            
            
        })
        }
        <DataGrid
            columns={[{ field: 'id' }, { field: 'username' },{field: 'email'},{field: 'phone'}]}
            rows={[...users]}
        />

       </>
        
        
    )
}

export default JSONData