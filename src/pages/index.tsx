import React, { useEffect } from 'react';
import styled from 'styled-components';
import ApiClient from '../network/ApiClient';
import { Box, Button } from '@material-ui/core';
import ButtonWithBackgroundColor from '../components/ButtonWithBackgroundColor';

const Home: React.FC = () => {
  useEffect(() => {
    (async () => {
      const result = await ApiClient.getRequest('');
      console.log(result);
    })();
  });

  return (
    <>
      <Box>
        <Button color="primary" variant="contained">
          プライマリー
        </Button>
        <StyledButton variant="contained">みどり</StyledButton>
        <ButtonWithBackgroundColor backgroundColor="yellow">きいろ</ButtonWithBackgroundColor>
        <RedText>あか</RedText>
      </Box>
    </>
  );
};

const RedText = styled.span`
  font-size: 50px;
  color: red;
`;

const StyledButton = styled(Button)`
  background-color: green;
`;

export default Home;
