import cn from 'classnames'
import React, { useState } from 'react'

import { Collapse, CollapseProps, Fade } from '@material-ui/core'
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { Menu as DrawerIcon } from '@material-ui/icons'

import { Toolbar, ToolbarProps } from './Toolbar'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      // position: 'fixed',
      ...theme.mixins.toolbar,
      background: `linear-gradient(60deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
    },
    content: {
      ...theme.mixins.toolbar,
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
  })
)

type BaseType = Omit<ToolbarProps, 'classes' | 'nav'>

export interface AppBarProps extends BaseType {
  className?: string
  position?: MuiAppBarProps['position']
  children?: React.ReactNode
  onNavClick?(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void
  style?: MuiAppBarProps['style']
}

const AppBar = ({ className, position = 'static', actions, title, children, onNavClick, style }: AppBarProps) => {
  const classes = useStyles()
  const [fadeIn, setFadeIn] = useState(false)

  const onCollapse: CollapseProps['onEntered'] = (el, isAppearing) => {
    setFadeIn(isAppearing)
  }

  const nav = onNavClick ? (
    <IconButton color="inherit" onClick={onNavClick}>
      <DrawerIcon />
    </IconButton>
  ) : null
  return (
    <>
      <MuiAppBar className={cn(classes.appBar, className)} position={position} style={style}>
        <Toolbar title={title} actions={actions} nav={nav} />
        {children && (
          <Collapse appear enter in onEntered={onCollapse} timeout={400}>
            <div>
              <Fade in={fadeIn} enter timeout={600}>
                <div className={classes.content}>{children}</div>
              </Fade>
            </div>
          </Collapse>
        )}
      </MuiAppBar>
    </>
  )
}

export default AppBar
