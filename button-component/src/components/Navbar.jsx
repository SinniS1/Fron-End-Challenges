import icon from '../assets/icon.png'
const Navbar = () => {
  return (
    <nav className='Navbar'>
      <span style={{ fontWeight: 'bold', display: 'flex' }}>
        <img src={icon} alt='icon' height={25} width={25} />
        &nbsp;
        <span style={{ color: 'red' }}>dev</span>
        <span style={{ color: 'blue' }}>Challenges</span>:&nbsp; Button Component
      </span>
    </nav>
  )
}

export default Navbar
