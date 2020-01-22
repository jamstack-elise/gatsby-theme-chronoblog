module.exports = {
  siteMetadata: {
    siteTitle: 'Elise Plečnik - remote web developer & designer',
    siteDescription: 'Elise Plečnik is a remote JAMstack Developer',
    siteImage: '/Gatsby.png', // main image of the site for metadata
    siteUrl: 'https://elisejane.me',
    pathPrefix: '/',
    siteLanguage: 'en',
    ogLanguage: `en_US`,
    author: 'Elise Plečnik is a remote frontend wright.', // for example - 'Ivan Ganev'
    authorDescription: 'jamstack development && clean design.', // short text about the author
    avatar: '/avatar.png',
    twitterSite: '', // website account on twitter
    twitterCreator: '', // creator account on twitter
    social: [
      {
        icon: `github`,
        url: `https://github.com/Chronoblog/jamstack-elise`
      },
      {
        icon: `behance`,
        url: `https://www.behance.net/joyfullydesign`
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-theme-chronoblog',
      options: {
        uiText: {
          // ui text fot translate
          feedShowMoreButton: 'show more',
          feedSearchPlaceholder: 'search',
          cardReadMoreButton: 'read more →',
          allTagsButton: 'all tags'
        },
        feedItems: {
          // global settings for feed items
          limit: 50,
          yearSeparator: true,
          yearSeparatorSkipFirst: true,
          contentTypes: {
            links: {
              beforeTitle: '🔗 '
            }
          }
        },
        feedSearch: {
          symbol: '🔍'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Chronoblog Gatsby Theme`,
        short_name: `Chronoblog`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#3a5f7d`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: 'UA-XXXXXXXXX-X'
      }
    }
  ]
};
