import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackgroundGradient from '../../components/BackgroundGradient'
import { HeaderScreens } from '../../components/HeaderScreens'

import { Selector } from './Selector'
import { peopleRowOne, peopleRowTwo } from './Selector/data'
import { Container, TextContainer, SubTitle } from './styles'

export const Schedule = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <BackgroundGradient />
        <ScrollView keyboardShouldPersistTaps="handled">
          <HeaderScreens
            title="Bem Vindo"
            noBackButton
            onPress={async () => {}}
            disableButton={false}
            buttonLabel="Seguir"
          />
          <TextContainer>
            <SubTitle>
              Deixa a gente te ajudar a lembrar de quem te importa.
            </SubTitle>
          </TextContainer>
          <Selector
            title="Pessoas"
            rowOne={peopleRowOne}
            rowTwo={peopleRowTwo}
            onSelect={(item: string) => {}}
          />
        </ScrollView>
      </Container>
    </SafeAreaView>
  )
}
