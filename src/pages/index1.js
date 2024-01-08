import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';
import Translate, {translate} from '@docusaurus/Translate';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

function HomePage() {
	return <Redirect to='/docs/'/>;
	'i18n/hi/docusaurus-plugin-content-docs/current' 
}

export default HomePage;
