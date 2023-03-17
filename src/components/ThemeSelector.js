import { useEffect, useState } from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import { getFromLS } from '../utils/storage';
import { ThemeCard } from './ThemeCard';
import { useTheme } from '../hooks/useTheme';
import { act } from 'react-dom/test-utils';

const Container = styled.ul`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
  padding: 5px;
`;

const Header = styled.h4`
  display: flex;
  justify-content: space-around;
`;

export const ThemeSelector = ({ setter }) => {
  const themesFromStore = getFromLS('all-themes');
  const [data, setData] = useState(themesFromStore.data);
  const [themeNames, setThemeNames] = useState([]);
  const { setMode, actualTheme } = useTheme();

  console.log('THEMESELECTOR', actualTheme);

  useEffect(() => {
    setThemeNames(_.keys(data));
  }, [data]);

  const handleClick = (newTheme) => {
    console.log('handleClck', newTheme);
    setMode(newTheme);
    setter(newTheme);
  };

  return (
    <div>
      <Header>Select a Theme from below</Header>
      actualTheme = {JSON.stringify(actualTheme)}
      <Container>
        {themeNames.length > 0 &&
          themeNames.map((theme) => (
            <ThemeCard theme={data[theme]} key={data[theme].id} onClick={handleClick} />
          ))}
      </Container>
    </div>
  );
};
