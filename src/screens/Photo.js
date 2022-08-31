import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import * as Progress from 'react-native-progress';

import AppButton from '../components/AppButton';

import DefaultCameraIcon from '../assets/cameraicon.png';
import {userNameAtom} from '../config/atoms';

function Photo({navigation}) {
  const [selectedImage, setSelectedImage] = useState(null);

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      setSelectedImage(image);
    });
  };
  console.log('selectedImage', selectedImage);
  return (
    <View style={styles.containerKeyboard}>
      <Progress.Bar
        progress={0.75}
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
        <Text style={styles.text}>Bir fotoğraf seçebilir misin?</Text>
        <TouchableOpacity
          onPress={() => {
            choosePhotoFromLibrary();
          }}
          style={styles.cameraIcon}>
          <Image
            style={selectedImage ? styles.imagePhoto : styles.imageDefaultPhoto}
            source={
              selectedImage
                ? {
                    uri: `data:${selectedImage.mime};base64,${selectedImage.data}`,
                  }
                : DefaultCameraIcon
            }
          />
        </TouchableOpacity>
        <View style={styles.button}>
          <AppButton
            title="Devam Et"
            textcolor="black"
            color={selectedImage ? 'white' : 'grey'}
            disable={selectedImage ? false : true}
            onPress={() => {
              navigation.push('Password');
            }}
          />
        </View>
      </View>
    </View>
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
  imagePhoto: {
    width: 178,
    height: 178,
    resizeMode: 'contain',
    borderRadius: 10,
    fontFamily: 'Gilroy-Medium',
  },
  imageDefaultPhoto: {},
  karmaText: {fontWeight: 'bold', textAlign: 'center'},
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    marginTop: 30,
    fontFamily: 'Gilroy-Medium',
  },
  button: {
    width: '90%',
    height: 57,
    marginTop: 50,
    marginBottom: 10,
  },
  cameraIcon: {
    width: 178,
    height: 178,
    backgroundColor: '#DBD2FF',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 30,
  },
  containerKeyboard: {flex: 1, backgroundColor: 'white'},
});

export default Photo;
