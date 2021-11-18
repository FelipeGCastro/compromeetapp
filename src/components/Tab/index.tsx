import { LinearGradient } from 'expo-linear-gradient'
import React, { useState, useMemo } from 'react'
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import theme from '../../global/styles/theme'

interface TabProps {
  tabList?: string[]
  onTabPress?: (tab: string) => void
}
const list = ['Compromissos', 'Pessoas']
export const Tab = ({ tabList = list, onTabPress }: TabProps) => {
  const [activeTab, setActiveTab] = useState(tabList[0])

  const handleOnPress = (tabIndex: string) => {
    setActiveTab(tabIndex)

    if (!onTabPress) {
      return
    } else {
      onTabPress(tabIndex)
    }
  }

  return (
    <View style={styles.tabList}>
      {tabList?.map(tab => (
        <View key={tab}>
          <TouchableOpacity
            onPress={() => handleOnPress(tab)}
            style={[styles.tab]}
            accessibilityRole="tab"
          >
            <LinearGradient
              colors={
                tab === activeTab
                  ? [theme.colors.link, theme.colors.link]
                  : ['transparent', 'transparent']
              }
              style={styles.gradient}
            >
              <Text
                style={[styles.label, tab === activeTab && styles.tabInactive]}
              >
                {tab}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  tabList: {
    flexDirection: 'row',
    marginBottom: 20,
    paddingHorizontal: 4,
    justifyContent: 'flex-start'
  },
  tab: {
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4
  },
  gradient: {
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 40
  },
  label: {
    fontFamily: theme.fonts.regular,
    fontSize: 16,
    color: theme.colors.title
  },
  tabInactive: {
    color: theme.colors.textLight
  }
})
