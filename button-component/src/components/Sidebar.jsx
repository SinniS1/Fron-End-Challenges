import { useState } from 'react'
import Button from './Button'

const Sidebar = () => {
  const [btnType, setBtnType] = useState('default')
  const [activeType, setActiveType] = useState(false)
  const [boxShadow, setBoxShadow] = useState(false)
  const [iconType, setIconType] = useState('')
  const [iconPosRight, setIconPosRight] = useState(false)
  const [btnSize, setBtnSize] = useState(40)
  const [btnColor, setBtnColor] = useState('#000000')
  const handleInputChange = (e) => {
    let inputValue = Number(e.target.value)

    if (inputValue < 40) {
      inputValue = 40
    } else if (inputValue > 100) {
      inputValue = 100
    }
    setBtnSize(inputValue)
  }
  return (
    <div className='Sidebar'>
      <Button
        btnType={btnType}
        activeType={activeType}
        boxShadow={boxShadow}
        iconType={iconType}
        iconPosRight={iconPosRight}
        btnSize={btnSize}
        btnColor={btnColor}
      />

      <aside className='rightSidebar'>
        {/* Button Type */}
        <label>
          <span>Types of button</span>
          <select value={btnType} onChange={(e) => setBtnType(e.target.value)}>
            <option value='default'>default</option>
            <option value='outline'>outline</option>
            <option value='text'>text</option>
          </select>
        </label>

        {/* Disable Btn  */}
        <label>
          <span>Disable button</span>
          <input
            type='checkbox'
            checked={activeType}
            onChange={(e) => setActiveType(e.target.checked)}
          />
        </label>

        {/* Disable box-shadow */}
        <label>
          <span>Disable box-shadow</span>
          <input
            type='checkbox'
            checked={boxShadow}
            onChange={(e) => setBoxShadow(e.target.checked)}
          />
        </label>

        {/* Icons */}
        <label>
          <span>Select Icon</span>
          <select value={iconType} onChange={(e) => setIconType(e.target.value)}>
            <option value='no'>No Icon</option>
            <option value='rocket_launch'>Rocket</option>
            <option value='face'>Face</option>
            <option value='send'>Send</option>
            <option value='mail'>Mail</option>
            <option value='currency_bitcoin'>Bitcoin</option>
          </select>
        </label>

        {/* Icon Position */}
        <label>
          <span>Right Side Icon</span>
          <input
            type='checkbox'
            checked={iconPosRight}
            onChange={(e) => setIconPosRight(e.target.checked)}
          />
        </label>

        {/* Button Size */}
        <label>
          <span>Button Size</span>
          <input type='number' min={40} max={100} value={btnSize} onChange={handleInputChange} />
          <abbr title='scroll to set size in between 40 to 100 rem'>
            <span className='material-icons' style={{ height: '5px' }}>
              info
            </span>
          </abbr>
        </label>

        {/* Button Color */}
        <label>
          <span>Button Color</span>
          <input type='color' value={btnColor} onChange={(e) => setBtnColor(e.target.value)} />
        </label>
      </aside>
    </div>
  )
}

export default Sidebar
