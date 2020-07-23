import NextHead from 'next/head';
import React from 'react';
import styled from 'styled-components';

import Packages from '../components/Packages';

const Header = styled.h1`
  text-align: center;
`;

const Index = () => (
  <>
    <NextHead>
      <meta charSet="UTF-8" />
      <title>procursus</title>

      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
    <Header>procursus</Header>
    <Packages />
  </>
);

export default Index;
