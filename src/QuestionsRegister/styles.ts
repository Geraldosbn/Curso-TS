import { Theme } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/styles";


export const styles = ((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      alignContent: 'center',
      justifyContent: 'center',
      backgroundColor: '#808080',
      width:'100vw',
      height: '40rem',
    },
    body: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh'
    }


  })
);