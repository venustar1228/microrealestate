import { Button, makeStyles } from '@material-ui/core';

const ShortcutButton = ({ Icon, label, disabled, onClick }) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      paddingTop: 10,
      paddingBottom: 10,
      color: theme.palette.info.contrastText,
      backgroundColor: theme.palette.info.main,
      '&:hover': {
        background: theme.palette.info.dark,
      },
    },
  }));
  const classes = useStyles();

  return (
    <Button
      startIcon={<Icon style={{ fontSize: 30 }} />}
      size="large"
      className={classes.root}
      fullWidth
      disabled={!!disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default ShortcutButton;
