import React, {useState, useEffect} from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux';
import { Card } from 'react-bootstrap'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { countryList, gender } from '../../app/constant'
import { add, selectCandidates, edit } from './candidateSlice'

export function Form(props) {
  const [candidate, setCandidate] = useState({})
  const getCandidates = useSelector(selectCandidates)
  const { register, handleSubmit, watch, errors, reset, setValue } = useForm({ defaultValues: props.candidateSelected });
  const [phoneNumber, setPhoneNumber] = useState('')
  const dispatch = useDispatch();

  useEffect(() => {
    if(props.candidateSelected.id) {
      setCandidate(props.candidateSelected)
      setPhoneNumber(props.candidateSelected.phone)
    }
  }, [props.candidateSelected])

  const onSubmit = data => {
    let id = 1
    if(getCandidates.length > 0) {
      id = getCandidates[getCandidates.length-1].id + 1
    }

    let postData = {
      ...props.candidateSelected,
      ...data,
      phone: phoneNumber,
      id: candidate.id ? candidate.id : id
    }

    if(props.candidateSelected.id) {
      dispatch(edit(postData))
    } else {
      dispatch(add(postData))
    }

    props.handleResetCandidateSelected()
    reset()
  }

  return (
    <React.Fragment>
      <div className="py-4"></div>
      <Card>
        <Card.Body>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex mb-3">
              <div className="d-flex align-items-baseline">
                <span className="col-sm-6 pl-0">Title<span className="text-danger">*</span></span>
                <select className="custom-select col-sm-6" name="title" ref={register({ required: true })}>
                  <option value="Mr.">Mr.</option>
                  <option value="Mrs.">Mrs.</option>
                  <option value="Miss">Miss</option>
                </select>
              </div>
              <div className="d-flex align-items-baseline flex-grow-1">
                <span className="col-sm-3">First name<span className="text-danger">*</span></span>
                <div className="col-sm-9">
                  <input type="text"
                    className={`form-control ${errors.firstName ? 'is-invalid':''}`}
                    name="firstName"
                    ref={register({ required: true })} />
                  {
                    errors.firstName &&
                    <div className="invalid-feedback">
                      The field is require.
                    </div>
                  }
                </div>
              </div>
              <div className="d-flex align-items-baseline flex-grow-1">
                <span className="col-sm-3">Last name<span className="text-danger">*</span></span>
                <div className="col-sm-9">
                  <input type="text"
                    className={`form-control ${errors.lastName ? 'is-invalid':''}`}
                    name="lastName" ref={register({ required: true })} />
                  {
                    errors.lastName &&
                    <div className="invalid-feedback">
                      The field is require.
                    </div>
                  }
                </div>
              </div>
            </div>

            <div className="row mb-3">
              <div className="col-sm-6">
                <div className="row align-items-baseline">
                  <div className="col-sm-3">
                    Birthday:<span className="text-danger">*</span>
                  </div>
                  <div className="col-sm-8">
                    <input type="date"
                      className={`form-control ${errors.birthday ? 'is-invalid':''}`}
                      name="birthday" ref={register({ required: true })} />
                    {
                      errors.lastName &&
                      <div className="invalid-feedback">
                        The field is require.
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="row align-items-baseline">
                  <div className="col-sm-3">
                    Nationality:
                  </div>
                  <div className="col-sm-9">
                    <select className="custom-select col-sm-6" name="nationality" ref={register}>
                      {
                        countryList.map((item, index) => <option key={index} value={item}>{item}</option>)
                      }
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="row align-items-baseline mb-3">
              <div className="col-sm-2">
                CitizenID:
              </div>
              <div className="col-sm-5">
                <input type="number" className="form-control" name="citizenId"
                  ref={register({ maxLength: { value: 13, message: "error message" } })}
                  className={`form-control ${errors?.citizenId?.message ? 'is-invalid':''}`} />
                {
                  errors?.citizenId?.message &&
                  <span className="invalid-feedback">Citizen ID have 13 Charactor</span>
                }
              </div>
            </div>

            <div className="row align-items-baseline mb-3">
              <div className="col-sm-1">
                Gender:
              </div>
              <div className="col-sm-5 d-flex align-items-center">
                {
                  gender.map((item, index) => (
                    <div className="form-check mr-3" key={index}>
                      <input type="radio" className="form-check-input" name="gender" value={item} ref={register} />
                      <label className="form-check-label">
                        {item}
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="row align-items-baseline mb-3">
              <div className="col-sm-2">
                Mobile Phone:
              </div>
              <div className="col-sm-5">
                <PhoneInput
                  country={'th'}
                  value={phoneNumber}
                  onChange={setPhoneNumber}
                />
              </div>
            </div>

            <div className="row align-items-baseline mb-3">
              <div className="col-sm-2">
                Pastport No:
              </div>
              <div className="col-sm-3">
                <input type="text" className="form-control" name="passportNo" ref={register} />
              </div>
            </div>

            <div className="row align-items-baseline">
              <div className="col-sm-2">
                Expected Salary:<span className="text-danger">*</span>:
              </div>
              <div className="col-sm-3">
                <input type="number"
                    className={`form-control ${errors.expectedSalary ? 'is-invalid':''}`}
                    name="expectedSalary" ref={register({ required: true })} />
                {
                  errors.expectedSalary &&
                  <div className="invalid-feedback">
                    The field is require.
                  </div>
                }
              </div>
              <div>THB</div>
            </div>

            <button type="submit" className="btn btn-primary mt-4">Submit</button>
          </form>
        </Card.Body>
      </Card>

    </React.Fragment>
  );
}
