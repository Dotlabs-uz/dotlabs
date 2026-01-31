import { notFound } from 'next/navigation';
import { getProjectBySlug, PROJECTS } from '@/content';
import type { Project } from '@/types';
import ProjectPageClient from './ProjectPageClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return PROJECTS.filter((p) => 'slug' in p && p.slug).map((p) => ({
    slug: (p as Project & { slug: string }).slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Project | Dotlabs' };
  return {
    title: `${project.title} | Dotlabs Studio`,
    description: project.longDescription || project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  return <ProjectPageClient project={project} />;
}
