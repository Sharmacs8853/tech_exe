import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Table } from 'reactstrap'


const ViewUsers = () => {
  
  let { users } = useSelector((store) => store);
 
  
  console.log("from user", users);
  return (
    <div className='view_container'>
      <Table border={1}>
        <thead>
          <tr>
            <th>Name</th>
            <th> Country Code </th>
            <th>Mobile</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jitendra</td>
            <td>+91</td>
            <td>7880500104</td>
          </tr>
          {
            users?.map((ele) => (
              <tr>
                <td>{ele.name}</td>
                <td>{ele.country_code}</td>
                <td>{ele.mobile}</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </div>
  )
}

export default ViewUsers