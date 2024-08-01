import { useEffect, useState } from "react";
import { appImages, routes } from "../../../../services";
import { navigate, navigationRef } from "../../../../navigation/rootNavigation";
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../../../store/actions";
import Text from "../../../../components/text";
import { addToCart } from "../../../../store/actions/cartActions";
export function useHooks() {

  const handleAddToCart = (product) => {
    dispatch(addToCart(product)); 
    console.log("naviiii");
  };

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const productStatus = useSelector((state) => state.products.status);
  const error = useSelector((state) => state.products.error);

  useEffect(() => {
    if (productStatus === 'idle') {
      dispatch(fetchProducts());
      
    }
  }, [productStatus, dispatch]);
  if (productStatus === 'loading') {
    return <Text>Loading...</Text>;
  }

  if (productStatus === 'failed') {
    return <Text>Error: {error}</Text>;
  }


  const onPressProduct = (product) => {
    navigate(routes.productDetails, { product });
  };
    const drawer = () =>{
        navigationRef.current?.openDrawer()
    }

    const categories = [
        { id: 1, name: 'CARDIOLOGY' },
        { id: 2, name: 'ONCOLOGIE' },
        { id: 3, name: 'VASCULAIRE' },
        { id: 4, name: 'HERNIE' },
        { id: 5, name: 'REANIMATION' },
        { id: 6, name: 'ORL' },
    ];
console.log(products);
    const [selectedCategory, setSelectedCategory] = useState(categories[0]);

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
    };

    const filteredProducts = products.filter(product => product.category === selectedCategory.name);

    
    const groupedProducts = filteredProducts.reduce((acc, product) => {
        const { subCategory } = product;
        if (!acc[subCategory]) {
            acc[subCategory] = [];
        }
        acc[subCategory].push(product);
        return acc;
    }, {});

    // Convert the grouped products into an array of objects
    const groupedProductsArray = Object.keys(groupedProducts).map(subCategory => ({
        subCategory,
        data: groupedProducts[subCategory],
    }));

    return {drawer,  categories, products, groupedProductsArray, handleCategoryPress, onPressProduct, handleAddToCart };
}
