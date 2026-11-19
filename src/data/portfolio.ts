export const portfolio = {
  name: "Camas Saul",
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
  cv: "/Saúl Torres Camas.pdf",
  skills: [
    {
      category: { es: "Lenguajes", en: "Languages" },
      items: [
        { name: "Python", icon: "https://cdn.simpleicons.org/python/3776AB" },
        { name: "TypeScript / JavaScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
        { name: "Go", icon: "https://cdn.simpleicons.org/go/00ADD8" },
      ],
    },
    {
      category: { es: "Frameworks", en: "Frameworks" },
      items: [
        { name: "FastAPI", icon: "https://cdn.simpleicons.org/fastapi/009688" },
        { name: "Express", icon: "/icons/express.svg" },
        { name: "NestJS", icon: "https://cdn.simpleicons.org/nestjs/E0234E" },
      ],
    },
    {
      category: { es: "Bases de datos", en: "Databases" },
      items: [
        { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" }, 
        { name: "MySQL", icon: "/icons/mysql.svg" }, 
        { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
        { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D" },
      ],
    },
    {
      category: { es: "DevOps", en: "DevOps" },
      items: [
        { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED" },
        { name: "Kubernetes", icon: "https://cdn.simpleicons.org/kubernetes/326CE5" },
        { name: "CI/CD", icon: "https://cdn.simpleicons.org/githubactions/2088FF" },
        { name: "AWS", icon: "/icons/aws.svg" },
      ],
    },
  ],
  books: [
    {
      title: "Clean Code",
      description: {
        es: "Bases para escribir código legible, simple y mantenible.",
        en: "Foundations for writing readable, simple and maintainable code.",
      },
      cover: "/books/clean-code.jpg",
    },
    {
      title: "The Pragmatic Programmer",
      description: {
        es: "Hábitos y prácticas para desarrollar software con criterio.",
        en: "Habits and practices for developing software with sound judgment.",
      },
      cover: "/books/pragmatic-programmer.jpg",
    },
    {
      title: "Design Patterns",
      description: {
        es: "Patrones reutilizables para resolver problemas de diseño recurrentes.",
        en: "Reusable patterns for solving recurring design problems.",
      },
      cover: "/books/design-patterns.jpg",
    },
    {
      title: "Domain-Driven Design",
      description: {
        es: "Modelar el software alrededor del dominio del negocio.",
        en: "Modeling software around the business domain.",
      },
      cover: "/books/domain-driven-design.jpg",
    },
    {
      title: "Refactoring",
      description: {
        es: "Mejorar el diseño del código sin cambiar su comportamiento.",
        en: "Improving code design without changing its behavior.",
      },
      cover: "/books/refactoring.jpg",
    },
    {
      title: "Working Effectively with Legacy Code",
      description: {
        es: "Estrategias para entender, probar y modificar código heredado.",
        en: "Strategies for understanding, testing and changing legacy code.",
      },
      cover: "/books/legacy-code.jpg",
    },
    {
      title: "The Clean Coder",
      description: {
        es: "Disciplina, ética y profesionalismo en el desarrollo de software.",
        en: "Discipline, ethics and professionalism in software development.",
      },
      cover: "/books/clean-coder.jpg",
    },
    {
      title: "Microservices Patterns",
      description: {
        es: "Patrones para diseñar y operar arquitecturas de microservicios.",
        en: "Patterns for designing and operating microservice architectures.",
      },
      cover: "/books/microservices-patterns.jpg",
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
  singleTech: [
    {
      title: "Automatización de tareas",
      description: {
        es: "Script para limpiar datos y automatizar procesos repetitivos.",
        en: "Script for cleaning data and automating repetitive tasks.",
      },
      tech: "Python",
      repo: "https://github.com/CamasSaul/automatizacion-tareas",
      demo: "https://automatizacion-tareas-demo.com",
    },
    {
      title: "Caché de consultas",
      description: {
        es: "Utilidad ligera para acelerar consultas frecuentes.",
        en: "Lightweight utility to speed up frequent queries.",
      },
      tech: "Redis",
      repo: "https://github.com/CamasSaul/cache-consultas",
      demo: "https://cache-consultas-demo.com",
    },
    {
      title: "Entorno reproducible",
      description: {
        es: "Imagen lista para levantar el entorno de desarrollo.",
        en: "Ready-to-use image for spinning up the development environment.",
      },
      tech: "Docker",
      repo: "https://github.com/CamasSaul/entorno-reproducible",
      demo: "https://entorno-reproducible-demo.com",
    },
  ],
};

export const techIcons: Record<string, string> = {
  "Node.js": "/icons/tech/nodejs.svg",
  Redis: "/icons/tech/redis.svg",
  Docker: "/icons/tech/docker.svg",
  Python: "/icons/tech/python.svg",
  FastAPI: "/icons/tech/fastapi.svg",
  PostgreSQL: "/icons/tech/postgresql.svg",
  Java: "/icons/tech/java.svg",
  "Spring Boot": "/icons/tech/springboot.svg",
  MongoDB: "/icons/tech/mongodb.svg",
};
