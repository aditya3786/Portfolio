import React from 'react'
import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "AI Assistant Suite",
    description: "A full-stack Streamlit AI assistant spanning sentiment-aware support, medical Q&A, automated knowledge-base updates, arXiv research, multimodal vision, and multilingual conversations.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tech: ["Python", "Gemini", "LangChain", "FAISS", "Streamlit", "Hugging Face", "Plotly"],
    github: "https://github.com/aditya3786/customer-service-chatbot-llm",
    live: "#"
  },
  {
    id: 2,
    title: "ORIN AI Agent System",
    description: "Domain-adaptive RAG AI system with LangChain orchestration, Pinecone vector indexing, and FastAPI backend with JWT authentication for organizational query resolution.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop",
    tech: ["Python", "FastAPI", "LangChain", "Pinecone", "Groq", "Docker", "JWT"],
    github: "https://github.com/aditya3786/Orin_Agent",
    live: "#"
  },
  {
    id: 3,
    title: "IoT Fire Detection System",
    description: "Real-time fire detection using fine-tuned YOLOv8 and custom CNN. Integrated ESP32-CAM with Firebase for cloud-based alerts and edge deployment.",
    image: "https://images.unsplash.com/photo-1592833159155-c62df1b65634?w=800&h=600&fit=crop",
    tech: ["Python", "YOLOv8", "TensorFlow", "OpenCV", "ESP32", "Firebase", "IoT"],
    github: "https://github.com/aditya3786/the-fire-detector",
    live: "#"
  },
  {
    id: 4,
    title: "Question Answering Chatbot with BERT",
    description: "Natural language processing system for sentiment analysis, text classification, and feature extraction using transformer models.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop",
    tech: ["Hugging Face", "BERT", "Transformers", "Scikit-Learn", "Python"],
    github: "https://github.com/aditya3786/QUESTION-ANSWERING---BERT",
    live: "#"
  },
  {
    id: 5,
    title: "Driver Drowsiness Detection System",
    description: "Real-time driver drowsiness detection using CNN and eye-tracking with OpenCV. Deployed with alarm alerts for vehicle safety and accident prevention.",
    image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=600&fit=crop",
    tech: ["Python", "OpenCV", "TensorFlow", "CNN", "Dlib", "Real-time Processing"],
    github: "https://github.com/aditya3786/Driver-Drowsiness-Detection",
    live: "#"
  }
]

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-apple-gray-900/40 border border-apple-gray-800 rounded-2xl overflow-hidden hover:border-apple-gray-700 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
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
        <div className="flex gap-4">
          <a 
            href={project.github}
            className="w-full py-3 text-center bg-apple-blue rounded-full font-medium hover:bg-opacity-90 transition-opacity"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
