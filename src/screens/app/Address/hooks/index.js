import { useState } from "react"
import { navigate } from "../../../../navigation/rootNavigation"
import { routes } from "../../../../services"
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
export function useHooks(props) {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [city, setCity] = useState('')
    const [location, setLocation] = useState('')
    const [zip, setZip] = useState('')
   
    const checkout = async () => {
        const user = auth().currentUser;
        try {
          // Reference to the Address document with the userId
          const addressDocRef = firestore().collection('Address').doc(user.uid);
      
          // Data to upload
          const data = {
            firstName,
            lastName,
            email,
            phoneNumber,
            city,
            location,
            zip,
          };
      
          // Upload data to Firestore as an array
          const doc = await addressDocRef.get();

          if (doc.exists) {
            // Get the existing data array
            const currentData = doc.data().data || [];
        
            // Append the new data to the existing array
            const updatedData = [...currentData, data];
        
            // Update the document with the new array
            await addressDocRef.update({ data: updatedData });
          } else {
            // If the document doesn't exist, create it with the new data array
            await addressDocRef.set({ data: [data] });
          }
      
          console.log("Data uploaded successfully!");
          navigate(routes.checkout)
        } catch (error) {
          console.error("Error uploading data: ", error);
        }
      };
      
    return { checkout, firstName,setFirstName,lastName, setLastName,email, setEmail,phoneNumber, setPhoneNumber,city,setCity,location,setLocation,zip,setZip}
}