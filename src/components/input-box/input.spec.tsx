import { render } from '@testing-library/react';
import React from 'react';
import { InputBox, InputBoxProps } from './input-box.component';

describe("<InputBox />", () => {
  const defaultProps: InputBoxProps = {
    icon: 'star',
    onTextChange: jest.fn(),
    placeholder: 'textbox',
    type: 'text',
    value: 'Test this textbox',
  };

  const getRender = (testProps:InputBoxProps = defaultProps ) => {
    return render(
      <InputBox {...testProps}/>
    )
  };

  it('should render the component properly', () => {
    const {getByTestId} = getRender();
    expect(getByTestId("icon")).toBeInTheDocument();
    expect(getByTestId('input-field')).toBeInTheDocument();
  });
});