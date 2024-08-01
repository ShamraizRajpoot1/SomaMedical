import { useContext, useState } from "react"
import { navigate } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { AuthContext } from "../../../../navigation/AuthProvider"

export function useHooks() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSecure, setIsSecure] = useState(true)
    const {user, login} = useContext(AuthContext)
    const handleLogin = () => {
        if(email==='' || password==='')
            {
             Alert.alert('Please Check Your Email and Password')
             return
            }
           // setLoading(true);
            login(email, password)
              .then(async(user) => {
                console.log('User:', user);
                if (user) {
                  return AsyncStorage.setItem('Token', user.uid)
                    .then(() => {
                      console.log('Token set successfully');
                      navigate(routes.app);
                      setEmail('')
                      setPassword('')
                    });
                } else {
                  throw new Error('Login failed');
                }
              })
              .catch((error) => {
                console.error('Login error:', error.message);
                Alert.alert('Login Error', error.message);
              })
              .finally(() => {
                console.log('Login process completed');
               // setLoading(false);
              });  
        
    }
    const handleForgot = () => {
        navigate(routes.forgotPassword)
    }
    const handletoggle1 = () =>{
        setIsSecure(!isSecure)
    }
    const handleRegister = () => {
        navigate(routes.createAccount)
    }

    return {handleForgot, handleRegister, handleLogin,handletoggle1,isSecure, password, setPassword, email, setEmail }
}