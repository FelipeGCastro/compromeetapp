import React from 'react'
import * as ImagePicker from 'expo-image-picker'
import BottomSheet from '../BottomSheet'

import { PickerButton, PickerButtonText } from './styles'

interface PhotoOptionsProps {
  visible: boolean
  setOpenModal: (bol: boolean) => void
  setImage: (img: string) => void
}

export const PhotoOptions = ({
  visible,
  setOpenModal,
  setImage
}: PhotoOptionsProps) => {
  let openImagePickerAsync = async () => {
    let permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync()
    setOpenModal(false)
    if (permissionResult.granted === false) {
      alert('Permission to access camera roll is required!')
      return
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1]
    })
    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri)
    }
  }

  let openCameraAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraPermissionsAsync()
    setOpenModal(false)
    if (permissionResult.granted === false) {
      alert('Permission to access camera is required!')
      return
    }

    let pickerResult = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1]
    })
    if (!pickerResult.cancelled) {
      setImage(pickerResult.uri)
    }
  }
  return (
    <BottomSheet
      gradient={false}
      visible={visible}
      onDismiss={() => setOpenModal(false)}
    >
      <PickerButton onPress={openCameraAsync}>
        <PickerButtonText>Tirar Foto</PickerButtonText>
      </PickerButton>
      <PickerButton onPress={openImagePickerAsync}>
        <PickerButtonText>Galeria</PickerButtonText>
      </PickerButton>
    </BottomSheet>
  )
}
