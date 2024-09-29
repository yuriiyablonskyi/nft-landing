import React, { ReactNode, useState, useRef, FC, useEffect } from 'react'

const Select = ({ options, defaultOption, onChange }) => {
  // State to manage the selected value and dropdown visibility
  const [selectedValue, setSelectedValue] = useState(defaultOption)
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  // Handle dropdown toggle
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  // useEffect(() => {
  //   const handleClickOutside = event => {
  //     if (selectRef.current && !selectRef.current.contains(event.target)) {
  //       setIsOpen(false) // Close dropdown if clicked outside
  //     }
  //   }

  //   document.addEventListener('mousedown', handleClickOutside)

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [])

  // Handle option selection
  const handleOptionSelect = option => {
    setSelectedValue(option.label)
    setIsOpen(false) // Close dropdown after selection
    if (onChange) {
      onChange(option.value) // Trigger onChange callback if provided
    }
  }

  return (
    <div className="custom-select-container">
      <div onClick={toggleDropdown} className="select-display">
        {selectedValue || 'Select...'}
      </div>

      {isOpen && (
        <ul className="select-dropdown">
          {options.map(option => (
            <li key={option.value} onClick={() => handleOptionSelect(option)} className="li">
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
export default Select
