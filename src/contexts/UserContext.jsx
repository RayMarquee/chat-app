import { createContext, useContext, useEffect, useState } from 'react'
import api from '../configs/api'
import { useNavigate } from 'react-router-dom'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [token, setToken] = useState('')
    const nav = useNavigate();

    const logout = () => {
        localStorage.removeItem('token')
        setToken('')
        setUser(null) //when logout, you cant access chat again, you need to log in
        nav('/login')
    }

    useEffect(() => {
        api.get('/currentUser', { headers: { Authorization: `Bearer ${token}` } })
            .then(res => setUser(res.data.user))
            .catch(() => nav('/login'))
    }, [token])

    return <UserContext.Provider value={{ user, setToken, logout }}>
        {children}
    </UserContext.Provider>
}

export default UserProvider
export const useUser = () => useContext(UserContext)