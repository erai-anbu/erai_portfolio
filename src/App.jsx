import React, {useState} from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Download, ExternalLink, Award, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ResumePage(){
  const [showCert, setShowCert] = useState(false);
  const [copied, setCopied] = useState(false);

  const resume = {
    name: `ERAIANBU K M`,
    title: `SENIOR APPLICATION DEVELOPER`,
    phone: `+91-7904439065`,
    email: `eraianbu49@gmail.com`,
    location: `Chennai, Tamil Nadu, India.`,
    linkedin: `http://www.linkedin.com/in/eraianbu-maran-818766170`,
    github: `https://github.com/erai-anbu`,
    careerSummary: `I am Senior Developer with over 3.9 years of progressive experience in designing, optimizing, and modernizing enterprise-scale applications across finance, logistics, accounting, and shipping domains. My expertise spans database-centric architectures, high-volume transactional systems, and hybrid integrations with modern web and API frameworks such as .NET and RESTful services.

Over the years, I have built automated, modular, and self-healing database ecosystems that leverage AI-assisted optimization, data-centric microservices, and autonomous schema migration. I take pride in delivering scalable, secure, and high-performance solutions, consistently achieving top notch uptime and sub-second query response times. Proficient in Oracle PL/SQL 12c–23c/23AI, Oracle APEX, MySQL, T-SQL, MongoDB, Oracle forms, performance tuning and reporting tools like Power BI, Crystal Reports and Oracle Reports, I am passionate about aligning technology innovation with business growth and long-term value.`,
    technicalSkills: `Databases: Oracle (9i–21c) 23AI, Microsoft SQL Server, T-SQL, PostgreSQL, MongoDB.
Programming Languages: PL/SQL, Java, JavaScript, C, C++, C#, Python.
Frameworks/repository/release management: .NET API, Git, Docker, Kubernetes, Jenkins, Azure DevOps, CI/CD pipeline.
Cloud Platforms: Oracle Cloud Infrastructure, Microsoft Azure, Amazon Web service.
Methodologies: Agile Development, SDLC, ETL Processes, XML / JSON /EDI file Processing
Tools: Oracle Forms & Reports (D2K development), Oracle APEX, Datadog, Toad, Power BI, Selenium, Sonar Cloud, Informatica.`,
    workExperience: `Senior Developer | MSC TECHNOLOGY INDIA PVT LTD.    MAR 2024-SEP 2025

• Engineered and delivered mission-critical MSC Agency Systems using Oracle (9i–23AI), PL/SQL, and Oracle Forms & Reports, ensuring exceptional performance, scalability, and automation for global shipping and logistics operations.
• Spearheaded API-driven Master Data Management (MDM) Sync — a high-frequency RESTful service built with .NET API and Oracle PL/SQL backend, synchronizing location, vessel, and customer master data across all global agencies with daily delta updates through Azure Pipelines and Git repositories.
• Designed and implemented DCSA (Digital Container Shipping Association) compliance APIs for asynchronous Bill of Lading digital submission workflows, integrating PL/SQL business logic, Oracle Advanced Queues aligned with global maritime standards.
• Developed end-to-end Finance (AP/AR/Ledger) automation system, building complete database workflows for invoice posting, receipt matching, ledger updates, taxation, and credit limit checks using Oracle PL/SQL, T-SQL, and SQL Server Integration Services (SSIS) — achieving full financial reconciliation and compliance with multi-country GST/VAT rules.
•   Developed features in One Vision Depot (OVD) — a dynamic web application built with .NET, BizTalk, Crystal Reports, and PL/SQL backend, handling container management, depot logistics, and reporting through advanced dashboards and real-time KPIs.
• Successfully re-engineered legacy Oracle Forms and Reports into scalable Oracle APEX web solutions serving 15+ agencies worldwide, ensuring high reliability and concurrency control.
• Developed features in One Vision – Warehousing, integrating 3D visualization and optimization for container and goods positioning within racks and grids, powered by C#, and PL/SQL spatial logic to enhance warehouse efficiency and asset tracking accuracy.
• Designed secure API frameworks for SAP Payment Infrastructure, ensuring compliant data exchange and reconciliation through Azure Service Bus.
• Served as Scrum Master, practicing Agile methodology and facilitating sprint planning, backlog grooming, and cross-team collaboration, resulting in a 25% reduction in feature delivery time.
• Contributed to continuous improvement initiatives, introducing automated database validation scripts, test data generators, and metadata-driven validation frameworks in Python and PL/SQL, improving QA turnaround by 40%.

Junior Developer | MSC TECHNOLOGY INDIA PVT LTD.  NOV 2021- FEB 2024

• Developed and optimized core database components — triggers, functions, procedures, packages, materialized views, and indexes — leveraging TOAD, Explain Plan, Bulk Collect, FORALL, and Partitioning for peak database efficiency and reduced I/O latency.
• Managed EDI data migrations and integrations involving universal EDI fact file formats, JSON/XML transformations, and Informatica ETL pipelines, ensuring secure and memory-optimized multi-agency data exchange through Azure CI/CD pipelines.
• Refactored legacy database logic using Dynamic SQL, Editioning, Ref Cursors, and Pipelined Functions, significantly improving system throughput and modular maintainability.
• Implemented Bulk Collect, Query Rewrite, Caching Strategies, and Advanced Index Tuning, achieving a 45% improvement in transaction processing time for high-volume AR and shipping operations.
• Oversaw migration from Oracle to MongoDB, building a hybrid data storage model capable of storing image metadata and dynamic schema-based documents for container records.
• Developed and maintained financial and maritime reports using Oracle Reports, Crystal Reports, and Power BI, presenting actionable intelligence to stakeholders and management.
• Conducted extensive database performance tuning using AWR reports, SQL Trace, and Optimizer Statistics, maintaining sub-second response times in high-load production environments.`,
    education: `Bachelor of engineering in Computer Science | Panimalar institute of technology, Anna University | Chennai  2019
72.5%

Higher Secondary (XII) | Velammal Matric Higher secondary school | Chennai  2015
94%

SSLC (X) | Madras Christian College Matric Higher Secondary School | Chennai  2013
95%`,
    certifications: `•  Oracle APEX Developer Professional 2025 Certified - 
• Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate - https://catalog-education.oracle.com/pls/certview/sharebadge?id=7183C53F4D1B1015A84D37DC8261A1A1F9924CF07EC0467CD83F1E90B49A5ABB
• Oracle - Databases for developers : Foundations certified - https://dynamicclasscertificate.tiiny.site
• IBM Full Stack Software Developer certified`,
    projects: `•  Created an automated crypto currency trading eco system in the SOLANA eco chain and enabled auto payment interface using blockchain technology that performs debit and credit based on graph movement and price volatility with help of screener API’s.
• Presented a research paper on database query creation using semantic analysis and automated speech recognition at ICIETET 18.
• Created a multifunctional alert mobile application for fishermen and a workable model for deep-sea real-time alerts on seismic activity and weather conditions with satellite uplink for reaching alerts far away from the coast. 
• Created a working model for autonomous traffic routing based on pollution data analysis using Hadoop and big data that collects real time pollution data along traffic signals and performs operations to intimate user with routing along least polluted route.`
  };

  const copyLink = async ()=>{
    const url = window.location.href;
    try{
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(()=>setCopied(false),2000);
    }catch(e){
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#071428] via-[#08102b] to-[#020617] text-white antialiased">
      <div className="max-w-6xl mx-auto p-8">
        <motion.header initial={{opacity:0,y:-18}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-3xl bg-gradient-to-tr from-[#7c3aed] to-[#ec4899] flex items-center justify-center shadow-2xl transform-gpu hover:scale-105 transition-transform">
              <div className="text-2xl font-extrabold tracking-tight">EK</div>
            </div>
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight">{resume.name}</h1>
              <p className="text-sm text-slate-300 mt-1">{resume.title}</p>
              <div className="mt-2 text-xs text-slate-400">{resume.phone} • {resume.email} • {resume.location}</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a href={"mailto:"+resume.email} className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/10 px-4 py-2 rounded-2xl backdrop-blur-md border border-white/6">
              <Mail size={16} /> <span className="text-sm">Email</span>
            </a>
            <a href={resume.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 rounded-2xl shadow-lg">
              <Linkedin size={16} /> <span className="text-sm">LinkedIn</span>
            </a>
            <button onClick={copyLink} className="px-4 py-2 rounded-2xl bg-white/6">{copied? 'Link Copied' : 'Copy Link'}</button>
          </div>
        </motion.header>

        <main className="mt-8 grid grid-cols-1 lg:grid-cols-4 gap-6">
          <motion.aside initial={{opacity:0,x:-10}} animate={{opacity:1,x:0}} transition={{delay:0.15}} className="lg:col-span-1 bg-white/4 rounded-3xl p-6 backdrop-blur-sm border border-white/6 shadow-inner">
            <section className="mb-6">
              <h3 className="text-lg font-semibold flex items-center gap-2">Contact</h3>
              <ul className="mt-3 space-y-3 text-sm text-slate-200">
                <li className="flex items-center gap-2"><Mail size={14} /> {resume.email}</li>
                <li className="flex items-center gap-2"><Phone size={14} /> {resume.phone}</li>
                <li className="flex items-center gap-2"><MapPin size={14} /> {resume.location}</li>
                <li className="flex items-center gap-2"><Linkedin size={14} /> <a href={resume.linkedin} className="underline" target="_blank" rel="noreferrer">{resume.linkedin}</a></li>
                <li className="flex items-center gap-2"><Github size={14} /> <a href={resume.github} className="underline" target="_blank" rel="noreferrer">{resume.github}</a></li>
              </ul>
            </section>

            <section className="mb-6">
              <h3 className="text-lg font-semibold">Technical Skills</h3>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                {['Oracle (9i–21c) 23AI','PL/SQL','Oracle APEX','MySQL','T-SQL','MongoDB','JavaScript','C','C++','C#','Python','NET API','Git','Docker','Kubernetes','Jenkins','Azure DevOps','CI/CD pipeline','Oracle Cloud Infrastructure','Microsoft Azure','Amazon Web service','Agile Development','SDLC','ETL Processes','XML / JSON /EDI file Processing','Oracle Forms & Reports (D2K development)','Datadog','Toad','Power BI','Selenium','Sonar Cloud','Informatica'].map(s=> (
                  <button key={s} className="px-2 py-1 bg-white/6 rounded-md text-left text-xs hover:scale-105 transform transition">{s}</button>
                ))}
              </div>
            </section>

            <section>
              <h3 className="text-lg font-semibold">Education</h3>
              <div className="mt-3 text-sm text-slate-200">
                <div className="font-medium">Bachelor of engineering in Computer Science</div>
                <div>Panimalar institute of technology, Anna University | Chennai — 2019</div>
                <div className="mt-2">72.5%</div>

                <div className="mt-3 font-medium">Higher Secondary (XII)</div>
                <div>Velammal Matric Higher secondary school | Chennai — 2015</div>
                <div className="mt-1">94%</div>

                <div className="mt-3 font-medium">SSLC (X)</div>
                <div>Madras Christian College Matric Higher Secondary School | Chennai — 2013</div>
                <div className="mt-1">95%</div>
              </div>
            </section>
          </motion.aside>

          <motion.section initial={{opacity:0,x:10}} animate={{opacity:1,x:0}} transition={{delay:0.25}} className="lg:col-span-3 bg-white/3 rounded-3xl p-6 shadow-lg border border-white/6">
            <section className="mb-6">
              <h2 className="text-2xl font-extrabold">Career Summary</h2>
              <p className="mt-3 text-slate-100 leading-relaxed whitespace-pre-line">{resume.careerSummary}</p>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-bold flex items-center gap-3">Work Experience <Award size={18} /></h3>

              <div className="mt-4 space-y-4 text-sm text-slate-200"> 
                <article className="p-4 bg-white/4 rounded-2xl border border-white/4 hover:scale-[1.01] transition-transform">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold">Senior Developer</div>
                      <div className="text-xs">MSC TECHNOLOGY INDIA PVT LTD. — MAR 2024 - SEP 2025</div>
                    </div>
                    <div className="text-xs">Chennai</div>
                  </div>
                  <pre className="mt-3 text-slate-200 text-sm whitespace-pre-line">{resume.workExperience.split('

')[0]}</pre>
                </article>

                <article className="p-4 bg-white/4 rounded-2xl border border-white/4 hover:scale-[1.01] transition-transform">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="font-semibold">Junior Developer</div>
                      <div className="text-xs">MSC TECHNOLOGY INDIA PVT LTD. — NOV 2021 - FEB 2024</div>
                    </div>
                    <div className="text-xs">Chennai</div>
                  </div>
                  <pre className="mt-3 text-slate-200 text-sm whitespace-pre-line">{resume.workExperience.split('

')[1]}</pre>
                </article>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-bold">Certifications & Badges</h3>
              <div className="mt-3 flex flex-wrap gap-3">
                <button onClick={()=>setShowCert(true)} className="px-3 py-2 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full shadow hover:brightness-110 inline-flex items-center gap-2"><Award size={16}/> View Certifications</button>
                <a href="https://catalog-education.oracle.com/pls/certview/sharebadge?id=7183C53F4D1B1015A84D37DC8261A1A1F9924CF07EC0467CD83F1E90B49A5ABB" target="_blank" rel="noreferrer" className="px-3 py-2 bg-white/6 rounded-full inline-flex items-center gap-2"><ExternalLink size={14}/> OCI AI Foundations</a>
                <a href="https://dynamicclasscertificate.tiiny.site" target="_blank" rel="noreferrer" className="px-3 py-2 bg-white/6 rounded-full inline-flex items-center gap-2"><ExternalLink size={14}/> Oracle - Databases for developers</a>
              </div>
            </section>

            <section className="mb-6">
              <h3 className="text-xl font-bold">Projects & Accomplishments</h3>
              <div className="mt-3 grid gap-3">
                <div className="p-3 bg-white/4 rounded-lg">Created an automated crypto currency trading eco system in the SOLANA eco chain and enabled auto payment interface using blockchain technology that performs debit and credit based on graph movement and price volatility with help of screener API’s.</div>
                <div className="p-3 bg-white/4 rounded-lg">Presented a research paper on database query creation using semantic analysis and automated speech recognition at ICIETET 18.</div>
                <div className="p-3 bg-white/4 rounded-lg">Created a multifunctional alert mobile application for fishermen and a workable model for deep-sea real-time alerts on seismic activity and weather conditions with satellite uplink for reaching alerts far away from the coast.</div>
                <div className="p-3 bg-white/4 rounded-lg">Created a working model for autonomous traffic routing based on pollution data analysis using Hadoop and big data that collects real time pollution data along traffic signals and performs operations to intimate user with routing along least polluted route.</div>
              </div>
            </section>

            <section id="download" className="mt-6 flex items-center justify-between">
              <div>
                <a href={resume.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-pink-500 px-4 py-2 rounded-2xl shadow-lg"><Github size={16}/> View GitHub</a>
              </div>
              <div className="flex items-center gap-3">
                <a href="#" className="px-3 py-2 bg-white/6 rounded-md inline-flex items-center gap-2"><FileText size={16}/> Print / Save</a>
                <a href="#" className="px-3 py-2 bg-white/6 rounded-md inline-flex items-center gap-2"><Download size={16}/> Download CV</a>
              </div>
            </section>

          </motion.section>
        </main>

        <footer className="mt-8 text-xs text-slate-400 text-center">Built with ❤️ • Interactive portfolio for ERAIANBU K M</footer>

        {showCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/60" onClick={()=>setShowCert(false)}></div>
            <motion.div initial={{scale:0.9,opacity:0}} animate={{scale:1,opacity:1}} className="relative bg-[#021022] p-6 rounded-2xl border border-white/6 max-w-xl">
              <h3 className="text-lg font-bold mb-3">Certifications & Links</h3>
              <pre className="text-sm whitespace-pre-line text-slate-200">{resume.certifications}</pre>
              <div className="mt-4 text-right">
                <button onClick={()=>setShowCert(false)} className="px-3 py-2 bg-white/6 rounded-md">Close</button>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}
