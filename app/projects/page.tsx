import ProjectsPageContent from "@/components/ProjectsPageContent";
import { supabase } from "@/Lib/supabase";
import { MOCK_PROJECTS } from "@/Lib/data";
import { Project } from "@/Lib/types";

export const revalidate = 60;

async function getProjects() {
    try {
        const { data, error } = await supabase
            .from("projects")
            .select("*")
            .order("created_at", { ascending: false });

        if (error || !data || data.length === 0) {
            return MOCK_PROJECTS;
        }

        return data as Project[];
    } catch (err) {
        return MOCK_PROJECTS;
    }
}

export default async function ProjectsPage() {
    const projects = await getProjects();
    return <ProjectsPageContent projects={projects} />;
}
