import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '../form/Form'
import { Lists } from '../lists/Lists'
import { selectCandidates } from './candidateSlice'

export function Candidates() {
  const candidates = useSelector(selectCandidates);
  // const [isSelectAll, setIsSelectAll] = useState(false)
  // const dispatch = useDispatch()
  const defaultValues = {
    citizenId: "7787766555444",
  };
  const [candidateId, setCandidateId] = useState('')
  const [candidate, setCandidate] = useState(defaultValues)
  const [displayForm, setDisplayForm] = useState(false)

  useEffect(() => {
    console.log(candidateId)
  }, [candidateId])

  const onEdit = id => {
    // setCandidateId(id)
    let candidate = candidates.filter(item => item.id === id)
    setCandidate(candidate[0])
    setDisplayForm(true)
  }

  const resetCandidateSelected = () => {
    setCandidateId('')
    setDisplayForm(false)
  }

  const onAdd = () => {
    setDisplayForm(true)
  }

  return (
    <React.Fragment>
      { displayForm &&
        <Form candidateSelected={candidateId}
        handleResetCandidateSelected={resetCandidateSelected}
        candidateSelected={candidate} />
      }

      <div className="my-4"></div>
      <button type="button" className="btn btn-primary" onClick={() => onAdd()}>Add</button>
      <Lists handleOnEdit={onEdit} />
    </React.Fragment>
  )
}
