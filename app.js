// --- VIEW SWITCHING LOGIC ---
function switchView() {
    const frame = document.getElementById('main-frame');
    frame.classList.add('scanning');
    
    setTimeout(() => {
        const loginView = document.getElementById('login-view');
        const signupView = document.getElementById('signup-view');
        
        loginView.classList.toggle('hidden-panel');
        loginView.classList.toggle('active-panel');
        signupView.classList.toggle('hidden-panel');
        signupView.classList.toggle('active-panel');
    }, 900);

    setTimeout(() => frame.classList.remove('scanning'), 1800);
}

// --- DYNAMIC IDS LOGS ---
const logContainer = document.getElementById('ids-logs');
const idsEvents = [
    "SCANNING_PACKET_HEADER_8802...",
    "ANOMALY_DETECTED: IP_192.168.1.44",
    "NEURAL_FILTER_ACTIVE: 99.4% CONFIDENCE",
    "REJECTING_UNAUTHORIZED_HANDSHAKE...",
    "RECOGNIZING_PATTERN: BRUTE_FORCE_VECTOR",
    "ADAPTIVE_FIREWALL_LOADED.",
    "TRAINING_SET_UPDATE: COMPLETE."
];

let logIndex = 0;
function updateLogs() {
    const p = document.createElement('p');
    const timestamp = new Date().toLocaleTimeString();
    p.innerHTML = `<span class="text-cyan-500/50">[${timestamp}]</span> ${idsEvents[logIndex % idsEvents.length]}`;
    
    logContainer.prepend(p);
    logIndex++;
    
    if (logContainer.children.length > 8) {
        logContainer.lastChild.remove();
    }
}

setInterval(updateLogs, 2000);