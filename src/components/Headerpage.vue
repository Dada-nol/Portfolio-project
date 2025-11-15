<template>
  <header class="hero-header">
    <nav class="navbar">
      <div class="logo">
        <span class="logo-text">JD</span>
      </div>
      <ul class="nav-menu">
        <li><a href="#about" class="nav-link">About</a></li>
        <li><a href="#services" class="nav-link">Services</a></li>
        <li><a href="#contact" class="nav-link">Contact</a></li>
      </ul>
    </nav>

    <div class="hero-content">
      <div class="hero-image">
        <div class="image-wrapper">
          <img
            src="../assets/Img/pdp.png"
            alt="John Doe - Professional"
            class="profile-image"
          />
          <div class="image-glow"></div>
        </div>
      </div>

      <div class="hero-text">
        <h1 class="hero-title">
          Hi, I'm <span class="highlight">John Doe</span>
        </h1>
        <p class="hero-subtitle">Creative Developer & Designer</p>
        <p class="hero-description">
          Crafting beautiful digital experiences with modern technologies.
          Passionate about clean code and stunning user interfaces.
        </p>
        <div class="hero-cta">
          <a href="#contact" class="btn btn-primary">Get In Touch</a>
          <a href="#about" class="btn btn-secondary">Learn More</a>
        </div>
      </div>
    </div>

    <div class="scroll-indicator">
      <span class="scroll-text">Scroll Down</span>
      <div class="scroll-arrow"></div>
    </div>
  </header>
</template>

<style scoped>
.hero-header {
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

/* Animated background */
.hero-header::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: radial-gradient(
      circle at 20% 50%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 50%
    );
  animation: float 20s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(30px, 30px);
  }
}

/* Navbar */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 60px;
  position: relative;
  z-index: 10;
}

.logo {
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.logo-text {
  font-size: 1.5rem;
  font-weight: 800;
  color: #fff;
}

.nav-menu {
  display: flex;
  gap: 40px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 0;
  height: 2px;
  background: #fff;
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

/* Hero Content */
.hero-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 60px;
  position: relative;
  z-index: 5;
  gap: 60px;
}

.hero-image {
  flex: 0 0 400px;
}

.image-wrapper {
  position: relative;
  animation: floatImage 6s ease-in-out infinite;
}

@keyframes floatImage {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.profile-image {
  width: 400px;
  height: 400px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 2;
}

.image-glow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 420px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.3) 0%,
    transparent 70%
  );
  border-radius: 50%;
  z-index: 1;
  animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
  0%,
  100% {
    transform: translate(-50%, -50%) scale(1);
    opacity: 0.5;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.8;
  }
}

.hero-text {
  flex: 1;
  max-width: 600px;
}

.hero-title {
  font-size: 4rem;
  font-weight: 900;
  color: #fff;
  margin: 0 0 20px 0;
  line-height: 1.1;
}

.highlight {
  background: linear-gradient(135deg, #fff 0%, #ffd89b 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.hero-subtitle {
  font-size: 1.8rem;
  color: rgba(255, 255, 255, 0.9);
  margin: 0 0 25px 0;
  font-weight: 600;
}

.hero-description {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.8;
  margin: 0 0 40px 0;
}

.hero-cta {
  display: flex;
  gap: 20px;
}

.btn {
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: 700;
  text-decoration: none;
  border-radius: 50px;
  transition: all 0.3s ease;
  display: inline-block;
}

.btn-primary {
  background: #fff;
  color: #667eea;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.btn-primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
}

.btn-secondary {
  background: transparent;
  color: #fff;
  border: 2px solid #fff;
}

.btn-secondary:hover {
  background: #fff;
  color: #667eea;
}

/* Scroll Indicator */
.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  z-index: 10;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateX(-50%) translateY(0);
  }
  40% {
    transform: translateX(-50%) translateY(-10px);
  }
  60% {
    transform: translateX(-50%) translateY(-5px);
  }
}

.scroll-text {
  color: #fff;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.scroll-arrow {
  width: 2px;
  height: 30px;
  background: #fff;
  position: relative;
}

.scroll-arrow::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-top: 8px solid #fff;
}

/* Responsive */
@media (max-width: 1024px) {
  .hero-content {
    flex-direction: column;
    text-align: center;
    padding: 40px 30px;
  }

  .hero-image {
    flex: 0 0 300px;
  }

  .profile-image {
    width: 300px;
    height: 300px;
  }

  .image-glow {
    width: 320px;
    height: 320px;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-cta {
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .navbar {
    padding: 20px 30px;
  }

  .nav-menu {
    gap: 20px;
  }

  .nav-link {
    font-size: 1rem;
  }

  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1.4rem;
  }

  .hero-description {
    font-size: 1rem;
  }

  .hero-image {
    flex: 0 0 250px;
  }

  .profile-image {
    width: 250px;
    height: 250px;
  }

  .image-glow {
    width: 270px;
    height: 270px;
  }

  .hero-cta {
    flex-direction: column;
    width: 100%;
  }

  .btn {
    width: 100%;
  }
}
</style>

<script setup></script>
