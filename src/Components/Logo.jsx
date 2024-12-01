import { ImNewspaper } from 'react-icons/im'

export default function Logo() {
  return (
    <div className='text-white flex items-center bg-black justify-center py-4'>
            <ImNewspaper className='cursor-pointer' size={90} />
            <p className='text-7xl ml-4 cursor-pointer'>
                BetterNews
            </p>
        </div>
  )
}
