import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './List.module.scss';
import { Table } from 'react-bootstrap'

export const Lists = () => {
  return (
    <React.Fragment>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Mobile Phome</th>
            <th>Nationality</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>3</td>
            <td colSpan="4">Larry the Bird</td>
            <td>@twitter</td>
          </tr>
        </tbody>
      </Table>
    </React.Fragment>
  )
}
