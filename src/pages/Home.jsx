import Hero from '../sections/Hero'
import StatsBand from '../sections/StatsBand'
import AboutIntro from '../sections/AboutIntro'
import ServicesSection from '../sections/ServicesSection'
import DoctorSection from '../sections/DoctorSection'
import JourneySection from '../sections/JourneySection'
import Testimonials from '../sections/Testimonials'
import LatestPosts from '../sections/LatestPosts'
import BookingSection from '../sections/BookingSection'
import { useTitle } from '../lib/utils'

export default function Home() {
  useTitle()
  return (
    <>
      <Hero />
      <StatsBand />
      <AboutIntro />
      <ServicesSection />
      <DoctorSection />
      <JourneySection />
      <Testimonials />
      <LatestPosts />
      <BookingSection />
    </>
  )
}
