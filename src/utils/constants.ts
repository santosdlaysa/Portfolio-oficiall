import type { PersonalInfo, Project, Technology, NavigationItem } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Laysa Diniz',
  role: 'Desenvolvedora Fullstack',
  bio: 'Desenvolvedora apaixonada por criar experiências digitais incríveis. Fiz a transição do Direito para a tecnologia e hoje me dedico ao desenvolvimento de interfaces modernas e intuitivas. Sempre em busca de novos desafios e oportunidades para crescer na área tech! 👩‍💻',
  profileImage: '/src/assets/images/profile.jpg',
  resumeUrl: '/src/assets/images/Currículo - DEV.pdf',
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/laysadiniz',
      icon: '/src/assets/images/linkedin (1).png'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/santosdlaysa',
      icon: '/src/assets/images/github.png'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/santosdlaysa',
      icon: '/src/assets/images/instagram.png'
    }
  ]
};

export const NAVIGATION: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Contatos', href: '#contatos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' }
];

export const TECHNOLOGIES: Technology[] = [
  {
    name: 'HTML',
    icon: '/src/assets/images/imght.svg',
    category: 'frontend'
  },
  {
    name: 'CSS',
    icon: '/src/assets/images/vscode-icons_file-type-css.svg',
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: '/src/assets/images/vscode-icons_file-type-js-official.svg',
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    category: 'frontend'
  },
  {
    name: 'React',
    icon: '/src/assets/images/logos_react.svg',
    category: 'frontend'
  },
  {
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
    category: 'backend'
  },
  {
    name: 'Jest',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg',
    category: 'testing'
  },
  {
    name: 'Clean Code',
    icon: 'https://via.placeholder.com/64x64/4F46E5/ffffff?text=CC',
    category: 'practices'
  },
  {
    name: 'Clean Architecture',
    icon: 'https://via.placeholder.com/64x64/7C3AED/ffffff?text=CA',
    category: 'practices'
  },
  {
    name: 'VSCode',
    icon: '/src/assets/images/vscode-icons_file-type-vscode.svg',
    category: 'tools'
  },
  {
    name: 'GitHub',
    icon: '/src/assets/images/akar-icons_github-fill.svg',
    category: 'tools'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'AgendaMais',
    image: '/src/assets/images/img_1.png',
    url: 'https://agendamais-x19j.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    description: 'Sistema de agendamento online moderno e intuitivo para gerenciar compromissos e horários de forma eficiente.'
  },
  {
    id: '2',
    title: 'Suite Landing Page',
    image: '/src/assets/images/preview.jpg',
    url: 'https://santosdlaysa.github.io/suite-landing-page-a/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Landing page moderna e responsiva com design elegante e animações suaves.'
  },
  {
    id: '3',
    title: 'Newsletter Email',
    image: '/src/assets/images/desktop-design.jpg',
    url: 'https://santosdlaysa.github.io/Newsletter-one/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Sistema de newsletter com validação de formulário e design responsivo.'
  },
  {
    id: '4',
    title: 'Site de Recrutamento',
    image: '/src/assets/images/visualpage.png',
    url: 'https://santosdlaysa.github.io/website/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Plataforma de recrutamento com interface intuitiva e funcionalidades avançadas.'
  },
  {
    id: '5',
    title: 'Site de Estética',
    image: '/src/assets/images/Imagem-login.png',
    url: 'https://santosdlaysa.github.io/tela-de-login/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Sistema de login para clínica de estética com design moderno e seguro.'
  },
  {
    id: '6',
    title: 'Relógio Digital',
    image: '/src/assets/images/relogio.png',
    url: 'https://santosdlaysa.github.io/RelogioDigital/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Relógio digital interativo com múltiplos fusos horários e cronômetro.'
  },
  {
    id: '7',
    title: 'Todo List',
    image: '/src/assets/images/todolist.png',
    url: 'https://santosdlaysa.github.io/Todo-list/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Aplicativo de lista de tarefas com funcionalidades de adicionar, editar e excluir.'
  }
];