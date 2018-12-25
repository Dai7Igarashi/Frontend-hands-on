import * as React from 'react';
import styled from 'styled-components';

export interface Props {
	name: string;
	/***
	 * `?` is Optional Properties.
	 * It is not necessary to describe.
	***/
	enthusiasmLevel?: number;
}

const Hello = ({ name, enthusiasmLevel = 1}: Props) => {
	if (enthusiasmLevel <= 0) {
		throw new Error('You could be a little more enthusiastic :(');
	}

	return (
		<HelloWrapper>
			<div className="greeting">
				Hello {name + getExclamationMarks(enthusiasmLevel)}
			</div>
		</HelloWrapper>
	);
}

const getExclamationMarks = (numChars: number) => {
	return Array(numChars + 1).join('!');
}

export default Hello;

const HelloWrapper = styled.div`
	text-align: center;
	margin: 20px;
	font-size: 48px;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
