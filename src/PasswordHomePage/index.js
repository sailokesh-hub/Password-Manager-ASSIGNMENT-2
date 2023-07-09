import {Component} from 'react'
import {v4 as uuidV4} from 'uuid'
import Form from '../Form'
import PasswordsContainer from '../PasswordsContainer'
import './index.css'

class PasswordHomePage extends Component {
  state = {
    count: 0,
    website: '',
    userName: '',
    password: '',
    passwordList: [],
    searchInput: '',
    profileClassName: 'color-1',
  }

  componentDidMount() {
    this.chooseColor = color => {
      this.setState({profileClassName: color})
    }
  }

  userWebsiteInput = value => {
    this.setState({website: value})
  }

  userNameInput = value => {
    this.setState({userName: value})
  }

  passwordInput = value => {
    this.setState({password: value})
  }

  submitForm = event => {
    event.preventDefault()
    const {
      website,
      userName,
      password,
      passwordList,
      profileClassName,
    } = this.state
    const newPassword = {
      id: uuidV4(),
      website,
      userName,
      password,
      profileClassName,
    }
    this.setState({
      passwordList: [...passwordList, newPassword],
      website: '',
      userName: '',
      password: '',
    })
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  handlePasswordDelete = id => {
    this.setState(prevState => {
      const updatedPasswordList = prevState.passwordList.filter(
        item => item.id !== id,
      )
      return {
        passwordList: updatedPasswordList,
        count: prevState.count - 1,
      }
    })
  }

  filterList = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {
      count,
      passwordList,
      searchInput,
      profileClassName,
      website,
      userName,
      password,
    } = this.state

    const updatedList = passwordList.filter(eachItem =>
      eachItem.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="password-manager-container">
        <div className="card-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="password-manager-input-container">
            <Form
              userWebsiteInput={this.userWebsiteInput}
              userNameInput={this.userNameInput}
              passwordInput={this.passwordInput}
              submitForm={this.submitForm}
              chooseColor={this.chooseColor}
              website={website}
              userName={userName}
              password={password}
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="password-manager-logo"
            />
          </div>
          <PasswordsContainer
            count={count}
            passwordList={updatedList}
            handlePasswordDelete={this.handlePasswordDelete}
            filterList={this.filterList}
            profileClassName={profileClassName}
          />
        </div>
      </div>
    )
  }
}

export default PasswordHomePage
