function g(nome, pares) {
  return {
    nome: nome,
    topicos: pares.map(function (par) {
      return { nome: par[0], feito: par[1] };
    }),
  };
}

const trilha = [
  {
    fase: "Fase 0",
    titulo: "Fundamentos absolutos",
    periodo: "Nivel 0 · agora",
    modulos: [
      {
        nome: "HTML",
        grupos: [
          g("Dominar", [
            ["HTML semântico", true],
            ["head e body", true],
            ["Headings", true],
            ["Parágrafos", true],
            ["Links", true],
            ["Imagens", true],
            ["Listas", true],
            ["Tabelas", true],
            ["Formulários", true],
            ["Inputs", true],
            ["Buttons", true],
            ["Labels", true],
            ["Select", true],
            ["Textarea", true],
            ["Fieldset e legend", true],
            ["Article e section", true],
            ["Nav, main, header e footer", true],
            ["Aside", true],
            ["Figure e figcaption", true],
            ["Metadata", true],
            ["SEO básico", true],
            ["Open Graph", true],
            ["Favicon", true],
          ]),
        ],
      },
      {
        nome: "CSS",
        grupos: [
          g("Fundamentos", [
            ["Cascade", true],
            ["Specificity", true],
            ["Inheritance", true],
            ["Box model", true],
            ["Display", true],
            ["Position", true],
            ["Overflow", true],
            ["Stacking context", false],
            ["z-index", true],
            ["Pseudo-classes", true],
            ["Pseudo-elements", true],
          ]),
          g("Layout", [
            ["Flexbox", true],
            ["Grid", true],
            ["Responsive", true],
            ["Mobile-first", true],
            ["Media queries", true],
            ["Container queries", true],
          ]),
          g("Moderno", [
            ["CSS variables", true],
            ["Nesting", true],
            ["clamp, min, max e calc", false],
            ["Logical properties", true],
            ["Seletores modernos", true],
            [":has()", true],
            ["aspect-ratio", true],
            ["object-fit", true],
            ["content-visibility", true],
            ["Transitions", true],
            ["Animations", true],
            ["Transforms", true],
            ["View Transitions", true],
          ]),
          g("Depois do CSS puro", [
            ["Arquitetura CSS", false],
            ["Tailwind", false],
            ["CSS Modules", false],
            ["Design tokens", false],
          ]),
        ],
      },
      {
        nome: "JavaScript",
        grupos: [
          g("Básico", [
            ["Variables", true],
            ["Types", true],
            ["Operators", true],
            ["Conditionals", true],
            ["Loops", true],
            ["Functions", true],
            ["Arrays", true],
            ["Objects", true],
            ["Destructuring", true],
            ["Spread e rest", false],
            ["Template literals", false],
          ]),
          g("Intermediário", [
            ["Scope", false],
            ["Closures", false],
            ["Hoisting", false],
            ["Execution context", false],
            ["this", false],
            ["Prototypes", false],
            ["Classes", false],
            ["Modules", false],
            ["Immutability", false],
            ["Higher-order functions", false],
            ["Callbacks", false],
          ]),
          g("Avançado", [
            ["Event loop", false],
            ["Call stack", false],
            ["Task queue", false],
            ["Microtask queue", false],
            ["Promise", false],
            ["async/await", false],
            ["Generators", false],
            ["Iterators", false],
            ["AbortController", false],
            ["Streams", false],
            ["Memory", false],
            ["Browser APIs", false],
          ]),
        ],
      },
      {
        nome: "Web Platform",
        grupos: [
          g("Plataforma", [
            ["DOM", false],
            ["HTTP", false],
            ["Browser", false],
            ["DevTools", false],
            ["BOM", false],
            ["Browser rendering", false],
            ["Fetch", false],
            ["Storage", false],
            ["Cookies", false],
            ["IndexedDB", false],
            ["History API", false],
            ["URL API", false],
            ["WebSocket", false],
            ["Web Workers", false],
            ["Service Workers", false],
            ["Clipboard", false],
            ["Drag and drop", false],
            ["File API", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase D0",
    titulo: "Fundamentos visuais",
    periodo: "2026 · antes do React",
    modulos: [
      {
        nome: "Cor",
        grupos: [
          g("Aprender", [
            ["Teoria das cores", true],
            ["Círculo cromático", true],
            ["Matiz", true],
            ["Saturação", true],
            ["Luminosidade", true],
            ["Contraste", true],
          ]),
        ],
      },
      {
        nome: "Tipografia",
        grupos: [
          g("Aprender", [
            ["Famílias tipográficas", true],
            ["Serif, sans e monospace", true],
            ["Hierarquia tipográfica", true],
            ["Escala tipográfica", false],
          ]),
        ],
      },
      {
        nome: "Composição",
        grupos: [
          g("Aprender", [
            ["Espaçamento", false],
            ["Alinhamento", false],
            ["Proximidade", false],
            ["Repetição", false],
            ["Equilíbrio", false],
            ["Proporção", false],
            ["Ritmo visual", false],
            ["Grid", false],
            ["Whitespace", false],
            ["Affordance", false],
            ["Consistência visual", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase D1",
    titulo: "UI Design",
    periodo: "2026 · antes dos componentes React",
    modulos: [
      {
        nome: "Sistemas",
        grupos: [
          g("Aprender", [
            ["Layout", false],
            ["Grids", false],
            ["Containers", false],
            ["Spacing system", false],
            ["Typography system", false],
            ["Color system", false],
            ["Iconografia", false],
            ["Imagens", false],
          ]),
        ],
      },
      {
        nome: "Componentes",
        grupos: [
          g("Interface", [
            ["Botões", false],
            ["Inputs", false],
            ["Selects", false],
            ["Checkbox", false],
            ["Radio", false],
            ["Cards", false],
            ["Badges", false],
            ["Alerts", false],
            ["Dropdowns", false],
            ["Tooltips", false],
            ["Modals", false],
            ["Drawers", false],
            ["Tabs", false],
            ["Tables", false],
            ["Navigation", false],
            ["Pagination", false],
          ]),
        ],
      },
      {
        nome: "Estados",
        grupos: [
          g("Interface", [
            ["Empty states", false],
            ["Loading states", false],
            ["Error states", false],
            ["Success states", false],
            ["Hover", false],
            ["Focus", false],
            ["Active", false],
            ["Disabled", false],
            ["Pressed", false],
            ["Responsive states", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase D2",
    titulo: "UX",
    periodo: "2026–2027 · fácil de usar",
    modulos: [
      {
        nome: "Base",
        grupos: [
          g("Aprender", [
            ["UX vs UI", false],
            ["User flows", false],
            ["User journey", false],
            ["Information architecture", false],
            ["Navigation", false],
            ["Hierarchy", false],
            ["Usability", false],
            ["Cognitive load", false],
            ["Affordances", false],
          ]),
        ],
      },
      {
        nome: "Interação",
        grupos: [
          g("Aprender", [
            ["Feedback", false],
            ["Error prevention", false],
            ["Error recovery", false],
            ["Onboarding", false],
            ["Forms", false],
            ["Search", false],
            ["Filtering", false],
            ["Sorting", false],
            ["Pagination", false],
            ["Empty states", false],
            ["Confirmation", false],
            ["Destructive actions", false],
            ["Progressive disclosure", false],
          ]),
        ],
      },
      {
        nome: "Heurísticas",
        grupos: [g("Aprender", [["Heurísticas de usabilidade", false]])],
      },
    ],
  },
  {
    fase: "Fase D3",
    titulo: "Figma",
    periodo: "2026 básico · 2027 avançado",
    modulos: [
      {
        nome: "Arquivo",
        grupos: [
          g("Aprender", [
            ["Frames", false],
            ["Sections", false],
            ["Auto layout", false],
            ["Constraints", false],
            ["Components", false],
            ["Variants", false],
            ["Component properties", false],
            ["Styles", false],
            ["Variables", false],
          ]),
        ],
      },
      {
        nome: "Layout",
        grupos: [
          g("Aprender", [
            ["Typography", false],
            ["Colors", false],
            ["Spacing", false],
            ["Grids", false],
            ["Responsive layouts", false],
          ]),
        ],
      },
      {
        nome: "Protótipo",
        grupos: [
          g("Aprender", [
            ["Prototypes", false],
            ["Interactions", false],
            ["Overlays", false],
            ["Design libraries", false],
            ["Annotations", false],
            ["Handoff", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase D4",
    titulo: "Design responsivo",
    periodo: "Sistemas que se adaptam",
    modulos: [
      {
        nome: "Layout",
        grupos: [
          g("Aprender", [
            ["Mobile-first", false],
            ["Breakpoints", false],
            ["Fluid layouts", false],
            ["Responsive typography", false],
            ["Responsive spacing", false],
            ["Flexible grids", false],
            ["Container queries", false],
          ]),
        ],
      },
      {
        nome: "Adaptação",
        grupos: [
          g("Aprender", [
            ["Adaptive navigation", false],
            ["Responsive tables", false],
            ["Responsive forms", false],
            ["Responsive images", false],
            ["Touch targets", false],
            ["Mobile interaction", false],
            ["Desktop interaction", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase D5",
    titulo: "Acessibilidade no design",
    periodo: "Antes de aprofundar na engenharia",
    modulos: [
      {
        nome: "Percepção",
        grupos: [
          g("Aprender", [
            ["Contraste", false],
            ["Tamanho de texto", false],
            ["Color blindness", false],
            ["Reduced motion", false],
          ]),
        ],
      },
      {
        nome: "Interação",
        grupos: [
          g("Aprender", [
            ["Foco", false],
            ["Keyboard navigation", false],
            ["Touch targets", false],
            ["Screen readers", false],
            ["Labels", false],
            ["Form errors", false],
          ]),
        ],
      },
      {
        nome: "Estrutura",
        grupos: [
          g("Aprender", [
            ["Semantic structure", false],
            ["Accessible navigation", false],
            ["Accessible dialogs", false],
            ["WCAG", false],
            ["Inclusive design", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 1",
    titulo: "Git e ambiente",
    periodo: "Nivel 1 · 0–6 meses",
    modulos: [
      {
        nome: "Git",
        grupos: [
          g("Comandos", [
            ["init e clone", false],
            ["add e commit", false],
            ["push, pull e fetch", false],
            ["branch e merge", false],
            ["rebase", false],
            ["stash", false],
            ["reset e revert", false],
            ["Conflitos", false],
          ]),
          g("Fluxo", [
            ["Pull requests", false],
            ["Code review", false],
            ["Conventional Commits", false],
            ["Trunk-based", false],
            ["GitHub", false],
          ]),
        ],
      },
      {
        nome: "Terminal",
        grupos: [
          g("Bash", [
            ["Filesystem", false],
            ["Permissions", false],
            ["Processes", false],
            ["Environment variables", false],
            ["Pipes", false],
            ["grep", false],
            ["curl", false],
            ["ssh", false],
            ["Linux", false],
          ]),
        ],
      },
      {
        nome: "NPM",
        grupos: [
          g("Pacotes", [
            ["package.json", false],
            ["semver", false],
            ["dependencies", false],
            ["scripts", false],
            ["pnpm", false],
            ["workspaces", false],
            ["Vite", false],
            ["Next.js build", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Projetos 2026",
    titulo: "Sem framework",
    periodo: "Setembro — Dezembro",
    modulos: [
      {
        nome: "Site profissional",
        grupos: [
          g("Obrigatório", [
            ["HTML semântico", false],
            ["CSS avançado", false],
            ["Responsivo", false],
            ["Acessível", false],
            ["SEO", false],
            ["Performance", false],
            ["Design próprio", false],
            ["Fundamentos visuais", false],
            ["UI básica", false],
            ["UX básica", false],
            ["Figma básico", false],
          ]),
        ],
      },
      {
        nome: "Dashboard Vanilla",
        grupos: [
          g("Obrigatório", [
            ["API", false],
            ["Fetch", false],
            ["async/await", false],
            ["Loading e error", false],
            ["Paginação", false],
            ["Filtros", false],
            ["localStorage", false],
          ]),
        ],
      },
      {
        nome: "E-commerce Vanilla",
        grupos: [
          g("Obrigatório", [
            ["Produtos", false],
            ["Carrinho", false],
            ["Filtros", false],
            ["Busca", false],
            ["Checkout fictício", false],
            ["Responsivo", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 2",
    titulo: "TypeScript",
    periodo: "2027 · H1",
    modulos: [
      {
        nome: "Básico",
        grupos: [
          g("Tipos", [
            ["Primitive types", false],
            ["Arrays e tuples", false],
            ["Objects", false],
            ["Interfaces", false],
            ["Type aliases", false],
            ["Unions e intersections", false],
            ["Enums", false],
            ["Functions", false],
            ["Optional properties", false],
          ]),
        ],
      },
      {
        nome: "Intermediário",
        grupos: [
          g("Tipos", [
            ["Generics", false],
            ["Narrowing", false],
            ["Type guards", false],
            ["keyof e typeof", false],
            ["Indexed access", false],
            ["Utility types", false],
            ["Discriminated unions", false],
          ]),
        ],
      },
      {
        nome: "Avançado",
        grupos: [
          g("Tipos", [
            ["Conditional types", false],
            ["Mapped types", false],
            ["Template literal types", false],
            ["infer", false],
            ["Generic constraints", false],
            ["Declaration merging", false],
            ["Module augmentation", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 3",
    titulo: "React",
    periodo: "2027 · H1",
    modulos: [
      {
        nome: "Fundamentos",
        grupos: [
          g("Dominar", [
            ["JSX", false],
            ["Components", false],
            ["Props", false],
            ["State", false],
            ["Events", false],
            ["Conditional rendering", false],
            ["Lists e keys", false],
            ["Forms", false],
            ["Composition", false],
          ]),
        ],
      },
      {
        nome: "Hooks",
        grupos: [
          g("Dominar", [
            ["useState", false],
            ["useEffect", false],
            ["useContext", false],
            ["useReducer", false],
            ["useMemo", false],
            ["useCallback", false],
            ["useRef", false],
            ["Custom hooks", false],
          ]),
        ],
      },
      {
        nome: "Avançado",
        grupos: [
          g("Dominar", [
            ["Rendering", false],
            ["Reconciliation", false],
            ["State architecture", false],
            ["Controlled e uncontrolled", false],
            ["Context", false],
            ["Server Components", false],
            ["Suspense", false],
            ["Error boundaries", false],
            ["Performance", false],
          ]),
        ],
      },
      {
        nome: "Forms",
        grupos: [
          g("Formulários", [
            ["React Hook Form", false],
            ["Zod", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 5",
    titulo: "Testes",
    periodo: "2027 · H1",
    modulos: [
      {
        nome: "Unitários",
        grupos: [
          g("Aprender", [
            ["Vitest", false],
            ["Jest", false],
            ["Mocking", false],
            ["Spies", false],
            ["Fixtures", false],
          ]),
        ],
      },
      {
        nome: "Componentes",
        grupos: [g("Aprender", [["React Testing Library", false]])],
      },
      {
        nome: "E2E",
        grupos: [
          g("Aprender", [
            ["Playwright", false],
            ["Fluxo da aplicação", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Projeto 2027",
    titulo: "SaaS Dashboard",
    periodo: "H1 · React e TypeScript",
    modulos: [
      {
        nome: "Antes do código",
        grupos: [
          g("Ordem", [
            ["Problema", false],
            ["User flow", false],
            ["Wireframe", false],
            ["UI", false],
            ["Protótipo", false],
            ["Design system", false],
          ]),
        ],
      },
      {
        nome: "Entrega",
        grupos: [
          g("Obrigatório", [
            ["Forms", false],
            ["API", false],
            ["Authentication", false],
            ["Authorization", false],
            ["Tests", false],
            ["Responsive", false],
            ["Accessibility", false],
            ["Figma avançado", false],
            ["UX heuristics", false],
            ["UI states", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 4",
    titulo: "Next.js",
    periodo: "2027 · H2",
    modulos: [
      {
        nome: "App Router",
        grupos: [
          g("Rotas", [
            ["Layouts", false],
            ["Pages", false],
            ["Nested routes", false],
            ["Dynamic routes", false],
            ["Route groups", false],
            ["loading, error e not-found", false],
            ["Metadata", false],
          ]),
        ],
      },
      {
        nome: "Dados",
        grupos: [
          g("Modelo", [
            ["Server Components", false],
            ["Client Components", false],
            ["Server Functions", false],
            ["Data fetching", false],
            ["Caching", false],
            ["Revalidation", false],
            ["Streaming", false],
          ]),
        ],
      },
      {
        nome: "Produto",
        grupos: [
          g("Aplicação", [
            ["Authentication", false],
            ["Authorization", false],
            ["API e BFF", false],
            ["Imagens e fonts", false],
            ["Deploy", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 6",
    titulo: "Design System",
    periodo: "Junior para Pleno",
    modulos: [
      {
        nome: "Foundations",
        grupos: [
          g("Base", [
            ["Color", false],
            ["Typography", false],
            ["Spacing", false],
            ["Radius", false],
            ["Shadows", false],
            ["Elevation", false],
            ["Motion", false],
            ["Icons", false],
          ]),
        ],
      },
      {
        nome: "Tokens",
        grupos: [
          g("Camadas", [
            ["Primitive tokens", false],
            ["Semantic tokens", false],
            ["Component tokens", false],
          ]),
        ],
      },
      {
        nome: "Componentes",
        grupos: [
          g("Biblioteca", [
            ["Button", false],
            ["Input", false],
            ["Select", false],
            ["Checkbox", false],
            ["Modal", false],
            ["Tooltip", false],
            ["Table", false],
          ]),
        ],
      },
      {
        nome: "Patterns",
        grupos: [
          g("Uso", [
            ["Forms", false],
            ["Navigation", false],
            ["Authentication", false],
            ["Dashboards", false],
            ["Tables", false],
            ["Filters", false],
            ["Search", false],
          ]),
        ],
      },
      {
        nome: "Implementação",
        grupos: [
          g("Ponte com código", [
            ["Documentação", false],
            ["Usage", false],
            ["Anatomy", false],
            ["States", false],
            ["Accessibility", false],
            ["Do e don't", false],
            ["Examples", false],
            ["Figma Library", false],
            ["React", false],
            ["TypeScript", false],
            ["Storybook", false],
            ["CSS", false],
            ["Tests", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase D7",
    titulo: "Motion Design",
    periodo: "Depois da UI estática",
    modulos: [
      {
        nome: "Movimento",
        grupos: [
          g("Comunicar, não enfeitar", [
            ["Transitions", false],
            ["Easing", false],
            ["Duration", false],
            ["Animation", false],
            ["Microinteractions", false],
            ["Feedback visual", false],
            ["Loading animations", false],
            ["Skeletons", false],
            ["Page transitions", false],
            ["Hover interactions", false],
            ["Modal transitions", false],
            ["Scroll animations", false],
            ["Reduced motion", false],
          ]),
        ],
      },
      {
        nome: "Na web",
        grupos: [
          g("Implementar", [
            ["CSS", false],
            ["Web Animations API", false],
            ["Framer Motion", false],
            ["View Transitions", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 14",
    titulo: "State",
    periodo: "2027 · H2",
    modulos: [
      {
        nome: "Ordem de estudo",
        grupos: [
          g("Antes da biblioteca", [
            ["Local state", false],
            ["Lifted state", false],
            ["Context", false],
            ["Server state", false],
            ["Global client state", false],
          ]),
        ],
      },
      {
        nome: "Ferramentas",
        grupos: [
          g("Uma principal", [
            ["TanStack Query", false],
            ["Zustand", false],
            ["Redux Toolkit", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Projeto 2027",
    titulo: "SaaS corporativo",
    periodo: "H2 · Next.js",
    modulos: [
      {
        nome: "Entrega",
        grupos: [
          g("Parecer produto de empresa", [
            ["Login", false],
            ["Dashboard", false],
            ["Users, roles e permissions", false],
            ["Reports e tables", false],
            ["Filtros e busca", false],
            ["Notifications", false],
            ["Settings", false],
            ["CI/CD", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 7",
    titulo: "Acessibilidade",
    periodo: "Nivel 3 · 12–18 meses",
    modulos: [
      {
        nome: "WCAG",
        grupos: [
          g("Dominar", [
            ["WCAG 2.2", false],
            ["HTML semântico", false],
            ["Teclado", false],
            ["Focus management", false],
            ["ARIA", false],
            ["Screen readers", false],
            ["Contraste", false],
            ["Formulários", false],
            ["Dialogs", false],
            ["Navegação", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 8",
    titulo: "Performance",
    periodo: "Nivel 4 · Pleno",
    modulos: [
      {
        nome: "Rendering",
        grupos: [
          g("Aprender", [
            ["Critical rendering path", false],
            ["Reflow e repaint", false],
            ["Compositing", false],
            ["Bundle size", false],
            ["Code splitting", false],
            ["Lazy loading", false],
            ["Tree shaking", false],
          ]),
        ],
      },
      {
        nome: "Métricas",
        grupos: [
          g("Core Web Vitals", [
            ["LCP", false],
            ["INP", false],
            ["CLS", false],
            ["Lighthouse", false],
            ["DevTools", false],
            ["Web Vitals", false],
          ]),
        ],
      },
      {
        nome: "Entrega",
        grupos: [
          g("Rede", [
            ["Caching", false],
            ["CDN", false],
            ["Imagens e fonts", false],
            ["Compressão", false],
            ["HTTP/2 e HTTP/3", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 9",
    titulo: "Segurança",
    periodo: "Nivel 4",
    modulos: [
      {
        nome: "Front-end",
        grupos: [
          g("Entender", [
            ["XSS", false],
            ["CSRF", false],
            ["CORS", false],
            ["CSP", false],
            ["Cookies", false],
            ["SameSite, HttpOnly e Secure", false],
            ["JWT", false],
            ["OAuth e OIDC", false],
            ["Session", false],
            ["Onde guardar token", false],
            ["Dependências", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 10",
    titulo: "APIs",
    periodo: "Nivel 4",
    modulos: [
      {
        nome: "REST",
        grupos: [
          g("Conversar com backend", [
            ["Verbos HTTP", false],
            ["Status codes", false],
            ["Headers", false],
            ["Paginação", false],
            ["Filtro e ordenação", false],
            ["Caching", false],
            ["Erros", false],
          ]),
        ],
      },
      {
        nome: "Além do REST",
        grupos: [
          g("Depois", [
            ["GraphQL", false],
            ["WebSockets", false],
            ["SSE", false],
            ["tRPC", false],
            ["BFF", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 11",
    titulo: "Backend suficiente",
    periodo: "2028",
    modulos: [
      {
        nome: "Node.js",
        grupos: [
          g("Entender", [
            ["Runtime", false],
            ["Event loop", false],
            ["HTTP", false],
            ["Streams", false],
            ["Process e environment", false],
          ]),
        ],
      },
      {
        nome: "PostgreSQL",
        grupos: [
          g("SQL", [
            ["SELECT", false],
            ["INSERT, UPDATE e DELETE", false],
            ["JOIN", false],
            ["Indexes", false],
            ["Constraints", false],
            ["Transactions", false],
            ["Relações", false],
          ]),
        ],
      },
      {
        nome: "Redis",
        grupos: [
          g("Depois", [
            ["Caching", false],
            ["Queues", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 12",
    titulo: "Cloud e DevOps",
    periodo: "2028",
    modulos: [
      {
        nome: "Caminho do código",
        grupos: [
          g("Aprender", [
            ["GitHub Actions", false],
            ["Docker", false],
            ["CI/CD", false],
            ["Environment variables", false],
            ["Deploy", false],
            ["CDN, DNS e HTTPS", false],
            ["Logs", false],
            ["Monitoring", false],
          ]),
        ],
      },
      {
        nome: "Cloud",
        grupos: [
          g("O suficiente para conversar", [
            ["Vercel", false],
            ["Cloudflare", false],
            ["S3", false],
            ["CloudFront", false],
            ["Lambda", false],
            ["IAM", false],
            ["Sentry", false],
            ["OpenTelemetry", false],
            ["Kubernetes", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 13",
    titulo: "Arquitetura",
    periodo: "Pleno para Sênior",
    modulos: [
      {
        nome: "Decisão",
        grupos: [
          g("Aprender", [
            ["Separation of concerns", false],
            ["Cohesion e coupling", false],
            ["SOLID", false],
            ["Design patterns", false],
            ["Composition", false],
            ["Limites de domínio", false],
          ]),
        ],
      },
      {
        nome: "Formas",
        grupos: [
          g("Conhecer", [
            ["Feature-based", false],
            ["Layered", false],
            ["Modular", false],
            ["Monorepo", false],
            ["Micro-frontends", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Projeto 2028",
    titulo: "Plataforma SaaS",
    periodo: "Nivel 4 · 18–30 meses",
    modulos: [
      {
        nome: "Stack",
        grupos: [
          g("Usar junto", [
            ["Next.js", false],
            ["TypeScript", false],
            ["PostgreSQL", false],
            ["Redis", false],
            ["Docker", false],
            ["CI/CD", false],
            ["Playwright", false],
            ["Vitest", false],
            ["Storybook", false],
            ["Monitoring", false],
          ]),
        ],
      },
      {
        nome: "Produto",
        grupos: [
          g("Completo", [
            ["Authentication", false],
            ["RBAC", false],
            ["Billing fictício", false],
            ["Audit logs", false],
            ["Busca e paginação", false],
            ["Optimistic updates", false],
            ["Caching", false],
            ["Error handling", false],
          ]),
          g("Ciclo de produto", [
            ["Problema real", false],
            ["Pesquisa", false],
            ["Hipótese", false],
            ["UX", false],
            ["UI", false],
            ["Protótipo", false],
            ["Analytics", false],
            ["Feedback", false],
            ["Iteração", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 15",
    titulo: "Monorepos",
    periodo: "Nivel 5 · Sênior",
    modulos: [
      {
        nome: "Estrutura",
        grupos: [
          g("Aprender", [
            ["pnpm workspaces", false],
            ["Turborepo", false],
            ["Nx", false],
            ["Pacotes compartilhados", false],
            ["Design system package", false],
            ["Configs compartilhadas", false],
            ["CI em monorepo", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 16",
    titulo: "IA como ferramenta",
    periodo: "Nivel 5",
    modulos: [
      {
        nome: "Workflow",
        grupos: [
          g("Você responde pelo código", [
            ["Agentes de código", false],
            ["Contexto", false],
            ["Revisão do gerado", false],
            ["Debug assistido", false],
            ["Testes gerados", false],
            ["Refactor assistido", false],
            ["MCP", false],
            ["LLM workflows", false],
            ["Testes assistidos", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 17",
    titulo: "Inglês",
    periodo: "Em paralelo, desde agora",
    modulos: [
      {
        nome: "2026",
        grupos: [
          g("A2 para B1", [
            ["Leitura técnica", false],
            ["Listening", false],
            ["Vocabulário profissional", false],
            ["Documentação", false],
          ]),
        ],
      },
      {
        nome: "2027",
        grupos: [
          g("B1 para B2", [
            ["Reuniões", false],
            ["Entrevistas", false],
            ["Conversação", false],
            ["Explicação técnica", false],
          ]),
        ],
      },
      {
        nome: "2028+",
        grupos: [
          g("B2 / C1", [
            ["Arquitetura em inglês", false],
            ["Daily", false],
            ["Code review", false],
            ["Technical discussion", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase 18",
    titulo: "Mercado internacional",
    periodo: "2029–2030",
    modulos: [
      {
        nome: "Presença",
        grupos: [
          g("Preparar", [
            ["GitHub", false],
            ["LinkedIn em inglês", false],
            ["CV em inglês", false],
            ["Portfólio em inglês", false],
            ["README em inglês", false],
          ]),
        ],
      },
      {
        nome: "Entrevista",
        grupos: [
          g("Preparar", [
            ["Entrevista técnica", false],
            ["System design", false],
            ["Behavioral", false],
            ["Comunicação escrita", false],
            ["Comunicação", false],
            ["Mentoring", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Engenharia",
    titulo: "Engenharia de software",
    periodo: "Camada 2",
    modulos: [
      {
        nome: "Código",
        grupos: [
          g("Base", [
            ["Clean Code", false],
            ["Code Review", false],
            ["Documentação", false],
          ]),
        ],
      },
      {
        nome: "Operação",
        grupos: [
          g("Base", [
            ["Observability", false],
            ["Logging", false],
            ["Monitoring", false],
            ["CI/CD", false],
          ]),
        ],
      },
      {
        nome: "Processo",
        grupos: [
          g("Base", [
            ["Agile", false],
            ["Scrum", false],
            ["Kanban", false],
            ["Product thinking", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase D8",
    titulo: "UX Research",
    periodo: "2028",
    modulos: [
      {
        nome: "Pesquisa",
        grupos: [
          g("Descobrir o problema", [
            ["Entrevistas", false],
            ["Surveys", false],
            ["Usability testing", false],
            ["User personas", false],
            ["Jobs to be done", false],
            ["Journey mapping", false],
            ["Problem discovery", false],
            ["Hypothesis", false],
            ["Qualitative research", false],
            ["Quantitative data", false],
          ]),
        ],
      },
      {
        nome: "Métricas",
        grupos: [
          g("Saber se resolve", [
            ["A/B testing", false],
            ["Analytics", false],
            ["Funnels", false],
            ["Conversion", false],
            ["Retention", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Fase D9",
    titulo: "Produto",
    periodo: "2028 · Pleno e Sênior",
    modulos: [
      {
        nome: "Decisão",
        grupos: [
          g("Isso deveria existir?", [
            ["Product thinking", false],
            ["Business requirements", false],
            ["User needs", false],
            ["Business needs", false],
            ["Trade-offs", false],
            ["MVP", false],
            ["Prioritization", false],
          ]),
        ],
      },
      {
        nome: "Métricas",
        grupos: [
          g("Acompanhar", [
            ["Metrics", false],
            ["Conversion", false],
            ["Retention", false],
            ["Activation", false],
            ["Engagement", false],
            ["Funnel", false],
            ["Experimentation", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Design Engineering",
    titulo: "Ponte entre design e código",
    periodo: "2029",
    modulos: [
      {
        nome: "Escala",
        grupos: [
          g("Aprender", [
            ["Design systems em escala", false],
            ["Tokens avançados", false],
            ["Component APIs", false],
            ["UX architecture", false],
            ["Accessibility strategy", false],
            ["Visual regression", false],
            ["Design-to-code", false],
            ["Governança", false],
            ["Documentação", false],
          ]),
        ],
      },
      {
        nome: "Trade-offs",
        grupos: [
          g("Decidir", [
            ["Performance e UX", false],
            ["Design e engenharia", false],
            ["Produto e engenharia", false],
            ["Decisões de produto", false],
            ["Mentoring de UI", false],
          ]),
        ],
      },
      {
        nome: "Conversas",
        grupos: [
          g("Conseguir discutir", [
            ["Com designer", false],
            ["Com product manager", false],
            ["Com backend", false],
            ["Com front-end", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Case studies",
    titulo: "Evidência de um projeto",
    periodo: "Design, código e produto",
    modulos: [
      {
        nome: "Narrativa",
        grupos: [
          g("Mostrar o caminho", [
            ["Problema", false],
            ["Usuário", false],
            ["Restrições", false],
            ["Pesquisa", false],
            ["Hipóteses", false],
            ["Wireframes", false],
            ["Design", false],
            ["Implementação", false],
            ["Testes", false],
            ["Performance", false],
            ["Resultado", false],
            ["O que mudaria", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Especialização",
    titulo: "Direção em 2030",
    periodo: "Escolher um caminho",
    modulos: [
      {
        nome: "Arquitetura",
        grupos: [
          g("Caminho", [
            ["Architecture", false],
            ["Staff", false],
          ]),
        ],
      },
      {
        nome: "Performance",
        grupos: [
          g("Caminho", [
            ["Performance", false],
            ["Web Platform", false],
          ]),
        ],
      },
      {
        nome: "Design",
        grupos: [
          g("Caminho", [
            ["UI Engineering", false],
            ["Design Systems", false],
            ["Design Engineering", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Camadas",
    titulo: "O que te diferencia",
    periodo: "Depois do código",
    modulos: [
      {
        nome: "Produto",
        grupos: [
          g("Entender", [
            ["Por que está sendo construído", false],
            ["Impacto no usuário", false],
          ]),
        ],
      },
      {
        nome: "Negócio",
        grupos: [
          g("Entender", [
            ["Impacto", false],
            ["Prioridade", false],
          ]),
        ],
      },
      {
        nome: "Comunicação",
        grupos: [g("Entender", [["Explicar decisões", false]])],
      },
      {
        nome: "Liderança",
        grupos: [
          g("Entender", [
            ["Fazer o time produzir melhor", false],
            ["Mentoring", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Ecossistema",
    titulo: "Conhecer, sem dominar",
    periodo: "Não estudar tudo junto",
    modulos: [
      {
        nome: "Outros frameworks",
        grupos: [
          g("Conhecer", [
            ["Vue", false],
            ["Angular", false],
            ["Svelte", false],
            ["Solid", false],
            ["Nuxt", false],
            ["Remix", false],
            ["Astro", false],
            ["React Native", false],
            ["Flutter", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Laboratório",
    titulo: "Implementar do zero",
    periodo: "Conhecimento profundo",
    modulos: [
      {
        nome: "JavaScript",
        grupos: [
          g("Lab", [
            ["Promise do zero", false],
            ["Debounce", false],
            ["Throttle", false],
            ["Cache", false],
          ]),
        ],
      },
      {
        nome: "Interface",
        grupos: [
          g("Lab", [
            ["Router simples", false],
            ["State manager", false],
            ["Lista virtualizada", false],
            ["Modal acessível", false],
            ["Infinite scroll", false],
            ["Drag and drop", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Portfólio",
    titulo: "Cinco projetos",
    periodo: "Poucos e bons",
    modulos: [
      {
        nome: "Portfolio",
        grupos: [g("HTML, CSS e JS", [["Site profissional", false]])],
      },
      {
        nome: "Dashboard",
        grupos: [g("React e TypeScript", [["Dashboard", false]])],
      },
      {
        nome: "SaaS",
        grupos: [g("Next.js e PostgreSQL", [["SaaS", false]])],
      },
      {
        nome: "Design System",
        grupos: [g("React, TypeScript e Storybook", [["Biblioteca", false]])],
      },
      {
        nome: "Nível sênior",
        grupos: [
          g("Aplicação complexa", [
            ["Architecture", false],
            ["Performance", false],
            ["Security", false],
            ["Testing", false],
            ["Accessibility", false],
            ["CI/CD", false],
            ["Monitoring", false],
            ["Documentation", false],
          ]),
        ],
      },
    ],
  },
  {
    fase: "Checkpoint",
    titulo: "Sênior / especialista",
    periodo: "Nivel 6 · 2030",
    modulos: [
      {
        nome: "Evidência",
        grupos: [
          g("Não é checklist de curso", [
            ["Evidência por tecnologia", false],
            ["Produto e negócio", false],
            ["Liderança", false],
            ["Especialização", false],
          ]),
        ],
      },
    ],
  },
];
