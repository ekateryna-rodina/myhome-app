import React from "react";
import styled from "styled-components";
import Button from "./Button.style";

const Label = styled.span<{ margin?: string }>`
  text-transform: capitalize;
  margin: ${(props) => (props.margin ? props.margin : "inherit")};
`;
const Visibility = styled.div`
  display: none;
`;
const AddPropertyButton = () => {
  return (
    <Visibility>
      <Button background={"secondary"} size={"large"}>
        <Label margin={"0 .5rem 0 0"}>+</Label>
        <Label>add property</Label>
      </Button>
    </Visibility>
  );
};

export default AddPropertyButton;
