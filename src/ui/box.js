import styled from 'styled-components';
import {
  top,
  left,
  right,
  space,
  width,
  order,
  color,
  bottom,
  height,
  border,
  zIndex,
  display,
  opacity,
  minWidth,
  maxWidth,
  flexWrap,
  fontSize,
  alignSelf,
  overflowY,
  maxHeight,
  borderTop,
  textAlign,
  fontWeight,
  alignItems,
  borderLeft,
  background,
  borderColor,
  borderRight,
  borderBottom,
  borderRadius,
  flexDirection,
  justifyContent,
} from 'styled-system';

export const Box = styled.div`
  ${color}
  ${space}
  ${width}
  ${order}
  ${zIndex}
  ${height}
  ${border}
  ${opacity}
  ${display}
  ${minWidth}
  ${maxWidth}
  ${fontSize}
  ${textAlign}
  ${overflowY}
  ${maxHeight}
  ${borderTop}
  ${fontWeight}
  ${background}
  ${borderLeft}
  ${borderRight}
  ${borderColor}
  ${borderBottom}
  ${borderRadius}
  
  cursor: ${({ cursor }) => cursor || 'default'};
  transform: ${({ transform }) => transform || 'default'};
  transition: ${({ transition }) => transition || 'default'};
  border-image: ${({ borderImage }) => borderImage || 'none'};
`;

export const FlexBox = styled(Box)`
  ${flexWrap}
  ${alignSelf}
  ${alignItems}
  ${flexDirection}
  ${justifyContent}

  display: ${({ display }) => display || 'flex'};
`;

export const RelativeBox = styled(Box)`
  ${top}
  ${left}
  ${right}
  ${bottom}

  position: relative;
`;

export const AbsoluteBox = styled(Box)`
  ${top}
  ${left}
  ${right}
  ${bottom}
  
  position: absolute;
  transform: ${({ transform }) => transform};
`;
