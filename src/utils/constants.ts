import type { PersonalInfo, Project, Technology, NavigationItem, AppItem } from '@/types';

export const PERSONAL_INFO: PersonalInfo = {
  name: 'Laysa Diniz',
  role: 'Desenvolvedora Fullstack',
  bio: 'Desenvolvedora apaixonada por criar experiências digitais incríveis. Fiz a transição do Direito para a tecnologia e hoje me dedico ao desenvolvimento de interfaces modernas e intuitivas. Sempre em busca de novos desafios e oportunidades para crescer na área tech! 👩‍💻',
  profileImage: '/profile.jpeg',
  resumeUrl: '/Currículo - DEV.pdf',
  socialLinks: [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/laysadiniz',
      icon: '/linkedin (1).png'
    },
    {
      name: 'GitHub',
      url: 'https://github.com/santosdlaysa',
      icon: '/github.png'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/santosdlaysa',
      icon: '/instagram.png'
    }
  ]
};

export const NAVIGATION: NavigationItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Contatos', href: '#contatos' },
  { label: 'Tecnologias', href: '#tecnologias' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Aplicativos', href: '#aplicativos' }
];

export const TECHNOLOGIES: Technology[] = [
  {
    name: 'HTML',
    icon: '/imght.svg',
    category: 'frontend'
  },
  {
    name: 'CSS',
    icon: '/vscode-icons_file-type-css.svg',
    category: 'frontend'
  },
  {
    name: 'JavaScript',
    icon: '/vscode-icons_file-type-js-official.svg',
    category: 'frontend'
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    category: 'frontend'
  },
  {
    name: 'React',
    icon: '/logos_react.svg',
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
    icon: '/vscode-icons_file-type-vscode.svg',
    category: 'tools'
  },
  {
    name: 'GitHub',
    icon: '/akar-icons_github-fill.svg',
    category: 'tools'
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Daex.online',
    image: '/daex.png',
    url: 'https://daex.online',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    description: 'Sistema de venda de produtos online com catálogo dinâmico e experiência de compra moderna.'
  },
  {
    id: '2',
    title: 'Lumera Fest',
    image: '/img_6.png',
    url: 'https://lumerafest.online/events/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    description: 'Sistema de vendas de ingressos de festas e eventos com interface moderna e experiência de compra simplificada.'
  },
  {
    id: '3',
    title: 'Agronet',
    image: '/agronet.png',
    url: 'https://agronet.vercel.app/login',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    description: 'Sistema de gestão agrícola com interface moderna para controle e monitoramento de atividades rurais.'
  },
  {
    id: '4',
    title: 'AgendaMais',
    image: '/orgenyxapp.png',
    url: 'https://agendamais-x19j.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    description: 'Sistema de agendamento online moderno e intuitivo para gerenciar compromissos e horários de forma eficiente.'
  },
  {
    id: '5',
    title: 'AgendaMais',
    image: '/web.png',
    url: 'https://web-agendamais-6fmq.vercel.app/',
    technologies: ['React', 'TypeScript', 'Tailwind CSS'],
    description: 'Site de marketing do Sistema de agendamento online'
  },
  {
    id: '6',
    title: 'Suite Landing Page',
    image: '/preview.jpg',
    url: 'https://santosdlaysa.github.io/suite-landing-page-a/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Landing page moderna e responsiva com design elegante e animações suaves.'
  },
  {
    id: '7',
    title: 'Newsletter Email',
    image: '/desktop-design.jpg',
    url: 'https://santosdlaysa.github.io/Newsletter-one/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Sistema de newsletter com validação de formulário e design responsivo.'
  },
  {
    id: '8',
    title: 'Site de Recrutamento',
    image: '/visualpage.png',
    url: 'https://santosdlaysa.github.io/website/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Plataforma de recrutamento com interface intuitiva e funcionalidades avançadas.'
  },
  {
    id: '9',
    title: 'Site de Estética',
    image: '/Imagem-login.png',
    url: 'https://santosdlaysa.github.io/tela-de-login/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Sistema de login para clínica de estética com design moderno e seguro.'
  },
  {
    id: '10',
    title: 'Relógio Digital',
    image: '/relogio.png',
    url: 'https://santosdlaysa.github.io/RelogioDigital/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Relógio digital interativo com múltiplos fusos horários e cronômetro.'
  },
  {
    id: '11',
    title: 'Todo List',
    image: '/todolist.png',
    url: 'https://santosdlaysa.github.io/Todo-list/',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    description: 'Aplicativo de lista de tarefas com funcionalidades de adicionar, editar e excluir.'
  }
];

export const APPS: AppItem[] = [
  {
    id: '1',
    title: 'Orgenyx',
    image: '/orgenyxapp.png',
    url: 'https://apps.apple.com/br/app/orgenyx/id6760567600',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.orgenyx',
    technologies: ['React Native', 'TypeScript'],
    platform: 'iOS & Android',
    description: 'Aplicativo de organização de tarefas e produtividade diária, com categorização de atividades e acompanhamento de progresso.'
  },
  {
    id: '2',
    title: 'Doce Preço',
    image: '/screendocepreco.png',
    icon: '/icondocepreco.png',
    url: 'https://apps.apple.com/us/app/docepre%C3%A7o/id6761034172',
    technologies: ['React Native', 'TypeScript'],
    platform: 'iOS',
    description: 'Aplicativo para comparação e acompanhamento de preços de produtos, ajudando o consumidor a encontrar as melhores ofertas.'
  },
  {
    id: '3',
    title: 'Organiza Ela',
    image: '/3.jpeg',
    url: 'https://apps.apple.com/us/app/organiza-ela/id6772197107',
    technologies: ['Flutter'],
    platform: 'iOS',
    description: 'Aplicativo de organização pessoal voltado para todos os públicos, com funcionalidades para gerenciar tarefas e rotinas do dia a dia.'
  }
];