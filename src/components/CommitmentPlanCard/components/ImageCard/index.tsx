import React from 'react'

import {
  CommitmentImageContainer,
  CommitmentImage,
  ExpandAndMinimizeButton,
  ExpandIcon,
  MinimizeIcon
} from './styles'

interface ImageCardProps {
  image_url: string
  expanded: boolean
  setExpanded: (exp: boolean) => void
}
export const ImageCard = ({
  image_url,
  expanded,
  setExpanded
}: ImageCardProps) => {
  function handleExpandedButton() {
    setExpanded(!expanded)
  }
  return (
    <CommitmentImageContainer expanded={expanded}>
      <CommitmentImage
        expanded={expanded}
        resizeMode="contain"
        source={{ uri: image_url }}
      />
      <ExpandAndMinimizeButton
        expanded={expanded}
        onPress={handleExpandedButton}
      >
        {expanded ? <MinimizeIcon /> : <ExpandIcon />}
      </ExpandAndMinimizeButton>
    </CommitmentImageContainer>
  )
}
