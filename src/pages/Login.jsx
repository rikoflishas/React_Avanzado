import { useUser } from "./UserContext";
import { useState } from 'react';
import { Button, Typography, TextField, Box, Paper, Alert } from '@mui/material';

export default function Login(){
    const { user, login } = useUser();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState('false');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        //Basic Validation
        if( !username.trim() || !password.trim() ){
            setError('Completa todos los campos');
            setIsLoading(false);
            return;
        }

        try {
            // Simulate API call delay
            await new Promise( resolve => setTimeout(resolve, 1000) );

            // una validación simple, puedes cambiar con los valores de autenticación
            if(username === 'admin' && password === 'password'){
                login(username);
                setUsername('Benjamin');
                setPassword('123');
            } else {
                setError('Usuario o contraseña incorrectos');
            }
        } catch(err){
            setError('Errol al iniciar sesión');
        } finally{
            setIsLoading(false);
        }
    };


    if(user) {
        return (
            <Paper elevation={3} sx={ { p:3, maxWidth:400, mx: 'auto', mt:4 } }>
                <Typography variant="h5" align="center" gutterBottom>
                    ¡Bienvenido! Welcome! Benvenuto Willkommen Bienvenue Yōkoso Dobro pozhalovat' Huānyíng Witaj Hoş geldin Selamat datang
                </Typography>
                <Typography align="center">
                    Ya has iniciado sesión como {user.name}
                </Typography>
            </Paper>
        );
    }

    // return (
    //     <button onClick = { login }>Iniciar sesión O_O</button>
    // );

    return(
        <Paper elevation={3} sx={ { p:3, maxWidth:400, mx: 'auto', mt:4 } }>
            <Typography variant="h4" align="center" gutterBottom>
                Iniciar Sesión
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ mt:2 }}>
                <TextField
                    fullWidth
                    label="Usuario"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    margin="normal"
                    required
                    //disabled={isLoading}
                />
                
                <TextField
                    fullWidth
                    label="Contraseña"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    margin="normal"
                    required
                    //disabled={isLoading}
                />

                {error && (
                    <Alert severity="error" sx={{ mt:2 }}>
                        {error}
                    </Alert>
                )}

                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    //disabled={isLoading}
                >
                    {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
                </Button>

                <Typography variant="body2" color="text.secondary" align="center">
                    Usuario de prueba: admin / password
                </Typography>
            </Box>
        </Paper>
    );
};