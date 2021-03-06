import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const HeaderS = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background-color: rgba(20, 20, 20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  border-bottom: solid 3px
    ${(props) => (props.current ? "#3498db" : "transparent")};
  transition: border-bottom 0.3s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  margin-right: 20px;
  font-size: 2.5em;
  font-weight: 700;
  text-shadow: 1px 1px 2px grey, 0 0 0.3em white, 0 0 0.1em white;
`;

export default withRouter(({ location: { pathname } }) => (
  <HeaderS>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
    <Text>
      <SLink to="/">GOODFLIX</SLink>
    </Text>
  </HeaderS>
));
