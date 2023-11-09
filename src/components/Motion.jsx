import { motion } from "framer-motion";
import React from "react";

export const MotionWrapper = ({ children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 130 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 130 }}
        >
            {children}
        </motion.div>
    );
};
