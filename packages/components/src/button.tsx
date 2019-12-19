import React from "react";

import styled from "@emotion/styled";
import { Network } from "@starter/utils";

interface TypedButtonProps {
  label: string;
}

const StyledButton = styled.button`
  font-size: 2em;
  padding: 0.5em 1em;
  border: 1px solid #ddd;
  background: #ff0000;
  color: white;
`;
const TypedButton: React.SFC<TypedButtonProps> = (props: TypedButtonProps) => {
  const net: Network = new Network();
  net.sayHello(`World`);

  return <StyledButton>{props.label}</StyledButton>;
};

export default TypedButton;
