import React from 'react'
import { Modal, View, Text, TouchableOpacity } from 'react-native'

import { styles } from './asLogoutModal-styles'

interface IASLogoutModalProps {
  isVisible: boolean
  onClose: () => void
  onConfirm: () => void
}

const ASLogoutModal = (props: IASLogoutModalProps) => {
  const { isVisible, onClose, onConfirm } = props
  return (
    <Modal visible={isVisible} transparent={true} animationType="fade" onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.subContainer}>
          <Text style={styles.title}>Logout Confirmation</Text>
          <Text style={styles.message}>Are you sure you want to log out?</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonLabel}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.confirmButton]} onPress={onConfirm}>
              <Text style={[styles.buttonLabel, styles.confirmButtonLabel]}>Logout</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default ASLogoutModal
