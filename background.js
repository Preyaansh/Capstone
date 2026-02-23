// --- NEURAL MESH BACKGROUND ---
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const group = new THREE.Group();
scene.add(group);

const nodesGeometry = new THREE.SphereGeometry(1, 8, 8);
const nodesMaterial = new THREE.MeshBasicMaterial({ color: 0x00f3ff });
const nodes = [];

for (let i = 0; i < 60; i++) {
    const node = new THREE.Mesh(nodesGeometry, nodesMaterial);
    node.position.set((Math.random() - 0.5) * 150, (Math.random() - 0.5) * 150, (Math.random() - 0.5) * 150);
    node.velocity = new THREE.Vector3((Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1, (Math.random() - 0.5) * 0.1);
    nodes.push(node);
    group.add(node);
}

camera.position.z = 80;

function animateBackground() {
    requestAnimationFrame(animateBackground);
    nodes.forEach(n => {
        n.position.add(n.velocity);
        if (Math.abs(n.position.x) > 80) n.velocity.x *= -1;
        if (Math.abs(n.position.y) > 80) n.velocity.y *= -1;
    });
    group.rotation.y += 0.002;
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animateBackground();