// src/components/TechStack.tsx (FINAL dengan GSAP Animation)
import { useRef, useEffect } from "react";
import { gsap } from "gsap";

import type { TechStackType } from "../types/dataTypes";
import SubTitle from "./SubTitle";
import { SkillBadge } from "./TechBadge";


const TechStack = ({ data }: { data: TechStackType[] }) => {
    const sectionRef = useRef<HTMLElement>(null);
    const marqueeRef = useRef<HTMLDivElement>(null);

    // Duplicate skills for infinite scroll effect
    const marqueeSkills = [...data, ...data];

    useEffect(() => {
        const section = sectionRef.current;
        const marqueeInner = marqueeRef.current;
        if (!section || !marqueeInner) return;


        gsap.set(section.querySelectorAll('.tech-text-item'), { y: 50, opacity: 0 });

        gsap.to(section.querySelectorAll('.tech-text-item'), {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none none",
            }
        });

        const items = marqueeInner.querySelectorAll('.skill-badge');
        let totalWidth = 0;
        const singleSetCount = data.length;


        for (let i = 0; i < singleSetCount; i++) {
            const itemElement = items[i] as HTMLElement;
            totalWidth += itemElement.offsetWidth;
            const style = window.getComputedStyle(itemElement);
            totalWidth += parseFloat(style.marginLeft) + parseFloat(style.marginRight);
        }


        gsap.to(marqueeInner, {
            x: `-${totalWidth}px`,
            ease: "none",
            duration: 30,
            repeat: -1,
            modifiers: {
                x: (x) => {
                    const xVal = parseFloat(x);
                    return `${xVal % totalWidth}px`;
                }
            }
        });


    }, [data.length]);

    return (
        <section ref={sectionRef} className="bg-zinc-700 py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    <div>
                        <SubTitle className="tech-text-item">Tech Stack</SubTitle>
                        <h2 className="text-4xl font-extrabold leading-snug mb-4 tech-text-item">
                            The Technology Fueling <br />
                            Innovation and Reliability.
                        </h2>
                        <p className="text-gray-400 text-base mb-6 tech-text-item">
                            My work spans the entire stack, from hardware programming (IoT) and secure infrastructure management, to crafting efficient back-end APIs and delivering engaging front-end user experiences. This comprehensive skill set ensures projects are scalable, robust, and completed with end-to-end control.
                        </p>
                    </div>

                    <div></div>
                </div>

                {/* Infinite Marquee */}
                <div className="relative w-full overflow-hidden mb-16 mt-16">

                    <div className="absolute left-0 top-0 bottom-0 w-1/12 bg-linear-to-r from-zinc-700 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-1/12 bg-linear-to-l from-zinc-700 to-transparent z-20 pointer-events-none"></div>

                    <div ref={marqueeRef} className="flex flex-nowrap w-max">
                        {marqueeSkills.map((item, index) => (
                            <SkillBadge
                                key={index}
                                name={item.name}
                                icon={item.icon}
                                color={item.color}
                                className="skill-badge mx-4 shrink-0"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default TechStack;