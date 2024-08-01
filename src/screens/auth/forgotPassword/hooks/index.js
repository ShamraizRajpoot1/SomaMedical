import { useState } from "react"
import { routes } from "../../../../services"
import { navigate } from "../../../../navigation/rootNavigation"

export function useHooks(props) {
    const [email,setEmail] = useState('')
    const [isVisible, setVisible] = useState(false)
    const handleLogin = () => {
        navigate(routes.signin)
    }
    const toggle = () =>{
        setVisible(!isVisible)
    }


    return {email,setEmail, toggle, isVisible,handleLogin}
}