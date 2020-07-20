import React from "react";
import { useForm } from "react-hook-form";

const countryList = [
	"Afghanistan",
	"Albania",
	"Algeria",
	"American Samoa",
	"Andorra",
	"Angola",
	"Anguilla",
	"Antarctica",
	"Antigua and Barbuda",
	"Argentina",
	"Armenia",
	"Aruba",
	"Australia",
	"Austria",
	"Azerbaijan",
	"Bahamas (the)",
	"Bahrain",
	"Bangladesh",
	"Barbados",
	"Belarus",
	"Belgium",
	"Belize",
	"Benin",
	"Bermuda",
	"Bhutan",
	"Bolivia (Plurinational State of)",
	"Bonaire, Sint Eustatius and Saba",
	"Bosnia and Herzegovina",
	"Botswana",
	"Bouvet Island",
	"Brazil",
	"British Indian Ocean Territory (the)",
	"Brunei Darussalam",
	"Bulgaria",
	"Burkina Faso",
	"Burundi",
	"Cabo Verde",
	"Cambodia",
	"Cameroon",
	"Canada",
	"Cayman Islands (the)",
	"Central African Republic (the)",
	"Chad",
	"Chile",
	"China",
	"Christmas Island",
	"Cocos (Keeling) Islands (the)",
	"Colombia",
	"Comoros (the)",
	"Congo (the Democratic Republic of the)",
	"Congo (the)",
	"Cook Islands (the)",
	"Costa Rica",
	"Croatia",
	"Cuba",
	"Curaçao",
	"Cyprus",
	"Czechia",
	"Côte d'Ivoire",
	"Denmark",
	"Djibouti",
	"Dominica",
	"Dominican Republic (the)",
	"Ecuador",
	"Egypt",
	"El Salvador",
	"Equatorial Guinea",
	"Eritrea",
	"Estonia",
	"Eswatini",
	"Ethiopia",
	"Falkland Islands (the) [Malvinas]",
	"Faroe Islands (the)",
	"Fiji",
	"Finland",
	"France",
	"French Guiana",
	"French Polynesia",
	"French Southern Territories (the)",
	"Gabon",
	"Gambia (the)",
	"Georgia",
	"Germany",
	"Ghana",
	"Gibraltar",
	"Greece",
	"Greenland",
	"Grenada",
	"Guadeloupe",
	"Guam",
	"Guatemala",
	"Guernsey",
	"Guinea",
	"Guinea-Bissau",
	"Guyana",
	"Haiti",
	"Heard Island and McDonald Islands",
	"Holy See (the)",
	"Honduras",
	"Hong Kong",
	"Hungary",
	"Iceland",
	"India",
	"Indonesia",
	"Iran (Islamic Republic of)",
	"Iraq",
	"Ireland",
	"Isle of Man",
	"Israel",
	"Italy",
	"Jamaica",
	"Japan",
	"Jersey",
	"Jordan",
	"Kazakhstan",
	"Kenya",
	"Kiribati",
	"Korea (the Democratic People's Republic of)",
	"Korea (the Republic of)",
	"Kuwait",
	"Kyrgyzstan",
	"Lao People's Democratic Republic (the)",
	"Latvia",
	"Lebanon",
	"Lesotho",
	"Liberia",
	"Libya",
	"Liechtenstein",
	"Lithuania",
	"Luxembourg",
	"Macao",
	"Madagascar",
	"Malawi",
	"Malaysia",
	"Maldives",
	"Mali",
	"Malta",
	"Marshall Islands (the)",
	"Martinique",
	"Mauritania",
	"Mauritius",
	"Mayotte",
	"Mexico",
	"Micronesia (Federated States of)",
	"Moldova (the Republic of)",
	"Monaco",
	"Mongolia",
	"Montenegro",
	"Montserrat",
	"Morocco",
	"Mozambique",
	"Myanmar",
	"Namibia",
	"Nauru",
	"Nepal",
	"Netherlands (the)",
	"New Caledonia",
	"New Zealand",
	"Nicaragua",
	"Niger (the)",
	"Nigeria",
	"Niue",
	"Norfolk Island",
	"Northern Mariana Islands (the)",
	"Norway",
	"Oman",
	"Pakistan",
	"Palau",
	"Palestine, State of",
	"Panama",
	"Papua New Guinea",
	"Paraguay",
	"Peru",
	"Philippines (the)",
	"Pitcairn",
	"Poland",
	"Portugal",
	"Puerto Rico",
	"Qatar",
	"Republic of North Macedonia",
	"Romania",
	"Russian Federation (the)",
	"Rwanda",
	"Réunion",
	"Saint Barthélemy",
	"Saint Helena, Ascension and Tristan da Cunha",
	"Saint Kitts and Nevis",
	"Saint Lucia",
	"Saint Martin (French part)",
	"Saint Pierre and Miquelon",
	"Saint Vincent and the Grenadines",
	"Samoa",
	"San Marino",
	"Sao Tome and Principe",
	"Saudi Arabia",
	"Senegal",
	"Serbia",
	"Seychelles",
	"Sierra Leone",
	"Singapore",
	"Sint Maarten (Dutch part)",
	"Slovakia",
	"Slovenia",
	"Solomon Islands",
	"Somalia",
	"South Africa",
	"South Georgia and the South Sandwich Islands",
	"South Sudan",
	"Spain",
	"Sri Lanka",
	"Sudan (the)",
	"Suriname",
	"Svalbard and Jan Mayen",
	"Sweden",
	"Switzerland",
	"Syrian Arab Republic",
	"Taiwan",
	"Tajikistan",
	"Tanzania, United Republic of",
	"Thailand",
	"Timor-Leste",
	"Togo",
	"Tokelau",
	"Tonga",
	"Trinidad and Tobago",
	"Tunisia",
	"Turkey",
	"Turkmenistan",
	"Turks and Caicos Islands (the)",
	"Tuvalu",
	"Uganda",
	"Ukraine",
	"United Arab Emirates (the)",
	"United Kingdom of Great Britain and Northern Ireland (the)",
	"United States Minor Outlying Islands (the)",
	"United States of America (the)",
	"Uruguay",
	"Uzbekistan",
	"Vanuatu",
	"Venezuela (Bolivarian Republic of)",
	"Viet Nam",
	"Virgin Islands (British)",
	"Virgin Islands (U.S.)",
	"Wallis and Futuna",
	"Western Sahara",
	"Yemen",
	"Zambia",
	"Zimbabwe",
	"Åland Islands"
];

const gender = ["Male", "Female", "UniSex"]
export function Form() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

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
                className={`form-control ${errors.firstName ? 'is-invalid':''}`}
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
          <div className="row">
            <div className="col-sm-3">
              Birthday:<span className="text-danger">*</span>
            </div>
            <div className="col-sm-5">
              <input type="text" className="form-control" name="citizenId" ref={register} />
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
            <input type="text" className="form-control" name="mobilePhone" ref={register({ required: true })} />
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
                className={`form-control ${errors.firstName ? 'is-invalid':''}`}
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
