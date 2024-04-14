"use client"
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation'

const variants = {
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
  
    return (
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={pathname}
                    initial={{ x: 300, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 300, opacity: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 260,
                      damping: 20,
                    }}
                    style={{height: '100%'}}
                >
{children}
                </motion.div>
              
            </AnimatePresence >
      );
  };
