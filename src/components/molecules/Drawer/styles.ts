import { drawerWidth, toolbarHeight } from '@app/constants/styles'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme: Theme) => {
  const drawerClosedWidth = theme.spacing(0)
  const hover = '&:hover'
  return createStyles({
    grow: {
      flexGrow: 1
    },
    collapseContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      [hover]: { backgroundColor: 'white' }
    },
    title: {
      textDecoration: 'none',
      color: 'inherit'
    },
    container: {
      backgroundColor: 'white',
      height: '100vh',
      overflowY: 'hidden',
      display: 'flex',
      flexDirection: 'column'
    },
    contentContainer: {
      marginLeft: drawerClosedWidth,
      flexDirection: 'column',
      paddingBottom: theme.spacing(3),
      paddingLeft: 0,
      width: `calc(100% - ${drawerClosedWidth}px)`,
      maxHeight: `calc(100vh - ${toolbarHeight}px)`,
      height: `calc(100vh - ${toolbarHeight}px)`
    },
    drawer: {
      position: 'fixed',
      height: '100%',
      // top: toolbarHeight,
      // backgroundColor: '#fafafa',
      zIndex: 5,
      width: drawerClosedWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
      }),
      overflowX: 'hidden'
    },
    iconLabel: {
      display: 'flex',
      alignItems: 'center',

      margin: '5px 0px'
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      overflowX: 'hidden',
      width: drawerClosedWidth,
      [theme.breakpoints.up('sm')]: {
        width: drawerClosedWidth
      }
    },
    listItem: {
      overflowX: 'hidden',
      width: drawerWidth,
      paddingLeft: theme.spacing(1.5)
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(2),
      height: 102
    },
    headerLogo: { width: '100%', height: 70 }
  })
})
