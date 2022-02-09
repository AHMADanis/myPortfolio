import React from 'react';
import styled, { css } from 'styled-components';
import { ImUser } from 'react-icons/im';
import { MdEmail, MdPhone, MdLocationPin } from 'react-icons/md';
import { Text } from '../common';

const IconStyler = styled.span`
	color: ${(props) => props.color};
	& svg {
		${({ size }) =>
    size &&
    css`
				width: ${size};
				height: ${size};
			`}	
	}`;

export const IconTextWrapper = styled.div`
	display: flex;
	align-items: center;
 padding: ${(props) => props.padding};
`;


const Icon = ({ children, ...props }) => {
  return <IconStyler {...props}>{children}</IconStyler>;
};

const GenIcon = () => {
  return (
    <>
      <IconTextWrapper padding='10px'>
        <Icon color="gray" size="14px"><ImUser /></Icon>
        <Text color="gray" size="14px">Name</Text>
      </IconTextWrapper>
      <Text color='white'>Anees Ahmad</Text>

      <IconTextWrapper padding='10px'>
        <Icon color="gray" size="14px"><MdEmail /></Icon>
        <Text color="gray" size="14px">Email</Text>
      </IconTextWrapper>
      <Text color='white'>inbox.ahmad.a@gmail.com</Text>

      <IconTextWrapper padding='10px'>
        <Icon color="gray" size="14px"><MdPhone /></Icon>
        <Text color="gray" size="14px">Phone</Text>
      </IconTextWrapper>
      <Text color='white'>+46 721262770</Text>

      <IconTextWrapper padding='10px'>
        <Icon color="gray" size="14px"><MdLocationPin /></Icon>
        <Text color="gray" size="14px">Address</Text>
      </IconTextWrapper>
      <Text color='white'>Gymnasistgatan 33C 21551 Malmö</Text>

    </>
  );
};

export default GenIcon;
