import { AnimatePresence, motion } from "framer-motion"; //allows components to animate out when they're removed from the React tree.
import { useLocation } from "react-router-dom";


const PageTransition = ({ children }) => {
    const location = useLocation();
    const pathname = location.pathname;

    return (
        <AnimatePresence>
            <div key={pathname}>
                {/* this div comes in animation when we switch */}
                <motion.div
                    initial={{ opacity: 1 }}
                    animate={{
                        opacity: 0,
                        transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
                    }}
                    className="h-screen w-screen fixed bg-black-100 pointer-events-none top-0"
                />
                {children}
            </div>
            {/* AnimatePresence works by detecting when direct children are removed from the React tree. */}
        </AnimatePresence>
    );
};

export default PageTransition;