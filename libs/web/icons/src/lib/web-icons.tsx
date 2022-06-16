import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface WebIconsProps {}

const StyledWebIcons = styled.div`
  color: pink;
`;

export function WebIcons(props: WebIconsProps) {
  return (
    <StyledWebIcons>
      <h1>Welcome to WebIcons!</h1>
    </StyledWebIcons>
  );
}

export default WebIcons;
