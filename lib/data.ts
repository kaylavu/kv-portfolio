import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import ncImg from '@/public/ncImg.png';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Lightouse Labs Bootcamp',
    location: 'Vancouver, Canada',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: '2018',
  },
  {
    title: 'Front-End Developer',
    location: 'Vancouver, Canada',
    description:
      'I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.',
    icon: React.createElement(CgWorkAlt),
    date: '2018 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'NetCents Technology',
    description:
      'NetCents Technology helps businesses process cryptocurrency payments.',
    tags: [
      'React',
      'Next.js',
      'Redux',
      'Redux-Saga',
      'Styled-Components',
      'Ruby On Rails',
    ],
    imageUrl: ncImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Redux',
  'SQL',
  'Ruby On Rails',
  'Framer Motion',
] as const;
