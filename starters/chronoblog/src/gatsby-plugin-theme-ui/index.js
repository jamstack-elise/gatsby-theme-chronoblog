import chronoblogTheme from 'gatsby-theme-chronoblog/src/gatsby-plugin-theme-ui';

export default {
  ...chronoblogTheme,
  initialColorMode: 'light',
  colors: {
    ...chronoblogTheme.color,
    text: '#222',
    background: '#fff',
    link: '#222',
    primary: '#3a5f7d',
    secondary: '#5a809e',
    muted: '#feb008',
    modes: {
      ...chronoblogTheme.colors.modes,
      dark: {
        ...chronoblogTheme.colors.modes.dark,
        text: '#e0ecf1',
        link: '#e0ecf1',
        background: '#11426d',
        muted: '#0f4c81'
      }
    }
  },
  fontSizes: [14, 16, 18, 20, 22, 24, 28, 36],
  borderRadius: {
    ...chronoblogTheme.borderRadius,
    card: 6,
    button: 6,
    search: 6,
    code: 6,
    img: 6,
    authorBanner: 6
  },
  borderWidth: {
    ...chronoblogTheme.borderWidth,
    card: 2,
    search: 2
  },
  fonts: {
    ...chronoblogTheme.fonts,
    body: '-apple-system,BlinkMacSystemFont,Helvetica,Arial,sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace'
  }
};
