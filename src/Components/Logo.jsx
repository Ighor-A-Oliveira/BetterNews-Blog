import { ImNewspaper } from 'react-icons/im'
import { Link } from 'react-router-dom'
import HambNav from './HambNav'

export default function Logo() {
  return (
    <div className='text-white w-full items-center bg-black py-4 relative h-[85px]'>
      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <Link to={'/'} className='flex items-center'>
          <ImNewspaper className='cursor-pointer text-4xl md:text-7xl'  />
          <p className='text-4xl md:text-7xl ml-4 cursor-pointer'>
            BetterNews
          </p>
        </Link>
      </div>
      <HambNav/>
    </div>
    
  )
}
