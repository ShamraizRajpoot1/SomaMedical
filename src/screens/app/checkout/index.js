import React, {Component} from 'react';
import {
  Wrapper,
  Text,
  Headers,
  CheckoutProductListVertical,
  ScrollViews,
  Lines,
  Spacer,
  CheckBoxes,
  Icons,
  Images,
  Buttons,
  Modals,
} from '../../../components';
import { CardField, CardFieldInput, } from "@stripe/stripe-react-native";
import {useHooks} from './hooks';
import {
  appIcons,
  colors,
  responsiveHeight,
  responsiveWidth,
} from '../../../services';
import { TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/base';

export default function Index(props) {
  const {
    setCardDataComplete,cartItems, card,maskedNumber, handlePayment, cartTotal, toggleSelection, paymentMethod, addresses, selectedId, handleProducts, toggle, isVisible, address} = useHooks(props);
 
  return (
    <Wrapper isMain>
      <Headers.Primary
        title={'Checkout'}
        tintColor={colors.black}
        showBackArrow
      />
        <CardField
        postalCodeEnabled={false}
        onCardChange={(cardDetails) => {
          setCardDataComplete(cardDetails.complete);
        }}
      />
      <Wrapper marginHorizontalBase>
        <ScrollViews.KeyboardAvoiding>
          <CheckoutProductListVertical data={cartItems} />

          <Lines.Horizontal />
          <Spacer isBasic />
          <Wrapper flexDirectionRow justifyContentSpaceBetween>
            <Text isSmall isInterRegularFont>
              Total
            </Text>
            <Text isSmall isInterMediumFont>
              ${cartTotal}
            </Text>
          </Wrapper>
          <Spacer isSmall />
          <Wrapper flexDirectionRow justifyContentSpaceBetween>
            <Text isSmall isInterRegularFont>
              Delivery Fee
            </Text>
            <Text isSmall isInterMediumFont>
              $10
            </Text>
          </Wrapper>
          <Spacer isSmall />
          <Lines.Horizontal />
          <Spacer isBasic />
          <Wrapper flexDirectionRow justifyContentSpaceBetween>
            <Text isSmall isInterRegularFont>
              Sub Total
            </Text>
            <Text isSmall isInterMediumFont>
              ${cartTotal+10}
            </Text>
          </Wrapper>
          <Spacer isDoubleBase />
          <Wrapper
            marginHorizontalSmall
            flexDirectionRow
            justifyContentSpaceBetween>
            <Text isLarge isUrbanistMediumFont>
              Address
            </Text>
            <TouchableOpacity onPress={address}>
              <Text isLarge isBlue isInterMediumFont>
                + Add Address
              </Text>
              <Lines.Horizontal
                height={responsiveHeight(0.4)}
                color={colors.button2}
              />
            </TouchableOpacity>
          </Wrapper>
          <Spacer isBasic />
          
            <Wrapper>
            {addresses.length > 0 ? (
        addresses.map((address, index) => (
          <Wrapper key={index}>
            <TouchableOpacity onPress={() => toggleSelection(index)}>
              <Wrapper
                paddingHorizontalBase
                style={{
                  borderWidth: 0.5,
                  borderColor: colors.appBgColor3,
                  borderRadius: 12
                }}>
                <Spacer isBasic />
                <Wrapper flexDirectionRow justifyContentSpaceBetween>
                  <Wrapper alignItemsCenter flexDirectionRow>
                    <CheckBoxes.Primary
                      checkedIconColor={colors.button2}
                      uncheckedIconColor={colors.button2}
                      checked={index === selectedId}
                      checkedIconName={'circle-slice-8'}
                    />
                    <Text isMedium isInterMediumFont>
                      {address.firstName} {address.lastName}
                    </Text>
                  </Wrapper>
                  <Icons.Custom icon={appIcons.pen} size={responsiveWidth(5)} />
                </Wrapper>
                <Spacer isSmall />
                <Wrapper alignItemsCenter flexDirectionRow>
                  <Icon
                    name="phone"
                    type="feather"
                    color={colors.button2}
                    size={responsiveWidth(6)}
                  />
                  <Spacer horizontal isBasic />
                  <Text isMedium isInterRegularFont isGray>
                    {address.phoneNumber}
                  </Text>
                </Wrapper>
                <Spacer isSmall />
                <Wrapper flexDirectionRow>
                  <Icon
                    name="map-pin"
                    type="feather"
                    color={colors.button2}
                    size={responsiveWidth(6)}
                  />
                  <Spacer horizontal isBasic />
                  <Text
                    isSmall
                    isInterRegularFont
                    isGray
                    style={{ width: responsiveWidth(70) }}>
                    {address.location}
                  </Text>
                </Wrapper>
                <Spacer isBasic />
              </Wrapper>
            </TouchableOpacity>
            <Spacer isBasic />
          </Wrapper>
        ))
      ) : (
        <Wrapper>
          <Text>No addresses found.</Text>
        </Wrapper>
      )}
    </Wrapper>
            <Wrapper
            marginHorizontalSmall
            flexDirectionRow
            justifyContentSpaceBetween>
            <Text isLarge isUrbanistMediumFont>
              Payment Method
            </Text>
            {/* <TouchableOpacity>
              <Text isLarge isBlue isInterMediumFont>
                + Add
              </Text>
              <Lines.Horizontal
                height={responsiveHeight(0.4)}
                color={colors.button2}
              />
            </TouchableOpacity> */}
          </Wrapper>
          <TouchableOpacity onPress={paymentMethod}>
          <Wrapper  paddingHorizontalSmall paddingVerticalSmall flexDirectionRow justifyContentSpaceBetween
            style={{borderWidth: 0.5, borderColor: colors.appBgColor3, borderRadius:12}}>
              <Wrapper alignItemsCenter flexDirectionRow>
                <Wrapper style={{borderWidth: 0.5, borderColor: colors.appBgColor3, borderRadius:12}} paddingHorizontalSmall paddingVerticalSmall>
              <Images.SqareRound size={responsiveWidth(7)} source={appIcons.visa} />
              </Wrapper>
              <Wrapper marginHorizontalSmall>
                <Text isMedium isMediumFont>Credit Card</Text>
                <Text isSmall isInterRegularFont isGray>Card ending with **** {maskedNumber}</Text>
              </Wrapper>
              </Wrapper>
              <Icons.Button iconName={"chevron-right"} iconType={"feather"} iconColor={colors.appBgColor5} />
          </Wrapper>
          </TouchableOpacity>
          <Spacer isBasic />
          <Wrapper marginHorizontalLarge>
            <Buttons.Colored 
            buttonColor={colors.button2}
            onPress={handlePayment}
            text={"Place Order"}
            />
          </Wrapper>
          <Spacer height={responsiveHeight(18)} />
        </ScrollViews.KeyboardAvoiding>
      </Wrapper>
      <Modals.Popup onPressButton={handleProducts} title={"Request Sent"} discription={"Your order has been sent successfully!"} buttonText={"Continue"} isVisible={isVisible} toggleModal={toggle} />
    </Wrapper>
  );
}
