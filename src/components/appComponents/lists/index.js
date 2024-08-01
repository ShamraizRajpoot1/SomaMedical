import React, {Component, useState} from 'react';
import Wrapper from '../../wrapper';
import Text from '../../text';
import Spacer from '../../spacer';
import * as Images from '../../images';
import * as Lines from '../../lines';
import {
  appFonts,
  appIcons,
  appImages,
  appStyles,
  colors,
  fontSizes,
  getAppointmentStatusInfo,
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
  routes,
  sizes,
} from '../../../services';
import {FlatList, Pressable} from 'react-native';
import {Icon} from '@rneui/base';
import * as Icons from '../../icons';

export const UsersListVerticalPrimary = ({data, onPressItem, ...props}) => {
  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => {
        index.toString();
      }}
      ItemSeparatorComponent={() => (
        <Lines.Horizontal color={colors.appBgColor2} />
      )}
      renderItem={({item, index}) => {
        const {isDietitian, firstName, lastName, image, rating, reviewsCount} =
          item;
        const userName = firstName + ' ' + lastName;
        return (
          <Pressable onPress={() => onPressItem(item, index)}>
            <Wrapper
              background1
              paddingVerticalSmall
              paddingHorizontalBase
              flexDirectionRow>
              <Images.Round source={{uri: image}} />
              <Spacer isSmall horizontal />
              <Wrapper
                flex={1}
                justifyContentCenter={!isDietitian}
                justifyContentSpaceBetween={isDietitian}
                style={{paddingVertical: responsiveHeight(0.4)}}>
                <Wrapper flexDirectionRow>
                  <Wrapper flexDirectionRow alignItemsCenter>
                    <Text isSmall isBoldFont>
                      {userName}
                    </Text>
                    {isDietitian ? (
                      <>
                        <Icon
                          name="star"
                          type="entypo"
                          color={colors.appColor2}
                          style={[appStyles.marginHorizontalTiny]}
                          size={responsiveFontSize(15)}
                        />
                        <Text isTiny>
                          {rating} ({reviewsCount})
                        </Text>
                      </>
                    ) : null}
                  </Wrapper>
                </Wrapper>
                {isDietitian ? (
                  <Text isTiny isGray>
                    Dietitian
                  </Text>
                ) : null}
              </Wrapper>
            </Wrapper>
          </Pressable>
        );
      }}
      {...props}
    />
  );
};

export const PostsListHorizontalPrimary = ({
  data,
  title,
  onPressItem,
  onPressProduct,
  ...props
}) => {
  return (
    <>
      <Text
        style={{marginLeft: sizes.marginHorizontal}}
        isLarge
        isUrbanistMediumFont>
        {title}
      </Text>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={() => <Spacer width={sizes.marginHorizontal} />}
        ListHeaderComponent={() => <Spacer width={sizes.marginHorizontal} />}
        ItemSeparatorComponent={() => <Spacer isSmall horizontal />}
        renderItem={({item, index}) => {
          const userName = item.name;
          const userImage = {uri:item.image};
          const timeStamp = '21 days ago';
          const title = 'Product Name';
          const description = item.description;
          const topic = item.price;
          const Plus = appImages.user4;
          const size = item.size;
          const viewsCount = '422';
          return (
            <ItemList
              onPress={() => onPressItem(item, index)}
              containerStyle={[appStyles.marginHorizontalZero]}
              userImage={userImage}
              userName={userName}
              timeStamp={timeStamp}
              Plus={Plus}
              title={title}
              size={size}
              topic={topic}
              viewsCount={viewsCount}
              onPressProduct={() => onPressProduct(item)}
            />
          );
        }}
        {...props}
      />
    </>
  );
};
export const Tags = ({
  selectedTextColor,
  selectedBackdround,
  textColor,
  borderColor,
  data,
  onPressItem,
  ...props
}) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePressItem = (index, item) => {
    setSelectedIndex(index);
    if (onPressItem) {
      onPressItem(item);
    }
  };

  const renderItem = ({item, index}) => {
    const isSelected = index === selectedIndex;
    return (
      <Pressable onPress={() => handlePressItem(index, item)}>
        <Wrapper
          isCenter
          paddingHorizontalBase
          backgroundColor={colors.button2}
          style={{
            height: responsiveHeight(5),
            borderWidth: responsiveWidth(0.3),
            borderRadius: sizes.ModalRadius,
            borderColor: isSelected
              ? selectedBackdround
                ? selectedBackdround
                : 'white'
              : borderColor
              ? borderColor
              : colors.appBgColor7,
            backgroundColor: isSelected
              ? selectedBackdround
                ? selectedBackdround
                : 'white'
              : 'transparent',
          }}>
          <Text
            isRegular
            style={{
              color: isSelected
                ? selectedTextColor
                  ? selectedTextColor
                  : colors.button2
                : textColor
                ? textColor
                : colors.snow,
              fontFamily: isSelected
                ? appFonts.appTextMediumUrbanist
                : appFonts.appTextRegularUrbanist,
            }}>
            {item.name}
          </Text>
        </Wrapper>
      </Pressable>
    );
  };

  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={() => <Spacer width={sizes.marginHorizontal} />}
      ListHeaderComponent={() => <Spacer width={sizes.marginHorizontal} />}
      ItemSeparatorComponent={() => <Spacer isSmall horizontal />}
      renderItem={renderItem}
      {...props}
    />
  );
};

export const PostsListVerticalPrimary = ({data, onPressItem, ...props}) => {
  return (
    <FlatList
      data={data}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <Spacer height={sizes.marginVertical} />}
      ListHeaderComponent={() => <Spacer width={sizes.marginVertical} />}
      ItemSeparatorComponent={() => <Spacer width={sizes.marginVertical} />}
      renderItem={({item, index}) => {
        const userName = 'John Doe';
        const userImage = appImages.user4;
        const timeStamp = '21 days ago';
        const title = 'Favorite Healthy Breakfast Ideas';
        const description =
          "I'm looking for some new breakfast ideas that are both delicious and healthy. Share your go-to morning meals!";
        const topic = '#MealPlans';
        const commentsCount = '12';
        const viewsCount = '422';
        return (
          <PostPrimary
            onPress={() => onPressItem(item, index)}
            //containerStyle={[appStyles.marginHorizontalZero, { width: responsiveWidth(70) }]}
            userImage={userImage}
            userName={userName}
            timeStamp={timeStamp}
            title={title}
            description={description}
            topic={topic}
            commentsCount={commentsCount}
            viewsCount={viewsCount}
          />
        );
      }}
      {...props}
    />
  );
};

export const PostPrimary = ({
  userImage,
  userName,
  timeStamp,
  title,
  description,
  showFullDescription,
  topic,
  commentsCount,
  viewsCount,
  onPress,
  containerStyle,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Wrapper
        isColored
        background1
        paddingHorizontalSmall
        paddingVerticalSmall
        style={containerStyle}>
        <Wrapper flexDirectionRow>
          <Images.Round source={{uri: userImage}} size={responsiveWidth(12)} />
          <Wrapper
            flex={1}
            paddingHorizontalSmall
            marginHorizontalTiny
            justifyContentSpaceBetween
            style={{paddingVertical: responsiveHeight(0.3)}}>
            <Text isMedium isBoldFont>
              {userName}
            </Text>
            <Text isSmall>{timeStamp}</Text>
          </Wrapper>
        </Wrapper>
        <Spacer isSmall />
        <Spacer isTiny />
        <Text isMedium isBoldFont numberOfLines={1}>
          {title}
        </Text>
        <Spacer isSmall />
        <Text
          isSmall={!showFullDescription}
          isMedium={showFullDescription}
          numberOfLines={!showFullDescription ? 3 : null}>
          {description}
        </Text>
        <Spacer isSmall />
        <Text isTiny isSecondaryColor>
          {topic}
        </Text>
        <Spacer isSmall />
        <Wrapper flexDirectionRow justifyContentSpaceBetween>
          <Icons.WithText
            iconName={'message-circle'}
            iconType={'feather'}
            tintColor={colors.appTextColor5}
            text={`${commentsCount} comments`}
            textContainerStyle={{marginLeft: sizes.marginHorizontal / 4}}
          />
          <Icons.WithText
            iconName={'eye'}
            iconType={'feather'}
            tintColor={colors.appTextColor5}
            text={`${viewsCount} views`}
            textContainerStyle={{marginLeft: sizes.marginHorizontal / 4}}
          />
        </Wrapper>
      </Wrapper>
    </Pressable>
  );
};
export const ItemList = ({
  userImage,
  userName,
  Plus,
  timeStamp,
  title,
  size,
  showFullDescription,
  topic,
  onPress,
  containerStyle,
  onPressProduct
}) => {
  return (<>
    <Pressable onPress={onPress}>
      <Wrapper
        isColored
        background1
        marginVerticalSmall
        style={[
          containerStyle,
          {
            paddingHorizontal: 0,
            paddingVertical: 0,
            borderWidth: responsiveWidth(0.05),
            borderColor: colors.simpletext,
            borderRadius: responsiveWidth(2),
          },
        ]}>
        <Wrapper>
          <Images.SqareRound
            source={userImage}
            width={responsiveWidth(40)}
            size={responsiveWidth(28)}
          />
        </Wrapper>
        <Wrapper paddingHorizontalSmall>
          <Spacer isTiny />
          <Text isMedium isRegularFont numberOfLines={1}>
            {userName}
          </Text>
          <Text
            isTiny
            isInterMediumFont
            isGray
            numberOfLines={1}
            style={{marginTop: responsiveHeight(-0.5), paddingTop: 0}}>
            {size}
          </Text>

          <Wrapper flexDirectionRow justifyContentSpaceBetween>
            <Text isLarge isInterMediumFont>
              ${topic}
            </Text>
            <Icons.Button
              buttonColor={colors.button2}
              iconName={'plus'}
              iconColor={colors.snow}
              buttonSize={responsiveWidth(7)}
              iconSize={responsiveWidth(7)}
              onPress={onPressProduct}
            />
            {/* <Images.SqareRound
                        source={{ uri: Plus }}
                        size={responsiveWidth(8)}
                    /> */}
          </Wrapper>
        </Wrapper>
        <Spacer isSmall />
      </Wrapper>
    </Pressable>
    </>
  );
};

export const ChatMessagesListVertical = ({data}) => {
  return (
    <>
      {data.map((item, index) => {
        const {user, message, created_at} = item;
        const is_my_message = user?.id === users[4]?.id;
        return (
          <Wrapper marginVerticalSmall style={[]}>
            <Wrapper
              marginHorizontalSmall
              style={{
                flexDirection: !is_my_message ? 'row' : 'row-reverse',
              }}>
              <Wrapper
                //flex={7}
                isColored
                //paddingHorizontalSmall
                paddingVerticalSmall
                marginHorizontalZero
                style={[
                  {
                    borderRadius: 100,
                  },
                  !is_my_message
                    ? {
                        //borderBottomLeftRadius: 0,
                        backgroundColor: colors.appBgColor1,
                      }
                    : {
                        //borderBottomRightRadius: 0,
                        backgroundColor: colors.appColor1,
                      },
                ]}>
                <Text
                  isRegular
                  //isMediumFont
                  isPrimaryColor={!is_my_message}
                  isWhite={is_my_message}
                  style={[!is_my_message ? {} : {}]}>
                  {message}
                </Text>
              </Wrapper>
            </Wrapper>
            <Spacer isTiny />
            <Wrapper marginHorizontalMedium alignItemsFlexEnd={is_my_message}>
              <Text isTiny>{created_at}</Text>
            </Wrapper>
          </Wrapper>
        );
      })}
    </>
  );
};

export const ProductListVertical = ({data, onPressItem, ...props}) => {
  return (
    <FlatList
      numColumns={2}
      data={data}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <Spacer height={sizes.marginVertical} />}
      ListHeaderComponent={() => <Spacer width={sizes.marginVertical} />}
      ItemSeparatorComponent={() => <Spacer width={sizes.marginVertical} />}
      renderItem={({item, index}) => {
        const userName = item.name;
        const userImage = {uri:item.image};
        const timeStamp = '21 days ago';
        const title = 'Product Name';
        const description = item.description;
        const topic = item.price;
        const Plus = appImages.user4;
        
        const size = item.size;
        const viewsCount = '422';
        return (
          <ItemList
            onPress={() => onPressItem(item, index)}
            containerStyle={[appStyles.marginHorizontalBase]}
            userImage={userImage}
            userName={userName}
            timeStamp={timeStamp}
            Plus={Plus}
            title={userName}
            size={size}
            topic={topic}
            // commentsCount={commentsCount}
            viewsCount={viewsCount}
          />
        );
      }}
      {...props}
    />
  );
};

export const Ingredients = ({data, onPressItem, ...props}) => {
  return (
    <FlatList
      numColumns={1}
      data={data}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <Spacer height={sizes.marginVertical} />}
      ListHeaderComponent={() => <Spacer width={sizes.marginVertical} />}
      ItemSeparatorComponent={() => <Spacer width={sizes.marginVertical} />}
      renderItem={({item, index}) => {
        const text = item.text;

        return (
          <>
            <Wrapper flexDirectionRow alignItemsCenter>
              <Icons.Custom size={responsiveWidth(2)} icon={appIcons.dot} />
              <Text> {text}</Text>
            </Wrapper>
          </>
        );
      }}
      {...props}
    />
  );
};
export const SizeList = ({data, onPressItem, ...props}) => {
  return (
    <FlatList
      numColumns={1}
      data={data}
      horizontal={true}
      scrollEnabled={true}
      showsHorizontalScrollIndicator={false}
      ListFooterComponent={() => <Spacer height={sizes.marginVertical} />}
      ListHeaderComponent={() => <Spacer width={sizes.marginVertical} />}
      ItemSeparatorComponent={() => <Spacer width={sizes.marginVertical} />}
      renderItem={({item, index}) => {
        const text = item.text;
        const text2 = item.text2;

        return (
          <Wrapper>
            <Wrapper
              isCenter
              background2
              style={{borderRadius: 100}}
              paddingHorizontalTiny>
              <Text>{text}</Text>
            </Wrapper>
            <Spacer isBasic />
            <Wrapper
              isCenter
              style={{
                borderRadius: 100,
                borderWidth: responsiveWidth(0.3),
                borderColor: colors.appBgColor4,
              }}
              paddingHorizontalTiny>
              <Text>{text2}</Text>
            </Wrapper>
          </Wrapper>
        );
      }}
      {...props}
    />
  );
};

export const CartProductListVertical = ({data, onPressItem, ...props}) => {
  return (
    <FlatList
      numColumns={1}
      data={data}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <Spacer height={sizes.marginVertical} />}
      ListHeaderComponent={() => <Spacer width={sizes.marginVertical} />}
      ItemSeparatorComponent={() => <Spacer width={sizes.marginVertical} />}
      renderItem={({item, index}) => {
        const title = item.name;
        const ProductImage = {uri:item.image};
        const timeStamp = '21 days ago';
        const size = item.size;
        const description = item.description;
        const price = item.price;
        const Plus = appImages.user4;
        const quantity = item.quantity;
        return (
          <CartList
            onPress={() => onPressItem(item.id)}
            containerStyle={[appStyles.marginHorizontalBase]}
            ProductImage={ProductImage}
            timeStamp={timeStamp}
            Plus={Plus}
            title={title}
            description={description}
            price={price}
            size={size}
            quantity={quantity}
          />
        );
      }}
      {...props}
    />
  );
};

export const CartList = ({
  ProductImage,
  title,
  description,
  price,
  onPress,
  containerStyle,
  size,
  quantity,
}) => {
  return (
    <Pressable >
      <Wrapper
        flex={1}
        isColored
        background1 
        marginHorizontalBase
        style={[
          containerStyle,
          {
            paddingHorizontal: 0,
            paddingVertical: 0,
          },
        ]}>
        <Wrapper flexDirectionRow>
          <Wrapper flex={1}>
            <Images.SqareRound
              source={ProductImage}
              width={responsiveWidth(33)}
              size={responsiveWidth(33)}
            />
          </Wrapper>
          <Wrapper flex={1.5} paddingHorizontalSmall>
            <Wrapper flexDirectionRow justifyContentSpaceBetween>
              <Text isMedium isUrbanistMediumFont numberOfLines={1}>
                {title}
              </Text>
              <Icons.Button
              onPress={onPress}
                buttonStyle={{
                  marginLeft: responsiveWidth(12),
                  marginTop: responsiveHeight(-1),
                }}
                iconSize={responsiveWidth(5)}
                iconName={'trash-2'}
                iconType={'feather'}
                iconColor={colors.button}
              />
            </Wrapper>
            <Text
              isTiny
              isInterMediumFont
              isGray
              numberOfLines={1}
              style={{marginTop: responsiveHeight(-2), paddingTop: 0}}>
              General
            </Text>
            <Spacer isSmall/>
            <Wrapper
              alignItemsCenter
              flexDirectionRow
              justifyContentSpaceBetween>
              <Text isMedium isUrbanistMediumFont numberOfLines={1}>
                Size
              </Text>
              <Wrapper flex={0.7} alignItemsCenter>
              <Text isSmall isInterRegularFont>
                {size}
              </Text>
              </Wrapper>
            </Wrapper>
            <Spacer isSmall/>
            <Wrapper flexDirectionRow justifyContentSpaceBetween>
              <Text isMedium isUrbanistMediumFont>
                Qty
              </Text>
              <Wrapper flex={0.7} alignItemsCenter>
              <Text isSmall isInterRegularFont>
                {quantity}
              </Text>
              </Wrapper>
            </Wrapper>
            <Spacer isSmall/>
            <Wrapper flexDirectionRow justifyContentSpaceBetween>
              <Text isMedium isUrbanistMediumFont>
                price
              </Text>
              <Wrapper flex={0.7} alignItemsCenter>
              <Text isTinyTitle isBlue>
                ${price}
              </Text>
              </Wrapper>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
      <Wrapper background2 paddingVerticalTiny style={{ width:responsiveWidth(100)}} />
    </Pressable>
  );
};
export const CheckoutProductListVertical = ({data, onPressItem, ...props}) => {
  return (
    <FlatList
      numColumns={1}
      data={data}
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => <Spacer height={sizes.marginVertical} />}
      ListHeaderComponent={() => <Spacer width={sizes.marginVertical} />}
      ItemSeparatorComponent={() => <Spacer width={sizes.marginVertical} />}
      renderItem={({item, index}) => {
        const title = item.name;
        const ProductImage = {uri:item.image};
        const timeStamp = '21 days ago';
        const size = item.size;
        const description = item.description;
        const price = item.price * item.quantity ;
        const Plus = appImages.user4;
        const quantity = item.quantity;
        return (
          <Checkout
            onPress={() => onPressItem(item, index)}
            containerStyle={[appStyles.marginHorizontalZero, ]}
            ProductImage={ProductImage}
            timeStamp={timeStamp}
            Plus={Plus}
            title={title}
            description={description}
            price={price}
            size={size}
            quantity={quantity}
          />
        );
      }}
      {...props}
    />
  );
};

export const Checkout = ({
  ProductImage,
  title,
  description,
  price,
  onPress,
  containerStyle,
  size,
  quantity,
}) => {
  return (
    <Pressable onPress={onPress}>
      <Wrapper
        flex={1}
        isColored
        background1 
        marginHorizontalBase paddingHorizontalSmall paddingVerticalSmall
        style={[
          containerStyle,appStyles.shadowDark,
          {
            paddingBottom:0,
            borderWidth: responsiveWidth(0.05),
            borderColor: colors.simpletext,
            borderRadius: responsiveWidth(2),
          },
        ]}>
        <Wrapper  flex={0.3} flexDirectionRow>
            <Icons.Custom
              icon={ProductImage}
              size={responsiveWidth(15)}
              
            />
          <Wrapper flex={1} paddingHorizontalSmall>
              <Text isMedium isUrbanistMediumFont numberOfLines={1}>
                {title}
              </Text>
              <Spacer isSmall />
            <Wrapper flexDirectionRow justifyContentSpaceBetween>
              <Wrapper flexDirectionRow>
              <Text isGray isRegularFont>
              10pcs
              </Text>
              <Wrapper paddingHorizontalSmall marginHorizontalTiny isCenter backgroundColor={colors.appBgColor3} style={{borderWidth:responsiveWidth(0.3),borderColor:colors.button2,height:responsiveHeight(2.5), borderRadius:100, }}>
              <Text isSmall isMediumFont isBlue>X{quantity}</Text>
              </Wrapper>
              </Wrapper>
              <Text isSmall isRegularFont >
                ${price}
              </Text>
            </Wrapper>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Pressable>
  );
};
