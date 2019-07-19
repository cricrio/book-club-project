import React from "react";
import styled from "styled-components";
import { getCafes } from "./data";
import { CafeInfo } from "./CafeInfo";

export const MainPage = () => {
  const cafes = getCafes();
  return <StyledDiv className="MainPage">{cafes.map(makeCafes)}</StyledDiv>;
};

const makeCafes = cafe => <CafeInfo {...cafe} key={cafe.id} />;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`;
