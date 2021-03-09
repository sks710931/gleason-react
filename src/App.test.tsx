import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe("<App />", () => {

  const getRender = () =>{
    return render(
      <BrowserRouter>
      <App />
    </BrowserRouter>
    );
  }
  it('renders learn react link', () => {
    const {getByText} = getRender();
    const linkElement = getByText("G");
    expect(linkElement).toBeInTheDocument();
  });
});
