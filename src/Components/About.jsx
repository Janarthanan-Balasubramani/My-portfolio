
import AboutImg from '../assets/about.png'
function About() {
  return (
    <section  id ='about' className='flex flex-col md:flex-row px-5 bg-secondary'>
<div className='py-5 md:w-1/2  '>
<img src={AboutImg}/>
</div>
<div className='md:w-1/2 flex justify-center'>

<div className='flex flex-col justify-center text-white'>
<h1 className='text-4xl font-bold border-b-4 border-primary mb-5 w-[180px] '>About Me </h1>
<p  className='pb-5'> Im an Full stack developer with expertise in nest js ,node js , react , typescript, golang </p>
<p  className='pb-5'> Im an Full stack developer with expertise in nest js ,node js , react , typescript, golang </p>
<p  className='pb-5'> Im an Full stack developer with expertise in nest js ,node js , react , typescript, golang </p>

</div>
</div>
    </section>
  )
}


export default About