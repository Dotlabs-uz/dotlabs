/**
 * Team members: photos, roles, bios, social.
 * Edit names, images, and links here.
 */

import type { TeamMember } from '@/types';

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'm1',
    name: 'Sardor Akhmedov',
    role: 'Managing Director',
    specialty: 'Strategy & Growth',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
    social: { linkedin: '#', twitter: '#' },
    bio: "With over a decade of experience in the digital sector, Sardor leads Dotlabs with a focus on sustainable growth and cutting-edge architectural patterns. He believes that every line of code should serve a business purpose.",
    philosophy: "Architecture is not just about structure; it's about the silence between the components.",
    expertise: ['Strategic Planning', 'Cloud Infrastructure', 'Venture Building'],
  },
  {
    id: 'm2',
    name: 'Dilshod Mavlonov',
    role: 'Creative Director',
    specialty: 'UI/UX & Branding',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
    social: { linkedin: '#', twitter: '#' },
    bio: "Dilshod is the visionary behind Dotlabs' unique aesthetic. His work has been recognized globally for blending minimalist principles with high-interaction digital experiences.",
    philosophy: 'Design is the intermediary between information and understanding.',
    expertise: ['Visual Identity', 'Interaction Design', 'Motion Graphics'],
  },
  {
    id: 'm3',
    name: 'Jasur Ismoilov',
    role: 'Lead Architect',
    specialty: 'System Design',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=800&auto=format&fit=crop',
    social: { github: '#', linkedin: '#' },
    bio: "Jasur is a full-stack polyglot who oversees our most complex CRM and Fintech implementations. He specializes in high-concurrency systems and real-time data processing.",
    philosophy: "If it works but you don't know why, it's not finished.",
    expertise: ['Microservices', 'Event-Driven Dev', 'Security'],
  },
  {
    id: 'm4',
    name: 'Malika Karimova',
    role: 'Product Manager',
    specialty: 'Agile Ops',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
    social: { linkedin: '#' },
    bio: "Malika bridges the gap between client vision and engineering execution. Her background in data analytics ensures that every product decision is backed by solid research.",
    philosophy: 'Products are living organisms; they need feedback to evolve.',
    expertise: ['Agile Methodology', 'User Research', 'KPI Tracking'],
  },
];
