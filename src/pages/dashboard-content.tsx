import React from 'react';
import { useAccessToken } from '../hooks/useAccessToken';

export const DashboardContent =() =>  {

  const token = useAccessToken();
  return (
    <div>
      <h1>Dashboard</h1>
      <p>{token}</p>
      <hr/>
      </div>
  )
}