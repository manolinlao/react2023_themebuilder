import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100px;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid #000;
`;

const ThemedButton = styled.button`
  border: 0;
  display: inline-block;
  padding: 12px 24px;
  font-size: 14px;
  border-radius: 4px;
  margin-top: 5px;
  width: 100%;
  cursor: pointer;
`;

export const ThemeCard = ({ theme, onClick }) => {
  console.log('ThemeCard', theme);

  return (
    <Wrapper
      style={{
        backgroundColor: theme.colors.body,
        color: theme.colors.text,
        fontFamily: theme.font
      }}
    >
      <span>click on the button to set this theme</span>

      <ThemedButton
        onClick={() => onClick(theme)}
        style={{
          backgroundColor: theme.colors.button.background,
          color: theme.colors.button.text,
          fontFamily: theme.font
        }}
      >
        {theme.name}
      </ThemedButton>
    </Wrapper>
  );
};
