import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './List.module.scss';
import { Table } from 'react-bootstrap'
import { selectCandidates, deleteCandidate, selectedCandidate } from '../candidates/candidateSlice'

export function Lists(props) {
  const candidates = useSelector(selectCandidates);
  const [isSelectAll, setIsSelectAll] = useState(false)
  const dispatch = useDispatch()

  const toggleSelectAll = (e) => {
    setIsSelectAll(!isSelectAll)
    if(!isSelectAll) {

    }
  }

  const onDelete = id => {
    dispatch(deleteCandidate(id))
  }

  const onEdit = (id) => {
    window.location = `?id=${id}`
  }

  return (
    <React.Fragment>
      <div className="row mb-3">
        <div className="col-sm-6">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value={isSelectAll} onChange={toggleSelectAll} />
          <label className="form-check-label">
            Select All {isSelectAll}
          </label>
        </div>
          <button type="button" className="btn btn-outline-danger">Delete</button>
        </div>
        <div className="col-sm-6"></div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Mobile Phone</th>
            <th>Nationality</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            candidates.length > 0 && candidates.map((candidate, index) => (
              <tr key={index}>
                <td></td>
                <td>{candidate.firstName} {candidate.lastName}</td>
                <td>{candidate.gender}</td>
                <td>{candidate.phone}</td>
                <td>{candidate.nationality}</td>
                <td>
                  <span onClick={() => props.handleOnEdit(candidate.id)}>Edit</span>/<a onClick={() => onDelete(candidate.id)}>Delete</a>
                </td>
              </tr>
            ))
          }
          {
            !candidates.length &&
              <tr>
                <td className="text-center" colSpan="6">Data Not Found.</td>
              </tr>
          }
        </tbody>
      </Table>
    </React.Fragment>
  )
}
