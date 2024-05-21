const images = ["제임스웹1.jpeg","제임스웹2.jpeg","제임스웹3.jpeg","제임스웹4.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);


