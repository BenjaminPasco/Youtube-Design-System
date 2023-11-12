import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;

  padding: var(--space-1);
  border-radius: var(--border-radius-2);
  :hover {
    background-color: var(--primary-12);
    color: var(--primary-1);
  }
  :active {
    background-color: var(--primary-11);
  }
`;

const Video = styled.div`
  width: 160px;
  aspect-ratio: 16/9;
  background-color: black;

  border-radius: var(--border-radius-1);
`;

const Informations = styled.div`
  padding: var(--space-1);
  font-size: var(--font-size-3);
`;

const Title = styled.div`
  font-size: var(--font-size-4);
`;

export default function Recommandation() {
  return (
    <Container className="no-select">
      <Video />
      <Informations>
        <Title>Lorem Ipsum</Title>
        <div>Lorem Ipsum</div>
        <div>Lorem Ipsum</div>
      </Informations>
    </Container>
  );
}
