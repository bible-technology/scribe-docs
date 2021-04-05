import React, { useEffect } from 'react';
import { Redirect } from '@docusaurus/router';

function HomePage() {
	return <Redirect to='/docs/' />;
}

export default HomePage;
