import React from 'react'

import { MessageContainer, Icon, UserNameExist } from './styles'

interface MessageIconProps {
  isPositive?: boolean
}

const MessageIcon = ({ isPositive }: MessageIconProps) => {
  return (
    <MessageContainer>
      <Icon
        isPositive={isPositive}
        name={isPositive ? 'check' : 'exclamation-circle'}
        size={14}
      />
      <UserNameExist isPositive={isPositive}>
        {isPositive ? 'Válido' : 'Username existente'}
      </UserNameExist>
    </MessageContainer>
  )
}

export default MessageIcon
