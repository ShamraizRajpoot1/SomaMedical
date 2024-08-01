import { useState } from "react";
import { navigate } from "../../../../navigation/rootNavigation";
import { routes } from "../../../../services";

export function useHooks() {
    const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState(1); 
  const [isVisible, setVisible] = useState(false)
  const handleProducts = () => {
      navigate(routes.products)
  }
  const toggle = () =>{
      setVisible(!isVisible)
  }
  const RequestContact = () =>{
    navigate(routes.requestContact)
  }
  const Items = [
    {id:1, name:'20 ml (30 tablets)'},
    {id:2, name:'40 ml (60 tablets)'},
  ]
  const ingradiantData = [
    {id:1, text:'Lorem ipsum dolor sit amet.'},
    {id:2, text:'Que consequenter soluta sed'},
  ]
  const sizeData = [
    {id:1, text:'20 ml',text2:30},
    {id:2, text:'35 ml',text2:45},
    {id:3, text:'50 ml',text2:75},
    {id:4, text:'100 ml',text2:150},
  ]
  const rating = [
    {id:1, ratings:555},
    {id:2, ratings:422},
    {id:3, ratings:332},
    {id:4, ratings:34},
    {id:5, ratings:133},
  ]
  const calculateRatings = (ratings) => {
    let totalRatings = 0;
    let sumOfRatings = 0;

    ratings.forEach((item,index) => {
        totalRatings += item.ratings;
        sumOfRatings += item.ratings*(ratings.length-index);
    });

    const averageRating = totalRatings === 0 ? 0 : sumOfRatings / totalRatings;

    return {
        totalRatings,
        averageRating,
        sumOfRatings
    };
};

const result = calculateRatings(rating);
console.log(result);
    return {isOpen, setIsOpen, status, setStatus, Items, ingradiantData,RequestContact, sizeData,rating,result, isVisible,toggle, handleProducts}
}