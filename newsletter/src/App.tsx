import { useState, useContext } from 'react'
import img from '/bgImage.svg'
import tick from '/Tick.svg'
import { useNavigate } from 'react-router-dom'
import { EmailContext } from './EmailContextProvider'
function App() {
  const navigate = useNavigate()
  const { setEmailInput } = useContext(EmailContext)
  const Tick = [
    'Product discovery and building what matters.',
    'Measuring to ensure updates are a success',
    'And much more!'
  ]
  const [email, setEmail] = useState('')
  const [isValid, setIsValid] = useState(true)
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setIsValid(true)
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const reg = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/
    const isValidEmail = reg.test(email)
    setIsValid(isValidEmail)
    if (isValidEmail) {
      setEmailInput(email)
      navigate('/success', { state: { email } })
    }
  }
  return (
    <>
      <div className='w-screen h-screen bg-blue-300 grid place-items-center'>
        <div
          className='w-[60%] h-fit bg-white rounded-3xl flex items-center justify-between
        mobile-only:flex-col-reverse
        mobile-only:w-full
        mobile-only:rounded-none
        '>
          <div
            className='flex flex-col gap-5 w-fit h-fit m-5 text-[1.2vw] 
            mobile-only:text-[15px]
          '>
            {/* Taglines */}
            <span className='text-[4vw] font-bold mobile-only:text-[50px]'>Stay updated!</span>
            <span className=''>Join 60,000+ product managers receiving monthly updates on.</span>

            {/* Tick points */}
            <div className='flex flex-col gap-4'>
              {Tick.map((item, index) => (
                <div className='flex gap-2' key={index}>
                  <img className='w-6' src={tick} alt='Tick' />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            {/* Email*/}
            <form onSubmit={handleSubmit}>
              <div className='flex flex-col mb-2'>
                <div className='flex justify-between'>
                  <label htmlFor='InputEmail' className='text-lg font-semibold'>
                    Email Address
                  </label>
                  {/* Error message */}
                  {!isValid && <span className='text-red-600'>Valid email required</span>}
                </div>
                <input
                  id='InputEmail'
                  type='text'
                  placeholder='email@company.com'
                  className={`outline-none border-3 border-gray-400 border rounded-md p-2 pl-4 w-full focus:border-black
                  ${!isValid && 'border-red-800 bg-red-200'}
                  `}
                  value={email}
                  onChange={handleEmail}
                  required
                />
              </div>

              {/* Subscribe button */}
              <button
                type='submit'
                className='w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold h-14 rounded-md 
                hover:bg-gradient-to-r hover:from-secondary hover:to-primary active:bg-gradient-to-r active:from-slate-800 active:to-slate-800 '>
                Subscribe to monthly newsletter
              </button>
            </form>
          </div>

          <div className='flex flex-col justify-end m-5 mobile-only:m-0 mobile-only: '>
            <img
              className='object-cover mobile-only:h-[40vh] mobile-only:w-[100vh]'
              src={img}
              alt='BgImage'
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
