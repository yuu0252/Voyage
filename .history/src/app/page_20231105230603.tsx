import Image from 'next/image';
import styled from 'styled-components';

export default function Home() {
  return (
    <StyledMainvisual>
      <div>
        <Image
          src="/sample.jpeg"
          fill
          objectFit="cover"
          objectPosition="center"
          alt="メインビジュアル"
        />
      </div>
    </StyledMainvisual>
  );
}

const StyledMainvisual = styled.section`
  div {
    width: 100%;
    height: 60px;
  }
`;
