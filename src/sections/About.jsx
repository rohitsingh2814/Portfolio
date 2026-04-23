import { Code2, Rocket, Users, Lightbulb } from "lucide-react";

const highlights = [
    {
        icon: Code2,
        tittle: "Clean Code",
        description: "writing maintainable, scalable code that stands the test of time."
    },
    {
        icon: Rocket,
        tittle: "Performance",
        description: "Optimizing for speed and delivering lightning-fast user experiences."
    },
    {
        icon: Users,
        tittle: "Collaboration",
        description: "Working closely with teams to bring ideas to life."
    },
    {
        icon: Lightbulb,
        tittle: "clean code",
        description: "Staying ahead with the latest technologies and best practices."
    }
]
export const About = () => {
    return (
        <section id="About" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* left column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in ">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground" >Building the future,<span className="font-serif italic font-normal text-white"> one component at a time.</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 ">
                            <p>
                                I’m a passionate software engineer driven by curiosity and a desire to create meaningful digital 
                                experiences. My journey began with a fascination for how things work on the web, and it has evolved 
                                into a strong foundation in modern frontend technologies and scalable development practices.
                            </p>
                            <p>
                                specialize in React, Next.js, and TypeScript, crafting everything from elegant user interfaces to complex, production-grade applications. My approach blends performance, usability, and thoughtful design to deliver seamless user experiences.
                            </p>
                            <p>
                                Beyond coding, I actively explore emerging technologies, contribute to open-source projects, and stay engaged with the developer community to continuously grow and adapt.
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium text-foreground"> 
                                "My mission is to create digital experiences that are not just functional, but truly delightful - products that users love to use and developers love to maintain."
                            </p>
                        </div>
                    </div>
                     {/* right section  */}
                     <div className="grid sm:grid-cols-2 p-6 gap-6">
                        {highlights.map((item,idx)=>(
                            <div key={idx} className="glass p-6 rounded-2xl animate-fade-in "
                            style={{animationDelay:`${(idx+1)*100}ms`}}>
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                    <item.icon className="w-6 h-6 text-primary"/>
                                </div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {item.tittle}
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                   {item.description} 
                                </p>
                            </div>
                        ))}

                     </div>
                </div>
            </div>

        </section>)
};