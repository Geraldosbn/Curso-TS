import React from 'react'
import IconButton from '@material-ui/core/IconButton'
import ListItemText from '@material-ui/core/ListItemText'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { MoreVert as ContextIconVertical } from '@material-ui/icons'

export interface ContextItem {
  icon?: React.ReactElement
  label?: React.ReactNode
  onClick?(event: React.MouseEvent<HTMLLIElement, MouseEvent>): void
}

export interface ContextButtonProps {
  disabled?: boolean
  menuId: string
  className?: string
  menuClassName?: string
  icon?: React.ReactElement
  menuItems: ContextItem[]
}

export default function ContextButton({ menuId, disabled, menuItems, className, menuClassName }: ContextButtonProps) {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement>(null!)

  function handleClick(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setAnchorEl(event.currentTarget)
  }

  function handleClose() {
    setAnchorEl(null!)
  }

  function handleItemClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>, item: ContextItem) {
    handleClose()
    item.onClick && item.onClick(event)
  }

  return (
    <>
      <IconButton
        disabled={disabled}
        className={className}
        aria-controls={menuId}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ContextIconVertical />
      </IconButton>
      <Menu
        id={menuId}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={menuClassName}
      >
        {menuItems.map((item, index) => (
          <MenuItem key={index} onClick={(e) => handleItemClick(e, item)}>
            {/* <ListItemIcon>{item.icon}</ListItemIcon> */}
            <ListItemText primary={item.label} />
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}
