import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'react-bootstrap'
import { selectCandidates, deleteCandidate, deleteSelected } from '../candidates/candidateSlice'

export function Lists(props) {
  const [allCandidates, setAllCandidates] = useState([])
  const candidates = useSelector(selectCandidates);
  const [isSelectAll, setIsSelectAll] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    setAllCandidates(candidates)
  }, [candidates])

  const toggleSelectAll = (e) => {
    setIsSelectAll(!isSelectAll)
    let updateCandidates = allCandidates.map(candidate => {
      return {
        ...candidate,
        checked: !isSelectAll
      }
    })

    setAllCandidates(updateCandidates)
  }

  const onDelete = id => {
    dispatch(deleteCandidate(id))
    setIsSelectAll(false)
  }

  const onDeleteSelected = () => {
    let getDeleteCandidates = allCandidates.filter(candidate => candidate.checked).map(item => {
      if(item.checked) {
        return item.id
      }
    })

    console.log(getDeleteCandidates)

    dispatch(deleteSelected(getDeleteCandidates))
  }

  const selectCheckbox = (id) => {
    let index = allCandidates.findIndex(item => item.id === id)
    let candidate = allCandidates[index]
    let data = {
      ...candidate,
      checked: !candidate.checked
    }

    let updateCandidates = [
      ...allCandidates.slice(0, index),
      data,
      ...allCandidates.slice(index+1, allCandidates.length)
    ]

    setAllCandidates(updateCandidates)
    setIsSelectAll(false)
  }

  return (
    <React.Fragment>
      <div className="row mb-3">
        <div className="col-sm-6">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value={isSelectAll} onChange={toggleSelectAll} />
          <label className="form-check-label">
            Select All
          </label>
        </div>
          <button type="button" className="btn btn-outline-danger" onClick={() => onDeleteSelected()}>Delete</button>
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
            allCandidates.length > 0 && allCandidates.map((candidate, index) => (
              <tr key={index}>
                <td>
                  <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" checked={candidate.checked}
                      value={candidate.checked}
                      onChange={() => selectCheckbox(candidate.id)} />
                  </div>
                </td>
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
            !allCandidates.length &&
              <tr>
                <td className="text-center" colSpan="6">Data Not Found.</td>
              </tr>
          }
        </tbody>
      </Table>
    </React.Fragment>
  )
}
