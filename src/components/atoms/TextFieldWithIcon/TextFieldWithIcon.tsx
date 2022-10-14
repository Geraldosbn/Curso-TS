import React, { useState } from 'react'

import InputAdornment from '@material-ui/core/InputAdornment'
import TextField, { TextFieldProps } from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import withStyles, { WithStyles } from '@material-ui/styles/withStyles'

import styles from './styles'

type BaseProps = WithStyles<typeof styles> &
  Pick<TextFieldProps, 'value' | 'onChange' | 'required' | 'label' | 'type' | 'className' | 'InputProps' | 'autoFocus'>

interface Props extends BaseProps {}

const TextFieldWithIcon = (props: Props) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const { onChange, required, value, label, type, className, InputProps, classes, autoFocus } = props
  return (
    <TextField
      autoFocus={autoFocus}
      required={required}
      value={value}
      onChange={onChange}
      label={label}
      className={className}
      variant="outlined"
      type={type === 'password' ? (isPasswordVisible ? undefined : type) : type}
      InputProps={
        InputProps || {
          startAdornment:
            type === 'password' ? (
              <InputAdornment
                position="start"
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                className={classes.inputAdorment}
              >
                {isPasswordVisible ? <Visibility /> : <VisibilityOff />}
              </InputAdornment>
            ) : null,
        }
      }
    />
  )
}

export default withStyles(styles)(TextFieldWithIcon)
