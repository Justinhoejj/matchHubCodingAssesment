import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

export const QuestionnaireForm = (props) => {
  const [colorOptions, setColorOptions] = useState(
    [{
      id: 1,
      label: "Blue",
    }, {
      id: 2,
      label: "Red",
    }, {
      id: 3,
      label: "Green",
    }, {
      id: 4,
      label: "Yellow",
    }, {
      id: 5,
      label: "Purple",
    }, {
      id: 6,
      label: "Pink",
    }
    ])
  const [programingLanguageOptions, setProgramingLanguageOptions] = useState(
    [{
      id: 7,
      label: "Python",
    }, {
      id: 8,
      label: "Java",
    }, {
      id: 9,
      label: "Ruby",
    }, {
      id: 10,
      label: "Javascript",
    }, {
      id: 11,
      label: "Golang",
    }])

  const [spokenlanguages, setSpokenlanguages] = useState(
    [{
      id: 12,
      label: "English",
    }, {
      id: 13,
      label: "Chinese",
    }, {
      id: 14,
      label: "Malay",
    }, {
      id: 15,
      label: "Tamil",
    }, {
      id: 16,
      label: "Hindi",
    }])

  // const onChange = (formData) => {
  //   console.log(formData)
  // }

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <form
      className="card card-body mt-4 mb-4"
      onSubmit={onSubmit}>
      <div class="mb-3">
        <label class="form-label">What is your full name?</label>
        <input
          class="form-control"
          type="text"
          name="name"
          id="name"
          onChange={
            (e) => console.log(e.target.value)
          }
        />
      </div>
      <div class="mb-3">
        <label class="form-label">What is your favourite color?</label>
        {colorOptions.map(option => (
          <div class="form-check" onChange={(e) => console.log(e.target)}>
            <input
              class="form-check-input"
              type="checkbox"
              name={option.label}
              value={option.id}
              id={option.id} />
            <label
              class="form-check-label"
              for={option.id}
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <div class="mb-3">
        <label
          class="form-label">
          What is your most familiar coding langauge?
        </label>
        {programingLanguageOptions.map(option => (
          <div class="mb-3 form-check">
            <input
              class="form-check-input"
              type="radio"
              name="programmingLanguages"
              id={option.id} />
            <label
              class="form-check-label"
              for="flexRadioDefault1">
              {option.label}
            </label>
          </div>
        ))}

      </div>
      <div class="mb-3">
        <label
          class="form-label">
          What langauges below can you speak?
        </label>
        {spokenlanguages.map(option => (
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value={option.id}
              id={option.id}
            />
            <label
              class="form-check-label"
              for="flexCheckDefault"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
      <div class="mb-3">
        <label
          class="form-check-label"
          for="exampleCheck1">
          Would you pay $5 for a resume review?
        </label>
        <div class="mb-3 form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1" />
          <label class="form-check-label" for="flexRadioDefault1">Yes</label>
        </div>
        <div class="mb-3 form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label class="form-check-label" for="flexRadioDefault2">No</label>
        </div>
      </div>
      <button
        type="submit"
        class="btn btn-primary">
        Submit
      </button>
    </form>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireForm)
