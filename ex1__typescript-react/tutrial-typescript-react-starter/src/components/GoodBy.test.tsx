import * as React from 'react';
import * as enzyme from 'enzyme';
import GoodBy from './GoodBy';

it('renders the correct text when no question level is given', () => {
  const goodby = enzyme.shallow(<GoodBy name="Daniel" />);
  expect(goodby.find("GreetingWrapper").text()).toEqual("GoodBy Daniel!");
});

it('renders the correct text with an explicit question of 1', () => {
  const goodby = enzyme.shallow(<GoodBy name="Daniel" questionLevel={1} />);
  expect(goodby.find("GreetingWrapper").text()).toEqual("GoodBy Daniel!");
});

it('renders the correct text with an explicit question level of 5', () => {
  const goodby = enzyme.shallow(<GoodBy name="Daniel" questionLevel={5} />);
  expect(goodby.find("GreetingWrapper").text()).toEqual("GoodBy Daniel!!!!!");
});

it('throws when the question level is 0', () => {
  expect(() => {
    enzyme.shallow(<GoodBy name="Daniel" questionLevel={0} />);
  }).toThrow();
});

it('throws when the question level is negative', () => {
  expect(() => {
    enzyme.shallow(<GoodBy name='Daniel' questionLevel={-1} />);
  }).toThrow();
});
