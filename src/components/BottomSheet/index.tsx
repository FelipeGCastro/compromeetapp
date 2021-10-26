// original source: https://gist.github.com/pedrocunha/dbecbbf0223e1aff48aaebea5461d30e 🙇
import React, { ReactNode, useEffect, useRef } from 'react'
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  View,
  TouchableWithoutFeedback
} from 'react-native'

interface BottomSheetProps {
  onDismiss: () => void
  visible: boolean
  children: ReactNode
}

export default (props: BottomSheetProps) => {
  const screenHeight = Dimensions.get('screen').height
  const panY = useRef(new Animated.Value(screenHeight)).current

  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true
  })

  const closeAnim = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true
  })

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1]
  })

  const handleDismiss = () => {
    closeAnim.start()
    props.onDismiss()
  }

  useEffect(() => {
    let checker = true
    if (checker) {
      resetPositionAnim.start()
    }
    return () => {
      checker = false
    }
  }, [resetPositionAnim])

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, { dy: panY }], {
        useNativeDriver: false
      }),
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 0 && gs.vy > 0.2) {
          return handleDismiss()
        }
        return resetPositionAnim.start()
      }
    })
  ).current

  return (
    <Modal
      animated
      animationType="fade"
      visible={props.visible}
      transparent
      onRequestClose={handleDismiss}
    >
      <TouchableWithoutFeedback onPress={handleDismiss}>
        <View style={styles.overlay}>
          <Animated.View
            style={{
              ...styles.container,
              transform: [{ translateY: translateY }]
            }}
            {...panResponders.panHandlers}
          >
            <View style={styles.sliderIndicatorRow}>
              <View style={styles.sliderIndicator} />
            </View>
            {props.children}
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    flex: 1,
    justifyContent: 'flex-end'
  },
  container: {
    backgroundColor: 'white',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    minHeight: 200
  },
  sliderIndicatorRow: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sliderIndicator: {
    backgroundColor: '#CECECE',
    height: 4,
    width: 45
  }
})
