import { useEffect, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import WebFont from 'webfontloader';
import { PrimeComponent } from './components/PrimeComponent';
import { ThemeSelector } from './components/ThemeSelector';

import { useTheme } from './hooks/useTheme';
import { GlobalStyles } from './theme/GlobalStyles';

//creamos un Container con styled de styled-components
const Container = styled.div`
  margin: 5px auto 5px auto;
`;

export const App = () => {
  const { actualTheme, isThemeLoaded, getFonts } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(actualTheme);

  console.log('APP', actualTheme);

  useEffect(() => {
    setSelectedTheme(actualTheme);
  }, [isThemeLoaded]);

  // load all the fonts
  useEffect(() => {
    console.log('loading fonts');
    console.log(getFonts());
    WebFont.load({ google: { families: getFonts() } });
  });

  if (!isThemeLoaded) {
    return <h5>theme not loaded</h5>;
  }
  return (
    <ThemeProvider theme={selectedTheme}>
      <GlobalStyles />
      texto normalito
      <Container>
        <h5>Container</h5>
        <p>This is inside the Container</p>
        source Code:
        <a href='https://github.com/manolinlao/react2023_themebuilder.git' target='_blank'>
          Click here.
        </a>
      </Container>
      <hr />
      <PrimeComponent />
      <hr />
      <ThemeSelector setter={setSelectedTheme} />
    </ThemeProvider>
  );
};
