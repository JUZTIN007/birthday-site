let chat = document.getElementById("chat");

function setStatus(text) {
  document.getElementById("status").innerText = text;
}

function typing(delay) {
  return new Promise(resolve => {
    setStatus("typing...");

    let t = document.createElement("div");
    t.className = "typing";
    t.innerText = "typing...";
    chat.appendChild(t);

    setTimeout(() => {
      t.remove();
      setStatus("online");
      resolve();
    }, delay);
  });
}

function send(text, side) {
  let msg = document.createElement("div");
  msg.className = "msg " + side;
  msg.innerText = text;
  chat.appendChild(msg);
  chat.scrollTop = chat.scrollHeight;
}

document.getElementById("startScreen").onclick = () => {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("bgMusic").play();
  startChat();
};

async function startChat() {
  await typing(1000); send("Hey 👋", "left");
  await typing(1200); send("Hey 😊", "right");

  await typing(1500); send("I was thinking about you...", "left");
  await typing(2000); send("Hmm? 👀", "right");

  await typing(2000); send("Do you remember that day?", "left");
  await typing(1500); send("Which one? 😄", "right");

  await typing(2000); send("That dinner 🍽️", "left");
  await typing(1500); send("And the night walk 🌙", "left");

  await typing(2000); send("Yeah… I remember ❤️", "right");

  await typing(2500); send("Those moments stayed with me 💖", "left");

  setTimeout(startPhotoScene, 2000);
}

function createParticles() {
  let container = document.getElementById("particles");
  for (let i = 0; i < 30; i++) {
    let span = document.createElement("span");
    span.style.left = Math.random() * 100 + "%";
    span.style.animationDuration = (5 + Math.random() * 5) + "s";
    container.appendChild(span);
  }
}

function startPhotoScene() {
  document.getElementById("chatContainer").style.display = "none";

  let scene = document.getElementById("photoScene");
  scene.style.display = "flex";

  createParticles();

  let bg = document.getElementById("bgBlur");
  let img = document.getElementById("photo");
  let text = document.getElementById("caption");

  let photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg"
  ];

  let captions = [
    "It was just a normal day…",
    "a dinner… a walk… just conversations…",
    "but somehow… those moments stayed with me…",
    "and I didn’t realize…",
    "when you became someone special 💖"
  ];

  let i = 0;

  function next() {
    if (i < photos.length) {
      img.style.opacity = 0;
      text.style.opacity = 0;

      setTimeout(() => {
        bg.style.backgroundImage = `url(${photos[i]})`;
        img.src = photos[i];
        text.innerText = captions[i];

        img.style.opacity = 1;
        text.style.opacity = 1;

        i++;
        setTimeout(next, 3500);
      }, 800);

    } else {
      text.innerText = "And maybe… I never said this properly… but those moments meant a lot to me 💖";

      document.body.classList.add("fade-out");

      setTimeout(() => {
        window.location.href = "countdown.html";
      }, 2000);
    }
  }

  next();
}
