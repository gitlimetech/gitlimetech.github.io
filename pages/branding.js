import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notification from '../components/Notification';
import imgApi from '~/public/images/imgAPI';
import brand from '~/public/text/brand';
import { withTranslation } from '../i18n';

const sectionMargin = (margin) => margin * 20;
const useStyles = makeStyles((theme) => ({
	mainWrap: {
		position: 'relative',
		width: '100%',
		overflow: 'hidden',
		background: theme.palette.background.paper,
		[theme.breakpoints.down('md')]: {},
	},
	containerWrap: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		margin: theme.spacing(5, 0),
		padding: theme.spacing(8, 0),
		'& > section': {
			position: 'relative',
		},
		'& h2': {
			fontSize: 36,
			margin: theme.spacing(6, 12, 3),
		},
		'& h4': {
			fontSize: 22,
			margin: theme.spacing(0, 12),
		},
		[theme.breakpoints.down('md')]: {
			margin: theme.spacing(2, 0),
			padding: theme.spacing(4, 0),
			'& h2': {
				fontSize: 32,
				margin: theme.spacing(3, 6),
			},
			'& h4': {
				fontSize: 20,
				margin: theme.spacing(0, 4),
			},
		},
	},
	bannerImg: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		margin: '0 auto',
		'& img': {
			maxWidth: '100%',
			[theme.breakpoints.down('md')]: {
				padding: theme.spacing(6, 10, 2),
			},
		},
	},
}));

function Branding(props) {
	const classes = useStyles();
	const { onToggleDark, onToggleDir, invert } = props;
	console.log(onToggleDark, onToggleDir, invert);
	return (
		<React.Fragment>
			<Head>
				<title>
					{brand.agency.name}
					&nbsp; - Branding
				</title>
			</Head>
			<CssBaseline />
			<div className={classes.mainWrap}>
				<Header
					onToggleDark={onToggleDark}
					onToggleDir={onToggleDir}
					invert={invert}
				/>
				<main className={classes.containerWrap}>
					<section className={clsx(classes.spaceTop, classes.spaceBottom)}>
						<div>
							<figure className={classes.bannerImg}>
								<img src={imgApi.carousel[3]} alt="cover" />
							</figure>
						</div>
						<Typography variant="h2" align="center" gutterBottom>
							Branding
						</Typography>
						<Typography variant="h4" align="center">
							What are the things we’re good at? films, advertising,
							photography, live stream video production, visual brand strategy,
							and communication design, to name a few.
						</Typography>
					</section>
				</main>
				<section className={classes.spaceTop}>
					<Footer />
				</section>
				<Notification />
			</div>
		</React.Fragment>
	);
}
Branding.propTypes = {
	onToggleDark: PropTypes.func.isRequired,
	onToggleDir: PropTypes.func.isRequired,
	invert: PropTypes.bool,
};
Branding.getInitialProps = async () => ({
	namespacesRequired: ['common', 'agency-landing'],
});
Branding.defaultProps = {
	invert: false,
};

export default withTranslation(['common', 'agency-landing'])(Branding);
