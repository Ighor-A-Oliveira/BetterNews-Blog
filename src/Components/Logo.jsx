import { ImNewspaper } from 'react-icons/im'
import { Link } from 'react-router-dom'
import HambNav from './HambNav'
import { useGeneral } from '../Contexts/GeneralContext'

export default function Logo() {
  const {state, dispatch} = useGeneral()
  const active = state.isActive
  return (
    <div className='fixed z-50 text-white w-full items-center bg-black py-4 lg:relative h-[85px]'>
      <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
        <Link to={'/'} className='flex items-center' onClick={ () => {if(active){dispatch({ type: "IS_ACTIVE", payload: active})} else return}}>
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
