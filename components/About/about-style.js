import { makeStyles } from '@material-ui/core/styles';
import { lighten, alpha } from '@material-ui/core/styles/colorManipulator';
// import imgApi from '~/public/images/imgAPI';

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(0, 8),
    '& blockquote': {
      fontSize: 28,
      fontStyle: 'italic',
      color: '#fff',
      borderLeft: '4px solid',
      borderLeftColor: '#fff',
      paddingLeft: theme.spacing(5),
      margin: theme.spacing(5, 0, 0),
      [theme.breakpoints.down('xs')]: {
        paddingLeft: theme.spacing(2),
        margin: 0,
        fontSize: 20,
        lineHeight: '32px'
      }
    },
    '& h4': {
      color: '#ffff',
      [theme.breakpoints.down('sm')]: {
        textAlign: 'center',
        marginTop: theme.spacing(-3)
      }
    }
  },
  contentBg: {
    // background: theme.palette.primary.dark,
    // background: theme.palette.type === 'dark' ? theme.palette.primary.main : theme.palette.primary.dark,
    background: theme.palette.type === 'dark' ? alpha(theme.palette.primary.dark, 0.4) : lighten(theme.palette.primary.dark, 0),
    height: 520,
    padding: theme.spacing(3),
  },
  contentImg: {
    position: 'absolute',
    top: 140,
    left: -210,
    height: '100%',
    padding: theme.spacing(5, 8),
    // alignItems: 'center',
    '& img': {
      minWidth: '100%',
      height: '30%',
      // opacity: 0.6,
      transform: 'rotate(-90deg)',
    }
  },
  aboutHeading: {
    fontSize: 90,
    fontWeight: 'bold',
    color: theme.palette.text.secondary,
    transform: 'rotate(-90deg)',
    border: '1px solid #fff',
    marginTop: theme.spacing(10)
  },
  // puzzle: {
  //   position: 'relative',
  //   left: 60,
  //   top: -40,
  //   '& > div': {
  //     transform: 'rotate(45deg)',
  //     overflow: 'hidden',
  //     position: 'absolute',
  //     background: '#dedede'
  //   },
  //   '& span': {
  //     background: `url(${imgApi.agency[1]}) no-repeat fixed`,
  //     backgroundSize: 'auto 800px',
  //     transform: 'rotate(-45deg)',
  //     width: 560,
  //     height: 1000,
  //     display: 'block',
  //     position: 'relative',
  //     top: -110,
  //     left: 0,
  //   }
  // },
  pieceBig: {
    width: 300,
    height: 150,
    top: -175,
    left: 100,
    borderRadius: 32,
  },
  pieceSmallTop: {
    width: 100,
    height: 100,
    borderRadius: 24,
    top: 12,
    left: 170
  },
  pieceSmallBottom: {
    width: 100,
    height: 100,
    borderRadius: 24,
    top: 90,
    left: 90
  },
}));

export default useStyles;
