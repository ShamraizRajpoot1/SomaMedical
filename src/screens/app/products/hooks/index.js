import { useEffect, useState } from "react";
import { appImages, routes } from "../../../../services";
import { navigate } from "../../../../navigation/rootNavigation";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/actions";

export function useHooks() {
    const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
    }
  }, [productStatus, dispatch]);
  
    const onPressProduct = () =>{
        navigate(routes.productDetails)
    }
    // Define categories within the hook, including the "All" category
    const categories = [
        { id: 0, name: 'All' },
        { id: 1, name: 'CARDIOLOGY' },
        { id: 2, name: 'ONCOLOGIE' },
        { id: 3, name: 'VASCULAIRE' },
        { id: 4, name: 'HERNIE' },
        { id: 5, name: 'REANIMATION' },
        { id: 6, name: 'ORL' },
    ];

    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
    };

    
    // Filter products by selected category, show all if "All" is selected
    const filteredProducts = selectedCategory.name === 'All' ? products : products.filter(product => product.category === selectedCategory.name);

    return {  categories, filteredProducts, handleCategoryPress, onPressProduct };
}
