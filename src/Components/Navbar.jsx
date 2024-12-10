import { useMotionValueEvent, useScroll, motion } from 'framer-motion'; 
import { useState } from 'react';
import { useGeneral } from '../Contexts/GeneralContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const { state } = useGeneral();
  const categories = state.categories || [];  // Safely access categories from state

  const [hidden, setHidden] = useState(false);
  const [openCategory, setOpenCategory] = useState(null); // Track the currently hovered category by its id

  const { scrollY } = useScroll();

  // Scroll event to hide or show the navbar
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) return setHidden(true);
    return setHidden(false);
  });

  return (
    <motion.nav
      className="sticky top-0 hidden lg:flex w-full items-center justify-center flex-col p-6 bg-black z-40 "
      variants={{
        visible: { y: 0 },
        hidden: { y: "-100%" },
      }}
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "backOut" }}
    >
      {/* Menu items */}
      <div className="relative hidden lg:flex w-[75%] justify-around items-center gap-2 text-white text-3xl">
        {Array.isArray(categories) && categories.map((category) => {
          const isOpen = openCategory === category.id; // Check if this category is being hovered

          return (
            <div 
              className='relative' 
              key={category.id}
              onMouseEnter={() => setOpenCategory(category.id)}  // Set hovered category's id
              onMouseLeave={() => setOpenCategory(null)}  // Reset when mouse leaves
            >
              <Link to={category.name.toLowerCase()} className='cursor-pointer'>{category.name}</Link>
              <span
                style={{
                  transform: isOpen ? "scaleX(1)" : "scaleX(0)",  // Apply hover effect based on hover state
                }}
                className="absolute -bottom-2 -left-2 -right-2 h-1 origin-left scale-x-0 rounded-full bg-gray-200 transition-transform duration-300 ease-out"
              />
            </div>
          );
        })}
      </div>
    </motion.nav>
  );
}
