import { createContext, useContext, useState, useEffect } from "react"
import axios from "axios"

const TripContext = createContext()

export const TripProvider = ({ children }) => {
    const [trips, setTrips] = useState([])
    const [pageNumber, setPageNumber] = useState(1)
    const [pageSize, setPageSize] = useState(null)

    useEffect(() => {
        const fetchTripData = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_PATH}/trip/allTrips`,
                { params: { pageNumber, pageSize } })
                setTrips(response.data.Trips)
    
            }
            catch (error) {
                console.log(error)
            }
        }
        fetchTripData()
    }, [pageNumber, pageSize])

    return (
        <TripContext.Provider value={{ trips, pageNumber, pageSize, setPageNumber, setPageSize }}>
            {children}
        </TripContext.Provider>
    )
}

export const useTripContext = () => {
    return useContext(TripContext)
}