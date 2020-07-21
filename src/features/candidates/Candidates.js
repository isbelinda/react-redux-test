import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from './Form'
import { Lists } from './Lists'
import { selectCandidates } from './candidateSlice'

export function Candidates() {
  const candidates = useSelector(selectCandidates);
  const defaultValues = {
    checked: false,
    selected: false
  };
  const [candidateId, setCandidateId] = useState('')
  const [candidate, setCandidate] = useState(defaultValues)
  const [displayForm, setDisplayForm] = useState(false)

  const onEdit = id => {
    let candidate = candidates.filter(item => item.id === id)
    setCandidate(candidate[0])
    setDisplayForm(true)
  }

  const resetCandidateSelected = () => {
    setDisplayForm(false)
    setCandidate(defaultValues)
  }

  const onAdd = () => {
    setDisplayForm(true)
  }

  return (
    <React.Fragment>
      { displayForm &&
        <Form handleResetCandidateSelected={resetCandidateSelected}
          candidateSelected={candidate} />
      }

      <div className="my-4"></div>
      <button type="button" className="btn btn-primary" onClick={() => onAdd()}>Add</button>
      <Lists handleOnEdit={onEdit} />
    </React.Fragment>
  )
}
