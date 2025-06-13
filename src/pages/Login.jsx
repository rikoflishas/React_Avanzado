import { useUser } from "./UserContext";
import { Button, Typography } from '@mui/material';

export default function Login(){
    const { user, login } = useUser();

    if(user) return <Typography>Ya has iniciado sesión como {user.name}</Typography>

    return <button onClick = { login }>Iniciar sesión</button>
}