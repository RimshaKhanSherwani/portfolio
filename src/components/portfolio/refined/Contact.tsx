import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { portfolioData } from '../../../data/portfolioData';
import { SectionTitle } from './CommonComponents';

export const Contact = ({ contactRef, formData, handleInputChange, handleSubmit }: any) => {
    const { personalInfo } = portfolioData;

    const contactMethods = [
        { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}`, color: 'text-blue-400' },
        { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}`, color: 'text-green-400' },
        { icon: Github, label: 'GitHub', value: 'RimshaKhanSherwani', href: 'https://github.com/RimshaKhanSherwani', color: 'text-purple-400' },
        { icon: MapPin, label: 'Location', value: personalInfo.location, href: '#', color: 'text-red-400' },
        { icon: Linkedin, label: 'LinkedIn', value: 'Rimsha Khan Sherwani', href: 'https://www.linkedin.com/in/rimsha-khan-4696693b0/', color: 'text-blue-400' }
    ];

    return (
        <section id="contact" ref={contactRef} className="py-24 bg-gray-900 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">

                <div className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-12">
                    {/* Info Side */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="scroll-animate text-center">
                            <SectionTitle gradientText="Connect">Let's </SectionTitle>
                            <p className="text-white/60 leading-relaxed text-lg">
                                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {contactMethods.map((method, idx) => (
                                <a
                                    key={idx}
                                    href={method.href}
                                    className="flex items-center gap-6 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all group scroll-animate"
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform ${method.color}`}>
                                        <method.icon className="h-7 w-7" />
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold text-white/40 uppercase tracking-widest">{method.label}</p>
                                        <p className="text-white font-medium text-lg">{method.value}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    {/* <div className="lg:col-span-3 scroll-animate" style={{ transitionDelay: '300ms' }}>
                        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl space-y-8 shadow-2xl">
                            <div className="grid md:grid-cols-2 gap-8">
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Full Name</label>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="Rimsha Sherwani"
                                        required
                                    />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Email Address</label>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors"
                                        placeholder="rimsha@example.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-3">
                                <label className="text-sm font-bold text-white/60 uppercase tracking-widest ml-1">Your Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={6}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-purple-500 transition-colors resize-none"
                                    placeholder="How can I help you?"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold py-5 rounded-2xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3 shadow-xl shadow-purple-500/20 uppercase tracking-widest"
                            >
                                Send Message <Send className="h-5 w-5" />
                            </button>
                        </form>
                    </div> */}
                </div>
            </div>
        </section>
    );
};
