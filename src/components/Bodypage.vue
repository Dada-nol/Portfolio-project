<template>
  <section id="about" class="about-section">
    <div class="container">
      <div class="section-header">
        <span class="section-label">Get To Know</span>
        <h2 class="section-title">About Me</h2>
      </div>

      <div class="about-content">
        <div class="about-image">
          <div class="image-card">
            <img
              src="../assets/Img/Ordi.jpeg"
              alt="bureau avec un pc portable montrant du code ainsi qu'un cup de café sur le côté"
              class="workspace-image"
            />
            <div class="image-overlay">
              <div class="experience-badge">
                <span class="experience-number">5+</span>
                <span class="experience-text">Years Experience</span>
              </div>
            </div>
          </div>
        </div>

        <div class="about-text">
          <h3 class="about-heading">
            Passionate Developer Creating Digital Excellence
          </h3>
          <p class="about-paragraph">
            Hello! I'm John Doe, a creative developer and designer based in the
            digital world. I specialize in building exceptional websites and
            applications that provide intuitive, pixel-perfect user interfaces
            with efficient and modern backends.
          </p>
          <p class="about-paragraph">
            With expertise in modern web technologies including HTML5, CSS3,
            JavaScript, Vue.js, and React, I transform ideas into stunning
            digital experiences. I'm passionate about writing clean,
            maintainable code and staying up-to-date with the latest industry
            trends.
          </p>

          <div class="skills-grid">
            <div class="skill-item">
              <div class="skill-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <div>
                <h4>Frontend Development</h4>
                <p>Modern & Responsive</p>
              </div>
            </div>

            <div class="skill-item">
              <div class="skill-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <div>
                <h4>UI/UX Design</h4>
                <p>Beautiful Interfaces</p>
              </div>
            </div>

            <div class="skill-item">
              <div class="skill-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div>
                <h4>Clean Code</h4>
                <p>Best Practices</p>
              </div>
            </div>

            <div class="skill-item">
              <div class="skill-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h4>Performance</h4>
                <p>Fast & Optimized</p>
              </div>
            </div>
          </div>

          <a href="#contact" class="cta-button">
            Let's Work Together
            <span class="arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 120px 0;
  background: linear-gradient(180deg, #f8f9ff 0%, #fff 100%);
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
  margin: 0;
}

.about-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}

.about-image {
  position: relative;
}

.image-card {
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.workspace-image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.image-card:hover .workspace-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  bottom: 30px;
  right: 30px;
}

.experience-badge {
  background: rgba(255, 255, 255, 0.95);
  padding: 25px 35px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  backdrop-filter: blur(10px);
}

.experience-number {
  display: block;
  font-size: 2.5rem;
  font-weight: 900;
  color: #667eea;
  line-height: 1;
  margin-bottom: 8px;
}

.experience-text {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  color: #4a5568;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about-text {
  display: flex;
  flex-direction: column;
  gap: 25px;
}

.about-heading {
  font-size: 2.2rem;
  font-weight: 800;
  color: #2d3748;
  line-height: 1.3;
  margin: 0;
}

.about-paragraph {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #4a5568;
  margin: 0;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 25px;
  margin-top: 20px;
}

.skill-item {
  display: flex;
  gap: 15px;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.skill-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2);
}

.skill-icon {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
}

.skill-icon svg {
  width: 28px;
  height: 28px;
}

.skill-item h4 {
  font-size: 1.1rem;
  font-weight: 700;
  color: #2d3748;
  margin: 0 0 5px 0;
}

.skill-item p {
  font-size: 0.9rem;
  color: #718096;
  margin: 0;
}

.cta-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 18px 40px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #fff;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.1rem;
  border-radius: 50px;
  box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
  transition: all 0.3s ease;
  align-self: flex-start;
  margin-top: 15px;
}

.cta-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.5);
}

.arrow {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.cta-button:hover .arrow {
  transform: translateX(5px);
}

/* Responsive */
@media (max-width: 1024px) {
  .about-content {
    grid-template-columns: 1fr;
    gap: 60px;
  }

  .section-title {
    font-size: 2.8rem;
  }

  .about-heading {
    font-size: 1.8rem;
  }
}

@media (max-width: 768px) {
  .about-section {
    padding: 80px 0;
  }

  .container {
    padding: 0 30px;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .about-heading {
    font-size: 1.6rem;
  }

  .workspace-image {
    height: 400px;
  }

  .skills-grid {
    grid-template-columns: 1fr;
  }

  .experience-badge {
    padding: 20px 25px;
  }

  .experience-number {
    font-size: 2rem;
  }

  .cta-button {
    width: 100%;
    justify-content: center;
  }
}
</style>

<script setup></script>
