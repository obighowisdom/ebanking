import Hero from '../../components/Hero/Hero'
import BankingServices from '../../components/HomePage/Category'
import BankingServiceCards from '../../components/HomePage/BankingServiceCard'
import Choice from '../../components/HomePage/Choose'
import Missions from '../../components/HomePage/Missions'
import FAQ from '../../components/HomePage/FAQ'
import CTA from '../../components/HomePage/CTA'
import Connect from '../../components/HomePage/Connect'
import Footer from '../../components/HomePage/Footer'

const page = () => {
  return (
    <div>
      <Hero />
      <Choice />
      <BankingServices />
      <BankingServiceCards />
      <Missions />
      <FAQ />
      <CTA />
      <Connect />
      <Footer />
    </div>
  )
}

export default page