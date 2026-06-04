import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  {
    category: "AI & Machine Learning",
    items: [
      { name: "PyTorch", level: 92 },
      { name: "TensorFlow", level: 90 },
      { name: "Scikit-Learn", level: 88 },
      { name: "OpenCV", level: 85 },
      { name: "Hugging Face", level: 87 },
      { name: "LangChain", level: 88 },
      { name: "RAG Systems", level: 86 },
      { name: "Pinecone", level: 85 }
    ]
  },
  {
    category: "Programming & Tools",
    items: [
      { name: "Python", level: 95 },
      { name: "C++", level: 82 },
      { name: "Git", level: 90 },
      { name: "Docker", level: 85 },
      { name: "Linux/Bash", level: 88 }
    ]
  },
  {
    category: "Web & Cloud",
    items: [
      { name: "FastAPI", level: 88 },
      { name: "React.js", level: 85 },
      { name: "AWS", level: 80 },
      { name: "MongoDB", level: 83 },
      { name: "REST API", level: 90 }
    ]
  }
]

function SkillBar({ skill, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      className="mb-6"
    >
      <div className="flex justify-between mb-2">
        <span className="text-base font-normal text-apple-gray-300">{skill.name}</span>
        <span className="text-sm text-apple-gray-500">{skill.level}%</span>
      </div>
      
      <div className="h-1.5 bg-apple-gray-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-apple-blue rounded-full"
        />
      </div>
    </motion.div>
  )
}

function SkillCategory({ category, items, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
      className="bg-apple-gray-900/40 border border-apple-gray-800 rounded-2xl p-8"
    >
      <h3 className="text-2xl font-semibold mb-8 text-white">{category}</h3>
      
      {items.map((skill, idx) => (
        <SkillBar key={skill.name} skill={skill} index={idx} />
      ))}
    </motion.div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen section-padding relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-32"
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-semibold mb-8 tracking-tight leading-none">
            Skills & Expertise
          </h2>
          <p className="text-lg md:text-xl text-apple-gray-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Technical skills and proficiency
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((category, index) => (
            <SkillCategory 
              key={category.category}
              category={category.category}
              items={category.items}
              index={index}
            />
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-normal mb-8 text-apple-gray-400">Also working with</h3>
          
          <div className="flex flex-wrap justify-center gap-3">
            {["CUDA", "YOLO", "Keras", "LangChain", "Flask", "Node.js", "Azure", "Pandas", "NumPy", "SQL", "NoSQL", "Jupyter"].map((tech) => (
              <div
                key={tech}
                className="bg-apple-gray-900/40 border border-apple-gray-800 px-4 py-2 rounded-full"
              >
                <span className="text-sm text-apple-gray-400">{tech}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
