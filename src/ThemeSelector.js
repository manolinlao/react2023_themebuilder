import { useEffect, useState } from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { useTheme } from './hooks/useTheme';
import { getFromLS } from './utils/storage';
import { ThemeCard } from './ThemeCard';

const Container = styled.ul`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat (4, 1fr);
  margin-top: 3rem;
  padding: 10px;
`;

const Header = styled.h2`
  display: flex;
  justify-content: space-around;
`;

export const ThemeSelector = ({ setter }) => {
  const themesFromStore = getFromLS('all-themes');
  const [data, setData] = useState(themesFromStore.data);
  const [themeNames, setThemeNames] = useState([]);
  const { setMode } = useTheme();

  useEffect(() => {
    setThemeNames(_.keys(data));
  }, [data]);

  const handleClick = (newTheme) => {
    console.log('handleClck', newTheme);
    setter(newTheme);
  };

  return (
    <div>
      <Header>Select a Theme from below</Header>
      <Container>
        {themeNames.length > 0 &&
          themeNames.map((theme) => (
            <ThemeCard theme={data[theme]} key={data[theme].id} onClick={handleClick} />
          ))}
      </Container>
    </div>
  );
};
