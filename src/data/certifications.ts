export type Certification = {
  title: string;
  issuer: string;
  logo: string;
  issueDate: string;
  expiryDate?: string;
  credentialId: string;
  credentialUrl: string;
  skills: string[];
  image?: string;
};

export const CERTIFICATIONS: Certification[] = [
  {
    title: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    logo: "☁️",
    issueDate: "2026",
    credentialId: "AZ-104",
    credentialUrl: "https://learn.microsoft.com/api/credentials/share/en-us/MOALLAGhassen-2821/D7EEBC5043B146FD?sharingId=2B43FF394BA9B282",
    skills: ["Azure", "Cloud Infrastructure", "DevOps", "Azure Administration"],
    image: "/_static/certifications/az-104.jpg",
  },
  {
    title: "Associate Cloud Engineer",
    issuer: "Google Cloud",
    logo: "☁️",
    issueDate: "2025",
    credentialId: "GCP-ACE",
    credentialUrl: "https://www.credly.com/badges/9cf18c2a-5b92-4bcf-a14b-2577d7632096/public_url",
    skills: ["Google Cloud", "Cloud Engineering", "GCP", "Infrastructure"],
    image: "/_static/certifications/asc.png",
  },
  {
    title: "Microsoft Certified: Azure Fundamentals",
    issuer: "Microsoft",
    logo: "☁️",
    issueDate: "2024",
    credentialId: "AZ-900",
    credentialUrl: "https://www.certiport.com/portal/Pages/PrintTranscriptInfo.aspx?action=Cert&id=414&cvid=o4mg5OVrNavBIxxFQd0ySQ==",
    skills: ["Azure", "Cloud Fundamentals", "Microsoft Azure"],
    image: "/_static/certifications/az-900.png",
  },
] as Certification[];
