import React, { useEffect, useState } from 'react'

export default function ArticulosDeBlog() {
    const [ publicaciones, setPublicaciones ] = useState([]);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ error, setError ] = useState(null);

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
        .then(response => {
            if  (!response.ok)  throw new Error("Error en la petición de artículos del Blog");
            return response.json();
        })
        .then( data => setPublicaciones(data) )
        .catch( err => setError(err.message) )
        .finally( () => setIsLoading(false) )
    }, [])

    if (isLoading) return <p>Cargando publicaciones...</p>
    if (error) return <p>Error: {error}</p> 

  return (
    <div>ArticulosDeBlog</div>
  )
}

// export default ArticulosDeBlog