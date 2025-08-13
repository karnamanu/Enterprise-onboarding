// src/schema.js
export const step1Fields = [
  { name: "aadhaar", label: "Aadhaar Number", type: "text", pattern: "^[0-9]{12}$" },
  { name: "entrepreneurName", label: "Name of Entrepreneur", type: "text" }
];

export const step2Fields = [
  { name: "orgType", label: "Type of Organization", type: "select", options: ["Proprietor", "Private Limited Company", "LLP", "HUF"] },
  { name: "pan", label: "PAN Number", type: "text", pattern: "^[A-Z]{5}[0-9]{4}[A-Z]$" },
  { name: "nameOnPan", label: "Name as per PAN/Aadhaar", type: "text" },
  { name: "dobOrIncorp", label: "Date of Birth / Incorporation", type: "date" }
];
