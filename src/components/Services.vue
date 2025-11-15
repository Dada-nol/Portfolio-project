<template>
  <section id="services" class="services-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">What I Do</span>
        <h2 class="section-title">Services</h2>
        <p class="section-description">
          Comprehensive digital solutions tailored to bring your vision to life
        </p>
      </div>

      <div class="services-grid">
        <div class="service-card" v-for="service in services" :key="service.id">
          <div class="service-icon">
            <div v-html="service.icon"></div>
          </div>
          <h3 class="service-title">{{ service.title }}</h3>
          <p class="service-description">{{ service.description }}</p>
          <ul class="service-features">
            <li v-for="feature in service.features" :key="feature">
              <span class="check-icon">✓</span>
              {{ feature }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.services-section {
  padding: 120px 0;
  background: #fff;
  position: relative;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
}

.section-header {
  text-align: center;
  margin-bottom: 80px;
}

.section-label {
  display: inline-block;
  color: #667eea;
  font-weight: 700;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin-bottom: 15px;
}

.section-title {
  font-size: 3.5rem;
  font-weight: 900;
  color: #2d3748;
  margin: 0 0 20px 0;
}

.section-description {
  font-size: 1.2rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.service-card {
  background: #fff;
  padding: 45px 35px;
  border-radius: 20px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid transparent;
}

.service-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.25);
  border-color: #667eea;
}

.service-icon {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.3);
  transition: all 0.3s ease;
}

.service-card:hover .service-icon {
  transform: scale(1.1) rotate(5deg);
}

.service-icon :deep(svg) {
  width: 40px;
  height: 40px;
  stroke: #fff;
  fill: none;
  stroke-width: 2;
}

.service-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #2d3748;
  margin: 0 0 15px 0;
}

.service-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #718096;
  margin: 0 0 25px 0;
}

.service-features {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.service-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.95rem;
  color: #4a5568;
}

.check-icon {
  width: 24px;
  height: 24px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 700;
  font-size: 0.8rem;
  flex-shrink: 0;
}

/* Responsive */
@media (max-width: 1024px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }

  .section-title {
    font-size: 2.8rem;
  }
}

@media (max-width: 768px) {
  .services-section {
    padding: 80px 0;
  }

  .container {
    padding: 0 30px;
  }

  .services-grid {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .service-card {
    padding: 35px 25px;
  }
}
</style>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    id: 1,
    title: "Web Development",
    description:
      "Building modern, fast, and scalable web applications with cutting-edge technologies.",
    icon: `<svg viewBox="0 0 24 24"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>`,
    features: [
      "Responsive Design",
      "Modern Frameworks",
      "Performance Optimized",
      "SEO Friendly",
    ],
  },
  {
    id: 2,
    title: "UI/UX Design",
    description:
      "Creating beautiful and intuitive user interfaces that delight users.",
    icon: `<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 3v18M15 3v18M3 9h18M3 15h18"/></svg>`,
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    id: 3,
    title: "Mobile Apps",
    description:
      "Developing cross-platform mobile applications for iOS and Android.",
    icon: `<svg viewBox="0 0 24 24"><rect x="7" y="2" width="10" height="20" rx="2"/><path d="M12 18h.01"/></svg>`,
    features: [
      "Native Performance",
      "Cross-Platform",
      "App Store Ready",
      "Offline Support",
    ],
  },
  {
    id: 4,
    title: "API Development",
    description:
      "Building robust and secure RESTful APIs for your applications.",
    icon: `<svg viewBox="0 0 24 24"><path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>`,
    features: [
      "RESTful Design",
      "Authentication",
      "Documentation",
      "Scalable Architecture",
    ],
  },
  {
    id: 5,
    title: "Performance",
    description: "Optimizing your applications for speed and efficiency.",
    icon: `<svg viewBox="0 0 24 24"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>`,
    features: [
      "Speed Optimization",
      "Code Splitting",
      "Lazy Loading",
      "Caching Strategies",
    ],
  },
  {
    id: 6,
    title: "Maintenance",
    description:
      "Ongoing support and updates to keep your project running smoothly.",
    icon: `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 1v6m0 6v6m5.5-13.5l-4.24 4.24M10.74 13.26L6.5 17.5m11-11l-4.24 4.24m-2.52 2.52L6.5 6.5"/></svg>`,
    features: ["Bug Fixes", "Updates", "Monitoring", "24/7 Support"],
  },
]);
</script>
