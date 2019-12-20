import React from "react";

import styled from "@emotion/styled";
// import { Network } from "@starter/utils";

interface TypedButtonProps {
  label: string;
}

const StyledDiv = styled.div`
  padding: 20px;
`;

const StyledButton = styled.button`
  font-size: 2em;
  padding: 0.5em 1em;
  border: 1px solid #ddd;
  background: #0f0;
  color: white;
  border-radius: 8px;
`;
const TypedButton: React.SFC<TypedButtonProps> = (props: TypedButtonProps) => {
  return (
    <StyledDiv>
      <StyledButton>{props.label}</StyledButton>
    </StyledDiv>
  );
};

export default TypedButton;
