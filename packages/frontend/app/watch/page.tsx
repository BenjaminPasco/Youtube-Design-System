'use client';

import styled from '@emotion/styled';
import Recommandation from '@/components/Recommandation';
import { useAllVideos } from '@/hooks/videos';

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

export default function page() {
  const { data = [], isLoading, error } = useAllVideos();
  console.log('data', data);
  return (
    <LayoutContainer>
      <LeftColumn className="videoContainer">
        <Padding>
          <PlayerContainer className="player">Player</PlayerContainer>
          <div>Description</div>
        </Padding>
      </LeftColumn>
      <RecommandationsContainer className="recommendations">
        <Padding>
          {data.map((recommendation) => (
            <Recommandation
              key={recommendation.id}
              recommendation={recommendation}
            />
          ))}
        </Padding>
      </RecommandationsContainer>
    </LayoutContainer>
  );
}
