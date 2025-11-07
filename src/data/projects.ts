export type WebApp = {
  title: string;
  slug: string;
  repo?: string;
  description: string;
  tags: string[];
  demo?: string;
  thumbnail: string;
};

export const WEB_APPS: WebApp[] = [
  {
    title: "CI/CD with GitHub Actions",
    slug: "cicd-with-github-actions",
    description: "A CI/CD pipeline to build and deploy a Node.js application to Azure App Service using GitHub Actions.",
    tags: ["CI/CD", "GitHub Actions", "Azure", "Node.js", "DevOps"],
    thumbnail: "/_static/CICDwithGitHubActions.png",
  },

  {
    title: "Ansible Certificate Tracker",
    slug: "ansible-certificate-tracker",
    description: "Automate SSL certificate monitoring on Windows servers using Ansible and community.windows collection. Track expiration dates, generate reports, and integrate with monitoring pipelines.",
    tags: ["Ansible", "Windows", "Security", "Automation", "DevOps"],
    thumbnail: "/_static/projects/cert-tracker.png",
    repo: "https://github.com/Ghassenmoalla/certificate-expiration-tracker",
  },
  {
    title: "Azure DevOps CI/CD Pipeline Implementation",
    slug: "azure-devops-cicd-pipeline-implementation",
    description:
      "Developed and deployed comprehensive CI/CD pipelines in Azure DevOps, accelerating release cycles and implementing Infrastructure as Code (IaC) for environment provisioning.",
    tags: ["Azure DevOps", "CI/CD", "Terraform", "IaC", "Azure Cloud", "DevOps"],
    thumbnail: "/_static/projects/azure-devops.png",
  },
  {
    title: "YARP Load Balancer Implementation",
    slug: "yarp-load-balancer-implementation",
    description:
      "Implemented YARP as a proof-of-concept load balancer, achieving 19% increase in load balancing efficiency and reducing response times by 40ms.",
    tags: ["YARP", "Load Balancing", "Performance Optimization", ".NET", "Microservices"],
    thumbnail: "/_static/projects/load-balancer.png",
  },
  {
    title: "Ansible Infrastructure Automation",
    slug: "ansible-infrastructure-automation",
    description:
      "Architected and deployed custom Ansible roles for Infrastructure as Code, reducing configuration errors by 24.7% and automating server setup and environment configuration.",
    tags: ["Ansible", "IaC", "Automation", "Configuration Management", "DevOps"],
    thumbnail: "/_static/projects/ansible.png",
  },
  {
    title: "Flutter Task Management App",
    slug: "flutter-task-management-app",
    description:
      "Developed an innovative Android application using Flutter for workplace task management, featuring dynamic task categorization and intuitive interface design.",
    tags: ["Flutter", "Mobile Development", "Task Management", "UI/UX", "Android"],
    thumbnail: "/_static/projects/flutter-app.png",
  },
  {
    title: "Angular & Spring Boot CI/CD Pipeline",
    slug: "angular-spring-boot-cicd-pipeline",
    description:
      "Implemented a complete CI/CD pipeline for Angular and Spring Boot frameworks, utilizing Jenkins for continuous integration and Docker for containerized deployment.",
    tags: ["Angular", "Spring Boot", "Jenkins", "Docker", "CI/CD"],
    thumbnail: "/_static/projects/angular-spring.png",
  },
] as WebApp[];

export type Tool = {
  title: string;
  repo: string;
  demo: string;
  description: string;
  techs: string[];
};

export const TOOLS: Tool[] = [
  {
    title: "states-nepal",
    repo: "https://github.com/adarshaacharya/states-nepal",
    demo: "https://www.npmjs.com/package/states-nepal",
    description:
      "npm package to get the dataset about different administrative division of Nepal.",
    techs: ["npm-package"],
  },
  {
    title: "aaja (आज)",
    repo: "https://github.com/adarshaacharya/aaja",
    demo: "https://www.npmjs.com/package/aaja",
    description:
      "Cli tool to get today's nepali date, tithi, public events and current time.",
    techs: ["npm-package"],
  },
  {
    title: "ApiHub",
    repo: "https://github.com/adarshaacharya/ApiHub",
    demo:
      "https://marketplace.visualstudio.com/items?itemName=AadarshaAcharya.api-hub",
    description:
      "VS Code extension to get free third party api url on different categories.",
    techs: ["vscode-extension"],
  },
  {
    title: "shitcommits",
    repo: "https://github.com/adarshaacharya/shitcommits",
    demo: "https://www.npmjs.com/package/shitcommits",
    description: "Cli tool to make git commits with not-so perfect messges.",
    techs: ["npm-package"],
  },
];
