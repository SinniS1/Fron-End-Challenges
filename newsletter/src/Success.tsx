import { useContext } from 'react'
import { EmailContext } from './EmailContextProvider'
import { useNavigate } from 'react-router-dom'
import tick from '/Tick.svg'

const Success = () => {
  const { emailInput } = useContext(EmailContext)
  const navigate = useNavigate()
  const handleSubmitBtn = () => {
    navigate('/')
  }
  return (
    <div className='w-screen h-screen bg-blue-300 grid place-items-center '>
      <div
        className='w-1/4 h-2/4 bg-white rounded-3xl flex flex-col items-start justify-between p-5 mobile-only:w-full mobile-only:h-full mobile-only:rounded-none 
        mobile-only:py-36   
      '>
        <img src={tick} alt='Tick' className='w-12' />
        <span className='text-4xl font-bold'>Thanks for subscribing!</span>
        <span className='text-sm'>
          {`A confirmation email has been sent to `}
          <span className='font-bold'>{emailInput}</span>
          {`. Please open it and click the button inside to confirm your subscription.`}
        </span>

        <button
          className='w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold h-14 rounded-md 
          active:bg-gradient-to-tr active:from-slate-800 active:to-slate-800
        '
          onClick={handleSubmitBtn}>
          Dismiss Message
        </button>
      </div>
    </div>
  )
}

export default Success
