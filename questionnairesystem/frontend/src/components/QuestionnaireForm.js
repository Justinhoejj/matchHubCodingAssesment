import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

export const QuestionnaireForm = (props) => {
  const [colorOptions, setColorOptions] = useState(
    [{
      id: 1,
      label: "Blue",
      value: "Blue",
    }, {
      id: 2,
      label: "Red",
      value: "Red",
    }, {
      id: 3,
      label: "Green",
      value: "Green",
    }, {
      id: 4,
      label: "Yellow",
      value: "Yellow",
    }, {
      id: 5,
      label: "Purple",
      value: "Purple",
    }, {
      id: 6,
      label: "Pink",
      value: "Pink",
    }
    ])
  const [programmingLanguageOptions, setProgrammingLanguageOptions] = useState(
    [{
      id: 7,
      label: "Python",
      value: "Python",
    }, {
      id: 8,
      label: "Java",
      value: "Java",
    }, {
      id: 9,
      label: "Ruby",
      value: "Ruby",
    }, {
      id: 10,
      label: "Javascript",
      value: "Javascript",
    }, {
      id: 11,
      label: "Golang",
      value: "Golang",
    }])

  const [spokenLanguages, setSpokenLanguages] = useState(
    [{
      id: 12,
      label: "English",
      value: "English",
    }, {
      id: 13,
      label: "Chinese",
      value: "Chinese",
    }, {
      id: 14,
      label: "Malay",
      value: "Malay",
    }, {
      id: 15,
      label: "Tamil",
      value: "Tamil",
    }, {
      id: 16,
      label: "Hindi",
      value: "Hindi",
    }])

  const [formData, setFormData] = useState(
    {
      name: "",
      favouriteColors: [],
      programmingLanguage: "",
      spokenLanguages: [],
      isWillingToPay: false,
    })

  const onSubmit = (e) => {
    e.preventDefault()
    console.log("submit button pressed")
    props.handleSubmit({
      name: formData.name,
      favouriteColors: formData.favouriteColors.join(","),
      programmingLanguage: formData.programmingLanguage,
      spokenLanguages: formData.spokenLanguages.join(","),
      isWillingToPay: formData.isWillingToPay == "true",
    })
  }

  return (
    <div>
      <form className="card card-body mt-4 mb-4" onSubmit={onSubmit}>
        <div class="mb-3">
          <label class="form-label">What is your full name?</label>
          <input
            class="form-control"
            type="text"
            name="name"
            id="name"
            required
            onChange={(e) => {
              setFormData(prev => ({ ...prev, name: e.target.value }))
            }}
          />
        </div>
        <div class="mb-3">
          <label class="form-label">What is your favourite color?</label>
          <div class="checkbox-group required">
          {colorOptions.map(option => (
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                name={option.label}
                value={option.value}
                key={option.id}
                onChange={(e) => {
                  const isChecked = e.target.checked
                  const favColor = formData.favouriteColors
                  if (isChecked) {
                    favColor.push(e.target.value)
                  } else {
                    favColor.pop(e.target.value)
                  }
                  setFormData(prev => ({ ...prev, favouriteColors: favColor }))
                }}
              />
              <label class="form-check-label">{option.label}</label>
            </div>
          ))}
          </div>
        </div>
        <div class="mb-3">
          <label class="form-label">What is your most familiar coding langauge?</label>
          {programmingLanguageOptions.map(option => (
            <div class="mb-3 form-check">
              <input
                class="form-check-input"
                type="radio"
                name="programmingLanguages"
                key={option.id}
                value={option.value}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, programmingLanguage: e.target.value }))
                }}
              />
              <label class="form-check-label" key={option.label}>{option.label}</label>
            </div>
          ))}

        </div>
        <div class="mb-3">
          <label class="form-label">What langauges below can you speak?</label>
          {spokenLanguages.map(option => (
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value={option.value}
                key={option.id}
                onChange={(e) => {
                  const isChecked = e.target.checked
                  const languages = formData.spokenLanguages
                  if (isChecked) {
                    languages.push(e.target.value)
                  } else {
                    languages.pop(e.target.value)
                  }
                  setFormData(prev => ({ ...prev, spokenLanguages: languages }))
                }}
              />
              <label class="form-check-label" key={option.label}>{option.label}</label>
            </div>
          ))}
        </div>
        <div class="mb-3">
          <label class="form-check-label">Would you pay $5 for a resume review?</label>
          <div class="mb-3 form-check">
            <input
              class="form-check-input"
              type="radio"
              name="isWillingToPay"
              id="flexRadioDefault1"
              value={true}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, isWillingToPay: e.target.value }))
              }}
            />
            <label class="form-check-label">Yes</label>
          </div>
          <div class="mb-3 form-check">
            <input
              class="form-check-input"
              type="radio"
              name="isWillingToPay"
              id="flexRadioDefault2"
              value={false}
              onChange={(e) => {
                setFormData(prev => ({ ...prev, isWillingToPay: e.target.value }))
              }}
            />
            <label class="form-check-label">No</label>
          </div>
        </div>
        <button class="btn btn-primary">{props.buttonName}</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireForm)
