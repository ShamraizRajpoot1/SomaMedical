import * as appSvgs from './appSvgs'

// leave off @2x/@3x
const appImages = {
    user1: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
    user2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQEZrATmgHOi5ls0YCCQBTkocia_atSw0X-Q&usqp=CAU',
    user3: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIwMIGTutu1jpkhgNCLM-Rd2gz3d0MRSXuPw&usqp=CAU',
    user4: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&w=1000&q=80',
    user5: 'https://i.pinimg.com/474x/c2/76/05/c2760595530e6633ae778a60de74f127.jpg',
    noUser: 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg',
    logo: require('../../../assets/images/Logo.png'),
    logoText: require('../../../assets/images/TextLogo.png'),
    SuccessMark: require('../../../assets/images/Successmark.png'),
    Item1: require('../../../assets/images/Item1.png'),
    Item2: require('../../../assets/images/Item2.png'),
    Item3: require('../../../assets/images/Item3.png'),
    Item4: require('../../../assets/images/Item4.png'),
    ItemLarge: require('../../../assets/images/ItemLarge.png'),
    materCardLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Mastercard_2019_logo.svg/800px-Mastercard_2019_logo.svg.png',
    visaCardLogo:'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png',
    CreditCard: require('../../../assets/images/CreditCard.png'),
}

const appIcons = {
    security: require('../../../assets/icons/security.png'),
    eye: require('../../../assets/icons/eye.png'),
    product: require('../../../assets/icons/products.png'),
    dot: require('../../../assets/icons/dot.png'),
    pen:require('../../../assets/icons/pen.png'),
    visa: require('../../../assets/icons/visa.png'),
    master: require('../../../assets/icons/card.png'),
    userSetting: require('../../../assets/icons/userSetting.png'),
}

const appFonts = {
    // appTextLight: 'Roboto-Light',
    // appTextRegular: 'Roboto-Regular',
    // appTextMedium: 'Roboto-Medium',
    // appTextBold: 'Roboto-Bold',
    appTextLight: 'Poppins-Light',
    appTextRegular: 'Poppins-Regular',
    appTextMedium: 'Poppins-SemiBold',
    appTextBold: 'Poppins-Bold',
    appTextLightUrbanist: 'Urbanist-Light',
    appTextRegularUrbanist: 'Urbanist-Regular',
    appTextMediumUrbanist: 'Urbanist-SemiBold',
    appTextBoldUrbanist: 'Urbanist-Bold',
    appTextLightInter: 'Inter-Light',
    appTextRegularInter: 'Inter-Regular',
    appTextMediumInter: 'Inter-SemiBold',
    appTextBoldInter: 'Inter-Bold',

  }

export { appImages, appIcons, appSvgs,appFonts }
