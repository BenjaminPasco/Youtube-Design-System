'use client';

import styled from '@emotion/styled';
import Recommandation from '@/components/Recommandation';

const LayoutContainer = styled.div`
  --recommendations-min-width: 300px;
  --recommendations-growth: 100px;

  width: 100%;

  .videoContainer {
    flex-grow: 1;
  }

  // 764px = breakpoint
  @media (764px < width) {
    display: flex;
    flex-direction: row;

    .videoContainer {
      flex-grow: 0;
      flex-basis: calc(var(--breakpoint) - var(--recommendations-min-width));
    }
    .recommendations {
      flex-grow: 1;
      max-width: calc(
        var(--recommendations-min-width) + var(--recommendations-growth)
      );
    }
  }
  // 864px = breakpoint + recommandations growth
  @media (864px < width) {
    .videoContainer {
      flex-grow: 1;
    }
    .recommendations {
      flex-grow: 0;
      flex-basis: calc(
        var(--recommendations-min-width) + var(--recommendations-growth)
      );
    }
  }
`;

const LeftColumn = styled.div``;

const PlayerContainer = styled.div`
  aspect-ratio: 16/9;

  background-color: black;
`;

const RecommandationsContainer = styled.div``;

const Padding = styled.div`
  padding: var(--space-2);
`;

const recommendations = Array.from({ length: 50 }, (value, index) => {
  return <Recommandation key={index} />;
});

export default function page() {
  return (
    <LayoutContainer>
      <LeftColumn className="videoContainer">
        <Padding>
          <PlayerContainer className="player">Player</PlayerContainer>
          <div>Description</div>
        </Padding>
      </LeftColumn>
      <RecommandationsContainer className="recommendations">
        <Padding>{recommendations}</Padding>
      </RecommandationsContainer>
    </LayoutContainer>
  );
}
