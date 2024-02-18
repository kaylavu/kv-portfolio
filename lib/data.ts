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
    title: 'Education',
    location: 'Vancouver, Canada',
    description:
      "As part of my undergraduate studies in Statistics, I had a taste of computer science classes. However, it wasn't until 5 years later I pursued a coding bootcamp (Lighthouse Labs) and decided to pursue a career in programming full-time. One of the best decisions I ever made!",
    icon: React.createElement(LuGraduationCap),
    date: '2013 - 2018',
  },
  {
    title: 'Front-End Developer',
    location: 'Vancouver, Canada',
    description:
      'I started as a Front-End developer, where I got to put the skills I learned (React) into pratical use and build real world applications.',
    icon: React.createElement(FaReact),
    date: '2018 - 2023',
  },
  {
    title: 'Senior Front-End Developer',
    location: 'Vancouver, Canada',
    description:
      'I am trusted to make strategic business decisions, lead projects, and introduce newer technologies at NetCents. I mentor at the coding bootcamp where I studied so I am also learning the newest and latest skills while sharing my passion for web development.',
    icon: React.createElement(CgWorkAlt),
    date: '2023 - Present',
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
  'React',
  'Redux',
  'Redux-Saga',
  'Next.js',
  'TypeScript',
  'Tailwind',
  'Node.js',
  'Git',
  'SQL',
  'Ruby On Rails',
  'Framer Motion',
] as const;
