import { Award, Target, Lightbulb, HandshakeIcon } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About PegueApp
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transforming ideas into powerful software solutions since 2018
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Our Story
          </h2>
          <div className="prose prose-lg text-gray-600 dark:text-gray-300 max-w-none">
            <p className="mb-4">
              PegueApp began as a vision to create a marketplace that would empower small businesses 
              to thrive in the digital economy. Founded by Fabio Coelho, a seasoned full-stack developer 
              with over 20 years of experience, the company has evolved from its marketplace roots into 
              a comprehensive software development consultancy.
            </p>
            <p className="mb-4">
              Our journey started with the development of "PegueLa," an innovative marketplace application 
              designed to connect small businesses with their customers. This experience taught us the 
              importance of understanding business needs deeply and building solutions that truly make 
              a difference.
            </p>
            <p>
              Today, PegueApp leverages decades of technical expertise across various industries to deliver 
              cutting-edge software solutions. We combine modern technologies with proven methodologies to 
              help businesses of all sizes achieve their digital transformation goals.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="max-w-7xl mx-auto mb-16">
        <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Languages & Frameworks
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• C#/.NET, JavaScript/TypeScript, Python</li>
                <li>• React, React Native, Node.js, Blazor</li>
                <li>• Xamarin for cross-platform mobile development</li>
                <li>• Modern web frameworks and libraries</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Infrastructure & Tools
              </h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                <li>• AWS Cloud Services & Architecture</li>
                <li>• Docker, Kubernetes, CI/CD pipelines</li>
                <li>• SQL Server, MySQL, MongoDB</li>
                <li>• DevOps best practices and automation</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
          Ready to turn your ideas into reality? We're here to help.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
        >
          Start a Conversation
        </a>
      </section>
    </div>
  )
}

const values = [
  {
    icon: <Award className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "Excellence",
    description: "Committed to delivering the highest quality in every project we undertake."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "Innovation",
    description: "Embracing cutting-edge technologies to create forward-thinking solutions."
  },
  {
    icon: <HandshakeIcon className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "Partnership",
    description: "Building lasting relationships through trust, transparency, and collaboration."
  },
  {
    icon: <Target className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
    title: "Results",
    description: "Focused on delivering measurable business value and achieving your goals."
  }
]