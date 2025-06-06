import { Hero } from "@/components/ui/hero";
import { ServiceCard } from "@/components/ui/service-card";
import { COMPANY_TAGLINE, SERVICES } from "@/lib/constants";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero
        title="Local Tri-Cities Construction Experts"
        subtitle="Providing professional construction services for residential and commercial projects throughout Eastern Washington."
        ctaText="Get Your Free Estimate"
        ctaLink="/contact"
        imageUrl="https://images.unsplash.com/photo-1517089152318-42ec560349c0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGNvbnN0cnVjdGlvbiUyMHNpdGUlMjBhcmllbCUyMHZpZXd8ZW58MHx8MHx8fDA%3D"
      />

      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Construction Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From excavation to foundation work, we provide comprehensive construction services to meet all your project needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 text-sm line-clamp-2">
                    {service.shortDesc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button 
              asChild
              className="bg-[#113065] hover:bg-[#0f1056] text-white rounded-xl"
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[#113065] text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Quality Construction Services in Eastern Washington
            </h2>
            <p className="text-xl mb-8">
              With years of experience and a commitment to quality, we're the trusted choice for construction projects throughout the Tri-Cities area.
            </p>
            <Button 
              asChild
              size="lg"
              className="bg-[#aad6ec] text-[#113065] hover:bg-white hover:text-[#113065] rounded-xl text-lg"
            >
              <Link href="/contact">
                Get Your Free Estimate
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose H & I Construction?
              </h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#aad6ec] flex items-center justify-center mr-4">
                    <span className="text-[#113065] font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Experienced Professionals</h3>
                    <p className="text-gray-600">Our team brings years of construction experience to every project we undertake.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#aad6ec] flex items-center justify-center mr-4">
                    <span className="text-[#113065] font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Workmanship</h3>
                    <p className="text-gray-600">We pride ourselves on delivering high-quality results that stand the test of time.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#aad6ec] flex items-center justify-center mr-4">
                    <span className="text-[#113065] font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Reliable Service</h3>
                    <p className="text-gray-600">Count on us to complete your project on time and within budget.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#aad6ec] flex items-center justify-center mr-4">
                    <span className="text-[#113065] font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
                    <p className="text-gray-600">Our success is measured by the satisfaction of our clients and the quality of our work.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden h-96 shadow-xl">
              <img 
                src="https://i.ibb.co/21bCQnnb/worker.jpg" 
                alt="Construction site" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}