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
import brand from '~/public/text/brand';
import { withTranslation } from '../i18n';

const sectionMargin = (margin) => margin * 20;
const useStyles = makeStyles((theme) => ({
	mainWrap: {
		position: 'relative',
		width: '100%',
		overflow: 'hidden',
		background: theme.palette.background.paper,
	},
	spaceBottom: {
		marginBottom: sectionMargin(theme.spacing()),
	},
	spaceTop: {
		paddingTop: sectionMargin(theme.spacing()),
	},
	containerWrap: {
		marginTop: theme.spacing(10),
		padding: theme.spacing(4),
		'& > section': {
			position: 'relative',
		},
	},
}));

function Branding(props) {
	const classes = useStyles();
	const { onToggleDark, onToggleDir, invert } = props;
	return (
		<React.Fragment>
			<Head>
				<title>
					{brand.agency.name}
					&nbsp; - Blank page
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
