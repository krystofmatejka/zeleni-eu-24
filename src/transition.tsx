import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation'

export const Transition = ({ children }: { children: React.ReactNode }) => {
  const pathname  = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial= {{ opacity: 1, y: '0%' }}
          animate={{ opacity: 1, y: ['100%', '0%'], transition: { duration: 0.3} }}
          exit={{ opacity: 0, y: '-100%', transition: { duration: 0.15} }}
          transition={{ type: "linear" }}
          style={{height: '100%'}}
        >
          {children}
        </motion.div>
    </AnimatePresence>
  );
};
