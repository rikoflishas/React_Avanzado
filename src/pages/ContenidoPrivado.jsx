import { Typography } from "@mui/material";
import { useUser } from "./UserContext";

export default function ContenidoPrivado(){
    const { user } = useUser();

    if(!user){
        //si usuario no esta dado de alta
        return <Typography>Debes de iniciar sesión para ver este contenido</Typography>
    }

    return <Typography>Bienvenido a la camara de los secretos</Typography>
}