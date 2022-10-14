import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'

import { StoreState } from '@app/redux'
import { actions as errorActions, selectors, State as ErrorState } from '@app/redux/ui/error'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText'
import DialogTitle from '@material-ui/core/DialogTitle'
import { withStyles } from '@material-ui/styles'

import { styles } from './styles'

interface Props {
  error: ErrorState['error']
  setError: typeof errorActions.setErrorMessage
}

const ErrorDialog = (props: Props) => {
  const { error, setError } = props
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (error) setVisible(true)
  }, [props.error])

  const handleClose = () => {
    setVisible(false)
    setTimeout(() => {
      setError('')
    }, 200)
  }
  return (
    <Dialog
      open={visible}
      onClose={handleClose}
      aria-labelledby="error-dialog"
      aria-describedby="error-dialog-description"
    >
      <DialogTitle id="error-dialog-title">Erro</DialogTitle>
      <DialogContent>
        <DialogContentText>{error}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          FECHAR
        </Button>
      </DialogActions>
    </Dialog>
  )
}

const mapStateToProps = (state: StoreState) => ({
  error: selectors.getError(state.ui.error)
})

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setError: errorActions.setErrorMessage
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(ErrorDialog))
