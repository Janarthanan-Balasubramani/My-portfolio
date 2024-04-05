

import { AiOutlineTwitter , AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import HeroImage from '../../src/assets/hero.png'

export default function Hero() {
  return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center  '>
    <div className="w-1/2 flex flex-col">
    <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> Im <span className="text-black"> Janarthanan </span> Balasubramani
  <p className="text-2xl">Im a Full-stack developer</p>
  </h1>
  <div className="flex flex-row py-5">
  <a href="" className="pr-5  hover:text-white">
  <AiOutlineTwitter size={40}/>
</a>
<a href="" className="pr-5  hover:text-white">
  <AiOutlineFacebook size={40}/>
</a>
<a href="" className="pr-5  hover:text-white">
  <AiOutlineLinkedin size={40}/>
</a>
  </div>
    </div>
  <img className='md:w-1/3' src={HeroImage}/>
  </section>
  }