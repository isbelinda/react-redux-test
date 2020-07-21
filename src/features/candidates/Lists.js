import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from 'reactjs-hooks-pagination';
import { Table } from 'react-bootstrap'
import { selectCandidates, deleteCandidate, deleteSelected } from './candidateSlice'

export function Lists(props) {
  const dispatch = useDispatch()
  const pageLimit = 2;
  const candidates = useSelector(selectCandidates);
  const [allCandidates, setAllCandidates] = useState([])
  const [isSelectAll, setIsSelectAll] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    setTotalRecords(candidates.length)
    let startIndex = (currentPage - 1) * pageLimit
    let getCandidates = candidates.slice(startIndex, startIndex + pageLimit)
    if(!getCandidates.length) {
      startIndex = startIndex - 1
      getCandidates = candidates.slice(startIndex-1, startIndex + pageLimit)
    }
    setAllCandidates(getCandidates)
  }, [candidates, currentPage])

  const toggleSelectAll = () => {
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
        <div className="col-sm-6 d-flex align-items-baseline">
        <div className="form-check">
          <input className="form-check-input" type="checkbox" disabled={!candidates.length} value={isSelectAll} onChange={toggleSelectAll} />
          <label className="form-check-label">
            Select All
          </label>
        </div>
          <button type="button" className="btn btn-outline-danger ml-4" onClick={() => onDeleteSelected()}>Delete</button>
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
      {
        candidates.length > pageLimit &&
        <Pagination
          totalRecords={totalRecords}
          pageLimit={pageLimit}
          pageRangeDisplayed={1}
          onChangePage={setCurrentPage} />
      }
    </React.Fragment>
  )
}
