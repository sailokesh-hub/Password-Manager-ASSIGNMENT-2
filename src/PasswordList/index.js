import {Component} from 'react'
import './index.css'

class PasswordList extends Component {
  deleteCard = () => {
    const {eachItem, passwordDelete} = this.props
    const {id} = eachItem
    passwordDelete(id)
  }

  callFun = () => {
    this.setState(prevState => ({showPassword: !prevState.showPassword}))
  }

  render() {
    const {eachItem, show} = this.props
    const {website, userName, password, profileClassName} = eachItem

    this.hidePassword = () => `*`.repeat(password.length)

    return (
      <li>
        <div className="card">
          <div className={profileClassName}>
            <h1 className="emoji">{website.slice(0, 1).toUpperCase()}</h1>
          </div>
          <div className="details">
            <p className="name">{website}</p>
            <p className="name">{userName}</p>
            <p className="name">{show ? password : this.hidePassword()}</p>
          </div>
          <button
            type="button"
            className="delete-btn"
            onClick={this.deleteCard}
            data-testid="delete"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
              alt="delete"
              className="delete-img"
            />
          </button>
        </div>
      </li>
    )
  }
}

export default PasswordList
