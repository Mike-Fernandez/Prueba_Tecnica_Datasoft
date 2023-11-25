import { Box, Button, Grid, Container, Paper, Stack} from '@mui/material';
import { grey } from '@mui/material/colors';
//import * as React from 'react';
import React, {useEffect, useState} from 'react';
const commonStyles = {
    bgcolor: 'backgroud.paper',
    borderColor: 'grey.500',
    borderRadius:'16px',
    width: '5rem',
    hieght: '5rem'
}

export default function Productos(){
    const [items, setItem]=useState([]);
//    const [count, setCount] = useState(0);

    useEffect(()=>{
        fetch("http://localhost:8080/productos")
        .then(res=>res.json())
        .then((result)=>{
            setItem(result);
        })
    },[])

    // useEffect(()=>{
    //     document.title = `You clicked ${count} times`;
    // },[])

    return (
        <Box alignContent="center" container>
            <Grid direction="row" container spacing={0} display={'flex'} columns={3} width="parent-width">
                    {/* console.log(item);
                    <Box elevation={6} style={{margin:"10px",padding:"15px",textAlign:"left"}}
                        key={item.id}>
                        <p>Id:{item.prd_id} </p><br/>
                        Nombre:{item.prd_nombre} <br/>
                        Precio:{item.prd_precio} <br/>
                    </Box> */}

                {/* {items.map(item=>{ console.log(item);
                    <Box m={2} p={5} sx={{...commonStyles, border: 1, height:'fit-content', width: 'fit-content'}}>
                        <img spacing={10} height={'80px'} src='https://m.media-amazon.com/images/I/61k4Q-NMC0L._AC_SY500_.jpg'/>
                    </Box>
                })} */}
                {items.map(element => {
                    return (
                        <Grid m={2} p={5} sx={{...commonStyles, border: 1, height:'fit-content', width: 'parent-width/3'}}>
                            <img spacing={10} height={'80px'} src= {element.prd_imagen}/>
                            <h3>{element.prd_nombre}</h3>
                            <p>${element.prd_precio}</p>
                            <p>{element.prd_descripcion}</p>
                            <Button variant="outlined">Ver detalles</Button>
                        </Grid>
                    )
                })}
            </Grid>
        </Box>

//         <div>
//             <button onClick={()=>{
//                 setItem(item);
//                 console.log(item);
// //                setCount(count+1);
// //                console.log(count);
//             }}> 
//             Click me 
//             </button>
//             <p>result</p>
//         </div>

        // <Box m={2} p={5} sx={{...commonStyles, border: 1, height:'fit-content', width: 'fit-content'}}>
        //     <img spacing={10} height={'80px'} src='https://m.media-amazon.com/images/I/61k4Q-NMC0L._AC_SY500_.jpg'/>
        //     <p>This is a test</p>
        // </Box>
    )
}