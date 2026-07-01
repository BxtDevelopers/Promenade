
import Footer from "@/app/components/home3/Footer"
import Navbar from "@/app/components/home3/Navbar"
import ServiceCTA from "@/app/components/services/ServiceCTA"
import ServiceFAQSection from "@/app/components/services/ServiceFaq"
import ServiceHero from "@/app/components/services/ServiceHero"
import ServicesHub from "@/app/components/services/ServiceHub"
import ServiceIntro from "@/app/components/services/ServiceIntro"
import LocationMap from "@/app/components/services/ServiceLocation"
import WhyChooseUs from "@/app/components/services/ServicesWhyChooseUs"


export default function ServicePage (){
    return (
        <>
        <Navbar/>
        <ServiceHero/>
        <ServiceIntro/>
        <ServicesHub/>
        <WhyChooseUs/>
        <LocationMap/>
        <ServiceFAQSection/>
        <ServiceCTA/>
        <Footer/>
        </>
    )
}