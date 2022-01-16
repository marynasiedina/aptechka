import styled from 'styled-components';
import { space, order, width, height, border, position } from 'styled-system';

export const IconWrapper = styled.div`
  ${space}
  ${order}
  ${width}
  ${border}
  ${height}
  ${position}

  user-select: none;
  cursor: ${({ cursor }) => cursor || 'pointer'};
`;
