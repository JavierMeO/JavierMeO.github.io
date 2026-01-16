import gsap from "gsap"

export function heroIntro() {
  gsap.from("h1 span", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out"
  })

  gsap.from("p", {
    opacity: 0,
    y: 30,
    delay: 0.3,
    duration: 1
  })

  gsap.from(".btn-aurora", {
    opacity: 0,
    scale: 0.9,
    delay: 0.6,
    duration: 0.8,
    ease: "back.out(1.7)"
  })

  const aurora = document.querySelector(".aurora-mouse")

  let mouseX = 0
  let mouseY = 0

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
  })

  gsap.ticker.add(() => {
    gsap.to(aurora, {
      x: mouseX - window.innerWidth / 2,
      y: mouseY - window.innerHeight / 2,
      duration: 1.2,
      ease: "power3.out"
    })
  })

  /* Star effect */
  const canvas = document.getElementById("stars")
  const ctx = canvas.getContext("2d")

  let stars = []
  const STAR_COUNT = 240

  let mouse = { x: 0, y: 0 }
  let scrollY = 0

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  window.addEventListener("resize", resize)
  resize()

  window.addEventListener("mousemove", e => {
    mouse.x = e.clientX
    mouse.y = e.clientY
  })

  window.addEventListener("scroll", () => {
    scrollY = window.scrollY
  })

  function createStars() {
    stars = Array.from({ length: STAR_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.4 + 0.3,
      a: Math.random(),
      depth: Math.random() * 0.8 + 0.2,
      twinkle: Math.random() * 0.02 + 0.004
    }))
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    stars.forEach(star => {
      // Parpadeo
      star.a += star.twinkle
      if (star.a <= 0.1 || star.a >= 1) star.twinkle *= -1

      // Mouse interaction
      const dx = (mouse.x - canvas.width / 2) * 0.00002 * star.depth
      const dy = (mouse.y - canvas.height / 2) * 0.00002 * star.depth

      // Parallax scroll
      const parallaxY = scrollY * 0.05 * star.depth

      ctx.beginPath()
      ctx.arc(
        star.x + dx,
        star.y + dy + parallaxY,
        star.r,
        0,
        Math.PI * 2
      )
      ctx.fillStyle = `rgba(255,255,255,${star.a})`
      ctx.fill()
    })

    requestAnimationFrame(animate)

    const header = document.getElementById("site-header")
    const aurora = document.querySelector(".aurora-glow")

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled")
        aurora.style.opacity = "0.35"
      } else {
        header.classList.remove("scrolled")
        aurora.style.opacity = "0.7"
      }
    })
  }
  createStars()
  animate()
}