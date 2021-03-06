import React, { useState } from 'react';
import { InputBox } from '../components/input-box/input-box.component';

export const DashboardContent =() =>  {

  const [value, setValue] = useState("Shivam");
  const onChangeHandler = (data: string) => {
    setValue(data)
  }
  return (
    <div>
      <h1>Dashboard</h1>
      <hr/>
      <InputBox icon="perm_identity" onTextChange={($event) => onChangeHandler($event)} value={value} type="text" placeholder="Username"  />
    </div>
  )
}