export const portfolio = {
  name: "Saul Camas",
  role: {
    es: "Desarrollador Backend",
    en: "Backend Developer",
  },
  bio: {
    es: "Desarrollador backend apasionado por crear APIs robustas, escalables y eficientes. Me enfoco en escribir código limpio y soluciones bien arquitecturadas.",
    en: "Backend developer passionate about building robust, scalable, and efficient APIs. I focus on writing clean code and well-architected solutions.",
  },
  email: "camas17st@outlook.com",
  github: "https://github.com/CamasSaul",
  skills: [
    {
      category: { es: "Lenguajes", en: "Languages" },
      items: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB?lightmode=white&darkmode=white" },
        { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6?lightmode=white&darkmode=white" },
        { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8?lightmode=white&darkmode=white" },
      ],
    },
    {
      category: { es: "Frameworks", en: "Frameworks" },
      items: [
        { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688?lightmode=white&darkmode=white" },
        { name: "Express", icon: "https://cdn.simpleicons.org/express/000000?lightmode=white&darkmode=white" },
        { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/E0234E?lightmode=white&darkmode=white" },
      ],
    },
    {
      category: { es: "Bases de datos", en: "Databases" },
      items: [
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1?lightmode=white&darkmode=white" }, 
        { name: "MySQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1?lightmode=white&darkmode=white" },
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248?lightmode=white&darkmode=white" },
        { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D?lightmode=white&darkmode=white" },
      ],
    },
    {
      category: { es: "DevOps", en: "DevOps" },
      items: [
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED?lightmode=white&darkmode=white" },
        { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5?lightmode=white&darkmode=white" },
        { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF?lightmode=white&darkmode=white" },
        { name: "AWS", icon: "https://cdn.simpleicons.org/amazonaws/FF9900?lightmode=white&darkmode=white" },
      ],
    },
  ],
  projects: [
    {
      title: "API Gateway",
      description: {
        es: "Gateway de APIs con autenticación JWT, rate limiting y enrutamiento dinámico.",
        en: "API Gateway with JWT authentication, rate limiting, and dynamic routing.",
      },
      tech: ["Node.js", "Redis", "Docker"],
      cover: "/projects/api-gateway.jpg",
      repo: "https://github.com/CamasSaul/api-gateway",
      demo: "https://api-gateway-demo.com",
    },
    {
      title: "Task Manager",
      description: {
        es: "Servicio de gestión de tareas con colas asíncronas y notificaciones en tiempo real.",
        en: "Task management service with async queues and real-time notifications.",
      },
      tech: ["Python", "FastAPI", "PostgreSQL"],
      cover: "/projects/task-manager.jpg",
      repo: "https://github.com/CamasSaul/task-manager",
      demo: "https://task-manager-demo.com",
    },
    {
      title: "Auth Service",
      description: {
        es: "Microservicio de autenticación con OAuth2, refresh tokens y soporte multi-tenant.",
        en: "Authentication microservice with OAuth2, refresh tokens, and multi-tenant support.",
      },
      tech: ["Java", "Spring Boot", "MongoDB"],
      cover: "/projects/auth-service.jpg",
      repo: "https://github.com/CamasSaul/auth-service",
      demo: "https://auth-service-demo.com",
    },
  ],
};
