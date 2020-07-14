import React from 'react'

export default class Popular extends React.Component {
  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Golang', 'CSS', 'Python', 'C#']

    return (
      <ul className='flex-center'>
          {languages.map((language) => (
            <li key={languages}>
              <button className='btn-clear nav-link'>
                {language}
              </button>
            </li>
          ))}
      </ul>
    )
  }
}