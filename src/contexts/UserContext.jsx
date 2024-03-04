import { createContext, useContext, useEffect, useState } from "react"
import axios from "axios"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [isUserChecked, setIsUserChecked] = useState(false)

    const logout = async () => {
        const response = await axios.get(`${process.env.REACT_APP_PATH}/logout`, { withCredentials: true })
        setUser(null)
        setIsUserChecked(false)
    }

    return (
        <UserContext.Provider value={{ user, setUser, logout, isUserChecked, setIsUserChecked }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}