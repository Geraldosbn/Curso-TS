import { Theme } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/styles";

export const styles = (theme: Theme) =>
  createStyles({
    input: {
      borderRadius: "5px",
      border: "solid #000",
      borderWidth: 1,
      padding: "0.3rem",
    }
  });
