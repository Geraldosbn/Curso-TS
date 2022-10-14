import cn from 'classnames'
import React from 'react'
import { RouteComponentProps } from 'react-router'

import casa from '@app/public/images/casa+familia.png'
import { actions as sessionActions } from '@app/redux/session'
import Divider from '@material-ui/core/Divider'
import MUIDrawer from '@material-ui/core/Drawer'

import { useStyles } from './styles'

type ExtendedTypes = RouteComponentProps

interface DrawerItemsProps extends ExtendedTypes {
  listItemClassName?: string
  toggleDrawer: () => void
  logout: Props['logout']
}

type BaseProps = RouteComponentProps

export interface Props extends BaseProps {
  drawerOpen: boolean
  toggleDrawer: () => void
  logout: typeof sessionActions.logout
  Items?: React.ComponentType<DrawerItemsProps>
}

const Drawer = (props: Props) => {
  const { drawerOpen, toggleDrawer, Items, logout, ...routeProps } = props

  const classes = useStyles()

  return (
    <MUIDrawer
      variant="temporary"
      open={drawerOpen}
      className={cn(classes.drawer, {
        [classes.drawerOpen]: drawerOpen,
        [classes.drawerClose]: !drawerOpen
      })}
      classes={{
        paper: cn(classes.drawer, {
          [classes.drawerOpen]: drawerOpen,
          [classes.drawerClose]: !drawerOpen
        })
      }}
      onBackdropClick={() => toggleDrawer()}
    >
      <div className={classes.header}>
        <img src={casa} className={classes.headerLogo} alt="Camedics Logo" />
      </div>
      <Divider />
      {Items ? (
        <Items
          logout={logout}
          listItemClassName={classes.listItem}
          toggleDrawer={toggleDrawer}
          {...routeProps}
        />
      ) : null}
      {/* <DrawerItems listItemClassName={classes.listItem} toggleDrawer={toggleDrawer} {...routerProps} /> */}
      {/* <div className={classes.grow} /> */}
      {/* <Divider />       */}
      {/* <div className={cn(classes.collapseContainer)} onClick={() => toggleDrawer()}>
        <Typography className={classes.iconLabel} variant="h5">
          <DoubleArrowIcon fontSize="large" className={cn({ [style.arrowIconOpened]: drawerOpen })} />
          {drawerOpen ? 'Colapsar' : null}
        </Typography>
      </div> */}
    </MUIDrawer>
  )
}

export default Drawer
