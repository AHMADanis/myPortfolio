import styled, { css } from 'styled-components'

export const Text = styled.p`
	padding-left: 10px;
		color: ${(props) => props.color};
	${({ size }) =>
		size &&
		css`
			font-size: ${size};
		`}`;