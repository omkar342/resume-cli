#!/usr/bin/env node

const boxen = require('boxen');
const chalk = require('chalk');

// Resume Data
const resume = {
  name: 'Omkar Jadhav',
  title: 'Full Stack Developer',
  contact: {
    email: 'omkarjadhav095@gmail.com',
    phone: '+91 832973XXXX'
  },
  social: {
    linkedin: 'https://www.linkedin.com/in/omkar-jadhav-7809b7196/',
    github: 'https://github.com/omkar342', 
    portfolio: 'https://omkar-s-modern-portfolio.vercel.app/' 
  },
  about: 'Full-Stack Developer with 2 years of experience in building scalable web applications using the MERN stack. Skilled in React, TypeScript, NodeJS, Express, SQL/NoSQL databases, and GraphQL. Experienced in developing responsive front-end interfaces, robust back-end services, and optimized APIs. Worked with AWS, Azure (including Azure Functions for serverless development), and IaC to automate resource creation and management. Proficient with Docker and CI/CD workflows to ensure reliable deployments. Strong problem-solving foundation with 400+ DSA questions solved. Focused on writing clean, maintainable code and contributing to large-scale engineering teams.',
  skills: [
    'ReactJs', 'Redux', 'HTML/CSS', 'Javascript/Typescript', 
    'NodeJs/ExpressJs', 'SQL (MySQL)', 'NoSQL (MongoDB)', 
    'Docker', 'Kubernetes', 'AWS', 'Azure', 'Git'
  ],
  experience: [
    {
      company: 'Metron Security',
      role: 'Full Stack Developer',
      period: 'Mar 2025 – Present',
      description: 'Built backend services for data ingestion, reduced processing delays by 25%. Designed event-driven pipelines cutting processing time from minutes to seconds.'
    },
    {
      company: 'Civil Guruji',
      role: 'Full Stack Developer',
      period: 'Aug 2023 – Feb 2025',
      description: 'Optimized backend APIs improving performance by 30%. Designed scalable notification system for 200K+ users. Automated CI/CD pipelines.'
    }
  ],
  projects: [
    {
      name: 'Malicious File Monitor',
      tech: 'TypeScript, Node.js, VirusTotal API',
      description: 'Monitors folders for malware using VirusTotal API and quarantines malicious files.'
    },
    {
      name: 'Meeting Management System',
      tech: 'ReactJs, NextJs, Docker',
      description: 'Platform for scheduling online meetings with automated deployments.'
    },
    {
      name: 'Video Repository',
      tech: 'NodeJS, ExpressJS, MongoDB',
      description: 'Secure platform for efficient storage, streaming & sharing of videos.'
    }
  ]
};

// Formatting
const newline = '\n';
const gap = '  ';

const header = `${chalk.bold.cyan(resume.name)} ${chalk.dim('|')} ${chalk.bold(resume.title)}`;
const contact = `${chalk.dim(resume.contact.email)} ${chalk.dim('|')} ${chalk.dim(resume.contact.phone)}`;

const socialLinks = [
  `${chalk.bold('LinkedIn:')} ${chalk.blue(resume.social.linkedin)}`,
  `${chalk.bold('GitHub:')}   ${chalk.green(resume.social.github)}`,
  `${chalk.bold('Portfolio:')} ${chalk.magenta(resume.social.portfolio)}`
].join(newline);

const bio = chalk.italic(resume.about);

const skills = `${chalk.bold.yellow('Skills:')} ${resume.skills.join(', ')}`;

const experience = `${chalk.bold.red('Experience:')}${newline}` + resume.experience.map(job => {
  return `${gap}${chalk.bold(job.role)} at ${chalk.bold(job.company)} (${chalk.dim(job.period)})${newline}${gap}${chalk.dim(job.description)}`;
}).join(newline + newline);

const projects = `${chalk.bold.magenta('Projects:')}${newline}` + resume.projects.map(proj => {
  return `${gap}${chalk.bold(proj.name)} (${chalk.dim(proj.tech)})${newline}${gap}${chalk.dim(proj.description)}`;
}).join(newline + newline);

// Combine everything
const output = [
  header,
  contact,
  newline,
  bio,
  newline,
  socialLinks,
  newline,
  skills,
  newline,
  experience,
  newline,
  projects
].join(newline);

// Boxen options
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
  borderColor: 'cyan',
  backgroundColor: '#1b1b1b',
  width: 70
};

console.log(boxen(output, boxenOptions));
