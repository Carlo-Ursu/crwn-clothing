import {createContext, useState} from "react";

export const UserContext = createContext({
    currentUser: localStorage.getItem('currentUsername'),
    setCurrentUser: () => null,
})

export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(localStorage.getItem('currentUsername'));
    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}