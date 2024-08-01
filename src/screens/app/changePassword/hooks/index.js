import { useState } from "react"
import { navigate } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"

export function useHooks(props) {
    const [isVisible, setIsVisible] = useState(false)
    const toggle = () =>{
        setIsVisible(!isVisible)
    }
    const handleContinue = () =>{
        navigate(routes.account)
    }
    return {handleContinue, toggle, isVisible}
}