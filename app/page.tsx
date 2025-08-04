import Link from "next/link"
import { ArrowRight, Code, Smartphone, Cloud, Zap, Shield, Users } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Build Better Software,
              <span className="text-blue-600 dark:text-blue-400"> Faster</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with professional software development solutions. 
              From web applications to mobile apps and cloud infrastructure, we deliver 
              excellence at every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-base font-medium rounded-md text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive software solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group bg-gray-50 dark:bg-gray-900 rounded-lg p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {service.description}
                </p>
                <Link
                  href="/services"
                  className="text-blue-600 dark:text-blue-400 font-medium inline-flex items-center hover:underline"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose PegueApp
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Delivering excellence through expertise, innovation, and commitment
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center w-10 h-10 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-md">
                    {feature.icon}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600 dark:bg-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve your software development goals
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-100 transition-colors"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </>
  )
}

const services = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Web Development",
    description: "Custom web applications built with modern frameworks and best practices for optimal performance and user experience."
  },
  {
    icon: <Smartphone className="h-6 w-6" />,
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver seamless experiences across iOS and Android devices."
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and DevOps solutions using AWS, Docker, and modern deployment practices."
  }
]

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: "20+ Years Experience",
    description: "Decades of expertise in software development across various industries and technologies."
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Proven Track Record",
    description: "Successfully delivered projects for startups to enterprise clients with consistent quality."
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Agile Approach",
    description: "Following Scrum and Agile methodologies for efficient project delivery and client collaboration."
  },
  {
    icon: <Code className="h-5 w-5" />,
    title: "Modern Tech Stack",
    description: "Expertise in React, Node.js, .NET, and cloud technologies for cutting-edge solutions."
  },
  {
    icon: <Shield className="h-5 w-5" />,
    title: "Best Practices",
    description: "SOLID principles, clean architecture, and industry standards for maintainable code."
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: "Fast Delivery",
    description: "Efficient development process ensuring timely delivery without compromising quality."
  }
]