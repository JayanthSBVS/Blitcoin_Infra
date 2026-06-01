import PageHero from '@/components/ui/PageHero'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Target, Eye, Shield, Users, Clock } from 'lucide-react'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/ui/PageTransition'
import Reveal from '@/components/ui/Reveal'

export const metadata = {
  title: 'Our Story | Blitcon Infra',
  description: 'With over 6 years of expertise, Blitcon Infra specializes in house construction, commercial projects, and sustainable township developments.',
}

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="bg-surface min-h-screen">
        <PageHero
          title="Engineering Trust Since 2019"
          subtitle="Our Journey"
          description="Crafting exceptional quality, innovation, and trust into every project we undertake. From dream homes to thriving commercial landmarks."
          image="/assets/images/about_hero.png"
          breadcrumb={[{ label: 'About Us' }]}
        />

        {/* -- Company Story -- */}
        <section className="py-20 lg:py-32">
          <div className="container-fluid">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
              <div className="lg:col-span-6">
                <Reveal>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-px bg-brand-accent" />
                    <span className="text-eyebrow uppercase">Legacy of Excellence</span>
                  </div>
                  <h2 className="text-display-md mb-8 leading-[1.1] tracking-tight text-main">
                    Raising the Standard in <span className="text-brand-accent">Construction Quality</span>
                  </h2>
                  <div className="space-y-6 text-lg text-sub leading-relaxed font-medium">
                    <p>
                      Our journey began with a vision to deliver exceptional quality, innovation, and trust to every project we undertake. From crafting dream homes to creating thriving commercial spaces and modern apartments, we have built a reputation for excellence, reliability, and customer satisfaction.
                    </p>
                    <p>
                      At the heart of our success lies a passionate team of professionals who bring unparalleled expertise, creativity, and precision to every project. We take pride in transforming spaces into functional, aesthetically pleasing, and sustainable environments tailored to our clients' unique needs.
                    </p>
                    <p>
                      Join us as we continue to build a legacy of trust, innovation, and excellence in the construction industry.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                    <div className="flex flex-col gap-2">
                      <div className="text-3xl lg:text-4xl font-black text-brand-accent">6+</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-dim">Years Experience</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-3xl lg:text-4xl font-black text-brand-accent">150+</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-dim">Projects Built</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-3xl lg:text-4xl font-black text-brand-accent">100%</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-dim">Client Satisfaction</div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="text-3xl lg:text-4xl font-black text-brand-accent">10 Yr</div>
                      <div className="text-[9px] font-black uppercase tracking-widest text-dim">Structural Warranty</div>
                    </div>
                  </div>
                </Reveal>
              </div>

              <div className="lg:col-span-6">
                <Reveal direction="left" delay={0.2}>
                  <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl group border border-border-primary">
                    <Image
                      src="/assets/images/about_legacy_new_1780298412333.png"
                      alt="Blitcon Construction Quality"
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                    <div className="absolute inset-4 border border-white/20 pointer-events-none" />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </section>

        {/* -- Mission & Vision -- */}
        <section className="py-24 lg:py-32 bg-surface-stone relative overflow-hidden">
          <div className="absolute inset-0 arch-grid opacity-10 pointer-events-none" />
          
          <div className="container-fluid relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Mission */}
              <Reveal>
                <div className="card-premium p-10 lg:p-14 h-full group hover:translate-y-[-8px] transition-all duration-500 bg-card border-border-primary shadow-md">
                  <div className="w-16 h-16 rounded-sm bg-brand-accent/10 flex items-center justify-center mb-8">
                    <Target className="w-8 h-8 text-brand-accent" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-main">Our Mission</h3>
                  <p className="text-lg text-sub leading-relaxed font-medium">
                    Our goal is to be the builder you can trust the most. We earn that trust by being honest and aiming for perfection in everything we do. We only take on a few jobs at a time, so we can give your project our full attention and ensure the quality is excellent. For us, success means building strong relationships and keeping our promises, creating work that proves you can count on us.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    {['Honesty', 'Perfection', 'Integrity'].map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-brand-accent/5 py-2 px-4 rounded-full text-brand-accent border border-brand-accent/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Vision */}
              <Reveal delay={0.2}>
                <div className="card-premium card-inverted p-10 lg:p-14 h-full group hover:translate-y-[-8px] transition-all duration-500">
                  <div className="w-16 h-16 rounded-sm bg-white/10 flex items-center justify-center mb-8">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-6 text-white">Our Vision</h3>
                  <p className="text-lg text-white/90 leading-relaxed font-medium">
                    We want to become the most trusted name in construction in our area. When people see our name, we want them to know it stands for great quality and work done right. Our goal is to be the first choice for clients who want a reliable partner and total peace of mind. In the long run, we want our legacy to be simple: to be remembered as the company everyone could trust.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    {['Innovation', 'Sustainability', 'Legacy'].map(tag => (
                      <span key={tag} className="text-[10px] font-black uppercase tracking-widest bg-white/10 py-2 px-4 rounded-full text-white border border-white/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* -- Values -- */}
        <section className="py-24 lg:py-32 mb-20">
          <div className="container-fluid">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto mb-20">
                <span className="text-eyebrow uppercase mb-4 block">The Blitcon Standard</span>
                <h2 className="text-display-sm font-black mb-6 text-main">Our Core Values</h2>
                <p className="text-lg text-sub font-medium leading-relaxed">
                  We operate on a foundation of architectural integrity and client-centric collaboration, ensuring every milestone is met with precision.
                </p>
              </div>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 lg:gap-8">
              {[
                { 
                  icon: Shield, 
                  title: 'Quality', 
                  desc: 'Uncompromising standards.' 
                },
                { 
                  icon: Users, 
                  title: 'Loyalty', 
                  desc: 'Committed to our clients.' 
                },
                { 
                  icon: Target, 
                  title: 'Trustworthiness', 
                  desc: 'Honesty as our bedrock.' 
                },
                { 
                  icon: Eye, 
                  title: 'Passion', 
                  desc: 'Driven by creativity.' 
                },
                { 
                  icon: Clock, 
                  title: 'Perfection', 
                  desc: 'Precision in every detail.' 
                }
              ].map((v, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <div className="text-center p-6 lg:p-8 rounded-sm hover:bg-surface-stone transition-all duration-500 border border-transparent hover:border-border-primary group h-full">
                    <div className="w-14 h-14 rounded-full bg-brand-accent/5 flex items-center justify-center mx-auto mb-6 transition-transform group-hover:scale-110">
                      <v.icon className="w-6 h-6 text-brand-accent" />
                    </div>
                    <h4 className="text-lg font-black mb-3 text-main">{v.title}</h4>
                    <p className="text-xs text-sub leading-relaxed font-medium">{v.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}
