import React from 'react'

// import AppBar from '@material-ui/core/AppBar'
import AppBar from '@app/components/molecules/AppBar'
import { IconButton } from '@material-ui/core'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
// import Toolbar from '@material-ui/core/Toolbar'
// import IconButton from '@material-ui/core/IconButton'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Slide from '@material-ui/core/Slide'
import { TransitionProps } from '@material-ui/core/transitions/transition'
import CloseIcon from '@material-ui/icons/Close'

import type { DialogProps } from '@material-ui/core/Dialog'
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide timeout={600} direction="left" ref={ref} {...props} />
})

type BaseProps = Pick<DialogProps, 'open' | 'fullScreen' | 'className' | 'maxWidth' | 'PaperProps'>

interface Props extends BaseProps {
  onClose?(): void
  children: React.ReactNode
  actions?: React.ReactNode
  title: React.ReactNode
  contentClassName?: string
}

const DialogLayout = (props: Props) => {
  const { open, onClose, fullScreen, children, actions, title, contentClassName, className, maxWidth, PaperProps } =
    props
  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={onClose}
      className={className}
      PaperProps={PaperProps}
      TransitionComponent={Transition}
      maxWidth={maxWidth}
    >
      {fullScreen ? (
        <AppBar
          title={title}
          actions={
            <IconButton edge="start" color="inherit" onClick={onClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          }
        />
      ) : null}
      {!fullScreen ? <DialogTitle>{title}</DialogTitle> : null}
      <DialogContent className={contentClassName}>{children}</DialogContent>
      {!fullScreen ? <DialogActions>{actions}</DialogActions> : null}
    </Dialog>
  )
}

export default DialogLayout
