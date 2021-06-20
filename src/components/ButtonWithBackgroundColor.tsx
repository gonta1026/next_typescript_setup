import { Button } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

export interface Props {
  backgroundColor: string;
  children: React.ReactNode;
}

const ButtonWithBackgroundColor: React.FC<Props> = (props: Props) => {
  return (
    <StyledButton variant="contained" background_color={props.backgroundColor}>
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled(Button)<{ background_color: string }>`
  background-color: ${(props) => props.background_color};
`;

export default ButtonWithBackgroundColor;
