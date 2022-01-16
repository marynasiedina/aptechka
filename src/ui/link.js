import styled from 'styled-components';
import {
  space,
  color,
  width,
  height,
  border,
  opacity,
  display,
  fontSize,
  alignItems,
  fontWeight,
  borderColor,
  borderRadius,
  flexDirection,
  justifyContent,
} from 'styled-system';

export const StyledLink = styled.a`
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${display}
  ${opacity}
  ${display}
  ${fontSize}
  ${alignItems}
  ${fontWeight}
  ${borderColor}
  ${borderRadius}
  ${flexDirection}
  ${justifyContent}

  cursor: pointer;
  transition: ${({ transition }) => transition};
  text-transform: ${({ textTransform }) => textTransform};

  &:hover {
    color: ${({ hoveredColor }) => hoveredColor};
    background: ${({ hoveredBackground }) => hoveredBackground};
  }
`;
