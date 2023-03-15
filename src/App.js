import './App.css';
import { useEffect, useState } from 'react';
import WebFont from 'webfontloader';
import { useTheme } from './hooks/useTheme';
import styled, { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './theme/GlobalStyles';
import { ThemeSelector } from './ThemeSelector';

//creamos un Container con styled de styled-components
const Container = styled.div(`margin:5px auto 5px auto`);

function App() {
  const { theme, themeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  // load all the fonts
  useEffect(() => {
    WebFont.load({ google: { families: getFonts() } });
  });

  // render if theme is loaded
  if (!themeLoaded) {
    return <h5>theme not loaded</h5>;
  }
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      <Container style={{ fontFamily: selectedTheme.font }}>
        <h1>Theme Builder</h1>
        This is a theming system with a Theme Switcher and Theme Builder. Do you want to see the
        source code?{' '}
        <a href='https://github.com/manolinlao/react2023_themebuilder.git' target='_blank'>
          Click here.
        </a>
        <hr />
        <ThemeSelector setter={setSelectedTheme} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
