# 3D Portfolio Website

A modern, fully responsive 3D interactive portfolio website built with cutting-edge web technologies.

![Portfolio Preview](https://img.shields.io/badge/Status-Ready-success)
![React](https://img.shields.io/badge/React-18.2.0-blue)
![Three.js](https://img.shields.io/badge/Three.js-0.162.0-black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4.1-38B2AC)

## ✨ Features

- 🎨 **Dark Futuristic Theme** - Sleek black/charcoal background with neon accents
- 🌌 **Interactive 3D Elements** - Powered by Three.js with real-time animations
- 💫 **Smooth Animations** - Framer Motion for seamless page transitions
- 📱 **Fully Responsive** - Optimized for all devices
- 🎯 **Glassmorphism UI** - Modern glass-effect cards with blur and glow
- 🚀 **Performance Optimized** - Lazy loading and optimized 3D rendering
- 🎭 **Mouse Parallax** - Interactive 3D effects based on cursor movement

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (Dark mode)
- **3D Graphics:** Three.js, @react-three/fiber, @react-three/drei
- **Animations:** Framer Motion
- **Smooth Scrolling:** Lenis

## 📦 Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

4. **Preview Production Build**
   ```bash
   npm run preview
   ```

## 🎯 Sections

1. **Hero** - Fullscreen 3D canvas with floating geometric shapes
2. **About** - Personal information with animated profile card
3. **Projects** - 3D tilt-effect project cards with tech stack tags
4. **Skills** - Animated skill bars organized by category
5. **Contact** - Clean contact form with social links

## 🎨 Customization

### Colors
Edit the Tailwind config in `tailwind.config.js`:
```javascript
colors: {
  neon: {
    cyan: '#00ffff',
    purple: '#b744ff',
    blue: '#0066ff',
  }
}
```

### 3D Scene
Modify the Three.js components in `src/components/Hero.jsx`:
- Adjust floating shapes
- Change lighting
- Modify particle effects

### Content
Update your information in each component:
- `src/components/About.jsx` - Personal info
- `src/components/Projects.jsx` - Project details
- `src/components/Skills.jsx` - Skills and expertise
- `src/components/Contact.jsx` - Contact information

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Manual Deployment
```bash
npm run build
# Upload the 'dist' folder to your hosting service
```

## 📱 Mobile Optimization

- 3D effects are automatically optimized for mobile devices
- Responsive navigation with mobile menu
- Touch-friendly interactions
- Reduced animations on low-end devices

## 🎭 Performance Tips

1. **Optimize Images** - Use WebP format and lazy loading
2. **Reduce Particles** - Lower particle count on mobile
3. **Code Splitting** - Lazy load components
4. **CDN** - Host static assets on a CDN

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Aditya Pathania**
- GitHub: [@adityapathania](https://github.com/adityapathania)
- LinkedIn: [Aditya Pathania](https://linkedin.com/in/adityapathania)

## 🌟 Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using React, Three.js, and Tailwind CSS
