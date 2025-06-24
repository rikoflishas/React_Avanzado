import {createContext, useState, useContext} from 'react';

const UserContext = createContext();//libreria createContext dentro de variable UserContext

export function UserProvider({ children }) {
    const [user, setUser] = useState(null);// a veces children viene vacio

    const login = (username = "Benjamín") => setUser({ name: username });
    const logout = () => setUser(null);

    return(
        <UserContext.Provider value = { {user,login, logout} }>
            { children }
        </UserContext.Provider>
    )
}

export function useUser(){
    return useContext(UserContext);
}

//UserContext le dice al codigo interior que todo es un UserContext