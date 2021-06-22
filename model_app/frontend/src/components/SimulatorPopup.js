import { React, Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { withStyles } from "@material-ui/styles";

const styles = {
    text: {
        color: "white",
    },
    button: {

    },
}


class SimulatorPopup extends Component {
  constructor() {
    super();
    this.state = {
      open: true,
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Dialog
          open={this.state}
          onClose={() => this.setState({ open: false })}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"Simuluation Loading"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText className={classes.text} id="alert-dialog-description">
              Please wait while the simulation renders. Loading times may vary,
              but can be as long as 3 minutes.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.setState({ open: false })}
              color="primary"
              autoFocus
              className={classes.button}
            >
              Continue
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withStyles(styles)(SimulatorPopup);
