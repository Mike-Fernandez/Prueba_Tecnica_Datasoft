import { Box, Button, Grid, Container, Paper, Stack} from '@mui/material';
import React, {useCallback, useEffect, useRef, useState} from 'react';

const commonStyles = {
    bgcolor: 'backgroud.paper',
    borderColor: '#64b5f6',
    borderRadius:'16px',
    width: '5rem',
    hieght: '5rem'
}

export default function FilteringCats(){
    const [cats, setCats] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(null);

    useEffect(()=>{
        fetch("http://localhost:8080/categorias")
        .then(res=>res.json())
        .then((result)=>{
            setCats(result);
        })
     },[])

    function getFilteredProducts(filter){
        console.log(`Filter from getFiltered Products ${filter}`);
        if(filter == null){
            fetch("http://localhost:8080/productos")
           .then(res=>res.json())
           .then((result)=>{
               setFilteredProducts(result);
            })
        } else if (filter == 1000){
            fetch("http://localhost:8080/productos")
           .then(res=>res.json())
           .then((result)=>{
               setFilteredProducts(result);
            })
        } else {
            fetch(`http://localhost:8080/productos/cat/${filter}`)
            .then(res=>res.json())
            .then((result)=>{
                setFilteredProducts(result);
            })
        }
    }

    // function getAllProducts(){
    //     fetch("http://localhost:8080/productos")
    //        .then(res=>res.json())
    //        .then((result)=>{
    //            setFilteredProducts(result);
    //         })
    // }

    useEffect(()=>{
        setFilteredProducts(getFilteredProducts());
    }, []);

    function handleCategorias(e){
        let filtro = e.target.value;
        filtro !== 1000 //"todos"
            ? setFilteredProducts(getFilteredProducts(filtro))
            : setFilteredProducts(getFilteredProducts());
//        setFilteredCats(getFilteredCats(filtro));
    }

    return(
        <Grid container direction="column">
            <Stack direction="row" spacing={2} alignContent="center" alignSelf="center" alignItems="center">
                <Grid container spacing={1} paddingTop={1}>
                    {cats.map(element => {
                        return(
                            <Grid sx={{...commonStyles, border: 1, height:'fit-content', width: 'parent-width/3'}} key={element.cat_id} marginRight={2} marginLeft={2} border={1}>
                            <Button value={element.cat_id} onClick={handleCategorias}> {element.cat_nombre} </Button>
                            </Grid>
                        )
                    })}
                </Grid>
            </Stack>
            <Grid direction="row" container alignContent="center" alignSelf="center" alignItems="center">
                {filteredProducts && filteredProducts.map(element => {
                    return (
                        <Grid m={2} p={5} sx={{...commonStyles, border: 1, height:'fit-content', width: 'parent-width/3'}}>
                            <img spacing={10} height={'80px'} src= {element.prd_imagen}/>
                            <h3>{element.prd_nombre}</h3>
                            <p>${element.prd_precio}</p>
                            <p>{element.prd_descripcion}</p>
                        </Grid>
                    )
                })}
            </Grid>
        </Grid>
    )
}