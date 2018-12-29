import * as React from 'react';
import styled from 'styled-components';

export interface HelloProps {
  name: string;
  /***
   * `?` is Optional Properties.
   * It is not necessary to describe.
  ***/
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const Hello = ({ name, enthusiasmLevel = 1, onIncrement, onDecrement }: HelloProps) => {
  if (enthusiasmLevel <= 0) {
    throw new Error('You could be a little more enthusiastic :(');
  }

  return (
    <HelloWrapper>
      <GreetingWrapper>
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </GreetingWrapper>
      <ButtonWrapper>
        <Button onClick={onDecrement}>-</Button>
        <Button onClick={onIncrement}>+</Button>
      </ButtonWrapper>
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
const GreetingWrapper = styled.div``
GreetingWrapper.displayName = "GreetingWrapper";

const ButtonWrapper = styled.div``

const Button = styled.button`
  margin-left: 25px;
  margin-right: 25px;
  font-size: 40px;
  min-width: 50px;
`
