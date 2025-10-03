import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { gsap } from 'gsap'

const ThadingyutLanterns = () => {
  const canvasRef = useRef()
  const sceneRef = useRef()
  const lanternsRef = useRef([])

  useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true })
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    sceneRef.current = scene

    // Evening sky gradient background
    const skyGeometry = new THREE.SphereGeometry(500, 32, 32)
    const skyMaterial = new THREE.ShaderMaterial({
      uniforms: {
        topColor: { value: new THREE.Color(0x1e2f3c) },
        bottomColor: { value: new THREE.Color(0x3a5f7a) },
        offset: { value: 33 },
        exponent: { value: 0.6 }
      },
      vertexShader: `
        varying vec3 vWorldPosition;
        void main() {
          vec4 worldPosition = modelMatrix * vec4(position, 1.0);
          vWorldPosition = worldPosition.xyz;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform vec3 topColor;
        uniform vec3 bottomColor;
        uniform float offset;
        uniform float exponent;
        varying vec3 vWorldPosition;
        void main() {
          float h = normalize(vWorldPosition + offset).y;
          gl_FragColor = vec4(mix(bottomColor, topColor, max(pow(max(h, 0.0), exponent), 0.0)), 1.0);
        }
      `,
      side: THREE.BackSide
    })
    const sky = new THREE.Mesh(skyGeometry, skyMaterial)
    scene.add(sky)

    // Stars
    const starsGeometry = new THREE.BufferGeometry()
    const starsCount = 200
    const positions = new Float32Array(starsCount * 3)
    
    for (let i = 0; i < starsCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 400
    }
    
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 2 })
    const stars = new THREE.Points(starsGeometry, starsMaterial)
    scene.add(stars)

    // Lantern creation function
    const createLantern = (x, y, z) => {
      const group = new THREE.Group()
      
      // Lantern body (cylinder)
      const bodyGeometry = new THREE.CylinderGeometry(0.8, 1.2, 2, 8)
      const bodyMaterial = new THREE.MeshPhongMaterial({
        color: 0xff6b35,
        transparent: true,
        opacity: 0.8,
        emissive: 0x331100
      })
      const body = new THREE.Mesh(bodyGeometry, bodyMaterial)
      group.add(body)

      // Lantern top
      const topGeometry = new THREE.ConeGeometry(1, 0.5, 8)
      const topMaterial = new THREE.MeshPhongMaterial({ color: 0x8b4513 })
      const top = new THREE.Mesh(topGeometry, topMaterial)
      top.position.y = 1.25
      group.add(top)

      // Inner light
      const lightGeometry = new THREE.SphereGeometry(0.3, 8, 8)
      const lightMaterial = new THREE.MeshBasicMaterial({
        color: 0xffff00,
        transparent: true,
        opacity: 0.9
      })
      const light = new THREE.Mesh(lightGeometry, lightMaterial)
      group.add(light)

      // Point light for glow
      const pointLight = new THREE.PointLight(0xffaa00, 2, 10)
      pointLight.position.set(0, 0, 0)
      group.add(pointLight)

      group.position.set(x, y, z)
      
      // Random rotation and scale
      group.rotation.y = Math.random() * Math.PI * 2
      const scale = 0.5 + Math.random() * 0.5
      group.scale.setScalar(scale)
      
      return group
    }

    // Create multiple lanterns
    const lanternCount = 15
    for (let i = 0; i < lanternCount; i++) {
      const x = (Math.random() - 0.5) * 50
      const y = -10 + Math.random() * 5
      const z = (Math.random() - 0.5) * 30
      
      const lantern = createLantern(x, y, z)
      scene.add(lantern)
      lanternsRef.current.push(lantern)
      
      // Animate lantern floating up
      gsap.to(lantern.position, {
        y: y + 20 + Math.random() * 10,
        duration: 8 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      })
      
      // Gentle rotation
      gsap.to(lantern.rotation, {
        y: lantern.rotation.y + Math.PI * 2,
        duration: 10 + Math.random() * 5,
        repeat: -1,
        ease: "none"
      })
      
      // Random drift
      gsap.to(lantern.position, {
        x: lantern.position.x + (Math.random() - 0.5) * 10,
        z: lantern.position.z + (Math.random() - 0.5) * 10,
        duration: 6 + Math.random() * 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 3
      })
    }

    // Ambient lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.3)
    scene.add(ambientLight)

    // Directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.set(5, 10, 5)
    scene.add(directionalLight)

    camera.position.z = 15
    camera.position.y = 2

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate)
      
      // Gentle camera movement
      camera.position.x = Math.sin(Date.now() * 0.0005) * 2
      camera.lookAt(0, 0, 0)
      
      // Animate stars twinkling
      stars.material.opacity = 0.5 + Math.sin(Date.now() * 0.001) * 0.3
      
      renderer.render(scene, camera)
    }
    animate()

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      renderer.dispose()
    }
  }, [])

  return <canvas ref={canvasRef} id="lantern-canvas" />
}

export default ThadingyutLanterns