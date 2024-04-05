
import ResumeImage from '../assets/resume.jpg'
import demopdf from '../assets/demopdf.pdf'
function Resume () {
  return (
    <section className='flex flex-col md:flex-row py-10 px-5 bg-primary'>
<div className='py-5 justify-center md:w-1/2  flex justify-end'>
<img className=' w-[400px]' src={ResumeImage}/>
</div>
<div className='md:w-1/2 flex justify-center'>

<div className='flex flex-col justify-center text-white'>
<h1 className='text-4xl font-bold border-b-4 border-secondary mb-5 w-[140px] '>Resume </h1>
<p  className='pb-5'>You can view my resume <a href={demopdf} download className='download-button'> Download </a> </p>

</div>
</div>
    </section>
  )
}


export default Resume