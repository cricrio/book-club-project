import React from "react";
import styled from "styled-components";
import { getCafes } from "../data";
import { CafeCard } from "../components/CafeCard";

export const MainPage = () => {
  const cafes = getCafes();
  return <StyledDiv className="MainPage">{cafes.map(makeCafes)}</StyledDiv>;
};

const makeCafes = cafe => <CafeCard {...cafe} key={cafe.id} />;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  align-items: center;
`;
