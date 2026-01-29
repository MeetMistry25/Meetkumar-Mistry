export interface Project {
    id: number;
    title: string;
    description: string;
    tech: string[];
    image: string;
    github?: string;
    demo?: string;
    category?: string; // For filtering
}
