export interface IProjectItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  link_demo?: string | null;
  link_github?: string | null;
  stacks: string;
  content?: string | null;
  is_show: boolean;
  is_featured: boolean;
  updated_at: Date;
}

export interface IProjectsItemProps {
  projects: IProjectItem[];
}
