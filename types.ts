
export interface RPHModule {
  id: string;
  title: string;
  preview: string;
  icon: string;
  color: string;
  articles: string;
  sections: Array<{
    title: string;
    content: string | string[];
    type?: 'info' | 'warning' | 'danger' | 'success';
  }>;
}

export type AITab = 'consultas' | 'cartas';
