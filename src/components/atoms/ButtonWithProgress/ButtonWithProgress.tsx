import React from 'react'

import { Button, LinearProgress } from '@material-ui/core'
import { ButtonProps } from '@material-ui/core/Button'
import { withStyles, WithStyles } from '@material-ui/core/styles'

import { styles } from './styles'

type ExtendedTypes = WithStyles<typeof styles> &
  Pick<ButtonProps, 'disabled' | 'onClick' | 'type' | 'children' | 'className' | 'color'>

interface Props extends ExtendedTypes {
  fetching?: boolean
}

const ButtonWithProgress = (props: Props) => {
  const { className, classes, fetching, disabled, onClick, type, children, color = 'primary' } = props
  return (
    <Button
      className={className}
      disabled={disabled || fetching}
      onClick={onClick}
      variant="contained"
      color={color}
      type={type}
    >
      {fetching && <LinearProgress className={classes.progress} />}
      {children}
    </Button>
  )
}

export default withStyles(styles)(ButtonWithProgress)
