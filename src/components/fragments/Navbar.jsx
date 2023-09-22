import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
import { LogoAnimated } from '../../assets';

const Navbar = () => {
  return (
    <Stack
    direction="row"
    justifyContent='space-between'
    alignItems="center"
    width= '100%'
    height='50px'
    backgroundColor='white'
    color='rgb(39, 39, 39)'
    border='1px solid rgb(39, 39, 39)'
    mt='20px'
    borderRadius='43px'
    >
      <Link to="/" style={{ marginLeft: '30px' }}>
        <img 
        src={LogoAnimated} 
        alt="logo website"
        style={{ width: '150px', height: '40px'}} />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        alignItems='flex-end'
        marginRight='30px'
        >
          <Link to='/' className='list-nav'>Home</Link>
          <Link to='#exercises' className='list-nav'>Exercises</Link>
        </Stack>
    </Stack>
  )
}

export default Navbar