import cn from 'classnames'
import React from 'react'

import CircularProgressMUI from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'

import { useStyles } from './styles'

interface Props {
  className?: string
  root?: boolean
}

const CircularProgress = (props: Props) => {
  const classes = useStyles()
  return (
    <Container
      className={cn(classes.container, { [classes.allContainer]: props.root })}
    >
      <CircularProgressMUI className={props.className} color="secondary" />
    </Container>
  )
}

export default CircularProgress
