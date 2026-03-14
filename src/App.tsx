/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  MousePointer2,
  BarChart3,
  Database,
  Server,
  Cpu,
  Workflow,
  ExternalLink,
  Calendar,
  MapPin,
  Code2,
  Terminal,
  User,
  Sparkles,
  Activity,
  Zap,
  ShieldCheck,
  Target,
  Layers,
  Briefcase,
  Repeat,
  FileText,
  Phone
} from 'lucide-react';
import { cn } from './lib/utils';

const Nav = () => (
  <nav className="fixed top-0 left-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5 px-6 py-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center">
      <div className="text-white font-medium tracking-tight">
       Sanjay Reddy Komatireddy
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
        <a href="#home" className="text-white border-b-2 border-blue-500 pb-1">Home</a>
        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
        <a href="#skills" className="hover:text-white transition-colors">Skills</a>
        <a href="#experience" className="hover:text-white transition-colors">Experience</a>
        <a href="#about" className="hover:text-white transition-colors">About</a>
        <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2 rounded-full font-semibold flex items-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all">
          Download Resume
        </button>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative pt-48 pb-32 px-6 flex flex-col items-center text-center overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-10" />
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl"
    >
      <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-[1.1]">
        Data Engineer developing scalable ETL pipelines for real-time and batch data processing.
      </h1>

      <div className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-zinc-900/50 border border-white/10 text-zinc-300 font-mono text-sm mb-12">
        <span>Kafka • PySpark • Airflow</span>
        <span className="w-px h-4 bg-white/20" />
        <span>300K+ records/day</span>
        <span className="w-px h-4 bg-white/20" />
        <span>&lt;5s streaming latency</span>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="#projects"
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-bold shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all"
        >
          View Projects
        </a>
        <a 
          href="#contact"
          className="border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-full font-bold flex items-center gap-2 transition-all"
        >
          Contact Me <MousePointer2 className="w-4 h-4" />
        </a>
        <a 
          href="https://www.linkedin.com/in/komatireddy-sanjay-reddy-2a43023b7"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-full font-bold transition-all"
        >
          LinkedIn
        </a>
        <a 
          href="https://github.com/komatireddysanjayreddy" 
          target="_blank" 
          rel="noopener noreferrer"
          className="border border-white/20 hover:bg-white/5 text-white px-8 py-3 rounded-full font-bold transition-all"
        >
          GitHub
        </a>
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">About Me</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-10" />
        
        <div className="space-y-8 text-zinc-300 text-lg leading-relaxed">
          <p>
       I am a Data Engineer passionate about building scalable and reliable data systems. I have hands-on experience designing and developing both batch and real-time data pipelines that transform raw data into meaningful insights. My work focuses on data ingestion, ETL orchestration, and creating analytics-ready datasets using tools like Apache Kafka, PySpark, and Airflow. I enjoy solving challenges related to data quality, pipeline performance, and system reliability while working with large-scale data.
          </p>
         
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="relative z-10 rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
          <img 
            src="https://res.cloudinary.com/dkivpkaaj/image/upload/v1773506601/sanjay_pic_n8d6je.jpg" 
            alt="Sanjay Reddy Komatireddy" 
            className="w-full aspect-[4/5] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        {/* Decorative background glow */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/20 to-purple-500/20 blur-2xl rounded-[40px] -z-10" />
      </motion.div>
    </div>
  </section>
);

const ImpactSnapshot = () => (
  <section className="py-20 px-6 max-w-7xl mx-auto">
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-white/5 rounded-lg">
          <BarChart3 className="w-6 h-6 text-blue-400" />
        </div>
        <h2 className="text-3xl font-bold text-white">Impact Snapshot</h2>
      </div>
      <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[
        { label: 'Data Processed', value: '1PB+', desc: 'High-volume crypto & health records' },
        { label: 'Pipeline Uptime', value: '99.99%', desc: 'SLA for critical financial & clinical data' },
        { label: 'Efficiency Gain', value: '45%', desc: 'Optimized Spark jobs & SQL queries' },
        { label: 'Processing Speed', value: '15x', desc: 'Faster delivery of regulatory reports' },
      ].map((item, idx) => (
        <motion.div
          key={item.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5 hover:border-blue-500/30 transition-all group"
        >
          <div className="text-zinc-400 text-sm font-medium mb-2">{item.label}</div>
          <div className="text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{item.value}</div>
          <div className="text-zinc-500 text-xs">{item.desc}</div>
        </motion.div>
      ))}
    </div>
  </section>
);

const ProjectCard = ({ project, idx }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: idx * 0.1 }}
    viewport={{ once: true }}
    className="group relative overflow-hidden rounded-3xl bg-zinc-900/40 border border-white/5 p-8 md:p-10 hover:border-blue-500/30 transition-all cursor-pointer"
    onClick={() => window.open(project.link, '_blank')}
  >
    <div className="flex flex-col md:flex-row justify-between items-start mb-8 gap-4">
      <h3 className="text-2xl md:text-3xl font-bold text-white group-hover:text-blue-400 transition-colors">{project.title}</h3>
      <a 
        href={project.github} 
        target="_blank" 
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/50 border border-white/10 text-sm font-medium text-zinc-300 hover:bg-zinc-700 transition-all"
      >
        <Github className="w-4 h-4" /> GitHub Repo
      </a>
    </div>

    <div className="mb-8 p-6 rounded-2xl bg-zinc-900/30 border-l-4 border-blue-500">
      <p className="text-zinc-300 leading-relaxed">
        <span className="font-bold text-white">Problem:</span> {project.problem}
      </p>
    </div>

    <div className="mb-10">
      <h4 className="text-sm font-bold text-zinc-400 uppercase tracking-widest mb-4">Architecture:</h4>
      <div className="p-4 rounded-xl bg-zinc-900/50 border border-white/5 font-mono text-sm text-blue-400">
        {project.architecture}
      </div>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {project.detailedMetrics.map((m: any) => (
        <div key={m.label} className="p-6 rounded-2xl bg-zinc-900/50 border border-white/5 text-center group/metric hover:border-blue-500/20 transition-all">
          <div className="text-3xl font-bold text-white mb-1 group-hover/metric:text-blue-400 transition-colors">{m.value}</div>
          <div className="text-[10px] text-zinc-500 uppercase tracking-wider">{m.label}</div>
        </div>
      ))}
    </div>

    <div className="flex flex-wrap gap-2 mb-10">
      {project.tech.map((t: string) => (
        <span key={t} className="px-4 py-2 rounded-full bg-zinc-800/50 border border-white/5 text-xs font-medium text-zinc-400">
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

const Projects = () => (
  <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-white mb-2">Featured Projects</h2>
      <div className="h-1 w-16 bg-blue-500 rounded-full" />
    </div>
    <div className="grid gap-12">
      {[
        {
          title: "AWS Sales ETL Pipeline",
          problem: "Manual sales reporting was slow, error-prone, and couldn't handle the increasing volume of global sales data.",
          architecture: "CSV Data (S3) → AWS Glue (ETL) → Amazon Redshift → Power BI / QuickSight",
          detailedMetrics: [
            { label: "records processed", value: "50M+" },
            { label: "processing time", value: "15 min" },
            { label: "data accuracy", value: "99.9%" },
            { label: "cost reduction", value: "30%" }
          ],
          tech: ["AWS S3", "AWS Glue", "Redshift", "Python", "Terraform"],
          link: "https://aws-sales-etl-pipeline.vercel.app",
          github: "https://github.com/komatireddysanjayreddy"
        },
        {
          title: "Hospital Management Analytics System",
          problem: "Healthcare providers faced challenges in tracking patient outcomes and resource utilization across multiple departments.",
          architecture: "Healthcare Data (MySQL) → Python ETL → MongoDB → Vercel Dashboard",
          detailedMetrics: [
            { label: "patients tracked", value: "10K+" },
            { label: "report generation", value: "< 2s" },
            { label: "resource optimization", value: "25%" },
            { label: "system uptime", value: "99.9%" }
          ],
          tech: ["Python", "MySQL", "MongoDB", "React", "Vercel"],
          link: "https://hospital-analytics.vercel.app",
          github: "https://github.com/komatireddysanjayreddy"
        },
        {
          title: "Twitter Sentiment Analysis",
          problem: "Analyzing large-scale social media data for brand sentiment is computationally expensive and requires real-time processing.",
          architecture: "Twitter API (v2) → Apache Kafka → Spark Streaming (NLP) → Elasticsearch → Kibana",
          detailedMetrics: [
            { label: "tweets/sec processed", value: "5K+" },
            { label: "NLP accuracy", value: "95%" },
            { label: "analysis latency", value: "< 1s" },
            { label: "data points stored", value: "1M+" }
          ],
          tech: ["Python", "Kafka", "Spark Streaming", "NLP", "Elasticsearch"],
          link: "https://dashboard-blue-two-22.vercel.app",
          github: "https://github.com/komatireddysanjayreddy"
        },
        {
          title: "Car Price Prediction Dashboard",
          problem: "Predicting used car prices accurately requires processing diverse datasets with high dimensionality and real-time inference capabilities.",
          architecture: "Scraped Data (BeautifulSoup) → Python ETL → Random Forest Model → Streamlit / Vercel Dashboard",
          detailedMetrics: [
            { label: "data points analyzed", value: "50K+" },
            { label: "model accuracy (R²)", value: "0.92" },
            { label: "prediction latency", value: "< 500ms" },
            { label: "features engineered", value: "25+" }
          ],
          tech: ["Python", "Scikit-Learn", "Pandas", "Streamlit", "Vercel"],
          link: "https://car-price-prediction-dashboard.vercel.app/",
          github: "https://github.com/komatireddysanjayreddy"
        }
      ].map((project, idx) => (
        <ProjectCard key={project.title} project={project} idx={idx} />
      ))}
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-20 px-6 bg-zinc-900/10">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-white mb-2">Technical Arsenal</h2>
        <div className="h-1 w-16 bg-blue-500 rounded-full" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Programming Languages",
            icon: <Code2 className="w-5 h-5" />,
            skills: ["Python", "SQL"]
          },
          {
            title: "Data Processing & Orchestration",
            icon: <Workflow className="w-5 h-5" />,
            skills: ["Apache Spark", "Apache Airflow", "dbt"]
          },
          {
            title: "Data Warehousing & Databases",
            icon: <Database className="w-5 h-5" />,
            skills: ["Snowflake", "PostgreSQL"]
          },
          {
            title: "Cloud Platforms & Services",
            icon: <Server className="w-5 h-5" />,
            skills: ["AWS S3", "AWS Glue", "AWS Kinesis", "Redshift", "AWS KMS", "Amazon SQS", "CloudWatch"]
          },
          {
            title: "Monitoring & Observability",
            icon: <Activity className="w-5 h-5" />,
            skills: ["Grafana", "Datadog"]
          },
          {
            title: "Others",
            icon: <Terminal className="w-5 h-5" />,
            skills: ["Apache Kafka", "Fivetran"]
          }
        ].map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-zinc-900/50 border border-white/5"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                {cat.icon}
              </div>
              <h3 className="text-xl font-bold text-white">{cat.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map(s => (
                <span key={s} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-zinc-300 hover:border-blue-500/30 transition-colors cursor-default">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Experience = () => (
  <section id="experience" className="py-20 px-6 max-w-7xl mx-auto">
    <div className="mb-12">
      <h2 className="text-3xl font-bold text-white mb-2">Career Journey</h2>
      <div className="h-1 w-16 bg-blue-500 rounded-full" />
    </div>
    <div className="space-y-12">
      {[
        {
          role: "Data Engineer",
          company: "Binance.US",
          period: "Apr 2024 - Present",
          location: "Remote",
          achievements: [
            "Developed robust data pipelines using Apache Spark and AWS Glue for processing high-volume cryptocurrency transaction data securely.",
            "Built scalable data warehousing solutions in Snowflake, integrating diverse datasets from various Binance.US trading platforms for improved analytics.",
            "Created and maintained automated ETL workflows using Apache Airflow to ensure timely delivery of critical market data for regulatory reporting.",
            "Improved data quality and consistency by implementing data validation checks and monitoring dashboards using Python and Grafana.",
            "Designed and deployed real-time data streaming applications with Apache Kafka and AWS Kinesis for immediate insight into trading activity.",
            "Developed data models within Redshift to support complex analytical queries for user behavior and platform performance metrics.",
            "Built secure data lakes on AWS S3, enabling efficient storage and access to vast amounts of historical blockchain and transaction data.",
            "Improved data pipeline performance by optimizing SQL queries and Spark jobs, reducing processing times for critical financial reports.",
            "Created monitoring and alerting systems using Datadog for data pipeline health, proactively identifying and resolving data flow issues.",
            "Developed Python scripts for data extraction from various APIs, enriching internal datasets for risk management and compliance analytics."
          ]
        },
        {
          role: "Data Engineer",
          company: "CommonSpirit Health",
          period: "Sept 2021 - Jun 2023",
          location: "Remote",
          achievements: [
            "Developed scalable data pipelines using Apache Spark and AWS Glue for efficient processing of diverse patient health records.",
            "Designed and implemented robust ETL processes with Python and Airflow, improving data ingestion from various clinical systems.",
            "Created a data lake on AWS S3 to store structured and unstructured healthcare data, supporting future analytics initiatives.",
            "Developed data warehousing solutions in Snowflake, consolidating critical operational and financial data for CommonSpirit Health's reporting needs.",
            "Improved data quality and integrity checks across multiple datasets using SQL and custom Python scripts for accuracy.",
            "Implemented secure data integrations with external vendors and partners using AWS KMS and Amazon SQS for protected health information.",
            "Built monitoring and alerting systems for data pipeline failures using CloudWatch, ensuring high availability of critical health data.",
            "Designed and maintained relational databases like PostgreSQL to support various internal applications and reporting requirements.",
            "Delivered accurate and timely data transformations using DBT for business intelligence dashboards, supporting clinical decision-making.",
            "Developed data ingestion frameworks for electronic health records, utilizing Kafka and Fivetran to centralize information flow."
          ]
        }
      ].map((exp, idx) => (
        <motion.div
          key={exp.company}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l border-white/10 group"
        >
          <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-blue-500 group-hover:scale-150 transition-transform" />
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-2">
            <div>
              <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">{exp.role}</h3>
              <div className="text-blue-400 font-semibold text-lg">{exp.company}</div>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-zinc-500 text-sm">
              <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full"><Calendar className="w-4 h-4" /> {exp.period}</div>
              <div className="flex items-center gap-1 bg-white/5 px-3 py-1 rounded-full"><MapPin className="w-4 h-4" /> {exp.location}</div>
            </div>
          </div>
          <ul className="space-y-3">
            {exp.achievements.map((achievement, i) => (
              <li key={i} className="flex gap-3 text-zinc-400 leading-relaxed">
                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500/50 shrink-0" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
      <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6" />
      <p className="text-zinc-400 text-lg">Let's connect and discuss opportunities.</p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {[
        {
          label: "EMAIL",
          value: "sanjayreddykomatireddy80@gmail.com",
          icon: <Mail className="w-5 h-5" />,
          link: "mailto:sanjayreddykomatireddy80@gmail.com"
        },
        {
          label: "LINKEDIN",
          value: "linkedin.com/in/komatireddy-sanjay-reddy-2a43023b7",
          icon: <Linkedin className="w-5 h-5" />,
          link: "https://www.linkedin.com/in/komatireddy-sanjay-reddy-2a43023b7"
        },
        {
          label: "GITHUB",
          value: "github.com/komatireddysanjayreddy",
          icon: <Github className="w-5 h-5" />,
          link: "https://github.com/komatireddysanjayreddy"
        },
        {
          label: "PHONE",
          value: "+19599990595",
          icon: <Phone className="w-5 h-5" />,
          link: "tel:+19599990595"
        }
      ].map((item) => (
        <a
          key={item.label}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 transition-all group flex items-start gap-4"
        >
          <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 group-hover:scale-110 transition-transform">
            {item.icon}
          </div>
          <div>
            <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">{item.label}</div>
            <div className="text-sm text-zinc-300 break-all">{item.value}</div>
          </div>
        </a>
      ))}
    </div>
    
    <div className="max-w-xs">
      <div className="p-6 rounded-2xl bg-zinc-900/40 border border-white/5 flex items-start gap-4">
        <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
          <MapPin className="w-5 h-5" />
        </div>
        <div>
          <div className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest mb-1">LOCATION</div>
          <div className="text-sm text-zinc-300">Cleveland, OH</div>
        </div>
      </div>
    </div>
  </section>
);

const CTA = () => (
  <section className="py-24 px-6 relative overflow-hidden border-t border-white/5">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
    
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        🚀 Open to Work
      </div>
      
      <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
        Let's Build Something Great Together
      </h2>
      
      <p className="text-zinc-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
        Actively seeking Entry-Level / New Grad Data Engineer roles in the US. Available for onsite, hybrid, and remote opportunities.
      </p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <a 
          href="mailto:sanjayreddykomatireddy80@gmail.com" 
          className="px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-full hover:shadow-[0_0_30px_rgba(59,130,246,0.4)] transition-all flex items-center gap-2"
        >
          <Mail className="w-5 h-5" /> Get In Touch
        </a>
        <a 
          href="https://www.linkedin.com/in/komatireddy-sanjay-reddy-2a43023b7" 
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-zinc-900 border border-white/10 text-white font-bold rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2"
        >
          <Linkedin className="w-5 h-5" /> Connect on LinkedIn
        </a>
      </div>
    </div>
  </section>
);

const WhyChooseMe = () => (
  <section className="py-24 px-6 bg-zinc-900/10">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Me?</h2>
        <div className="h-1 w-20 bg-blue-500 rounded-full mx-auto" />
        <p className="text-zinc-400 mt-6 max-w-2xl mx-auto text-lg">
          I don't just build pipelines; I build reliable, high-performance data foundations that empower businesses to make data-driven decisions with confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Industry-focused Data Engineer",
            icon: <Briefcase className="w-6 h-6" />,
            desc: "Specialized in building robust data foundations for high-stakes Fintech and Healthcare sectors."
          },
          {
            title: "Real-time & Batch Pipelines",
            icon: <Repeat className="w-6 h-6" />,
            desc: "Expertise in orchestrating low-latency streaming (Kafka) and high-volume batch processing (Spark)."
          },
          {
            title: "Strong Database Design Skills",
            icon: <Database className="w-6 h-6" />,
            desc: "Designing optimized schemas in Snowflake, Redshift, and PostgreSQL for complex analytical needs."
          },
          {
            title: "Clear Reporting & Documentation",
            icon: <FileText className="w-6 h-6" />,
            desc: "Delivering actionable insights through Grafana/Datadog and maintaining rigorous technical documentation."
          },
          {
            title: "Hands-on Experience with Real Data",
            icon: <Activity className="w-6 h-6" />,
            desc: "Proven track record of managing petabyte-scale production data in high-concurrency environments."
          }
        ].map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-blue-500/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-zinc-400 leading-relaxed text-sm">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <div className="min-h-screen transition-colors duration-500 selection:bg-blue-500/30 selection:text-blue-200 bg-[#09090b] text-white">
      <div className="fixed inset-0 data-grid pointer-events-none opacity-[0.03]" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <ImpactSnapshot />
        <Experience />
        <Projects />
        <WhyChooseMe />
        <Contact />
        <CTA />
      </main>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
          <div className="flex gap-8 text-zinc-400 font-medium">
            <a href="https://github.com/komatireddysanjayreddy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <span className="text-white/10">•</span>
            <a href="https://www.linkedin.com/in/komatireddy-sanjay-reddy-2a43023b7" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <span className="text-white/10">•</span>
            <a href="mailto:sanjayreddykomatireddy80@gmail.com" className="hover:text-white transition-colors">Email</a>
          </div>
          <div className="text-zinc-500 text-sm">
            © 2026 Sanjay Reddy Komatireddy · Built with passion for data engineering
          </div>
        </div>
      </footer>
    </div>
  );
}
