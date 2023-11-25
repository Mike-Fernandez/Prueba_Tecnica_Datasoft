import { Token } from '@mui/icons-material';
import { Box, Button, Grid, Container, Paper, Stack} from '@mui/material';
import React, {useCallback, useEffect, useRef, useState} from 'react';

const commonStyles = {
    bgcolor: 'backgroud.paper',
    borderColor: '#64b5f6',
    borderRadius:'16px',
    width: '5rem',
    hieght: '5rem'
}

export default function Categorias(){
    const [cats, setCats] = useState([]);
//    const [filter, setFilter] = useState([]);
    const [isSending,setIsSending] = useState(false);
    const isMounted = useRef(true);

    useEffect(()=>{
       fetch("http://localhost:8080/categorias")
       .then(res=>res.json())
       .then((result)=>{
           setCats(result);
       })
    },[])

    // useEffect(()=>{
    //     fetch(`http://localhost:8080/cat/${cat_id}`)
    //     .then(res=>res.json())
    //     .then((result)=>{
    //         setCats(result);
    //     })
    //  },[cat_id])

    // useEffect(()=>{
    //     if(cat_id != null){
    //         fetch(`http://localhost:8080/cat/${cat_id}`)
    //         .then(res=>res.json())
    //         .then((result)=>{
    //             setCats(result);
    //         })
    //     }
    //     else{
    //         fetch("http://localhost:8080/categorias")
    //         .then(res=>res.json())
    //         .then((result)=>{
    //            setCats(result);
    //         })
    //     }
    // },[cat_id])

    const sendReq = useCallback(async ()=>{
        console.log("Help I have no idea what is going ON");
        if(isSending) return;
        setIsSending(true);
        await fetch("http://localhost:8080/categorias")
                .then(res=>res.json())
                .then((result)=>{
                   setCats(result);
                })
        if(isMounted.current)
            setIsSending(false)
    },[isSending])

    return(
        <Stack direction="row" spacing={2}>
            <Grid container spacing={1} paddingTop={1}>
                {cats.map(element => {
                    return(
                        <Grid sx={{...commonStyles, border: 1, height:'fit-content', width: 'parent-width/3'}} key={element.cat_id} marginRight={2} marginLeft={2} border={1}>
                        <Button> {element.cat_nombre} </Button>
                        </Grid>
                    )
                })}
            </Grid>
        </Stack>
    )
}