import { Project, Experience, Certificate, BlogPost, SocialLink } from '../types';
import { Github, Linkedin, Youtube, Instagram, Twitter } from 'lucide-react';

const tecnologias = ['HTML', 'CSS', 'JavaScript'];

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
    company: "Solutions BI",
    position: "Estagiário em desenvolvimento de Sistemas e Análise de Dados",
    period: "Mar 2024 - Jul 2024",
    description: `
      <p>Responsável pelo Desenvolvimento Web Fullstack e criação de relatórios no Power BI.</p>
      <br>
      <p>
        Tecnologias: 
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">HTML</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">CSS</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">JavaScript</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">PHP</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">SQL Server</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">MySQL</span>
          <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">Docker</span> 
      </p>      
    `
  },
  {
    id: 3,
    company: "BluePex CyberSecurity",
    position: "Analista de redes",
    period: "Aug 2022 - Mar 2024",
    description: `
      <p>Durante minha atuação na Bluepex Cybersecurity, fui responsável por garantir o funcionamento eficiente e seguro dos sistemas de clientes. Minhas principais atividades incluíram:</p>
      <br>
      <ul>
        <li>Configuração e manutenção de servidores DHCP, DNS e Active Directory.</li>
        <li>Implementação de regras de firewall e redirecionamento de portas (NAT).</li>
        <li>Configuração de proxies e VPNs, com expertise em OpenVPN e IPsec.</li>
        <li>Integração de gerenciamento de rotas utilizando BGP/FRR para VPNs OpenVPN.</li>
        <li>Desenvolvimento de estratégias de LoadBalance e FailOver, assegurando redundância e continuidade dos serviços.</li>
        <li>Segmentação de redes por meio de VLANs, aprimorando a segurança e a eficiência das infraestruturas.</li>
        <li>Uso avançado de ambientes Linux para administração e suporte técnico.</li>
      </ul>
      <br>
      <p>Além das responsabilidades técnicas, também ministrei treinamentos para clientes, disseminando boas práticas e conhecimentos que facilitaram a gestão e a utilização de sistemas.</p>
    `
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