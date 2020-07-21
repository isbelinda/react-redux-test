import React, {useState, useEffect} from "react";
import { useForm, Controller } from "react-hook-form";
import { RHFInput } from 'react-hook-form-input';
import { useSelector, useDispatch } from 'react-redux';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { countryList, gender } from '../../app/constant'
import { add, selectCandidates, selectCandidate, candidateSlice } from '../candidates/candidateSlice'

export function Form(props) {
  // const dispatch = useDispatch();
  // const { register, handleSubmit, setValue, reset } = useForm();
  // const getCandidates = useSelector(selectCandidates)
  // const [candidate, setCandidate] = useState({})
  // const onSubmit = data => {
  //   alert(JSON.stringify(data));
  //   let id = 1
  //   if(getCandidates.length > 0) {
  //     id = getCandidates[getCandidates.length-1].id + 1
  //   }
  //   let postData = {
  //     ...data,
  //     selected: false,
  //     id: id
  //   }
  //   dispatch(add(postData))
  //   reset()
  // };

  // console.log(props)
  // // if(props.candidateSelected) {
  // //   let get = getCandidates.filter(item => item.id === props.candidateSelected)[0]
  // //   console.log(get)
  // //   setValue("firstName", "Set value by action");
  // // }
  // useEffect(() => {
  //   console.log('a')
  //   console.log(props.candidateSelected)
  //   if(props.candidateSelected) {
  //     console.log('get can')
  //     let get = getCandidates.filter(item => item.id === props.candidateSelected)[0]
  //     console.log(get)
  //     // setValue("firstName", "Set value by action");
  //     setCandidate(get)
  //   }
  // }, [props.candidateSelected])
  // console.log(candidate)
  // return (
  //   <form onSubmit={handleSubmit(onSubmit)}>
  //     <label htmlFor="firstName">First Name</label>
  //     <input name="firstName" placeholder="bill" ref={register} />

  //     <label htmlFor="lastName">Last Name</label>
  //     <input name="lastName" placeholder="luo" ref={register} />

  //     <label htmlFor="email">Email</label>
  //     <input
  //       name="email"
  //       placeholder="bluebill1049@hotmail.com"
  //       type="email"
  //       ref={register}
  //     />

  //     <label>Is developer?</label>
  //     <input name="isDeveloper" type="checkbox" ref={register} />

  //     <label>Age group</label>
  //     <select ref={register} name="ageGroup">
  //       <option value="0">0 - 1</option>
  //       <option value="1">1 - 100</option>
  //     </select>

  //     <label>Sex</label>
  //     <input type="radio" name="sex" ref={register} value="male" />
  //     <input type="radio" name="sex" ref={register} value="female" />

  //     <button
  //       type="button"
  //       onClick={() => {
  //         setValue("firstName", "Set value by action");
  //         setValue("ageGroup", "1");
  //         setValue("isDeveloper", true);
  //         setValue("sex", "male");
  //       }}
  //     >
  //       Set All Values
  //     </button>
  //     <input type="submit" />
  //   </form>
  // );
  const [candidate, setCandidate] = useState({})
  const getCandidates = useSelector(selectCandidates)
  const displayCandidate = () => {
    let get = getCandidates.filter(item => item.id === props.candidateSelected)[0]
    return get
  }
  const { register, handleSubmit, watch, errors, reset, setValue } = useForm();
  const [phoneNumber, setPhoneNumber] = useState('')
  const dispatch = useDispatch();
  console.log(candidate)
  console.log(displayCandidate())

  useEffect(() => {
    if(props.candidateSelected) {
      let get = getCandidates.filter(item => item.id === props.candidateSelected)[0]
      console.log(get)
      setValue("firstName", get.firstName);
      setValue("lastName", get.lastName)
      setCandidate(get)
    }
  }, [props.candidateSelected])

  const onSubmit = data => {
    let id = 1
    if(getCandidates.length > 0) {
      id = getCandidates[getCandidates.length-1].id + 1
    }
    let postData = {
      ...data,
      phone: phoneNumber,
      selected: false,
      id: id
    }
    dispatch(add(postData))
    reset()
  }

  // console.log(watch("phone")); // watch input value by passing the name of it

  return (
    <React.Fragment>
      <div className="py-4"></div>
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

        <div className="d-flex mb-3">
          <div className="row align-items-baseline">
            <div className="col-sm-3">
              Birthday:<span className="text-danger">*</span>
            </div>
            <div className="col-sm-8">
              <input type="date" className="form-control" name="birthday" ref={register} />
            </div>
          </div>
          <div className="row align-items-baseline">
            <div className="col-sm-2">
              Nationality:
            </div>
            <div className="col-sm-10">
              <select className="custom-select col-sm-6" name="nationality" ref={register}>
                {
                  countryList.map((item, index) => <option key={index} value={item}>{item}</option>)
                }
              </select>
            </div>
          </div>
        </div>

        <div className="row align-items-baseline mb-3">
          <div className="col-sm-1">
            CitizenID:
          </div>
          <div className="col-sm-5">
            <input type="text" className="form-control" name="citizenId" ref={register} />
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
            {/* <input type="text" className="form-control" name="mobilePhone" ref={register({ required: true })} /> */}

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
            <input type="text"
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

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </React.Fragment>
  );
}
