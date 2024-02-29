import { createContext, useContext, useState } from "react"
import axios from "axios"

const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [isUserChecked, setIsUserChecked] = useState(true)

    const fetUserData = async () => {
        try {
            setIsUserChecked(true)
            const response = await axios.get(`${process.env.REACT_APP_PATH}/loggedIn`, { withCredentials: true })
            setUser(response.data.User)
        }
        catch (error) {
            setUser(null);
            console.log(error);
        }
        finally {
            setIsUserChecked(false);
        }
    }

    const logout = async () => {
        await axios.get(`${process.env.REACT_APP_PATH}/logout`)
        setUser(null)
        setIsUserChecked(false)
    }

    return (
        <UserContext.Provider value={{ user, setUser, logout, fetUserData, isUserChecked }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    return useContext(UserContext)
}