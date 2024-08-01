import React, { Component } from 'react';
import { Wrapper, Text, Headers, Spacer, Icons, TextInputs, Tags, PostsListVerticalPrimary, ProductListVertical } from '../../../components';
import {useHooks} from './hooks'
import { colors } from '../../../services';

export default function Index() {
    const { categories, filteredProducts, handleCategoryPress, onPressProduct } = useHooks()
    return (
        <Wrapper isMain >
            <Spacer isDoubleBase />
        <Wrapper marginHorizontalSmall flexDirectionRow justifyContentSpaceBetween>
        <Icons.Button iconName={"menu"} iconType={"feather"} iconColor={colors.black} />
        <Icons.Button iconName={"bell"} iconType={"feather"} iconColor={colors.black} />
        </Wrapper>
        <Spacer />
        <TextInputs.SearchBar iconColorRight={colors.button2} />
        <Spacer />
        <Wrapper>
        <Tags onPressItem={handleCategoryPress} selectedTextColor={colors.snow} selectedBackdround={colors.button2} textColor={colors.black} borderColor={colors.simpletext} data={categories} />
        </Wrapper>
        <Spacer isSmall />
        <ProductListVertical data={filteredProducts} onPressItem={onPressProduct} />
     </Wrapper>
    );
}

