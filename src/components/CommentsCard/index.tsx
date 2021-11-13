import React, { useState } from 'react'
import { UserMini } from '../UserCard/UserMini'

import {
  Container,
  HeaderWrapper,
  MockView,
  SeeAllButton,
  SeeAllText,
  Title,
  CommentText,
  Comments,
  CommentWrapper,
  InputWrapper,
  SendButton,
  SendIcon,
  CommentInput
} from './styles'

const commentsMock: Comments[] = [
  {
    id: 'comment5156s1a15da56s1f',
    text: 'Olá, só para lembrar que vou estar aguardando em frente a sorveteria',
    user: {
      user_id: 'user315315',
      avatarUrl: 'http://github.com/felipegcastro.png',
      name: 'Luiz Felipe Castro'
    }
  }
]
type Comments = {
  id: string
  user: {
    user_id: string
    avatarUrl: string
    name: string
  }
  text: string
}

interface ICommentsCardProps {
  comments?: Comments[]
}

export const CommentsCard = ({ comments = [] }: ICommentsCardProps) => {
  // Remove commentsMock
  const [commentInput, setCommentInput] = useState('')
  return (
    <Container>
      <HeaderWrapper>
        <MockView />
        <Title>Comentários</Title>
        <SeeAllButton>
          <SeeAllText>Ver tudo</SeeAllText>
        </SeeAllButton>
      </HeaderWrapper>
      <Comments>
        {comments.map(comm => (
          <CommentWrapper key={comm.id}>
            <UserMini user={comm.user} />
            <CommentText>{comm.text}</CommentText>
          </CommentWrapper>
        ))}
      </Comments>
      <InputWrapper>
        <CommentInput
          value={commentInput}
          onChangeText={setCommentInput}
          multiline
          placeholder="Escrever Comentários"
        />
        <SendButton>
          <SendIcon />
        </SendButton>
      </InputWrapper>
    </Container>
  )
}
