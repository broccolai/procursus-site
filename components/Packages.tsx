import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import PackageInfo from '../types/PackageInformation';
import Package from './Package';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Packages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const execute = async () => {
      const status = await fetch('http://localhost:3000/api/files', {
        method: 'POST',
      });

      const data = await status.json();

      setData(data['packages']);
    };

    execute();
  }, []);

  return (
    <Container>
      {data.map((k: PackageInfo) => (
        <Package key={k.Package + ':' + k.Version} info={k} />
      ))}
    </Container>
  );
};

export default Packages;
