
import { useState, useEffect } from "react";
import {
  User,
  Server,
  ShieldCheck,
  ShieldHalf,
  Code2,
  MonitorSmartphone,
  Lock,
  Globe2,
  BatteryCharging,
  Laptop,
  LayoutTemplate,
  Database,
  Menu,
  Phone,
  X,
  ChevronDown,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      if (showDropdown) {
        setShowDropdown(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [showDropdown]);

const services = [
    {
      icon: <Server />,
      label: "Enterprise Systems Group",
      link: "/enterprise-systems-group",
    },
    {
      icon: <ShieldCheck />,
      label: "Information Security",
      link: "/informationsecurity",
    },
    {
      icon: <Globe2 />,
      label: "IoT Services",
      link: "/iotservices",
    },
  { icon: <BatteryCharging />, label: "Power Solutions", link: "/powersolutions" },

    {
      icon: <MonitorSmartphone />,
      label: "AV Solutions",
      link: "/avsolutions",
    },
    {
      icon: <Code2 />,
      label: "Professional IT Services",
      link: "/professionalitservices",
    },
    {
      icon: <Database />,
      label: "Infrastructure Systems Group",
      link: "/infrastructuresystemgroup",
    },
    {
      icon: <LayoutTemplate />,
      label: "Website Development",
      link: "/websitedevelopment",
    },
    {
      icon: <Laptop />,
      label: "Software Development",
      link: "/softwaredevelopment",
    },
    {
      icon: <Lock />,
      label: "Security Systems",
      link: "/securitysystems",
    },
    {
      icon: <ShieldHalf />,
      label: "Cyber Security Services",
      link: "/cybersecurityservices",
    },
  ];


  return (
    <div className="relative font-['Lato']">
      {/* Navbar */}
      <nav
        data-aos="fade-down"
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-300 animate-fadeDown ${
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md text-black"
            : "bg-transparent text-white"
        }`}
      >
        <img
          src="/assets/logo-newone.png"
          alt="COMMNET Logo"
          className="h-12 w-auto"
        />

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-10 text-base font-medium text-inherit">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/aboutus" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </a>
          </li>
          <li
            // onClick={() => setShowDropdown(!showDropdown)}
            onMouseEnter={() => setShowDropdown(!showDropdown)}
            className="relative cursor-pointer"
          >
            <span>Services</span>
          </li>
          <li>
            <a href="/contactus" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </a>
          
          </li>
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* <a
            href="https://wa.me/914442612928"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-4 py-2 rounded-full text-sm font-semibold ${
              scrolled
                ? "bg-black text-white"
                : "bg-white/10 backdrop-blur-md text-white"
            }`}
          >
            Contact Us
          </a>
          <div
            className={`w-9 h-9 flex items-center justify-center border rounded-full ${
              scrolled ? "border-black text-black" : "border-white text-white"
            }`}
          >
            <User className="w-5 h-5" />
          </div> */}
        </div>

        {/* Mobile Icons */}
        <div className="lg:hidden flex space-x-2">
          {/* <div className={`w-9 h-9 flex items-center justify-center border rounded-full ${
            scrolled ? "border-black text-black" : "border-white text-white"
          }`}>
            <Phone className="w-5 h-5" />
          </div>
          <div className={`w-9 h-9 flex items-center justify-center border rounded-full ${
            scrolled ? "border-black text-black" : "border-white text-white"
          }`}>
            <User className="w-5 h-5" />
          </div> */}
          <div
            onClick={() => setMobileMenuOpen(true)}
            className={`w-9 h-9 flex items-center justify-center border rounded-full cursor-pointer ${
              scrolled ? "border-black text-black" : "border-white text-white"
            }`}
          >
            <Menu className="w-5 h-5" />
          </div>
        </div>
      </nav>

      {/* Desktop Services Dropdown */}
      {showDropdown && (
        <div
          className="hidden lg:grid fixed top-[65px] left-0 w-full z-40 px-12 py-12 bg-sky-600 text-white grid-cols-12 gap-6"
          data-aos="fade-down"
        >
          <div className="col-span-3 border-r pr-6">
            <h2 className="text-2xl font-bold mb-4">Solutions</h2>
            <p className="text-sm text-white/90">
              We offer the region's broadest portfolio of solutions, including
              industry-leading technology, security and infrastructure
              solutions.
            </p>
            <button className="mt-6 w-fit bg-white text-black px-6 py-3 rounded-full text-sm font-semibold">
              Read More
            </button>
          </div>
          <div className="col-span-6 grid grid-cols-3 gap-4 px-6 border-r">
            {services.map((service, index) => (
              <NavLink
                key={index}
                to={service.link}
                onClick={() => showDropdown(false)}
                className="flex items-center space-x-3 hover:underline"
              >
                <div>{service.icon}</div>
                <div className="text-sm font-medium">{service.label}</div>
              </NavLink>
            ))}
          </div>
          <div className="col-span-3">
            <h2 className="text-xl font-bold mb-4">Latest from COMMNET</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <img
                  src="/assets/press-4.jpg"
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <p className="text-sm font-semibold">Technology Solutions</p>
                  <p className="text-xs text-white/80">
                    Bring your digital agenda to reality.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <img
                  src="/assets/press-3.jpg"
                  className="w-12 h-12 object-cover rounded-md"
                />
                <div>
                  <p className="text-sm font-semibold">Security Solutions</p>
                  <p className="text-xs text-white/80">
                    Next-Gen Cyber Defense For A Safer Digital Tomorrow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen z-50 bg-sky-700 text-white p-6 transition-all duration-300 animate-fadeDown overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <img src="/assets/logo.png" alt="COMMNET" className="h-10" />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-9 h-9 border border-white rounded-full flex items-center justify-center"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <ul className="space-y-6 text-lg font-semibold">
             <li>
            <a href="/">Home</a>
          </li>
            <li>
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>
                About Us
              </a>
            </li>
            <li
              className="cursor-pointer"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
            >
              <div className="flex items-center justify-between">
                <span>Services</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </div>
            </li>
            {mobileServicesOpen && (
              <ul className="ml-4 mt-2 space-y-3 text-sm font-normal">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.link}
                      className="flex items-center space-x-2"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span>{service.icon}</span>
                      <span>{service.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            )}
           <li>
            <a href="/contactus" onClick={() => setMobileMenuOpen(false)}>
              Contact Us
            </a>
          
          </li>
          </ul>
        </div>
      )}

      {/* ✅ Floating WhatsApp Button */}
      {/* <a
        href="https://wa.me/+971526965307?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed z-50 right-6 bottom-6  text-white   transition"
      >
        <img
          src="/assets/watsapp-1.png"
          alt="WhatsApp"
          className="w-10 h-10"
        />
      </a> */}
      <div className="fixed bottom-16 right-6 z-50 text-center">
 <p className={`text-sm font-semibold transition-colors duration-300 ${scrolled ? 'text-black' : 'text-white'} mr-2`}>
    <span>Need Help?</span>
  </p>
  <a
  href="https://wa.me/+971526965307?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services"
    target="_blank"
    rel="noopener noreferrer"
    className="block mt-1"
  >
    <img
      src="/assets/watsapp-1.png"
      alt="WhatsApp"
      className="w-12 h-12"
    />
  </a>


</div>
    </div>
  );
}
