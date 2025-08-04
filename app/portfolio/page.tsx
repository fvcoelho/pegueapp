import { ExternalLink, Calendar, Building2, Code } from "lucide-react"
import Link from "next/link"

export default function PortfolioPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our successful projects and see how we've helped businesses transform their ideas into reality
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-blue-100">{project.client}</p>
              </div>
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Features:</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {project.duration}
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies Grid */}
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
          More Success Stories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mr-3">
                  <Building2 className="h-5 w-5 text-gray-600 dark:text-gray-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{study.company}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{study.industry}</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{study.summary}</p>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                  <Code className="h-4 w-4" />
                  {study.type}
                </span>
                <span className="text-gray-500 dark:text-gray-400">{study.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto mt-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8"
            >
              <blockquote className="text-gray-600 dark:text-gray-300 mb-4">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  {testimonial.author[0]}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.position}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto mt-16 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Ready to Join Our Success Stories?
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Let's work together to create your next successful project
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Start Your Project
        </Link>
      </section>
    </div>
  )
}

const featuredProjects = [
  {
    title: "Kyodai Remittance",
    client: "Ativata Software",
    description: "A comprehensive mobile remittance application enabling secure international money transfers with real-time exchange rates and multi-currency support.",
    features: [
      "Cross-platform mobile app (iOS & Android)",
      "Secure payment processing integration",
      "Real-time currency exchange rates",
      "Multi-language support"
    ],
    technologies: ["Xamarin", "C#", ".NET Core", "Azure"],
    duration: "2022 - Present",
    link: null
  },
  {
    title: "OnlineReg Platform",
    client: "Ativata Software",
    description: "A modern web-based registration system built with Blazor, providing seamless integration between front-end and back-end components for efficient user management.",
    features: [
      "Single-page application with Blazor",
      "Real-time data synchronization",
      "Advanced user authentication",
      "Responsive design for all devices"
    ],
    technologies: ["Blazor", "C#", "SQL Server", "Azure"],
    duration: "2022 - 2023",
    link: null
  }
]

const caseStudies = [
  {
    company: "Lopes Imóveis",
    industry: "Real Estate",
    type: "CRM System",
    summary: "Integrated payment gateway system with their existing CRM, improving transaction processing by 40%.",
    year: "2021-2022"
  },
  {
    company: "E-Deploy",
    industry: "Food Service",
    type: "Management Platform",
    summary: "Built a comprehensive store management system integrated with major food delivery services.",
    year: "2020-2021"
  },
  {
    company: "PegueLa",
    industry: "E-commerce",
    type: "Marketplace",
    summary: "Founded and developed a complete marketplace platform connecting small businesses with customers.",
    year: "2018-2019"
  },
  {
    company: "Grupo LTM",
    industry: "Loyalty Programs",
    type: "Campaign Systems",
    summary: "Developed loyalty campaign systems for major brands including Shell, BMW, and Panasonic.",
    year: "2014-2018"
  },
  {
    company: "SKY Brasil",
    industry: "Telecommunications",
    type: "Content Management",
    summary: "Automated content validation system for electronic programming guide, reducing errors by 75%.",
    year: "2012-2013"
  },
  {
    company: "MetLife",
    industry: "Insurance",
    type: "CRM Integration",
    summary: "Developed customizable CRM modules and reporting systems for improved customer service.",
    year: "2008-2012"
  }
]

const testimonials = [
  {
    quote: "PegueApp delivered exceptional results on our mobile remittance platform. Their technical expertise and attention to detail exceeded our expectations.",
    author: "Marcus Silva",
    position: "CTO",
    company: "Ativata Software"
  },
  {
    quote: "Working with Fabio and his team was a game-changer for our digital transformation. They understood our business needs and delivered a solution that truly made a difference.",
    author: "Ana Santos",
    position: "Product Manager",
    company: "Lopes Imóveis"
  }
]