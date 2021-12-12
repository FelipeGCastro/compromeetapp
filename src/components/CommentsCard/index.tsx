import React, { useEffect, useState } from 'react'
import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'
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

type Comments = {
  id: number
  user: {
    id: number
    avatar_url: string
    name: string
    username: string
  }
  text: string
}

interface ICommentsCardProps {
  meetId?: number
}

export const CommentsCard = ({ meetId }: ICommentsCardProps) => {
  const [commentInput, setCommentInput] = useState('')
  const [comments, setComments] = useState<Comments[]>([])
  const { user } = useAuth()

  useEffect(() => {
    const getComments = async () => {
      try {
        const result = await api.get(`comments/${meetId}`)
        setComments(result.data)
      } catch (error) {
        console.log('ERROR COMMENTS', error)
      }
    }
    if (meetId) getComments()
  }, [meetId])

  const handlePressSend = async () => {
    if (/\S/.test(commentInput)) {
      try {
        const result = await api.post('comments', {
          meetId: meetId,
          text: commentInput
        })
        setComments(prev => [...prev, { ...result.data, user }])
      } catch (error) {
        console.log(error)
      }
    }
  }

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
          <CommentWrapper reverse={comm.user.id === user.id} key={comm.id}>
            <UserMini reverse={comm.user.id === user.id} user={comm.user} />
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
        <SendButton onPress={handlePressSend}>
          <SendIcon />
        </SendButton>
      </InputWrapper>
    </Container>
  )
}
