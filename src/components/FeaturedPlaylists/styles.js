import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('sm')]: {
      '& .MuiGrid-container': {
        justifyContent: 'center',
      },
    },
  },

  title: {
    color: '#333',
    fontWeight: 600,
  },

  card: {
    width: 330,
    height: 400,
  },
  media: {
    height: 280,
  },
}));

export default useStyles;
