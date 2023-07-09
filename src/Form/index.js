import './index.css'

const colorArray = [
  'color-1',
  'color-2',
  'color-3',
  'color-4',
  'color-5',
  'color-6',
  'color-7',
  'color-8',
  'color-9',
  'color-10',
]

const Form = props => {
  const num = Math.floor(Math.random() * 10)
  const {
    userWebsiteInput,
    userNameInput,
    passwordInput,
    submitForm,
    chooseColor,
    website,
    userName,
    password,
  } = props
  function Website(event) {
    userWebsiteInput(event.target.value)
  }

  function UserName(event) {
    userNameInput(event.target.value)
  }

  function Password(event) {
    passwordInput(event.target.value)
  }

  const submitFor = event => {
    submitForm(event)
    chooseColor(colorArray[num])
  }

  return (
    <form className="form-container" onSubmit={submitFor}>
      <h1 className="heading">Add New Password</h1>
      <div className="input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
          alt="website"
          className="password"
        />
        <input
          type="text"
          name="site"
          className="site-name"
          placeholder="Enter Website"
          onChange={Website}
          autoComplete="off"
          value={website}
        />
      </div>
      <div className="input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
          alt="username"
          className="password"
        />
        <input
          type="text"
          name="site"
          className="site-name"
          placeholder="Enter Username"
          onChange={UserName}
          autoComplete="off"
          value={userName}
        />
      </div>
      <div className="input-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
          alt="password"
          className="password"
        />
        <input
          type="password"
          name="site"
          className="site-name"
          placeholder="Enter Password"
          onChange={Password}
          value={password}
        />
      </div>
      <div className="add-btn-container">
        <button type="submit" className="add-btn">
          Add
        </button>
      </div>
    </form>
  )
}

export default Form
