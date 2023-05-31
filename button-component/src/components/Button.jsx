// eslint-disable-next-line react/prop-types
const Button = ({ btnType, activeType, boxShadow, iconType, iconPosRight, btnSize, btnColor }) => {
  return (
    <div className='Button'>
      <button
        disabled={activeType}
        type='button'
        className={`${activeType ? 'disableBtn' : ''} btn`}
        style={{
          height: btnSize,
          width: btnSize + 70,
          fontSize: '1.5rem',
          backgroundColor:
            btnType === 'outline' ? '' : btnType === 'text' ? 'transparent' : btnColor,
          color: btnType === 'outline' ? btnColor : btnType === 'text' ? btnColor : 'white',
          border: btnType === 'outline' ? `1px solid ${btnColor}` : 'none',
          boxShadow: boxShadow ? '' : '15px 15px 2px rgba(124, 124, 124, 0.2)'
        }}>
        {iconPosRight
          ? ''
          : iconType !== 'no' && <span className='material-icons'>{iconType}</span>}
        Button
        {iconPosRight
          ? iconType !== 'no' && <span className='material-icons'>{iconType}</span>
          : ''}
      </button>
    </div>
  )
}

export default Button
