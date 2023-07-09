import {Component} from 'react'
import PasswordList from '../PasswordList'
import './index.css'

const NoPassword = () => (
  <div className="passwords">
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
      alt="no passwords"
      className="no-password-img"
    />
    <p>No Passwords</p>
  </div>
)

class PasswordsContainer extends Component {
  state = {show: false}

  componentDidMount() {
    const {filterList, handlePasswordDelete} = this.props
    this.passwordDelete = id => {
      handlePasswordDelete(id)
    }

    this.checkPassword = event => {
      filterList(event.target.value)
    }
  }

  showPasswords = () => {
    this.setState(prevState => ({show: !prevState.show}))
  }

  render() {
    const {count, passwordList, profileClassName} = this.props
    const {show} = this.state
    const isNoPasswords = passwordList.length === 0

    return (
      <div className="passwords-container">
        <div className="password-count-search">
          <div className="no-count">
            <h3>Your Passwords</h3>
            <p type="button" className="span">
              {count}
            </p>
          </div>

          <div className="search-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
              alt="search"
              className="search"
            />
            <input
              type="search"
              className="search-input"
              placeholder="Search"
              onChange={this.checkPassword}
            />
          </div>
        </div>
        <hr className="hr-line" />
        <div className="check-box-container">
          <input
            type="checkbox"
            id="checkBox"
            className="check-box"
            onClick={this.showPasswords}
          />
          <label htmlFor="checkBox">Show Passwords</label>
        </div>
        {isNoPasswords ? (
          <NoPassword />
        ) : (
          <ul className="password-list">
            {passwordList.map(item => (
              <PasswordList
                key={item.id}
                eachItem={item}
                show={show}
                passwordDelete={this.passwordDelete}
                profileClassName={profileClassName}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}
export default PasswordsContainer
