import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface WebTaperProps {}

const StyledWebTaper = styled.div`
  color: pink;
`;

export function WebTaper(props: WebTaperProps) {
  return (
    <StyledWebTaper>
      <h1>Welcome to WebTaper!</h1>
    </StyledWebTaper>
  );
}

export default WebTaper;
