import Hero from '../components/Hero'
import ServicesOverview from '../components/ServicesOverview'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import InternationalServices from '../components/InternationalServices'
import CTABanner from '../components/CTABanner'

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Testimonials />
      <InternationalServices />
      <CTABanner />
    </>
  )
}