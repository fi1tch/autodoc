import React from 'react';
import styled from 'react-emotion'
import { Link } from 'react-router-dom';

const Wrapper = styled("header")`
    display: flex;
    color: #004C74;
    justify-content: center;
`


const Header = () => (
  <Wrapper>
      <Link style={{ textDecoration: 'none', color: '#004C74' }} to="/">
          <h1>Autodoc</h1>
      </Link>
  </Wrapper>
);

export default Header;
