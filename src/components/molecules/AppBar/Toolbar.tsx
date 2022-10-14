import React from 'react'

import MuiToolbar from '@material-ui/core/Toolbar'

import { useStyles } from './styles'

export interface ToolbarProps {
  title?: React.ReactNode
  actions?: React.ReactNode
  nav?: React.ReactNode
}

export function Toolbar({ nav, title, actions }: ToolbarProps) {
  const classes = useStyles()
  return (
    <MuiToolbar>
      <div className={classes.nav}>{nav}</div>
      {title ? <div className={classes.grow}>{title}</div> : <div className={classes.grow} />}
      {actions}
    </MuiToolbar>
  )
}
