import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { Wrapper, Text, Images, Spacer, Icons, Buttons, ScrollViews, HeaderHome, UsersListVerticalPrimary, Tags, StatusBars, TextInputs, PostsListHorizontalPrimary, drawer } from '../../../components';
import { useHooks } from './hooks'
import { colors, responsiveHeight, responsiveWidth, routes } from '../../../services';


export default function Home() { 
  const {categories, groupedProductsArray, handleCategoryPress, onPressProduct, handleAddToCart} = useHooks()
  return (<>
  <StatusBars.Dark/>
    <Wrapper isMain >
      <Wrapper backgroundColor={colors.button2} style={{borderBottomLeftRadius: responsiveWidth(7)}} >
        <Spacer isDoubleBase />
        <Wrapper marginHorizontalSmall flexDirectionRow justifyContentSpaceBetween>
        <Icons.Button iconName={"menu"} iconType={"feather"} iconColor={colors.snow} buttonColor={colors.button2} />
        <Icons.Button iconName={"bell"} iconType={"feather"} iconColor={colors.snow} buttonColor={colors.button2} />
        </Wrapper>
        <Spacer isBasic />
        <Tags data={categories} onPressItem={handleCategoryPress} />
        <Spacer />
        <TextInputs.SearchBar containerBackground={colors.snow} iconColorRight={"#A81C3A"} />
        <Spacer />
      </Wrapper>
      <Wrapper backgroundColor={colors.button2}>
        <Wrapper paddingVerticalBase background1 style={{borderTopRightRadius:responsiveWidth(8)}}>
        <ScrollViews.KeyboardAvoiding>
        <FlatList
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      data={groupedProductsArray}
      keyExtractor={(item) => item.subCategory}
      renderItem={({ item }) => (
        <PostsListHorizontalPrimary onPressProduct={handleAddToCart} title={item.subCategory} data={item.data} onPressItem={onPressProduct} />
      )}
      />
          
        {/* <PostsListHorizontalPrimary title={"Rythmologie"} data={products} />
        <PostsListHorizontalPrimary title={"Electrophysiologie Equipment"} data={products} />
        <PostsListHorizontalPrimary title={"Electrophysiologie consommable"} data={products} />
        <PostsListHorizontalPrimary title={"CHIRURGIE CARDIAQUE"} data={products} /> */}
        <Spacer height={responsiveHeight(40)} />
        </ScrollViews.KeyboardAvoiding>
      </Wrapper>

      </Wrapper>
      {/* <drawer.drawer isVisible/> */}
    </Wrapper>
    </>
  );
}


