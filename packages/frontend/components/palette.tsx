'use client';

import styled from '@emotion/styled';

const ColorCase = styled.div<{ color: string }>`
  background-color: var(${({ color }) => color});
  font-size: small;
`;

export default function Palette() {
  const colors = ['primary', 'secondary', 'accent'].map((color) => {
    return (
      <div key={color} style={{ margin: '25px 0px' }}>
        {['light', 'dark'].map((mode) => {
          return (
            <div key={mode} style={{ display: 'flex', flexDirection: 'row' }}>
              {Array.from({ length: 12 }, (value, index) => {
                return (
                  <ColorCase
                    className={`${mode}`}
                    key={index}
                    color={`--${color}-${index + 1}`}
                  >
                    {`${color}${index + 1}`}
                  </ColorCase>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  });
  return <div>{colors}</div>;
}
