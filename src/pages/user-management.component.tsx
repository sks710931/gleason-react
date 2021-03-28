/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { IUser } from "../data/IUser";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";


export const UserManagement = () => {
  const endPoint = "https://localhost:44331/";
  const {getAccessTokenSilently} = useAuth0();

  const [users, setUsers] = useState<IUser[]>();
  useEffect(() => {
    const getUsersAsync = async () => {
      const token = await getAccessTokenSilently({
        audience:"https://shivam-singh-blog-api.azurewebsites.net",
        scope:'all:all'
      });
      getUsers(token);
    }
    getUsersAsync();
  },[]);

  const getUsers =(token: string) => {
    console.log(token);
    axios.get<IUser[]>(endPoint + "api/Login").then((response) => {
      if (response.status === 200) setUsers(response.data);
    });
  }
  const actionHandler = (e: ActionClick) => {
    switch(e.action){
      case "View": 
        break;
      case "Edit":
        break;
      case "Delete":
          deleteHandler(e.userId);
        break;
      default:
        break;
    }
  }

 const deleteHandler =(id: number) => {
   axios.delete<boolean>(endPoint + "api/Login/delete?id="+ id)
    .then(response => {
      if(response.data){
        alert("user deleted");
        getUsers("delete handler");
      }
    })
 }
  return (
    <div className="user-management-container">
      <div className="user-menu">
        <div className="div-head">
          <h3 className="heading">User Management</h3>
        </div>
        <div className="div-btn">
          <button className="btn">Add User</button>
        </div>
      </div>
      <hr />

      <table id="table">
        <thead>
        <tr>
          <th className="table-col">Name</th>
          <th className="table-col">Email</th>
          <th className="table-col">Username</th>
          <th className="table-col">Actions</th>
        </tr>
        </thead>

        <tbody>
        {users?.map((user) => {
        return (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.username}</td>
            <td>
              <button onClick={() => actionHandler({action:"View", userId: user.id})} className="btn">View</button>
              <button onClick={() => actionHandler({action:"Edit", userId: user.id})} className="btn">Edit</button>
              <button onClick={() => actionHandler({action:"Delete", userId: user.id})} className="btn">Delete</button>
            </td>
          </tr>
        )
      })}
        </tbody>
      </table>
    </div>
  );
};


interface ActionClick{
  action: string;
  userId: number;
}