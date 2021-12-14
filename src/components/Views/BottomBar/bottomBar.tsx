import React from "react";
import styled from "styled-components";

import RoundedButton from "../RoundedButton/roundedButton";

const Container = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  height: auto;
  width: -webkit-fill-available;
  background-color: #bac2eb40;
  justify-content: center;
  align-items: center;
  z-index: 1000000;
`;

const ProfileIcon = () => {
  return (
    <svg
      style={{ width: "15px", height: "15px", color: "#ffffffa6" }}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-person"
      viewBox="0 0 16 16"
    >
      <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
    </svg>
  );
};

const MapIcon = () => {
  return (
    <svg
      style={{ width: "15px", height: "15px", color: "#ffffffa6" }}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-map"
      viewBox="0 0 16 16"
    >
      <path
        fill-rule="evenodd"
        d="M15.817.113A.5.5 0 0 1 16 .5v14a.5.5 0 0 1-.402.49l-5 1a.502.502 0 0 1-.196 0L5.5 15.01l-4.902.98A.5.5 0 0 1 0 15.5v-14a.5.5 0 0 1 .402-.49l5-1a.5.5 0 0 1 .196 0L10.5.99l4.902-.98a.5.5 0 0 1 .415.103zM10 1.91l-4-.8v12.98l4 .8V1.91zm1 12.98 4-.8V1.11l-4 .8v12.98zm-6-.8V1.11l-4 .8v12.98l4-.8z"
      />
    </svg>
  );
};
interface BottomBarProps {
  handleClick?: (nav: string) => void;
}

const BottomBar = ({ handleClick }: BottomBarProps) => {
  return (
    <Container>
      <RoundedButton to={""} icon={<MapIcon />}></RoundedButton>
      <RoundedButton to={"profile"} icon={<ProfileIcon />}></RoundedButton>
    </Container>
  );
};

export default BottomBar;
