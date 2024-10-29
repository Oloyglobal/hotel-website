import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

export default function Component() {
  const navigate = useNavigate()

  const handleLoginRedirect = () => {
    navigate('/login')
  }

  const handle = () => {
    navigate('/login')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-9 justify-center items-start">
        <div className="w-full lg:w-[40%] bg-white p-6 rounded-lg shadow-md mb-8 lg:mb-0">
          <form className="flex flex-col w-full">
            <Link to="/">
              <h1 className="text-2xl sm:text-3xl font-medium leading-tight text-cutt mb-6">
                Lanka<span className="text-cut">Stay<span>.</span></span>
              </h1>
            </Link>
            {['Name', 'Email', 'Phone No', 'Country', 'Nic', 'Username', 'Password'].map((label) => (
              <React.Fragment key={label}>
                <label htmlFor={label.toLowerCase()} className="mt-4 text-sm font-medium">{label}</label>
                <input
                  type={label === 'Password' ? 'password' : 'text'}
                  id={label.toLowerCase()}
                  className="h-10 border-2 p-2 text-sm rounded-lg mt-1"
                  placeholder={
                    label === 'Email' ? 'ismailafeez080@gmail.com' :
                    label === 'Phone No' ? 'With country code' :
                    label === 'Nic' ? 'National Identity No' :
                    label === 'Password' ? '5+ Characters' :
                    `Enter your ${label.toLowerCase()}`
                  }
                />
              </React.Fragment>
            ))}
          </form>
        </div>
        <div className="w-full lg:w-[40%] bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-2xl sm:text-3xl font-medium leading-tight text-cutt text-center mb-6">
            Register <span className="text-cut">Your hotel<span>.</span></span>
          </h1>
          <form className="flex flex-col w-full">
            {['Hotel Name', 'Registration No', 'Address', 'Upload Images', 'Upload Documents', 'Facilities'].map((label) => (
              <React.Fragment key={label}>
                <label htmlFor={label.toLowerCase().replace(' ', '-')} className="mt-4 text-sm font-medium">{label}</label>
                <input
                  type="text"
                  id={label.toLowerCase().replace(' ', '-')}
                  className="h-10 border-2 p-2 text-sm rounded-lg mt-1"
                  placeholder={
                    label === 'Hotel Name' ? 'Full Name' :
                    label === 'Registration No' ? 'PV1(LTD)' :
                    label === 'Address' ? 'Location' :
                    label === 'Facilities' ? 'Describe' :
                    label
                  }
                />
              </React.Fragment>
            ))}
            <div className="w-full flex flex-col mt-6">
              <button
                className="h-10 w-full bg-cutt text-white rounded-lg mb-4"
                onClick={handleLoginRedirect}
              >
                Register
              </button>
              <button onClick={handle} className="text-cutt underline">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}