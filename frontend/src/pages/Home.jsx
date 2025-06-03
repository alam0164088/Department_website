import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

function Home() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    customPaging: () => (
      <div className="w-3 h-3 mx-1 rounded-full bg-gradient-to-r from-teal-400 to-blue-500"></div>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-50 to-purple-50">
      {/* Hero Section */}
      <div className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 via-blue-900/70 to-purple-900/60"></div>
        <img
          src="/images/img1.jpeg"
          alt="CSE Department Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center space-y-8 max-w-4xl px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl tracking-tight animate-fade-in">
              Welcome to CSE Department
            </h1>
            <p className="text-xl md:text-2xl text-teal-100 animate-fade-in-up">
              Empowering Future Tech Leaders
            </p>
            <Link to="/programs">
              <button className="mt-11 px-8 py-4 text-lg font-semibold rounded-full bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 text-white hover:from-purple-500 hover:via-blue-500 hover:to-teal-500 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl animate-bounce">
                Explore Our Programs
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              About the CSE Department
            </h2>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 bg-gradient-to-r from-teal-500 to-blue-500 bg-clip-text text-transparent">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Our Mission</h3>
              <p className="text-gray-600">
                To provide world-class education and foster innovation in computer science and engineering.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                👁️
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Our Vision</h3>
              <p className="text-gray-600">
                To be a global leader in technological advancement and research excellence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4 bg-gradient-to-r from-purple-500 to-teal-500 bg-clip-text text-transparent">
                🎯
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Our Goals</h3>
              <p className="text-gray-600">
                To produce skilled graduates and advance cutting-edge research.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-teal-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Main Activities</h2>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-12 h-1 bg-gradient-to-r from-teal-400 to-blue-400 rounded-full"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-400 to-teal-400 rounded-full"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Education</h3>
              <p className="text-teal-100">
                Offering undergraduate and postgraduate programs in CSE, focusing on AI, software engineering, and data science.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Research</h3>
              <p className="text-teal-100">
                Conducting innovative research in machine learning, cybersecurity, and IoT.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20 transform hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-4">Community</h3>
              <p className="text-teal-100">
                Organizing workshops, coding bootcamps, and tech outreach programs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              Gallery
            </h2>
            <div className="flex justify-center items-center space-x-2">
              <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full"></div>
              <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <div className="w-12 h-1 bg-gradient-to-r from-purple-500 to-teal-500 rounded-full"></div>
            </div>
          </div>

          <div className="relative">
            <Slider {...sliderSettings}>
              <div className="px-2">
                <div className="relative h-[400px] rounded-xl overflow-hidden group">
                  <img
                    src="/images/techfest.jpeg"
                    alt="Tech Fest 2025"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Annual Tech Fest 2025</h3>
                    <p className="text-teal-100">Celebrating innovation and technology</p>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="relative h-[400px] rounded-xl overflow-hidden group">
                  <img
                    src="/images/lab.jpg"
                    alt="Research Lab"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Research Lab</h3>
                    <p className="text-teal-100">Where innovation meets excellence</p>
                  </div>
                </div>
              </div>
              <div className="px-2">
                <div className="relative h-[400px] rounded-xl overflow-hidden group">
                  <img
                    src="/images/cod.jpg"
                    alt="Coding Bootcamp"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Coding Bootcamp</h3>
                    <p className="text-teal-100">Building the next generation of developers</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>

      {/* Notice & Results Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-teal-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Notice Board */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M5 3a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V5a2 2 0 00-2-2H5zm0 2h10v12H5V5zm2 2h6v2H7V7zm0 4h6v2H7v-2z" />
              </svg>
              Notice Board
            </h2>
            <div className="space-y-4">
              {[
                { date: 'June 15, 2025', title: 'AI and Machine Learning Seminar' },
                { date: 'June 20, 2025', title: 'Project Submission Deadline' },
                { date: 'June 10, 2025', title: 'Annual Coding Competition Registration' },
              ].map((notice, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10"
                >
                  <p className="text-teal-300 text-sm">{notice.date}</p>
                  <p className="text-white font-medium">{notice.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Results Section */}
          <div className="bg-white/10 backdrop-blur-lg p-8 rounded-xl border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <svg className="w-8 h-8 mr-3 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7l-4-4H6zm0 2h5v3h3v9H6V4zm2 5h4v2H8V9zm0 4h4v2H8v-2z" />
              </svg>
              Latest Results
            </h2>
            <div className="space-y-4">
              {[
                { semester: 'Spring 2025', details: '95% pass rate, 20 students with CGPA 4.0' },
                { semester: 'Programming Contest', details: 'CSE team secured 2nd place nationally' },
                { semester: 'Research Grant', details: 'Awarded $50,000 for AI healthcare project' },
              ].map((result, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/10"
                >
                  <p className="text-teal-300 font-medium">{result.semester}</p>
                  <p className="text-white">{result.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;