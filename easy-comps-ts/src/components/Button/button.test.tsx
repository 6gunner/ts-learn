import React from 'react';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';

import {render, fireEvent} from '@testing-library/react'

import Button, {ButtonType, ButtonSize} from './button';



describe('Button Test', () => {

beforeEach(() => {
 
});

afterEach(() => {
});

 it('should render normal btn', () => {
  const onClick = jest.fn();
  const document = render(<Button data-testid="button" onClick={onClick}>Test</Button>);
  
  const btn = document.getByTestId('button');
  expect(btn).toHaveClass('btn', 'ez-btn');
  const element = document.getByText('Test');
  expect(element.textContent).toEqual('Test');
  fireEvent.click(btn);
  expect(onClick.mock.calls.length).toBe(1);

 });

 it('should render lg btn', () => {
  const document = render(<Button data-testid="button" btnSize="lg">Test Lg</Button>);
  const btn = document.getByTestId('button');
  expect(btn).toHaveClass('ez-btn-lg');
  const element = document.getByText('Test Lg');
  expect(element.textContent).toEqual('Test Lg');
 });

 it('should render link btn', () => {
  const document = render(<Button data-testid="button" btnType="link" href="https://www.baidu.com" target="_blank">Link</Button>);
  const btn = document.getByTestId('button');
  expect(btn).toHaveClass('ez-btn-link');
  const element = document.getByText('Link');
  expect(element.textContent).toEqual('Link');
  expect(btn).toHaveAttribute('href');
  const open = jest.fn();

  window.open = open;
  fireEvent.click(btn);
  expect(open).toBeCalled();
  // expect(window.location.href).toEqual('https://www.baidu.com')
 });

 
});