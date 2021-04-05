module.exports = {
	title: 'Autographa-docs',
	tagline: 'Documentation for Autographa',
	url: 'https://autographa-docs.netlify.app/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	favicon: 'img/logo.png',
	organizationName: 'friendsofagape', // Usually your GitHub org/user name.
	projectName: 'autographa-docs', // Usually your repo name.
	themeConfig: {
		navbar: {
			title: 'Autographa',
			logo: {
				alt: 'My Site Logo',
				src: 'img/autographa_logo.svg',
				srcDark: 'img/ag_logo.png',
			},
			items: [
				{
					to: 'docs',
					activeBasePath: 'docs',
					label: 'Docs',
					position: 'left',
				},
				{
					href: 'https://github.com/friendsofagape/autographa-docs',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					title: 'Docs',
					items: [
						{
							label: 'Style Guide',
							to: 'docs/',
						},
						{
							label: 'Second Doc',
							to: 'docs/doc2/',
						},
					],
				},
			],
			copyright: `Copyright © ${new Date().getFullYear()} Autographa Project, Inc. Built with Docusaurus.`,
		},
	},
	presets: [
		[
			'@docusaurus/preset-classic',
			{
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					// Please change this to your repo.
					editUrl:
						'https://github.com/friendsofagape/autographa-docs/edit/main/',
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						'https://github.com/friendsofagape/autographa-docs/edit/main/',
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
				},
			},
		],
	],
};
