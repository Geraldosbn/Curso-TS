import { Theme } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/styles";

export const styles = (theme: Theme) =>
  createStyles({
    button: {
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      backgroundColor: "#090",
      widht: '1rem',
      margin:"0 0.4rem",
      padding: "0.2rem",
      border: "none",
      borderRadius: "100rem",
    }
  });
