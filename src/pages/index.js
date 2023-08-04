import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';
import Translate, {translate} from '@docusaurus/Translate';

function HomePage() {
	return <Redirect to='/docs/' />;
}

export default HomePage;
