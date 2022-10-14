import { Theme } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/styles";

export const styles = (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#fff",
      width: "20rem",
      height: "80%%",
      margin: "0",
      padding: "1rem",
      textAlign: "center"
    },
    input: {
      borderRadius: "5px",
      border: "solid #000",
      borderWidth: 1,
      padding: "0.3rem",
    },
  });
