import { NextResponse } from 'next/server';
import { supabase } from '@/Lib/supabase';
import { MOCK_PROJECTS } from '@/Lib/data';

export async function GET() {
    const { data: projects, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

    if (error || !projects || projects.length === 0) {
        // Return mock data if Supabase is not connected or empty
        return NextResponse.json(MOCK_PROJECTS);
    }

    return NextResponse.json(projects);
}
