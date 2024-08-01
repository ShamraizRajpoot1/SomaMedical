import { useState } from "react"
import { navigate } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"

export function useHooks(props) {
    const [isVisible, setVisible] = useState(false)
    const handleProducts = () => {
        navigate(routes.products)
    }
    const toggle = () =>{
        setVisible(!isVisible)
    }
    return {toggle,isVisible,handleProducts}
}