export type Project = {
  id: number;
  url: string;
  githubUrl: string;
  text: string;
  icons: string[];
};

export type Projects = Record<string, Project>;
