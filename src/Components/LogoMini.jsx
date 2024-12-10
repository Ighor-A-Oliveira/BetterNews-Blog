import { ImNewspaper } from 'react-icons/im'
import { Link } from 'react-router-dom'

export default function LogoMini() {
  return (
    <Link to={'/'} className='text-white flex items-center bg-black justify-center py-4'>
            <ImNewspaper className='cursor-pointer' size={45} />
            <p className='text-3xl ml-4 cursor-pointer'>
                BetterNews
            </p>
        </Link>
  )
}
