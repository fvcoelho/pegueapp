import { Code, Smartphone, Cloud, Briefcase, CheckCircle, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive software development solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto">
        <div className="space-y-16">
          {services.map((service, index) => (
            <div
              key={index}
              id={service.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              <div className="flex-1">
                <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mr-4">
                      {service.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                      {service.title}
                    </h2>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    What we offer:
                  </h3>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex gap-4">
                    <Link
                      href="/contact"
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-lg p-8 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      {service.largeIcon}
                    </div>
                    <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {service.tagline}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto mt-20">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Our Development Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Let&apos;s discuss how we can help bring your vision to life
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Schedule a Consultation
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </section>
    </div>
  )
}

const services = [
  {
    id: "web",
    icon: <Code className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    largeIcon: <Code className="h-16 w-16 text-blue-600 dark:text-blue-400" />,
    title: "Web Development",
    tagline: "Modern, Scalable Web Solutions",
    description:
      "Transform your business with custom web applications built using the latest technologies and best practices. We create responsive, user-friendly solutions that drive engagement and deliver results.",
    features: [
      "Custom web application development with React, Next.js, and Node.js",
      "Progressive Web Apps (PWA) for enhanced mobile experience",
      "E-commerce platforms and marketplace solutions",
      "API development and third-party integrations",
      "Performance optimization and SEO implementation",
      "Responsive design for all devices and screen sizes"
    ]
  },
  {
    id: "mobile",
    icon: <Smartphone className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    largeIcon: <Smartphone className="h-16 w-16 text-blue-600 dark:text-blue-400" />,
    title: "Mobile App Development",
    tagline: "Native & Cross-Platform Excellence",
    description:
      "Reach your customers wherever they are with powerful mobile applications. We develop both native and cross-platform solutions that provide seamless user experiences across iOS and Android devices.",
    features: [
      "Cross-platform development with React Native and Xamarin",
      "Native iOS and Android application development",
      "Mobile app UI/UX design and prototyping",
      "App Store and Google Play deployment",
      "Push notifications and real-time features",
      "Offline functionality and data synchronization"
    ]
  },
  {
    id: "cloud",
    icon: <Cloud className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    largeIcon: <Cloud className="h-16 w-16 text-blue-600 dark:text-blue-400" />,
    title: "Cloud Solutions",
    tagline: "Scalable Infrastructure & DevOps",
    description:
      "Leverage the power of cloud computing to scale your business efficiently. We design and implement robust cloud architectures that ensure reliability, security, and optimal performance.",
    features: [
      "AWS cloud architecture design and implementation",
      "Docker containerization and Kubernetes orchestration",
      "CI/CD pipeline setup and automation",
      "Infrastructure as Code (IaC) with Terraform",
      "Cloud migration and optimization strategies",
      "Monitoring, logging, and performance tuning"
    ]
  },
  {
    id: "consulting",
    icon: <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
    largeIcon: <Briefcase className="h-16 w-16 text-blue-600 dark:text-blue-400" />,
    title: "Technical Consulting",
    tagline: "Expert Guidance & Strategy",
    description:
      "Get expert advice on your technical challenges and strategic decisions. Our consulting services help you make informed choices about technology, architecture, and development processes.",
    features: [
      "Technology stack evaluation and recommendations",
      "Code review and architecture assessment",
      "Agile/Scrum implementation and coaching",
      "Technical debt analysis and remediation planning",
      "Performance audits and optimization strategies",
      "Team training and knowledge transfer"
    ]
  }
]

const process = [
  {
    title: "Discovery",
    description: "Understanding your business needs and project requirements"
  },
  {
    title: "Planning",
    description: "Creating detailed project roadmap and technical specifications"
  },
  {
    title: "Development",
    description: "Agile development with regular updates and feedback loops"
  },
  {
    title: "Delivery",
    description: "Testing, deployment, and ongoing support for your solution"
  }
]