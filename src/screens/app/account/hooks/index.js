import { useState } from "react"
import { navigate } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"

export function useHooks() {
    const [toggle, setToggle] = useState(false)
    const handleToggle = () =>{
        setToggle(!toggle)
    }
    const EditProfile = () =>{
        navigate(routes.editProfile)
    }
    const ChangePassword = () =>{
        navigate(routes.changePassword)
    }
    const handleNotification = () =>{
        navigate(routes.notifications)
    }
    return {handleToggle, toggle, EditProfile, ChangePassword, handleNotification}
}