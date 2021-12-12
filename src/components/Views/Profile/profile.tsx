import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";

const Container = styled(motion.div)`
  width: 90%;
  height: 95%;
  display: flex;
  background-color: grey;
  border-radius: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  width: -webkit-fill-available;
  height: auto;
  padding: 5px;
  display: flex;
  justify-contet: flex-start;
  align-items: flex-start;
  padding: 10px;
  color: white;

  font-size: 20px;
  font-family: Montserrat;
  font-weight: 500;
`;

const FormContainer = styled.div`
  width: 95%;
  height: 90%;
  border: 1px solid #ffffff57;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const StyledInput = styled.input`
  width: 70%;
  height: 30px;
  border-radius: 10px;
  padding: 10px;

  font-family: Montserrat;
  font-size: 14px;
  color: black;
  border: none;
  font-weight: 500;
  background-color: #ffffff6b;
`;

const SubmitButton = styled(motion.div)`
  width: 70%;
  border-radius: 10px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: Montserrat;
  font-weight: 500;
  color: white;
  background-color: #3a3838;
`;

const Profile = () => {
  return (
    <Container
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 25 }}
    >
      <Header>Profile</Header>
      <FormContainer>
        <StyledInput placeholder={"Firstname"} />
        <StyledInput placeholder={"Lastname"} />
        <StyledInput placeholder={"Age"} type="number" />
        <StyledInput placeholder={"Bloodgroup"} />
        <SubmitButton whileTap={{ scale: 0.89 }}>Save</SubmitButton>
      </FormContainer>
      <Outlet />
    </Container>
  );
};

export default Profile;
