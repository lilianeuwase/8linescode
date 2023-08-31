import meter1 from "../images/meter1.svg";
import meter2 from "../images/meter2.svg";
import meter3 from "../images/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../images/color-sharp.png";
import {
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  CheckIcon,
  CogIcon,
  Square3Stack3DIcon,
  RectangleGroupIcon,
  GlobeAltIcon,
  AtSymbolIcon,
  BanknotesIcon,
  CodeBracketIcon,
  WrenchScrewdriverIcon,
  Cog8ToothIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/20/solid";
import {
  Envelope,
  EnvelopeFill,
  ExclamationTriangle,
  ExclamationTriangleFill,
} from "react-bootstrap-icons";

const Full = [
  {
    name: "Website Content Creation",
    icon: Square3Stack3DIcon,
  },
  {
    name: "Logo Design",
    icon: RectangleGroupIcon,
  },
  {
    name: "Website Development",
    icon: CodeBracketIcon,
  },
  {
    name: "Website Maintenance",
    icon: ExclamationTriangleFill,
  },
  {
    name: "Web Hosting",
    icon: ServerIcon,
  },
  {
    name: "Domain Name",
    icon: GlobeAltIcon,
  },
  {
    name: "Company Emails",
    icon: AtSymbolIcon,
  },
  {
    name: "System Administration",
    icon: CogIcon,
  },
];

const HealthNGO = [
  {
    name: "20% off All Services",
    icon: BanknotesIcon,
  },
  {
    name: "5 Free Canva Accounts",
    icon: RectangleGroupIcon,
  },
  {
    name: "5 Free Monday Accounts",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "10 Free Microsoft Work Emails",
    icon: AtSymbolIcon,
  },
  {
    name: ".org Domain",
    icon: GlobeAltIcon,
  },
];

const NGO = [
  {
    name: "10% off All Services",
    icon: BanknotesIcon,
  },
  {
    name: ".org Domain",
    icon: GlobeAltIcon,
  },
];

const Consultancy = [
  {
    name: "IT Systems Development",
    icon: WrenchScrewdriverIcon,
  },
  {
    name: "System Administration",
    icon: CogIcon,
  },
  {
    name: "System Maintenance",
    icon: Cog8ToothIcon,
  },
];

const Hosting = [
  {
    name: "Domain Name",
    icon: GlobeAltIcon,
  },
  {
    name: "Website Hosting",
    icon: ServerIcon,
  },
  {
    name: "Company Emails",
    icon: AtSymbolIcon,
  },
];

const Others = [
  {
    name: "You can always email us for a customized package!",
    icon: Square3Stack3DIcon,
  },
];
export const Services = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="services">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Services & Packages</h2>
              <p>
                8 Lines Codes specializes in custom sofware development, web
                development, UI/UX Designs, databases, and Consulting and
                Architecture.{" "}
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <h5>Full Package</h5>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-400 sm:grid-cols-2 sm:gap-6"
                  >
                    {Full.map((feature) => (
                      <li key={feature.name} className="flex gap-x-3">
                        <feature.icon
                          className="h-6 w-5 flex-none text-fuchsia-400"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="item">
                  <h5>Health NGOs Package</h5>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-400 sm:grid-cols-2 sm:gap-6"
                  >
                    {HealthNGO.map((feature) => (
                      <li key={feature.name} className="flex gap-x-3">
                        <feature.icon
                          className="h-6 w-5 flex-none text-fuchsia-400"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="item ">
                  <h5>Other NGOs</h5>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-2 gap-4 text-sm leading-6 text-gray-400 sm:grid-cols-2 sm:gap-6 "
                  >
                    {NGO.map((feature) => (
                      <li key={feature.name} className="flex gap-x-3 ">
                        <feature.icon
                          className="h-6 w-5 flex-none text-fuchsia-400"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="item">
                  <h5>IT Consultancy</h5>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-400 sm:grid-cols-2 sm:gap-6"
                  >
                    {Consultancy.map((feature) => (
                      <li key={feature.name} className="flex gap-x-3">
                        <feature.icon
                          className="h-6 w-5 flex-none text-fuchsia-400"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="item">
                  <h5>Hosting & Domain Name</h5>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-400 sm:grid-cols-2 sm:gap-6"
                  >
                    {Hosting.map((feature) => (
                      <li key={feature.name} className="flex gap-x-3">
                        <feature.icon
                          className="h-6 w-5 flex-none text-fuchsia-400"
                          aria-hidden="true"
                        />
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="item">
                  <h5>Other Packages</h5>
                  <ul
                    role="list"
                    className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-400 sm:grid-cols-1 sm:gap-6"
                  >
                    {Others.map((feature) => (
                      <li key={feature.name} className="flex gap-x-3">
                        {/* <feature.icon
                          className="h-6 w-5 flex-none text-fuchsia-400"
                          aria-hidden="true"
                        /> */}
                        {feature.name}
                      </li>
                    ))}
                  </ul>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
