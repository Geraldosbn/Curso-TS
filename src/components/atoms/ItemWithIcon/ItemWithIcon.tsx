import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

interface Props {
  label: string
  className?: string
  children: React.ReactElement
  onClick?: () => void
}

const ItemWithIcon = (props: Props) => {
  const { className, label, children, onClick } = props
  return (
    <ListItem button className={className} onClick={onClick}>
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={label} />
    </ListItem>
  )
}

export default ItemWithIcon
