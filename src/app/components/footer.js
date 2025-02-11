import React from "react";
import Contact from "./contact";
import ContactForm from "./contactForm";

const InstagramIcon = () => {
  return (
    <svg
      height="40px"
      width="40px"
      viewBox="0 0 291.319 291.319"
      xmlns="http://www.w3.org/2000/svg"
      fill="black" // Set color to black
    >
      <g>
        <path
          style={{ fill: "#4169E1" }}
          d="M145.659,0c80.44,0,145.66,65.219,145.66,145.66S226.1,291.319,145.66,291.319S0,226.1,0,145.66 S65.21,0,145.659,0z"
        />
        <path
          style={{ fill: "#FFFFFF" }}
          d="M195.93,63.708H95.38c-17.47,0-31.672,14.211-31.672,31.672v100.56 
          c0,17.47,14.211,31.672,31.672,31.672h100.56c17.47,0,31.672-14.211,31.672-31.672V95.38 
          C227.611,77.919,213.4,63.708,195.93,63.708z M205.908,82.034l3.587-0.009v27.202l-27.402,0.091l-0.091-27.202 
          C182.002,82.116,205.908,82.034,205.908,82.034z M145.66,118.239c22.732,0,27.42,21.339,27.42,27.429 
          c0,15.103-12.308,27.411-27.42,27.411c-15.121,0-27.42-12.308-27.42-27.411C118.23,139.578,122.928,118.239,145.66,118.239z 
          M209.65,193.955c0,8.658-7.037,15.704-15.713,15.704H97.073c-8.667,0-15.713-7.037-15.713-15.704v-66.539h22.759 
          c-2.112,5.198-3.305,12.299-3.305,18.253c0,24.708,20.101,44.818,44.818,44.818s44.808-20.11,44.808-44.818 
          c0-5.954-1.193-13.055-3.296-18.253h22.486v66.539L209.65,193.955z"
        />
      </g>
    </svg>
  );
};

const WhatsAppIcon = () => (
  <svg
    height="40px"
    width="40px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5129 3.4866C18.2882 1.24722 15.2597 -0.00837 12.1032 0C5.54964 0 0.216056 5.33306 0.213776 11.8883C0.210977 13.9746 0.75841 16.0247 1.80085 17.8319L0.114014 23.9932L6.41672 22.34C8.15975 23.2898 10.1131 23.7874 12.0981 23.7874H12.1032C18.6556 23.7874 23.9897 18.4538 23.992 11.8986C24.0022 8.74248 22.7494 5.71347 20.5129 3.4866ZM17.5234 14.3755C17.2264 14.2267 15.7659 13.5085 15.4934 13.4064C15.2209 13.3044 15.0231 13.2576 14.8253 13.5552C14.6275 13.8528 14.058 14.5215 13.8847 14.7199C13.7114 14.9182 13.5381 14.9427 13.241 14.794C12.944 14.6452 11.9869 14.3316 10.8519 13.3198C9.96884 12.5319 9.36969 11.5594 9.19867 11.2618C9.02765 10.9642 9.18043 10.8057 9.32922 10.6552C9.46261 10.5224 9.62622 10.3086 9.77444 10.1348C9.92266 9.9609 9.97283 9.83776 10.0714 9.63938C10.1701 9.44099 10.121 9.26769 10.0469 9.1189C9.97283 8.97011 9.37824 7.50788 9.13083 6.9133C8.88969 6.3341 8.64513 6.4122 8.46271 6.40023C8.29169 6.39168 8.09102 6.38997 7.89264 6.38997C7.58822 6.39793 7.30097 6.53267 7.10024 6.76166C6.82831 7.05923 6.061 7.77752 6.061 9.23976C6.061 10.702 7.12532 12.1146 7.27354 12.313C7.42176 12.5114 9.36855 15.5117 12.3472 16.7989C12.9004 17.0375 13.4657 17.2468 14.0409 17.426C14.7523 17.654 15.3999 17.6204 15.9118 17.544C16.4819 17.4585 17.6694 16.8251 17.9173 16.1313C18.1653 15.4376 18.1648 14.8424 18.0884 14.7187C18.012 14.595 17.8204 14.5266 17.5234 14.3778V14.3755Z"
      fill="#4169E1"
    />
  </svg>
);

const Footer = () => {
  return (
    <footer className="bg-slate-200 flex flex-col lg:flex-row items-center lg:items-start p-8">
      {/* Left Side - Contact Info */}
      <div className="lg:w-1/3 text-center lg:text-left">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">KONTAKT</h2>
        <Contact />
        <ul className="mt-4 text-gray-700">
          <li>Montag bis Freitag: 8:00 - 20:00 Uhr</li>
          <li>Wochenende: 10:00 - 22:00 Uhr</li>
        </ul>
        <ul className="mt-4 flex justify-center lg:justify-start gap-4">
          <li>
            <a
              href="#"
              rel="noreferrer"
              target="_blank"
              className="text-black transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/4917673582752?text=Hallo%2C%20ich%20w%C3%BCrde%20gerne%20Kontakt%20aufnehmen"
              target="_blank"
              rel="noreferrer"
              className="text-gray-700 hover:opacity-75"
            >
              <WhatsAppIcon />
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side - Contact Form */}
      <div className="lg:w-2/3 mt-8 lg:mt-0 lg:pl-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">
          Kontaktieren Sie uns
        </h2>
        <ContactForm />
      </div>
    </footer>
  );
};

export default Footer;
