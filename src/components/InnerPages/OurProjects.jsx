import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PremiumProjectsPage() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const projects = [
    {
      image: "/assets/jewel.png",
      heading: "Jewel Of Creek",
      title: "Jewel Of Creek - ICT Infra",
      client: "GBM",
      scope: [
        "IT Structured Cabling - 13000 Points",
        "CCTV/Security System - 2500 Camera",
      ],
      value: "AED 15,17,820",
      duration: "3 Years",
    },
    {
      image: "/assets/dewa.png",
      heading: "Dubai Electricity and Water Authority (DEWA)-CSOC",
      title: "CSOC Project",
      client: "GBM",
      scope: [
        "DEWA Installation of CSOC Racks",
        "Network cabling for panel from CSOC Rack",
        "Cyber security devices installation, testing & commissioning",
      ],
      value: "AED 26,23,250",
      duration: "1 Year",
    },
    {
      image: "/assets/atlantis.png",
      heading: "Atlantis The Royal",
      title: "Atlantis The Royal",
      client: "GBM",
      scope: [
        "Structured Cabling",
        "AV-BGM system installation",
        "GRMS System Implemented - 820 Rooms",
      ],
      value: "AED 496,900",
      duration: "14 Months",
    },
    {
      image: "/assets/fta.png",
      heading: "FTA Office Expansion – Level 13 & 17",
      title: "FTA Office Expansion – Level 13 & 17",
      client: "Top Rock Interiors",
      scope: [
        "Structured cabling",
        "CCTV System",
        "Network switching and Routing",
        "WiFi Solution",
      ],
      value: "AED 673,500",
      duration: "3 Months",
    },
    {
      image: "/assets/occidental.png",
      heading: "Occidental Hotel Al Jadaf – ELV & IT Infrastructure",
      title: "Occidental Hotel Al Jadaf – ELV & IT Infrastructure",
      client: "Al Seeb Group",
      scope: [
        "Data Centre, Structured Cabling - 2500 Points",
        "CCTV - 315 / ACS Doors - 15",
        "AV-PA / BGM / IPTV / SMATV - 800 Rooms",
        "Network Switching and Routing",
        "WiFi and Telephony",
      ],
      value: "AED 40,07,700",
      duration: "21 Months",
    },
  ];

  return (
    <>
      {/* ✅ Full-width heading section with background image */}
      <div
        className="w-full bg-[url('/assets/sample-5.jpg')] bg-cover bg-center py-20"
        data-aos="fade-down"
      >
        <h1 className="text-4xl font-bold text-center text-white drop-shadow-lg ml-[100px]">
          Our Premier Projects
        </h1>
      </div>

      {/* ✅ Main project section */}
      <section className="bg-gradient-to-br from-white to-gray-100 py-0 px-4 sm:px-8 lg:px-20 font-['Lato'] mt-12">
        <div className="max-w-7xl mx-auto space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center gap-10`}
            >
              <div className="md:w-1/2 w-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[340px] object-cover rounded-2xl shadow-md"
                />
              </div>

              <div className="md:w-1/2 w-full space-y-5">
                <h2 className="text-xl font-semibold text-sky-600">{project.heading}</h2>
                <h3 className="text-3xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">Client:</span> {project.client}
                </p>

                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-1">Scope Of Work:</p>
                  <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                    {project.scope.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 text-sm text-gray-700 border-t">
                  <p>
                    <span className="font-semibold">Value:</span> {project.value}
                  </p>
                  <p>
                    <span className="font-semibold">Duration:</span> {project.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
