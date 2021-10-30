import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { colorOptions, programmingLanguageOptions, spokenLanguagesOptions } from './QuestionnaireFormOptions'

export const QuestionnaireForm = (props) => {

  const [formData, setFormData] = useState(null)
  const [loaded, setLoaded] = useState(false)

  // Format form data and submit
  const onSubmit = (e) => {
    e.preventDefault()
    props.handleSubmit({
      name: formData.name,
      favouriteColors: formData.favouriteColors.join(","),
      programmingLanguage: formData.programmingLanguage,
      spokenLanguages: formData.spokenLanguages.join(","),
      isWillingToPay: formData.isWillingToPay == "true",
    })
  }

  // Initialise data with existing data if present
  useEffect(() => {
    const defaultData = {
      name: "",
      favouriteColors: [],
      programmingLanguage: "",
      spokenLanguages: [],
      isWillingToPay: false,
    }
    if (props.defaultData != null) {
      const { name, favouriteColors, programmingLanguage, spokenLanguages, isWillingToPay } = props.defaultData
      defaultData.name = name
      defaultData.favouriteColors = favouriteColors.split(",")
      defaultData.programmingLanguage = programmingLanguage
      defaultData.spokenLanguages = spokenLanguages.split(",")
      defaultData.isWillingToPay = isWillingToPay
    }
    setFormData(() => (defaultData))
    setLoaded(() => true)
  }, [])

  return (
    <div>
      {loaded && (
        <form className="card card-body mt-4 mb-4" onSubmit={onSubmit}>
          {/*=============== Full Name ===============*/}
          <div class="mb-3">
            <label class="form-label">What is your full name?</label>
            <input
              class="form-control"
              type="text"
              name="name"
              defaultValue={formData.name}
              id="name"
              required
              onChange={(e) => {
                setFormData(prev => ({ ...prev, name: e.target.value }))
              }}
            />
          </div>
          {/*=============== Favourite Colour ===============*/}
          <div class="mb-3">
            <label class="form-label">What is your favourite colour?</label>
            <div class="checkbox-group required">
              {colorOptions.map(option => (
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    name={option.label}
                    value={option.value}
                    defaultChecked={formData.favouriteColors.includes(option.value)}
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
          {/*=============== Best Programming Language ===============*/}
          <div class="mb-3">
            <label class="form-label">What is your most familiar coding langauge?</label>
            {programmingLanguageOptions.map(option => (
              <div class="mb-3 form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="programmingLanguages"
                  key={option.id}
                  defaultChecked={formData.programmingLanguage.includes(option.value)}
                  value={option.value}
                  onChange={(e) => {
                    setFormData(prev => ({ ...prev, programmingLanguage: e.target.value }))
                  }}
                />
                <label class="form-check-label" key={option.label}>{option.label}</label>
              </div>
            ))}

          </div>
          {/*=============== Spoken Languages ===============*/}
          <div class="mb-3">
            <label class="form-label">What langauges below can you speak?</label>
            {spokenLanguagesOptions.map(option => (
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value={option.value}
                  key={option.id}
                  defaultChecked={formData.spokenLanguages.includes(option.value)}
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
          {/*=============== Willing To Pay For Resume Review ===============*/}
          <div class="mb-3">
            <label class="form-check-label">Would you pay $5 for a resume review?</label>
            <div class="mb-3 form-check">
              <input
                class="form-check-input"
                type="radio"
                name="isWillingToPay"
                id="flexRadioDefault1"
                value={true}
                defaultChecked={formData.isWillingToPay}
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
                defaultChecked={!formData.isWillingToPay}
                onChange={(e) => {
                  setFormData(prev => ({ ...prev, isWillingToPay: e.target.value }))
                }}
              />
              <label class="form-check-label">No</label>
            </div>
          </div>
          <button class="btn btn-primary">{props.buttonName}</button>
        </form>
      )}
    </div>
  )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireForm)
