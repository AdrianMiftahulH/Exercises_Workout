import Typography from '@mui/material/Typography'
import { HeroBanner } from '../../assets'

const Hero = () => {
  return (
    <section className="body-hero">
      <Typography variant="h2" color="white" textAlign="right" height='40%'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, tempore.
      </Typography>
      <img src={HeroBanner} alt="heroBanner" style={{
        width: "100%",
        height: '60%',
        borderRadius: '43px',
        objectFit: 'cover'
      }}/>
    </section>
  )
}

export default Hero