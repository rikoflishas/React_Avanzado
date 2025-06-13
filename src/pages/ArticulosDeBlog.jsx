import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material'; //visual
import './publicacion.css'; //visual

export default function ArticulosDeBlog() {
    const [ articulos, setArticulos ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
        .then(response => {
            if  (!response.ok)  throw new Error("Error en la petición de artículos del Blog");
            return response.json();
        })
        .then( data => setArticulos(data) )
        .catch( err => setError(err.message) )
        .finally( () => setIsLoading(false) )
    }, [])

    if (isLoading) return <p>Cargando artículos del blog...</p>
    if (error) return <p>Error: {error}</p> 

  return (
    <div>
      <h2>Articulos De Blog</h2>
      <Card>
        {articulos.map(articulo => (
          <CardContent>
            <Typography gutterBottom variant='h5' component="div">
              {articulo.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {articulo.body}
            </Typography>
          </CardContent>
        ))}
      </Card>
    </div>
  );
}

// export default ArticulosDeBlog