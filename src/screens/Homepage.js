import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import ImageGradient from 'react-native-image-gradient';
import {FlatList} from 'react-native-gesture-handler';
import AppButton from '../components/AppButton';
import {useAtom} from 'jotai';
import {selectedUserAtom, disableAtom} from '../config/atoms';

const users = [
  {
    selectedName: 'Ahmet',
    date: '22.05.2005',
    selectedImage:
      'https://images.unsplash.com/photo-1618641986557-1ecd230959aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    selectedName: 'Ayşe',
    date: '12.05.1997',
    selectedImage:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60',
  },
  {
    selectedName: 'Orhan',
    date: '10.12.1999',
    selectedImage:
      'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
  },
  {
    selectedName: 'Zeynep',
    date: '22.10.2007',
    selectedImage:
      'https://images.unsplash.com/photo-1532074205216-d0e1f4b87368?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHByb2ZpbGV8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60',
  },
  {
    selectedName: 'Ali',
    date: '22.10.2007',
    selectedImage:
      'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    selectedName: 'Selin',
    date: '22.10.2007',
    selectedImage:
      'https://images.unsplash.com/photo-1542740348-39501cd6e2b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
  },
  {
    selectedName: 'Merve',
    date: '22.10.2007',
    selectedImage:
      'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
  },
  {
    selectedName: 'Hakan',
    date: '22.10.2007',
    selectedImage:
      'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
  },
];

const Homepage = () => {
  const [disable, setDisable] = useAtom(disableAtom);
  const [selectedUser, setSelectedUser] = useAtom(selectedUserAtom);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity onPress={() => showModal(item)}>
        <View style={styles.imageContainer}>
          <ImageGradient
            gradientStyle={styles.image}
            localImage={false}
            imageUrl={
              item?.selectedImage?.data
                ? `data:${item.selectedImage.mime};base64,${item.selectedImage.data}`
                : item.selectedImage
            }
            startPosition={{x: 0.3, y: 0.3}}
            rgbcsvStart={'132,74,255'}
            rgbcsvEnd={'0,0,0'}
            opacityStart={0.9}
            opacityEnd={0.0}
          />
        </View>
        <Text style={styles.text}>{item.selectedName}</Text>
        <Text style={styles.textDate}>{item.date}</Text>
      </TouchableOpacity>
    );
  };

  const showModal = item => {
    setSelectedUser(item);
    setDisable(true);
  };
  const send = () => {
    setDisable(false);
  };

  return (
    <SafeAreaView style={styles.containerFlat}>
      <FlatList
        columnWrapperStyle={{justifyContent: 'space-evenly', marginTop: 10}}
        numColumns={2}
        data={users}
        renderItem={renderItem}
      />
      <Modal
        style={styles.modalContainer}
        transparent={true}
        visible={disable}
        onRequestClose={() => {
          setDisable(!disable);
        }}>
        <View style={styles.modal}>
          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.textModal}>
                {selectedUser?.selectedName} adlı kullanıcıya istek göndermek
                istediğine emin misin?
              </Text>
            </View>
            <View style={styles.buttonContainer}>
              <AppButton title="Gönder" onPress={send} />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={send}
                style={styles.buttonContainerTouch}>
                <Text style={{color: '#A9A9A9', fontWeight: 'bold'}}>
                  Vazgeç
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerFlat: {
    flex: 1,
  },
  image: {
    width: 186,
    height: 186,
    borderRadius: 10,
  },
  imageContainer: {
    width: 186,
    height: 186,
    borderRadius: 10,
    overflow: 'hidden',
  },
  text: {
    position: 'absolute',
    marginTop: 150,
    marginLeft: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  textDate: {
    position: 'absolute',
    marginTop: 165,
    marginLeft: 10,
    color: 'white',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#00000090',
    flex: 1,
  },
  content: {
    width: 347,
    height: 227,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  textModal: {fontSize: 20, textAlign: 'center'},
  textContainer: {flex: 1},
  buttonContainer: {width: 322, height: 39},
  buttonContainerTouch: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Homepage;
