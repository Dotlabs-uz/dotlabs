
import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
  slug?: string;
}

export interface ClientBenefit {
  title: string;
  description: string;
  metric?: string;
}

export interface StorytellingVideo {
  title: string;
  url: string;
  thumbnail?: string;
  duration?: string;
  caption?: string;
}

export interface ProjectDetail extends Project {
  slug: string;
  duration?: string;
  teamSize?: number;
  year?: number;
  technologies?: string[];
  clientBenefits?: ClientBenefit[];
  storytellingVideos?: StorytellingVideo[];
  longDescription?: string;
  deliverables?: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  bio: string;
  philosophy: string;
  expertise: string[];
}

export type Category = 'All' | 'Web' | 'Mobile' | 'CRM' | 'UI/UX';
