import React, { useState } from 'react';
import { View, Text, Image, Button, TouchableOpacity, Modal } from 'react-native';
import WebView from 'react-native-webview';

import { PROFILE_CARD_URL, nextIcon } from '../../constants';

import styles from './asProfileCard-styles';

interface IASProfileCardProps {
  title: string;
}

const ASProfileCard = (props: IASProfileCardProps) => {
  const [showWebView, setShowWebView] = useState<boolean>(false);
  const { title } = props;

  const toggleWebView = () => {
    setShowWebView(!showWebView);
  };

  return (
    <>
      <TouchableOpacity onPress={toggleWebView}>
        <View style={styles.container}>
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.icon} source={nextIcon} />
        </View>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={false}
        visible={showWebView}
        onRequestClose={toggleWebView}>
        <View style={styles.modalContainer}>
          <View>
            <Button title="Close" onPress={toggleWebView} />
          </View>
          <View style={styles.webViewContainer}>
          <WebView source={{ uri: PROFILE_CARD_URL }}  />
          </View>
        </View>
      </Modal>
    </>
  );
};

export default ASProfileCard;