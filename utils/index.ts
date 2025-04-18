export const APP_NAME = "Denco Logistics";
// export const APP_API = "http://localhost:3001/mailer";
export const APP_API = "https://xtremnet.vercel.app/mailer";

export const APP_ADDRESS =
  "46850 Romeo Plank Rd,<br /> Macomb, MI 48044, <br />United States";
export const APP_EMAIL = "info@dencologistics.com";
export const APP_PHONE = "+1 586 372 8548";
export const APP_DOMAIN = "wwww.dencologistics.com";
export const APP_LOGO = `<div class="pl-2" style="line-height:22px;" ><span class="font-black">Denco</span><br/><span class="font-light">Logistics</span></div>`;

export const fixedBody = (val: boolean) => {
  if (val) document.documentElement.style.overflow = "hidden";
  else document.documentElement.style.overflow = "auto";
};
export const capz = (value: any) => {
  if (!value) return value;
  if (typeof value !== "string") return value;
  return value.charAt(0).toUpperCase() + value.slice(1);
};
export const squared = (size: any) =>
  `height:${size}px;min-height:${size}px;max-height:${size}px;width:${size}px;min-width:${size}px;max-width:${size}px;`;
export const toURL = (url: string) => new URL(url);
export const cookieOptions: any = {
  path: "/",
  expires: new Date(Date.now() + 365 * 24 * 3600000),
  sameSite: "none",
  secure: true,
};
export const delay = async (millisecs = 2000) =>
  await new Promise((r) => setTimeout(r, millisecs));
export const get_err = (err: any) => {
  const value = err.split("/")[1].split("-").join(" ");
  return value.charAt(0).toUpperCase() + value.slice(1);
};
export const sort_date = (a: any, b: any) => {
  if (a.date < b.date) return 1;
  if (a.date > b.date) return -1;
  return 0;
};

export const get_update = (val: any[]) => val.sort(sort_date)[0];
export const get_status = (val: any[]) => {
  const res = val.sort(sort_date)[0];
  return capz(res.status.toLowerCase());
};
export const get_day = (val: string) => {
  if (!val) return "";
  return new Date(`${val}:00.000Z`).toLocaleDateString("en-US", {
    timeZone: "Africa/Abidjan",
    weekday: "long",
  });
};
export const get_date = (val: string) => {
  if (!val) return "";
  return new Date(`${val}:00.000Z`).toLocaleDateString("en-US", {
    timeZone: "Africa/Abidjan",
    month: "long",
    year: "numeric",
    day: "2-digit",
  });
};
export const get_time = (val: string) => {
  if (!val) return "";
  return new Date(`${val}:00.000Z`).toLocaleTimeString("en-US", {
    timeZone: "Africa/Abidjan",
    hour: "2-digit",
    minute: "2-digit",
  });
};
export const get_datetime = (val: string) => {
  if (!val) return "";
  // return `${get_date(val)} at ${get_time(val)}`;
  return new Date(`${val}:00.000Z`).toLocaleDateString("en-US", {
    timeZone: "Africa/Abidjan",
    hour: "2-digit",
    minute: "2-digit",
    month: "long",
    year: "numeric",
    day: "2-digit",
  });
};
export const countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei Darussalam",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cabo Verde",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Comoros",
  "Congo",
  "Congo, Democratic Republic of the",
  "Costa Rica",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czechia",
  "Côte d'Ivoire",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Eswatini",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Kuwait",
  "Kyrgyzstan",
  "Lao People's Democratic Republic",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Montenegro",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "North Korea",
  "North Macedonia",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russian Federation",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent and the Grenadines",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "South Korea",
  "South Sudan",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Surivalue",
  "Sweden",
  "Switzerland",
  "Syrian Arab Republic",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Timor-Leste",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Venezuela",
  "Viet Nam",
  "Yemen",
  "Zambia",
  "Zimbabwe",
];
export const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
