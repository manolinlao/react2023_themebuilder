import { useEffect, useState } from 'react';
import { getFromLS, setToLS } from '../utils/storage';
import _ from 'lodash';

export const useTheme = () => {
  const allThemes = getFromLS('all-themes');
  const firstTheme = Object.values(allThemes.data)[1];

  const [actualTheme, setActualTheme] = useState(firstTheme);
  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  const setMode = (mode) => {
    console.log('SETMODE', mode);
    setToLS('theme', mode);
    setActualTheme(mode);
  };

  const getFonts = () => {
    const allFonts = _.values(_.mapValues(allThemes.data, 'font'));
    return allFonts;
  };

  useEffect(() => {
    const localTheme = getFromLS('actual-theme');
    localTheme ? setActualTheme(localTheme) : setActualTheme(firstTheme);
    setIsThemeLoaded(true);
  }, []);

  return { actualTheme, isThemeLoaded, setMode, getFonts };
};
