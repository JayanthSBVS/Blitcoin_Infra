import PageHero from '@/components/ui/PageHero'
import PackageConfigurator from '@/components/ui/PackageConfigurator'
import Footer from '@/components/layout/Footer'
import PageTransition from '@/components/ui/PageTransition'
import Reveal from '@/components/ui/Reveal'

export const metadata = {
  title: 'Construction Packages | Blitcon Infra',
  description: 'Transparent construction pricing and premium material specifications. Compare our Standard, Premium, and Luxury packages for your next project.',
}

export default function PackagesPage() {
  return (
    <PageTransition>
      <main className="bg-surface min-h-screen">
        <PageHero
          title="Transparent Premium Packages"
          subtitle="Investment"
          description="Choose the tier of craftsmanship that fits your vision. Every package includes full structural design, 3D elevation, and engineering oversight."
          image="/assets/images/about_hero.png"
          breadcrumb={[{ label: 'Packages' }]}
        />

        {/* -- Intentional Gap after Hero -- */}
        <div className="h-24 lg:h-32" />

        {/* -- Package Comparison Section -- */}
        <section className="pb-24 lg:pb-32 overflow-visible">
          <div className="container-fluid">
            <Reveal>
              <div className="text-center max-w-3xl mx-auto mb-24">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="w-10 h-px bg-brand-accent" />
                  <span className="text-eyebrow uppercase">Configurator</span>
                  <div className="w-10 h-px bg-brand-accent" />
                </div>
                <h2 className="text-display-sm font-black mb-6 text-main">Architecture & Quality <span className="text-brand-accent">Comparison</span></h2>
                <p className="text-lg text-sub font-medium leading-relaxed">
                  We believe in absolute transparency. Compare every detail—from the grade of steel to the quality of interior paint—across our tiered investment levels.
                </p>
              </div>
            </Reveal>

            <PackageConfigurator />
          </div>
        </section>

        {/* -- Intentional Gap before Features -- */}
        <div className="h-12 lg:h-16" />

        {/* -- Features Summary -- */}
        <section className="py-24 lg:py-32 bg-surface-stone relative overflow-hidden border-t border-border-primary/50">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-accent/5 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2" />
          
          <div className="container-fluid relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 lg:gap-24">
              <Reveal delay={0.1}>
                <div className="flex flex-col gap-8">
                  <div className="text-brand-accent font-black text-6xl opacity-15">01.</div>
                  <h4 className="text-2xl font-black text-main">Pre-Construction Support</h4>
                  <p className="text-base text-sub leading-relaxed font-medium">
                    All packages include 2D floor plans, structural engineering drawings, and photorealistic 3D elevations as standard.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="flex flex-col gap-8">
                  <div className="text-brand-accent font-black text-6xl opacity-15">02.</div>
                  <h4 className="text-2xl font-black text-main">Material Integrity</h4>
                  <p className="text-base text-sub leading-relaxed font-medium">
                    We use only certified materials (JSW, Tata, Ultratech) with transparent batch tracking and quality assurance checks.
                  </p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="flex flex-col gap-8">
                  <div className="text-brand-accent font-black text-6xl opacity-15">03.</div>
                  <h4 className="text-2xl font-black text-main">Structural Warranty</h4>
                  <p className="text-base text-sub leading-relaxed font-medium">
                    Every Blitcon build comes with a comprehensive structural warranty and dedicated post-construction support.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* -- Final Closing Gap -- */}
        <div className="h-24 lg:h-32" />
        
        <Footer />
      </main>
    </PageTransition>
  )
}
