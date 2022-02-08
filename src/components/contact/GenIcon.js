import React from "react";
import { ReactSVG } from "react-svg";
import styled, { css } from "styled-components";
import { FaUserTie } from 'react-icons/fa';


// https://freeicons.io/icon-list/iconly-essential-icons

const StyledSVGIcon = styled(FaUserTie)`
  svg {
    fill: black;
    ${({ size }) =>
        size &&
        css`
        width: ${size};
        height: ${size};
      `}
    ${({ transform }) =>
        transform &&
        css`
        transform: ${transform};
      `}
    path {
      ${({ color }) =>
        color &&
        css`
          fill: ${color};
        `}
    }
  }
`;

const GenIcon = props => {
    return (
        <StyledSVGIcon
            src={`/icons/${props.name}.svg`}
            color={props.color}
            size={props.size}
            transform={props.transform}
        />
    );
};

export default GenIcon;