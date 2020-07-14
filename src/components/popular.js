import React from 'react'

export default class Popular extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedLanguage: 'All'
    }

    this.updateLanguage = this.updateLanguage.bind(this)
  }
  updateLanguage (selectedLangauge) {
    this.setState({
      selectedLangauge
    })
  }
  render() {
    const languages = ['All', 'Javascript', 'Ruby', 'Golang', 'CSS', 'Python', 'C#']

    return (
      <ul className='flex-center'>
          {languages.map((language) => (
            <li key={language}>
              <button 
                className='btn-clear nav-link'
                style={language === this.state.selectedLanguage ? { color: 'rgb(231,216,187)'} : null }
                onClick={() => this.updateLanguage(language)}>
                {language}
              </button>
            </li>
          ))}
      </ul>
    )
  }
}