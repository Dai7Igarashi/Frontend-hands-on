import * as React from 'react';
import styled from 'styled-components';

export interface GoodByProps {
  name: string;
  /***
   * `?` is Optional Properties.
   * It is not necessary to describe.
  ***/
  questionLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

const GoodBy = ({ name, questionLevel = 1, onIncrement, onDecrement }: GoodByProps) => {
  if (questionLevel <= 0) {
    throw new Error('You could be a little more enthusiastic :(');
  }

  return (
    <GoodByWrapper>
      <GreetingWrapper>
        GoodBy {name + getExclamationMarks(questionLevel)}
      </GreetingWrapper>
      <ButtonWrapper>
        <Button onClick={onDecrement}>-</Button>
        <Button onClick={onIncrement}>+</Button>
      </ButtonWrapper>
    </GoodByWrapper>
  );
}

const getExclamationMarks = (numChars: number) => {
  return Array(numChars + 1).join('?');
}

export default GoodBy;

const GoodByWrapper = styled.div`
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