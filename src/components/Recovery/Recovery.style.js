import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    margin: 40,
  },
  title: {
      fontSize: 25,
      fontWeight: '500',
      lineHeight: 25.3,
      color: '#000000',
      marginBottom: 15
  },
  description: {
      color: '#797979',
      marginBottom: 52,
      marginRight: 30
  },
  formContainer: {
      marginTop: 20
  },
  formLabel: {
    fontWeight: '500',
    fontSize: 14,
    color: '#797979',
    lineHeight: 16.1,
    marginBottom:10
  },
  footerTextContainer: {
      marginTop: 10,
      marginBottom: 20
  },
  footerText: {
      color: '#797979',
      fontSize: 13,
      fontWeight: '500',
      lineHeight: 19.5
  },
  footerBottomText: {
      color: '#797979',
      fontSize: 13,
      fontWeight: '500',
      textAlign: 'center',
      lineHeight: 19.5,
      marginBottom: 20
  },
  textForm: {
      height: 53,
      backgroundColor: '#F2F2F2',
      marginTop: 9,
      borderRadius: 8,
      paddingLeft: 25
  },
  actionButton: {
      marginTop: 36,
      marginBottom: 35,
      height: 53,
      borderRadius: 8,
      backgroundColor: '#F27621',
      justifyContent: 'center'
  },
  actionText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    lineHeight: 18.4,
    textAlign: 'center'
  },
  footerTextColor: {
    color: '#F27621'
  }
})
