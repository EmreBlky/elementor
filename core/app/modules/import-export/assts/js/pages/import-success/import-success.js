import Layout from '../../templates/layout';
import Message from '../../ui/message/message';
import ImportSuccessList from './import-success-list/import-success-list';
import Footer from '../../shared/footer/footer';
import Heading from 'elementor-app/ui/atoms/heading';
import Text from 'elementor-app/ui/atoms/text';
import Grid from 'elementor-app/ui/grid/grid';
import Button from 'elementor-app/ui/molecules/button';

import './import-success.scss';

export default function ImportSuccess() {
	const getFooter = () => (
		<Footer justify="center" className="e-app-import-success__bottom_sentence">
			<Text variant="xs" tag="span">
				<Button color="link" text={ __( 'Click here', 'elementor' ) } className="e-app-import-success__click-here" url="/#" />
				{ __( 'to learn more about building your site with Elementor Kits', 'elementor' ) }
			</Text>
		</Footer>
	);

	return (
		<Layout type="import" footer={ getFooter() }>
			<section className="e-app-import-success">
				<Message>
					<img className="e-app-import-success__main-image" src={ elementorAppConfig.assets_url + 'images/go-pro.svg' } />

					<Heading variant="display-3">
						{ __( 'Congrats, the following kit elements were imported', 'elementor' ) }
					</Heading>

					<ImportSuccessList />

					<Grid container justify="center" className="e-app-import-success__button-container">
						<Button variant="contained" color="primary" text={ __( 'View live Site', 'elementor' ) } url="/#"/>
					</Grid>
				</Message>
			</section>
		</Layout>
	);
}
