import React from 'react';
import { Monitor, Mic, Wifi, Settings, Check, Phone } from 'lucide-react';
import Navbar from './components/Navbar';
import PricingCard from './components/PricingCard';

function App() {
  const compatibleSystems = [
    'Cisco', 'Poly', 'Logi', 'Neat', 'Yealink',
    'Biamp', 'QSC', 'Shure'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 lg:pt-24">
        <div className="relative">
          {/* Hero Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2070&q=80"
              alt="Modern conference room"
              className="w-full h-[600px] object-cover brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 to-red-600/70"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="pt-24 pb-32 md:pt-32 md:pb-40">
              <div className="max-w-3xl">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Know Your Meeting Status</span>
                  <span className="block text-red-200">At a Glance</span>
                </h1>
                <p className="mt-6 text-xl text-red-50 max-w-3xl">
                  Enhance your conference room experience with smart LED indicators that show mute status instantly.
                  Perfect for modern workspaces and hybrid meetings.
                </p>
                <div className="mt-8 flex gap-4">
                  <a
                    href="#pricing"
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-red-700 bg-white hover:bg-red-50 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                  </a>
                  <a
                    href="#features"
                    className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-500 bg-opacity-30 hover:bg-opacity-40 md:py-4 md:text-lg md:px-10"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Feature Cards */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" style={{ marginTop: '-100px' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="text-red-600 mb-4">
                  <Mic className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Instant Status</h3>
                <p className="mt-2 text-gray-600">Red when muted, green when active. Never guess your mute status again.</p>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="text-red-600 mb-4">
                  <Settings className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Easy Setup</h3>
                <p className="mt-2 text-gray-600">Simple installation and configuration through our web interface.</p>
              </div>
              <div className="bg-white rounded-lg shadow-xl p-8">
                <div className="text-red-600 mb-4">
                  <Wifi className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900">Universal Support</h3>
                <p className="mt-2 text-gray-600">Works with all major video conferencing systems and DSPs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Why Choose GlowMute?
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Simple, effective, and beautiful solution for modern conference rooms
            </p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col items-center p-6">
              <div className="h-12 w-12 text-red-600">
                <Mic />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Clear Status Indication</h3>
              <p className="mt-2 text-center text-gray-500">
                Red for muted, green for active, white when not in a call. Never wonder about your mute status again.
              </p>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="h-12 w-12 text-red-600">
                <Wifi />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Universal Compatibility</h3>
              <p className="mt-2 text-center text-gray-500">
                Works with all major video conferencing systems and audio DSPs.
              </p>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="h-12 w-12 text-red-600">
                <Settings />
              </div>
              <h3 className="mt-6 text-xl font-medium text-gray-900">Easy Configuration</h3>
              <p className="mt-2 text-center text-gray-500">
                Web interface for custom colors, brightness, and saturation settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Find Your Perfect Fit
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Solutions for every display size
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <PricingCard
              size="43-55"
              price={149}
              description="Perfect for small to medium conference rooms"
              features={[
                "Single display solution",
                "Easy installation",
                "Web configuration interface",
                "1-year warranty"
              ]}
            />
            
            <PricingCard
              size="65-75"
              price={199}
              description="Ideal for medium to large conference rooms"
              features={[
                "Single or dual display option",
                "Premium LED strips",
                "Extended coverage",
                "2-year warranty"
              ]}
              popular={true}
            />
            
            <PricingCard
              size="86-98"
              price={249}
              description="Perfect for large boardrooms"
              features={[
                "Dual display ready",
                "Professional installation available",
                "Extended LED coverage",
                "3-year warranty"
              ]}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">
              Need a custom solution for LED walls or multiple displays?
            </p>
            <a href="#contact" className="mt-4 inline-flex items-center text-red-600 hover:text-red-700">
              Contact us for custom pricing
              <Phone className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section id="compatibility" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Works With Your System
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Compatible with all major video conferencing and audio processing systems
            </p>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {compatibleSystems.map((system) => (
              <div key={system} className="flex items-center space-x-2 justify-center">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-lg text-gray-700">{system}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-lg mx-auto">
            <h2 className="text-3xl font-extrabold text-center text-gray-900">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-center text-gray-500">
              Questions? We're here to help.
            </p>
            <div className="mt-8">
              <form className="grid grid-cols-1 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Monitor className="h-8 w-8 text-red-400" />
              <span className="ml-2 text-xl font-bold text-white">GlowMute</span>
            </div>
            <p className="text-gray-400">© 2025 GlowMute. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
