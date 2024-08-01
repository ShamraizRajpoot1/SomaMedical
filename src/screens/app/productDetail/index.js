import React, {Component} from 'react';
import {
  Wrapper,
  Text,
  Headers,
  Images,
  Spacer,
  Icons,
  Ingredients,
  ScrollViews,
  SizeList,
  Rating,
  Buttons,
  Modals,
} from '../../../components';
import { totalSize } from 'react-native-dimension';
import {useHooks} from './hooks';
import {appImages, appStyles, colors, responsiveHeight, responsiveWidth} from '../../../services';
import {Image} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from '@rneui/base';


export default function Index({route}) {
  const {product} = route.params;
  console.log(product);
  const {back, isOpen, setIsOpen,RequestContact, status, setStatus, Items, ingradiantData, sizeData, rating, result, toggle,isVisible, handleProducts } = useHooks();
  return (
    <Wrapper isMain>
      <Headers.Primary
        onBackPress={back}
        showBackArrow
        title={'Product Details'}
        tintColor={colors.black}
      />
      <Spacer isTiny />
      <ScrollViews.KeyboardAvoiding>
      <Image
        source={{uri: product.image}}
        resizeMode='contain'
        style={{width: responsiveWidth(100),height:responsiveHeight(36)}}
      />
      <Wrapper marginHorizontalBase>
        <Spacer isBasic />
        <Text isLarge isInterMediumFont isGray>
          {product.category} - {product.subCategory}
        </Text>
        <Spacer isSmall />
        <Wrapper flexDirectionRow justifyContentSpaceBetween>
          <Text isTinyTitle isInterMediumFont>
            {product.name}
          </Text>
          <Text isBlue isMediumTitle isInterMediumFont>
            ${product.price}
          </Text>
        </Wrapper>
        <Text isLarge isInterMediumFont isGray>
          75ml
        </Text>
        <Spacer isBasic />
        <Wrapper alignItemsCenter flexDirectionRow justifyContentSpaceBetween>
          <Text isSmall isMediumFont>
            Quantity
          </Text>
          <Wrapper style={{width:responsiveWidth(35)}} flexDirectionRow justifyContentSpaceBetween>
            <Icons.Button
              iconName={'minus'}
              buttonStyle={{
                borderColor: colors.appBgColor4,
                borderWidth: responsiveWidth(0.3),
              }}
            />
            <Text isLargeTitle isInterMediumFont>1</Text>

            <Icons.Button
              iconName={'plus'}
              buttonColor={colors.button2}
              iconColor={colors.snow}
            />
          </Wrapper>
        </Wrapper>
        <Spacer isSmall />
        <Wrapper alignItemsCenter flexDirectionRow justifyContentSpaceBetween>
          <Text isSmall isMediumFont>
            Size
          </Text>
          <DropDownPicker
                  items={Items.map((item, index) => ({
                    label: item.name,
                    value: item.id,
                    
                  }))}
                  arrowColor={colors.blackText}
                //   labelStyle={styles.label}
                  placeholder={' '}
                  dropDownMaxHeight={170}
                  containerStyle={appStyles.dcontainer}
                  style={appStyles.Dropdown}
                  setValue={value => setStatus(value)}
                  setOpen={() => setIsOpen(!isOpen)}
                  open={isOpen}
                  value={status}
                  dropDownStyle={appStyles.dropDownStyle}
                />
          </Wrapper>
          <Spacer isBasic/>
          <Wrapper flexDirectionRow alignItemsCenter justifyContentSpaceBetween>
          <Text isTinyTitle isInterMediumFont>
            Description
          </Text>
          <Icons.Button
              iconName={'download'}
              iconType={'feather'}
              buttonColor={"#e2e8f5"}
              iconColor={colors.button2}
              iconSize={responsiveWidth(8)}
            />
          </Wrapper>
          <Spacer isSmall/>
          <Text isSmall >
          OBH COMBI is a cough medicine containing, Paracetamol, phedrine HCl, and Chlorphenamine maleate which is used to relieve coughs accompanied by flu symptoms such as fever, headache, and sneezing... Read more
          </Text>
          <Spacer isSmall />
          <Text isTinyTitle isInterMediumFont>
            Ingredients
          </Text>
          <Ingredients data={ingradiantData} />
          <Text isTinyTitle isInterMediumFont>
            Pakage Sizes
          </Text>
          <Spacer isBasic />
          <Wrapper alignItemsCenter flexDirectionRow>
            <Wrapper>
            <Text isSmall isMediumFont>
            Quantity
          </Text>
          <Spacer height={responsiveHeight(2)}/>
          <Text isSmall isMediumFont>
            No. of tablets
          </Text>
            </Wrapper>
            <Wrapper style={{width:responsiveWidth(70)}}>
              <SizeList data={sizeData} />
              {/* <Spacer isBasic />
              <SizeList data={quantityData} /> */}
            </Wrapper>

          </Wrapper>
          <Spacer isBasic />
          <Text isTinyTitle isInterMediumFont>
            Rating & Reviews (250)
          </Text>
          <Text isLarge isGray>Summary</Text>
          <Spacer isDoubleBase />
          <Wrapper justifyContentFlexstart flexDirectionRow>
            <Wrapper >
          <Rating.Secondary data={rating} result={result} />
          </Wrapper>
          <Wrapper>
            <Wrapper alignItemsCenter flexDirectionRow>
            <Text isSmallTitle isRegularFont>4.5</Text>
            <Icon
                                name={'star'}
                                color={colors.rating}
                                size={totalSize(2)}
                                containerStyle={[{marginHorizontal:totalSize(3)/6}]}
                                type={ 'ionicon'}
                                disabledStyle={{ backgroundColor: colors.transparent }}
                            />
            </Wrapper>
            <Text>273 Reviews</Text>
            <Spacer isMedium />
            <Text isSmallTitle isRegularFont>88%</Text>
            <Text>Recommended</Text>
          </Wrapper>
          </Wrapper>
          
          <Spacer isDoubleBase />
      </Wrapper>
      </ScrollViews.KeyboardAvoiding>
      <Wrapper marginVerticalBase marginHorizontalBase flexDirectionRow>
      <Buttons.Colored
            buttonStyle={{width:responsiveWidth(43), marginHorizontal:0,borderColor:colors.button2, borderWidth:responsiveWidth(0.3) }}
            text="Request a Quote"
            onPress={toggle}
            buttonColor={'#e2e8f5'} 
            textStyle={{color:colors.button2}}
            />
            <Buttons.Colored 
            buttonStyle={{width:responsiveWidth(43)}}
            text="Request Contact"
            onPress={RequestContact}
            buttonColor={colors.button2} />
      </Wrapper>
      <Modals.Popup onPressButton={handleProducts} title={"Request Sent"} discription={"Your request for a quote has been sent successfully!"} buttonText={"Continue"} isVisible={isVisible} toggleModal={toggle} />
    </Wrapper>
  );
}
