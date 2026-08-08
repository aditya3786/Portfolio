import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "AI Assistant Suite",
    description: "A full-stack Streamlit AI assistant spanning sentiment-aware support, medical Q&A, automated knowledge-base updates, arXiv research, multimodal vision, and multilingual conversations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tech: ["Python", "Gemini", "LangChain", "FAISS", "Streamlit", "Hugging Face", "Plotly"],
    categories: ["LLM & NLP", "Backend"],
    github: "https://github.com/aditya3786/customer-service-chatbot-llm",
    live: "#",
    highlights: [
      "Six task-focused AI workflows in one Streamlit application.",
      "Grounded retrieval using Hugging Face embeddings and FAISS vector search.",
      "Multimodal visual reasoning and multilingual conversations powered by Gemini."
    ]
  },
  {
    id: 2,
    title: "ORIN AI Agent System",
    description: "Domain-adaptive RAG AI system with LangChain orchestration, Pinecone vector indexing, and FastAPI backend with JWT authentication for organizational query resolution.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tech: ["Python", "FastAPI", "LangChain", "Pinecone", "Groq", "Docker", "JWT"],
    categories: ["LLM & NLP", "Backend"],
    github: "https://github.com/aditya3786/Orin_Agent",
    live: "#",
    highlights: [
      "Built a domain-adaptive RAG agent for reliable organization-specific query resolution.",
      "Connected LangChain orchestration to Pinecone vector search for grounded responses.",
      "Implemented a FastAPI backend with JWT authentication and Docker-ready deployment."
    ]
  },
  {
    id: 3,
    title: "IoT Fire Detection System",
    description: "Real-time fire detection using fine-tuned YOLOv8 and custom CNN. Integrated ESP32-CAM with Firebase for cloud-based alerts and edge deployment.",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&h=600&fit=crop",
    tech: ["Python", "YOLOv8", "TensorFlow", "OpenCV", "ESP32", "Firebase", "IoT"],
    categories: ["Computer Vision", "IoT"],
    github: "https://github.com/aditya3786/the-fire-detector",
    live: "#",
    highlights: [
      "Developed real-time fire detection using fine-tuned YOLOv8 and a custom CNN model.",
      "Integrated ESP32-CAM edge hardware to capture and process live visual signals.",
      "Connected Firebase cloud alerts for fast remote notification and monitoring."
    ]
  },
  {
    id: 4,
    title: "Question Answering Chatbot with BERT",
    description: "Natural language processing system for sentiment analysis, text classification, and feature extraction using transformer models.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    tech: ["Hugging Face", "BERT", "Transformers", "Scikit-Learn", "Python"],
    categories: ["LLM & NLP"],
    github: "https://github.com/aditya3786/QUESTION-ANSWERING---BERT",
    live: "#",
    highlights: [
      "Created a transformer-based question-answering workflow with BERT.",
      "Applied NLP preprocessing and feature extraction for downstream text analysis.",
      "Combined sentiment analysis, text classification, and answer generation in one system."
    ]
  },
  {
    id: 5,
    title: "Driver Drowsiness Detection System",
    description: "Real-time driver drowsiness detection using CNN and eye-tracking with OpenCV. Deployed with alarm alerts for vehicle safety and accident prevention.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    tech: ["Python", "OpenCV", "TensorFlow", "CNN", "Dlib", "Real-time Processing"],
    categories: ["Computer Vision"],
    github: "https://github.com/aditya3786/Driver-Drowsiness-Detection",
    live: "#",
    highlights: [
      "Built a real-time safety system to identify signs of driver fatigue from video input.",
      "Used CNN-based eye-state detection and OpenCV facial landmark tracking.",
      "Added alarm-based feedback to support immediate intervention and accident prevention."
    ]
  }
]

function ProjectCard({ project, index, onOpen }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-apple-gray-900/40 border border-apple-gray-800 rounded-2xl overflow-hidden hover:border-apple-gray-700 hover:scale-[1.02] transition-all duration-300"
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden bg-apple-gray-800">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-semibold mb-4 leading-snug">
          {project.title}
        </h3>
        
        <p className="text-base text-apple-gray-400 mb-6 line-clamp-2 font-normal leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <span 
              key={tech}
              className="px-3 py-1 text-xs bg-apple-gray-800 text-apple-gray-400 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="w-full py-3 text-center border border-apple-gray-700 rounded-full font-medium hover:bg-apple-gray-800 transition-colors"
          >
            View details
          </button>
          <a 
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="w-full py-3 text-center bg-apple-blue rounded-full font-medium hover:bg-opacity-90 transition-opacity"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [project, onClose])

  if (!project) return null

  const highlights = project.highlights || [
    "Built as a focused AI/ML application with a modern, practical tech stack.",
    "Designed to solve a real-world problem through an end-to-end implementation.",
    "Source code and implementation details are available on GitHub."
  ]

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/80 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="presentation"
    >
      <motion.article
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: 0.24 }}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-apple-gray-700 bg-apple-gray-900 shadow-2xl"
      >
        <div className="relative h-56 sm:h-72">
          <img src={project.image} alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-t from-apple-gray-900 via-transparent to-transparent" />
          <button type="button" onClick={onClose} aria-label="Close project details" className="absolute top-5 right-5 h-10 w-10 rounded-full bg-black/60 text-xl hover:bg-black transition-colors">
            ×
          </button>
        </div>
        <div className="p-6 sm:p-10 -mt-16 relative">
          <p className="text-apple-blue font-medium mb-3">PROJECT OVERVIEW</p>
          <h3 id="project-modal-title" className="text-3xl sm:text-5xl font-semibold tracking-tight mb-5">{project.title}</h3>
          <p className="text-lg text-apple-gray-300 leading-relaxed mb-8">{project.description}</p>
          <h4 className="text-xl font-semibold mb-4">What I built</h4>
          <ul className="space-y-3 text-apple-gray-300 mb-8">
            {highlights.map((highlight) => <li key={highlight} className="flex gap-3"><span className="text-apple-blue">•</span>{highlight}</li>)}
          </ul>
          <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((tech) => <span key={tech} className="px-3 py-1 text-sm bg-apple-gray-800 text-apple-gray-300 rounded-full">{tech}</span>)}
          </div>
          <a href={project.github} target="_blank" rel="noreferrer" className="inline-block px-6 py-3 bg-apple-blue rounded-full font-medium hover:bg-opacity-90 transition-opacity">
            View source on GitHub
          </a>
        </div>
      </motion.article>
    </motion.div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'LLM & NLP', 'Computer Vision', 'IoT', 'Backend']
  const visibleProjects = activeFilter === 'All'
    ? projects
    : projects.filter((project) => project.categories.includes(activeFilter))

  return (
    <>
    <section id="projects" className="min-h-screen section-padding relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 tracking-tight leading-none">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-apple-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            A collection of projects showcasing my skills in AI/ML development,
            deep learning, and scalable cloud solutions
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${activeFilter === filter ? 'bg-apple-blue text-white' : 'bg-apple-gray-900 border border-apple-gray-700 text-apple-gray-300 hover:bg-apple-gray-800'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={setSelectedProject} />
          ))}
        </div>
      </div>
    </section>
    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
