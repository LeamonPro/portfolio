import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Layout, Server, Settings, Cpu } from 'lucide-react';
import './Skills.css';

const Skills: React.FC = () => {
    // We can' easily counter-rotate in pure CSS with this structure without complex nesting.
    // Instead we will let them spin.

    // Skill Data
    const orbit1 = [
        { name: 'HTML', icon: <Layout /> },
        { name: 'CSS', icon: <Settings /> },
        { name: 'JS', icon: <Code /> }
    ];

    const orbit2 = [
        { name: 'React', icon: <Cpu /> },
        { name: 'Node', icon: <Server /> },
        { name: 'Ts', icon: <Code /> },
        { name: 'Framer', icon: <Layout /> }
    ];

    const orbit3 = [
        { name: 'Next', icon: <Globe /> },
        { name: 'Three', icon: <Settings /> },
        { name: 'Git', icon: <Database /> },
        { name: 'Python', icon: <Code /> },
        { name: 'SQL', icon: <Database /> }
    ];

    // Helper to position planets
    const getPos = (total: number, index: number, radius: number) => {
        const angle = (index / total) * 2 * Math.PI;
        // pixel offsets
        const x = Math.cos(angle) * (radius / 2);
        const y = Math.sin(angle) * (radius / 2);
        return { left: `calc(50% + ${x}px - 30px)`, top: `calc(50% + ${y}px - 30px)` };
    };

    return (
        <section id="skills" className="skills-container">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', zIndex: 20 }}
            >
                <h2 className="text-gradient" style={{ fontSize: '3rem', fontWeight: 'bold' }}>Skills Universe</h2>
                <p style={{ color: 'var(--text-secondary)' }}>Orbiting the core of creativity.</p>
            </motion.div>

            <div className="solar-system">
                <div className="sun">CORE</div>

                {/* Orbit 1 */}
                <div className="orbit orbit-1">
                    {orbit1.map((skill, i) => (
                        <div key={i} className="planet" style={getPos(orbit1.length, i, 200)}>
                            <div className="planet-content">
                                {skill.icon}
                                <span>{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Orbit 2 */}
                <div className="orbit orbit-2">
                    {orbit2.map((skill, i) => (
                        <div key={i} className="planet" style={getPos(orbit2.length, i, 350)}>
                            <div className="planet-content">
                                {skill.icon}
                                <span>{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Orbit 3 */}
                <div className="orbit orbit-3">
                    {orbit3.map((skill, i) => (
                        <div key={i} className="planet" style={getPos(orbit3.length, i, 500)}>
                            <div className="planet-content">
                                {skill.icon}
                                <span>{skill.name}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
