import Image from "next/image";
import React from "react";
import styled from "styled-components";
const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left: auto;
`;
const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin-right: 0.5rem;
`;
const Name = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.dark};
`;
const UserType = styled.span`
  font-size: 0.7rem;
  color: ${(props) => props.theme.gray};
`;

const StyledImage = styled.div`
  position: relative;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  border: ${(props) => `2px solid ${props.theme.dark}`};
`;
const User = () => {
  return (
    <UserContainer>
      <NameContainer>
        <Name>John Doe</Name>
        <UserType>Premium user</UserType>
      </NameContainer>
      <StyledImage>
        <Image
          src={
            "https://res.cloudinary.com/kariecloud/image/upload/v1631903590/IMAGE_2021-08-11_19_28_18_hor5og-modified_fco1w6.png"
          }
          alt=""
          layout="fill"
        ></Image>
      </StyledImage>
    </UserContainer>
  );
};

export default User;
