import React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Dimensions,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useAtom} from 'jotai';
import {userNameAtom} from '../config/atoms';
import * as Progress from 'react-native-progress';

import AppButton from '../components/AppButton';

function Signin({navigation}) {
  const [userName, setUserName] = useAtom(userNameAtom);
  console.log(userNameAtom);
  return (
    <KeyboardAwareScrollView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.containerKeyboard}>
      <Progress.Bar
        progress={0.25}
        width={Dimensions.get('window').width}
        height={12}
        borderWidth={0}
        borderRadius={10}
        color="#844AFF"
        unfilledColor="#F0F0F0"
      />
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={require('../assets/moonstars.png')}
        />
        <Text style={styles.text}>
          <Text style={styles.karmaText}>Karma</Text>'ya hoşgeldin!
        </Text>
        <Text style={styles.subText}>Haydi maceraya başlayalım!</Text>
        <TextInput
          style={styles.input}
          placeholder="Kullanıcı Adı"
          value={userName}
          onChangeText={userName => setUserName(userName)}
        />
        <View style={styles.button}>
          <AppButton
            title="Devam Et"
            textcolor="black"
            color="white"
            onPress={() => {
              navigation.push('Birth');
              console.log(userName);
            }}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1A1624',
    width: '90%',
    alignSelf: 'center',
    marginTop: '30%',
    borderRadius: 20,
    alignItems: 'center',
  },
  image: {marginLeft: 30},
  text: {
    fontSize: 36,
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Gilroy-Medium',
  },
  karmaText: {fontFamily: 'Gilroy-Bold', textAlign: 'center'},
  subText: {fontSize: 18, color: 'white', textAlign: 'center'},
  input: {
    height: 50,
    width: '90%',
    marginTop: 100,
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    fontFamily: 'Gilroy-SemiBold',
    fontSize: 18,
  },
  button: {
    width: '90%',
    height: 57,
    marginTop: 90,
    marginBottom: 10,
  },
  containerKeyboard: {flex: 1, backgroundColor: 'white'},
});

export default Signin;
