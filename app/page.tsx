import { Phone, Mail, Linkedin, Github, Calendar, Briefcase, GraduationCap, Globe } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <header className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 mb-6">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Fabio Coelho
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Full Stack Developer</p>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+55 11-96316-6165</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:fvcoelho@gmail.com" className="hover:text-blue-600 dark:hover:text-blue-400">
                fvcoelho@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-4 h-4" />
              <a href="https://www.linkedin.com/in/fvcoelho/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                LinkedIn
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              <a href="https://github.com/fvcoelho/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 dark:hover:text-blue-400">
                GitHub
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>Born: 04/09/1976</span>
            </div>
          </div>
        </header>

        {/* Career Objective */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            Career Objective
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            As a Full Stack Developer with more than two decades of software development experience and technical proficiency across a wide range of technologies, my aim is to contribute my extensive expertise to innovative projects. I am dedicated to adhering to Agile practices, Scrum, and various software development methodologies. My skillset has evolved to include more recent technologies such as Mobile/Web development using Xamarin and Blazor. In addition to my proficiency in C#, JavaScript, Node.js, React, React-Native, SQL, MySQL, MongoDB, and SOLID principles, I also possess advanced knowledge of cloud architecture, AWS, Docker deployment, Nginx, and best practices in the realm of DevOps.
          </p>
        </section>

        {/* Experience */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6" />
            Experience
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div key={index} className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">{exp.company}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-1">{exp.period} - {exp.position}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300 text-sm">
                  {exp.duties.map((duty, idx) => (
                    <li key={idx}>{duty}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8 mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <GraduationCap className="w-6 h-6" />
            Education
          </h2>
          <div className="space-y-3">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Postgraduate MBA in Service-oriented Architecture (SOA)
              </h3>
              <p className="text-gray-600 dark:text-gray-400">FIAP (2015-2016)</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                Master&apos;s Degree in Computer Science
              </h3>
              <p className="text-gray-600 dark:text-gray-400">Universidade São Marcos (1998-2002)</p>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <Globe className="w-6 h-6" />
            Languages
          </h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">Portuguese (Brazil) - Fluent</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-gray-700 dark:text-gray-300">English - Advanced spoken</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const experiences = [
  {
    company: "Ativata Software",
    period: "January 2022 to Present",
    position: "Senior Software Engineering",
    duties: [
      "Led mobile development for the Xamarin mobile app \"Kyodai Remittance,\" overseeing its creation and deployment on both the Apple Store and Google Play.",
      "Web application \"OnlineReg,\" utilizing Blazor for seamless integration of front-end and back-end components"
    ]
  },
  {
    company: "Lopes Consultoria de Imóveis",
    period: "January 2021 to August 2022",
    position: "Senior Software Engineering",
    duties: [
      "Worked within the Lopes Labs division, overseeing the maintenance of the CRM sales system.",
      "Led project to integrate \"Pagadorias\" with the sales system, involving front-end development, SQL server integration and APIs.",
      "Responsible for architecture and development of new gateway payments and APIs."
    ]
  },
  {
    company: "E-Deploy",
    period: "May 2020 to January 2021",
    position: "Senior Software Engineer",
    duties: [
      "System development, using Python and React JS, for store management of customers focused on food service",
      "Integration with major food delivery services",
      "Creation of Docker environment for our services for development and QA"
    ]
  },
  {
    company: "PegueLa",
    period: "February 2018 to December 2019",
    position: "Founder (Developer)",
    duties: [
      "Successfully founded and managed a marketplace application for small businesses across platforms.",
      "Utilized Node.js for back-end development, MongoDB for the database, and React and React-Native for front-end interfaces."
    ]
  },
  {
    company: "Grupo LTM",
    period: "July 2014 to February 2018",
    position: "Senior C# .Net Developer / System Architect",
    duties: [
      "Led the development of loyalty campaigns for diverse clients, including Shell, Panasonic, FMC, Amanco, Ajinomoto, BMW, and \"Cielo fidelidade.\""
    ]
  },
  {
    company: "Instituto Unibanco (Itaú)",
    period: "September 2013 to June 2014",
    position: "C# .Net Developer / System Analyst",
    duties: [
      "Contributed to the \"Sistema Jovem de Futuro\" project, an e-learning platform utilizing Moodle with PHP and MySQL."
    ]
  },
  {
    company: "SKY Brasil",
    period: "March 2012 to September 2013",
    position: "VB.Net Developer / System Analyst",
    duties: [
      "Automated and validated content for the \"Electronic Guide\" using a VB.Net application, integrating with SOAP Web Server and MS SQL Server."
    ]
  },
  {
    company: "Orbium NetCallCenter",
    period: "May 2008 to March 2012",
    position: "C# .Net Developer / Data Analyst",
    duties: [
      "Developed customizable CRM integration modules and reports for esteemed clients including B2W, Weber Quartzolit, Ecoesfera, MetLife Saúde e Previdência, and others."
    ]
  },
  {
    company: "Nucleotec",
    period: "December 2006 to May 2008",
    position: "VB Web Developer / Data Analyst",
    duties: [
      "Developed and analyzed process flows (WorkFlow) using Visual Basic (VB.NET) for insurance companies Liberty and ACE."
    ]
  }
];