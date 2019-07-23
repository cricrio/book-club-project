import React, { useEffect, useState } from "react";

import styled, { css } from "styled-components";

export const Tabs = ({ children }) => {
  const [activatedIndex, setActivatedIndex] = useState(0);
  const [tabs, setTabs] = useState([]);
  const addTab = title => {
    setTabs(tabs => [...tabs, title]);
  };

  const renderedTabs = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      isActivated: activatedIndex === index,
      addTab
    })
  );

  return (
    <div>
      <TabHeader>
        {tabs.map((tab, index) => (
          <TabTitle
            onClick={() => setActivatedIndex(index)}
            isActivated={activatedIndex === index}
          >
            {tab}
          </TabTitle>
        ))}
      </TabHeader>
      {renderedTabs}
    </div>
  );
};

export const Tab = ({ children, title, isActivated, addTab }) => {
  useEffect(() => {
    addTab(title);
  }, []);
  return isActivated && children;
};

const TabHeader = styled.div`
  display: flex;
  justify-content: space-around;
  text-transform: capitalize;
`;

const TabTitle = styled.div`
  flex-grow: 1;
  padding: 1rem 0;
  text-align: center;
  border-radius: 50px;

  transition-duration: 0.1s;
  transition-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &:hover {
    cursor: pointer;
  }

  ${({ isActivated }) =>
    isActivated &&
    css`
      background-color: palevioletred;
    `}
`;
