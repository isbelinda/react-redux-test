import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './List.module.scss';
import { Table } from 'react-bootstrap'
import { selectCandidates } from '../candidates/candidateSlice'

export const Lists = () => {
  const candidates = useSelector(selectCandidates);
  console.log(candidates)
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
          {
            candidates.map((candidate, index) => (
              <tr key={index}>
                <td></td>
                <td>{candidate.firstName} {candidate.lastName}</td>
                <td>{candidate.gender}</td>
                <td>{candidate.phone}</td>
                <td>{candidate.nationality}</td>
                <td>Edit/Delete</td>
              </tr>
            ))
          }
        </tbody>
      </Table>
    </React.Fragment>
  )
}
