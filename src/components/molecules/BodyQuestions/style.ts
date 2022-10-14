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
    answerInputCreate: {
      display: "flex",
      displayDirection: "row",
      alignItems:"center",
      justifyContent:"center"

    },
    buttonCreate: {
      margin: "0.5rem",
      backgroundColor: "#090",
      color: "#fff",
      border: 'none'
    },
    buttonDelete: {
      margin: "0.5rem",
      backgroundColor: "#900",
      color: "#fff",
      border: 'none'
    },
    answerInput: {
      display: "flex",
      flexDirection:"row",
      marginTop: "1rem",
      alignItems:"center",
      justifyContent:"center"
    }
  });
