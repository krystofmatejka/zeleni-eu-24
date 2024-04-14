"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation'

const variants = {
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      delay: 0.5
    }
  },
    out: {
      opacity: 0,
      y: 40,
      transition: {
        duration: 0.75
      }
    }
  };

  // https://www.letsbuildui.dev/articles/animated-page-transitions-in-nextjs/
  // https://blog.logrocket.com/advanced-page-transitions-next-js-framer-motion/
export const Transition = ({ children }: { children: React.ReactNode }) => {
    const pathname  = usePathname();
    console.log(pathname);

    return (
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={pathname}
                    //initial={{ opacity: 0, y: 100 }}
                    //animate={{ y: '-100%' }}
                    //exit={{ y: '100%' }}
                    //initial= {{ opacity: 1, y: '0%' }}// Old page starts off invisible and moves down
                    //animate={{ opacity: 1, y: ['-100%', '0%',] }}    // New page becomes visible and starts from the top
                    //exit={{ opacity: 1, y: '100%' }}
                    variants={variants}
  animate="in"
  initial="out"
  exit="out"
                    transition={{
                      //type: "linear",
                      //stiffness: 260,
                      //damping: 20,
                      duration: 0.5,
                    }}
                    style={{height: '100%'}}
                >
                {children}
                </motion.div>
            </AnimatePresence >
      );
  };
