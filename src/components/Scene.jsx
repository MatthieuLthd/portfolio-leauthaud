import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

const getAssetUrl = (path) => {
    const base = import.meta.env.BASE_URL;
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${cleanBase}${cleanPath}`;
};

const modelPath = getAssetUrl('models/abstract portfolio.glb');

const AbstractModel = () => {
    const { scene } = useGLTF(modelPath);
    const ref = useRef();

    // Modifiez les valeurs ici pour changer l'apparence du modèle
    React.useEffect(() => {
        scene.traverse((child) => {
            if (child.isMesh) {
                // Couleur principale (hexadécimal)
                child.material.color = new THREE.Color("#4a90e2");

                // Rugosité (0.0 = lisse/miroir, 1.0 = mat)
                child.material.roughness = 0.0;

                // Métallicité (0.0 = plastique/bois, 1.0 = métal)
                child.material.metalness = 1;

                // Emissivité (lueur)
                // child.material.emissive = new THREE.Color("#000000");
                // child.material.emissiveIntensity = 0.5;

                // Transparence (si besoin)
                // child.material.transparent = true;
                // child.material.opacity = 1;

                child.material.needsUpdate = true;
            }
        });
    }, [scene]);

    useFrame((state, delta) => {
        if (ref.current) {
            // Rotation
            ref.current.rotation.y += delta * 0.05;
            ref.current.rotation.x += delta * 0.05;

            // Scale based on scroll
            const scrollY = window.scrollY;
            const maxScroll = window.innerHeight; // Full height of hero section roughly
            const scaleFactor = Math.max(0, 0.65 - (scrollY / maxScroll)); // 1 at top, 0 at bottom of hero

            // Base scale is 1.2, we want it to shrink to say 0.2 or 0
            const targetScale = 1.2 * (0.5 + 0.5 * scaleFactor);

            // Smooth lerp for scale
            ref.current.scale.setScalar(THREE.MathUtils.lerp(ref.current.scale.x, targetScale, 0.1));
        }
    });

    return (
        <group ref={ref}>
            <primitive object={scene} scale={1.2} />
        </group>
    );
};

// Préchargement du modèle
useGLTF.preload(getAssetUrl('models/abstract portfolio.glb'));

const Scene = () => {
    // --- Paramètres d'éclairage ---
    // Intensité de la lumière ambiante (0.0 à 1.0+)
    const ambientIntensity = 0.9;

    // Environnement (HDRI)
    // Presets disponibles : "sunset", "dawn", "night", "warehouse", "forest", "apartment", "studio", "city", "park", "lobby"
    const environmentPreset = "dawn";
    // Intensité de l'environnement
    const environmentBlur = 1; // Flou de l'arrière-plan (0 à 1)

    return (
        <Canvas className="h-full w-full">
            <PerspectiveCamera makeDefault position={[0, 0, 6]} />
            <OrbitControls enableZoom={false} enablePan={false} />

            <ambientLight intensity={ambientIntensity} />


            <AbstractModel />

            <Environment preset={environmentPreset} blur={environmentBlur} />
        </Canvas>
    );
};

export default Scene;
