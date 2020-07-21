import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form } from '../form/Form'
import { Lists } from '../lists/Lists'
import { selectCandidates } from './candidateSlice'

export function Candidates() {
  const candidates = useSelector(selectCandidates);
  // const [isSelectAll, setIsSelectAll] = useState(false)
  // const dispatch = useDispatch()
  const [candidateId, setCandidateId] = useState('')

  useEffect(() => {
    console.log(candidateId)
  }, [candidateId])

  const onEdit = id => {
    setCandidateId(id)
  }

  return (
    <React.Fragment>
      <Form candidateSelected={candidateId} />
      <div className="my-4"></div>
      <Lists handleOnEdit={onEdit} />
    </React.Fragment>
  )
}
