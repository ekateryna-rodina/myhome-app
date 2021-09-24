import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../pages/_app";
import { IMediaQuery } from "../types/media";
import Button from "./Button.style";

const Label = styled.span<{ margin?: string }>`
  text-transform: capitalize;
  margin: ${(props) => (props.margin ? props.margin : "inherit")};
`;
const Visibility = styled.div<{ media: Partial<IMediaQuery> }>`
  display: none;
`;
const AddPropertyButton = () => {
  const mediaMap = useContext(Context).breakpoints;
  return (
    <Visibility media={mediaMap}>
      <Button background={"secondary"} size={"large"}>
        <Label margin={"0 .5rem 0 0"}>+</Label>
        <Label>add property</Label>
      </Button>
    </Visibility>
  );
};

export default AddPropertyButton;
