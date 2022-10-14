import { Theme, createStyles } from '@material-ui/core/styles'

export const styles = (theme: Theme) => {
  return createStyles({
    progress: {
      bottom: 0,
      margin: "1rem",
      width: '100%',
      position: 'absolute'
    }
  })
}
