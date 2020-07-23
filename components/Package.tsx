import React from 'react';
import styled from 'styled-components';

import PackageInfo from '../types/PackageInformation';

type Props = {
  info: PackageInfo;
};

const Container = styled.div`
  background: #f9f9f9;
  color: #1c1e20;
  display: flex;
  flex: none;
  margin: 0.4rem;
  padding: 0.4rem;
`;

const Package = ({ info }: Props) => (
  <Container>
    <span>{info.Package}</span>
  </Container>
);

export default Package;
