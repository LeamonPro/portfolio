import React from 'react';
import { motion } from 'framer-motion';

const Hologram: React.FC = () => {
    return (
        <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Outer Ring */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '1px solid var(--accent-cyan)',
                    borderTopColor: 'transparent',
                    borderBottomColor: 'transparent',
                    boxShadow: '0 0 15px var(--accent-cyan)',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />

            {/* Middle Ring */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '80%',
                    height: '80%',
                    borderRadius: '50%',
                    border: '2px dashed var(--accent-purple)',
                }}
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            />

            {/* Inner Ring */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '60%',
                    height: '60%',
                    borderRadius: '50%',
                    border: '1px solid var(--accent-pink)',
                    opacity: 0.5,
                }}
                animate={{
                    rotate: 180,
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
            />

            {/* Core */}
            <motion.div
                style={{
                    position: 'absolute',
                    width: '20%',
                    height: '20%',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, var(--text-primary) 0%, transparent 70%)',
                    boxShadow: '0 0 20px var(--accent-cyan)',
                }}
                animate={{
                    opacity: [0.5, 1, 0.5],
                    scale: [0.8, 1.2, 0.8],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Floating Particles */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    style={{
                        position: 'absolute',
                        width: '4px',
                        height: '4px',
                        borderRadius: '50%',
                        background: 'white',
                    }}
                    animate={{
                        x: [0, Math.cos(i) * 100],
                        y: [0, Math.sin(i) * 100],
                        opacity: [1, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.4,
                        ease: "easeOut"
                    }}
                />
            ))}
        </div>
    );
};

export default Hologram;
