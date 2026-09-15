const icon = (slug, alt) => ({ icon: `/images/tech/${slug}.svg`, alt })

const techIcons = {
  html: icon('html5', 'HTML'),
  css: icon('css3', 'CSS'),
  js: icon('javascript', 'JavaScript'),
  java: icon('java', 'Java'),
  sql: icon('sql', 'SQL'),
  python: icon('python', 'Python'),
  csharp: icon('csharp', 'C#'),
  springboot: icon('springboot', 'Spring Boot'),
  react: icon('react', 'React'),
  blazor: icon('blazor', 'Blazor'),
  astro: icon('astro', 'Astro'),
  dotnet: icon('dotnet', '.NET'),
  git: icon('git', 'Git'),
  github: icon('github', 'GitHub'),
  postgresql: icon('postgresql', 'PostgreSQL'),
  sqlite: icon('sqlite', 'SQLite'),
  pytorch: icon('pytorch', 'PyTorch'),
}

export default techIcons
