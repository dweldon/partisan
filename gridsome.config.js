const DESCRIPTION = `Partisan Management Group is a highly successful, early stage venture capital
investor in medical device and drug delivery companies with an occasional investment in specialty
pharmaceuticals.`;

module.exports = {
  icon: './src/assets/images/rocks.jpg',
  siteUrl: 'http://partisanmgmt.com/',
  siteName: 'Partisan Management Group',
  siteDescription: DESCRIPTION,
  plugins: [
    { use: '@gridsome/plugin-sitemap' },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/investments/*.md',
        typeName: 'Investment',
      },
    },
  ],
  transformers: {
    remark: {
      externalLinksRel: ['noopener', 'noreferrer'],
      externalLinksTarget: '_blank',
    },
  },
};
