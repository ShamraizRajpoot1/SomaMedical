import { useContext, useState } from "react"
import { routes, validateEmail } from "../../../../services"
import { navigate } from "../../../../navigation/rootNavigation"
import { AuthContext } from "../../../../navigation/AuthProvider"

import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
export function useHooks() {
    const {register} = useContext(AuthContext)
    const [isChecked, setIsChecked] = useState(false)
    const [isSecure, setIsSecure] = useState(true)
    const [isSecure1, setIsSecure1] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confrimPassword, setConfirmPassword] = useState('')
    const [isValidEmail, setIsValidEmail] = useState(false)
    const handletoggle = () =>{
        setIsChecked(!isChecked)
    }
    const handletoggle1 = () =>{
        setIsSecure(!isSecure)
    }
    const handletoggle2 = () =>{
        setIsSecure1(!isSecure1)
    }
    const handleLogin = () => {
        navigate(routes.signin)
    }
    const handleRegister = async() => {
        const isValid = validateEmail(email);
        setIsValidEmail(isValid);
       
            try {
              if (!isValid) {
                throw new Error('Invalid email address');
              }
          
              if (password!==confrimPassword) {
                throw new Error('Password must have at least 8 characters');
              }
          
             // setIsLoading(true); // Log here
              if (isChecked) {
                const userCredential = await auth().createUserWithEmailAndPassword(
                  email,
                  password
                );
                const userId = userCredential.user.uid;
  
                await firestore().collection('Users').doc(userId).set({
                  userId: userId,
                  email: email,
                });
            
                await AsyncStorage.setItem('Token', userId);
                // setIsLoading(false);
                // showCustomToast();
                console.log('Registration successful');
                navigate(routes.app);
             } else {
               // setIsLoading(false);
                Alert.alert('Please Accept Terms of condition and privacy policy');
              }
            } catch (error) {
              //Toast.show(error.message, Toast.LONG);
              console.log(error.message);
            }
         
    }

    return {handleLogin, handleRegister, isChecked, setIsChecked, handletoggle, handletoggle1, handletoggle2, isSecure, isSecure1, confrimPassword, setConfirmPassword, password, setPassword, email, setEmail }
}