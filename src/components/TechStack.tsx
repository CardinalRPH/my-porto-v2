import SubTitle from "./SubTitle";

const TechStack = () => {
    const skills = [
        {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
        },
        {
            name: 'NestJS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg'
        },
        {
            name: 'Next.js',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'
        },
        {
            name: 'TypeScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'
        },
        {
            name: 'Python',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
        },
        {
            name: 'LiveKit',
            icon: 'https://unpkg.com/@lobehub/icons-static-svg@latest/icons/livekit-color.svg'
        },
        {
            name: 'Deepgram',
            icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/deepgram.svg'
        },
        {
            name: 'Laravel',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg'
        },
        {
            name: 'PHP',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg'
        },
        {
            name: 'Remix',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/remix/remix-original.svg'
        },
        {
            name: 'Kotlin',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg'
        },
        {
            name: 'Firebase',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
        },
        {
            name: 'MySQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
        },
        {
            name: 'Tailwind',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg'
        },
        {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
        },
        {
            name: 'Git',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
        }
    ];

    // Duplicate skills for infinite scroll effect
    const marqueeSkills = [...skills, ...skills];

    return (


        <section className="bg-gray-800 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">

                {/* === Top Section: Experience & Statistics (Tidak berubah) === */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div className="fade-up-item">
                        <SubTitle>Tech Stack</SubTitle>
                        <h2 className="text-4xl font-extrabold leading-snug mb-4">
                            The Technology Fueling <br />
                            Innovation and Reliability.
                        </h2>
                        <p className="text-gray-400 text-base mb-6">
                            My work spans the entire stack, from hardware programming (IoT) and secure infrastructure management, to crafting efficient back-end APIs and delivering engaging front-end user experiences. This comprehensive skill set ensures projects are scalable, robust, and completed with end-to-end control.
                        </p>



                    </div>
                </div>
                {/* Infinite Marquee */}
                <div className="relative w-full overflow-hidden  mb-16">
                    {/* Gradient Masks */}
                    <div className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#0F0F0F] to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 bg-gradient-to-l from-[#0F0F0F] to-transparent z-20 pointer-events-none"></div>

                    <div className="flex w-max animate-scroll">
                        {marqueeSkills.map((skill, index) => (
                            <div
                                key={`${skill.name}-${index}`}
                                className="mx-4 w-[180px] h-[180px] group relative p-6 rounded-2xl bg-[#161616]/50 backdrop-blur-sm border border-white/5 hover:border-[#FF7A00]/50 transition-all duration-500 hover:-translate-y-2 shadow-lg hover:shadow-[0_8px_30px_rgba(255,122,0,0.1)] flex flex-col items-center justify-center text-center"
                            >
                                {/* Hover Gradient Background */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#FF7A00]/0 to-[#FF7A00]/0 group-hover:from-[#FF7A00]/5 group-hover:to-transparent transition-all duration-500 rounded-2xl"></div>

                                <div className="relative z-10 w-16 h-16 mb-4 p-3 rounded-2xl bg-[#0F0F0F] border border-white/5 group-hover:border-[#FF7A00]/20 shadow-inner flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                                    <img
                                        src={skill.icon}
                                        alt={skill.name}
                                        className={`w-full h-full object-contain ${skill.name === 'Next.js' ? 'invert' : ''}`}
                                    />
                                </div>

                                <div className="relative z-10">
                                    <h3 className="text-lg font-bold text-white group-hover:text-[#FF7A00] transition-colors">{skill.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default TechStack;