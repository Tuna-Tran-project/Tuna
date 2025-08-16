function handleYesClick() {
    // Tạo hiệu ứng pháo hoa hoặc confetti
    alert("🎉 Yay! I'm so excited! Can't wait for our date night! 💕");
    
    // Có thể thêm animations hoặc redirect đến trang khác
    document.body.style.background = "linear-gradient(135deg, #00b894, #00cec9, #74b9ff)";
    
    // Tạo hiệu ứng rơi trái tim
    createHeartAnimation();
}

function handleNoClick() {
    alert("😢 That's okay! Maybe another time? 💔");
    
    // Có thể thêm hiệu ứng buồn
    document.body.style.background = "linear-gradient(135deg, #636e72, #2d3436)";
}

function createHeartAnimation() {
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.innerHTML = '💖';
            heart.style.position = 'fixed';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.top = '-50px';
            heart.style.fontSize = '2em';
            heart.style.zIndex = '1000';
            heart.style.pointerEvents = 'none';
            heart.style.animation = 'fall 3s linear forwards';
            
            document.body.appendChild(heart);
            
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, i * 200);
    }
}

// CSS cho animation rơi trái tim
const style = document.createElement('style');
style.textContent = `
    @keyframes fall {
        to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
