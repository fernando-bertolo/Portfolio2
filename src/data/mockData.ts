import { Project, Experience, Certificate, BlogPost, SocialLink } from '../types';
import { Github, Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';

export const projects: Project[] = [
  {
    id: 1,
    title: "Portfolio 1.0",
    description: "Primeiro contato com React criando um portfolio",
    imageUrl: "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "Node.js", "Styled Components"],
    link: "https://github.com/fernando-bertolo/Portfolio"
  },
  {
    id: 2,
    title: "Gerenciador de estoque automotivo",
    description: "Projeto realizado como Trabalho de conclusão de curso",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "Express JS", "MySql", "Docker"],
    link: "https://github.com/fernando-bertolo/Projeto-TCC"
  },
  {
    id: 3,
    title: "Gerenciador de estoque automotivo",
    description: "Projeto realizado como Trabalho de conclusão de curso",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "Express JS", "MySql", "Docker"],
    link: "https://github.com/fernando-bertolo/Projeto-TCC"
  },
  {
    id: 4,
    title: "Gerenciador de estoque automotivo",
    description: "Projeto realizado como Trabalho de conclusão de curso",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "Express JS", "MySql", "Docker"],
    link: "https://github.com/fernando-bertolo/Projeto-TCC"
  },
  {
    id: 5,
    title: "Gerenciador de estoque automotivo",
    description: "Projeto realizado como Trabalho de conclusão de curso",
    imageUrl: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=60",
    technologies: ["React", "Express JS", "MySql", "Docker"],
    link: "https://github.com/fernando-bertolo/Projeto-TCC"
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "Tech Solutions Inc",
    position: "Senior Frontend Developer",
    period: "2020 - Present",
    description: "Leading the frontend development team and implementing new features"
  },
  {
    id: 2,
    company: "Digital Innovations",
    position: "Frontend Developer",
    period: "2018 - 2020",
    description: "Developed responsive web applications using React and TypeScript"
  }
];

export const certificates: Certificate[] = [
  {
    id: 1,
    name: "AWS Certified Developer",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "https://aws.amazon.com"
  },
  {
    id: 2,
    name: "React Advanced Concepts",
    issuer: "Frontend Masters",
    date: "2022",
    link: "https://frontendmasters.com"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Understanding React Hooks",
    content: "A deep dive into React Hooks and their practical applications...",
    author: "John Doe",
    date: "2024-03-15",
    readTime: "5 min read",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60"
  },
  {
    id: 2,
    title: "TypeScript Best Practices",
    content: "Essential TypeScript patterns and practices for modern web development...",
    author: "John Doe",
    date: "2024-03-10",
    readTime: "7 min read",
    imageUrl: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=60"
  }
];

export const socialLinks: SocialLink[] = [
  {
    id: 1,
    platform: "GitHub",
    url: "https://github.com/fernando-bertolo",
    icon: "Github"
  },
  {
    id: 2,
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/fernandobertolojr/",
    icon: "Linkedin"
  },
  {
    id: 3,
    platform: "YouTube",
    url: "https://www.youtube.com/@bertolodev",
    icon: "Youtube"
  },
  {
    id: 4,
    platform: "Instagram",
    url: "https://www.instagram.com/bertolo.dev/",
    icon: "Instagram"
  },
];