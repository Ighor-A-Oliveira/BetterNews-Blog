import { MotionConfig, motion } from "framer-motion"
import { useEffect} from "react"
import { Link } from "react-router-dom";
import { useGeneral } from "../Contexts/GeneralContext";


export default function HambNav() {
    
    const { state, dispatch } = useGeneral();
    const active = state.isActive
    const isHambActive = active ? 'h-[100vh] p-4' : 'h-[0px] p-0'
    const categories = state.categories || [];
    console.log(categories)

    // Disable scrolling on body when menu is active
    useEffect(() => {
        if (active) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        }

        // Cleanup function to re-enable scrolling if the component unmounts
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [active]);

  return (
    <>
        <AnimatedHamburguerButton active={active} dispatch={dispatch}/>
        <div className={`absolute lg:hidden top-[85px] left-0 right-0 w-full z-50 bg-gray-500 transition-all duration-300 ease-out ${isHambActive}`}>
            {active && (
                <div className="flex flex-col h-full w-full items-center">
                    {Array.isArray(categories) && categories.map((category, index) => {
                        return(<Link 
                                  to={category.name.toLowerCase()} 
                                  className='mb-4 text-white font-sans text-2xl md:text-4xl' 
                                  key={index} onClick={() => dispatch({ type: "IS_ACTIVE", payload: active})}
                                >
                                  {category.name}
                                </Link>)
                    })}
                </div>
            )}
        </div>
    </>
  )
}

// eslint-disable-next-line react/prop-types
function AnimatedHamburguerButton({active, dispatch}) {
    
    return(
      /* framer motion context provider, it applies all framer motion configs to the motion items inside of it */
      <MotionConfig className='absolute my-auto' transition={{duration: 0.5, ease: 'easeInOut'}}>
        <motion.button className="relative h-[50px] w-[50px] rounded-full bg-white/0 block lg:hidden" onClick={() => dispatch({ type: "IS_ACTIVE", payload: active})}
          animate={active ? "open" : "closed"}
          initial={false}
        >
          <motion.span 
            className="absolute h-1 w-5 bg-white"
            style={{top: "35%", left:"50%", x:"-50%", y:"-50%"}}
            variants={{open: {
              rotate: ['0deg', '0deg', '45deg'],
              top: ["35%", "50%", "50%"]
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              top: ["50%", "50%", "35%"]
            }
          }}
          
          />
          <motion.span 
            className="absolute h-1 w-5 bg-white"
            style={{top: "50%", left:"50%", x:"-50%", y:"-50%"}}
            variants={{open: {
              rotate: ['0deg', '0deg', '-45deg'],
            },
            closed: {
              rotate: ['-45deg', '0deg', '0deg']
            }
          }}
          />
          <motion.span 
            className="absolute h-1 w-5 bg-white"
            style={{bottom: "40%", left:"0", x:"-99%", y:"35%"}}
            variants={{open: {
              rotate: ['0deg', '0deg', '45deg'],
              bottom: ["35%", "50%", "50%"],
              left:"70%"
            },
            closed: {
              rotate: ['45deg', '0deg', '0deg'],
              bottom: ["50%", "50%", "35%"],
              left:"calc(50% + 10px)"
            }
          }}
          />
        </motion.button>
      </MotionConfig>
    )
  }