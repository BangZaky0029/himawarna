
export interface Database {
  public: {
    Tables: {
      projects: {
        Row: Project;
        Insert: Omit<Project, 'id' | 'created_at'>;
        Update: Partial<Omit<Project, 'id' | 'created_at'>>;
      };
    };
  };
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  category: string; // 'epoxy', 'lapangan', etc.
  image_url: string;
  description: string | null;
  location: string | null;
  client: string | null;
  surface_type: string | null;
  is_featured: boolean;
  created_at: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ExpertiseItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Brand {
  id: string;
  name: string;
  slug: string;
  category: string;
}
