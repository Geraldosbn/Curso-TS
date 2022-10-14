import { createStyles, Theme } from '@material-ui/core/styles'

export const styles = (theme: Theme) =>
  createStyles({
    root: { position: 'fixed', bottom: theme.spacing(5), right: theme.spacing(5) },
    popoverContent: { padding: theme.spacing(1.5) },
    msg: {
      fontWeight: 'bold',
      fontSize: '100%',
      overflowWrap: 'normal',
      // fontFamily: '"Permanent Marker", cursive'
    },
    infoBtn: { fontSize: 50, cursor: 'pointer' },
  })
