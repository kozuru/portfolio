
const canvas = document.querySelector('canvas');
canvas.width = 300;
canvas.height = 150;
const cx = canvas.getContext('2d');
cx.globalCompositeOperation = 'source-over';
cx.imageSmoothingEnabled = true;
cx.imageSmoothingQuality = 'low';

const palette = [
[215, 225, 215],
[83, 159, 162],
[114, 177, 164],
[171, 204, 177],
[196, 219, 180],
[212, 226, 182]];


const gradients = palette.map(([r, g, b]) => {
  const gradient = cx.createRadialGradient(0, 0, 1, 0, 0, 50);
  gradient.addColorStop(0, `rgba(${r},${g},${b},1)`);
  gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);
  return gradient;
});

const watercolors = [];

class Watercolor {
  constructor(time) {
    const colorIndex = Math.floor(Math.random() * palette.length);
    this.color = gradients[colorIndex];
    this.radius = 50;
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.dx = Math.random() * 2 - 1;
    this.dy = Math.random() * 2 - 1;
    this.startTime = time;
    this.currentTime = time;
    this.duration = Math.ceil(Math.random() * 1000);
  }

  update(time) {
    this.currentTime = time;
    if (this.currentTime - this.startTime >= this.duration) {
      return false;
    }
    this.x += this.dx;
    this.y += this.dy;
    return true;
  }

  render(cx) {
    cx.save();
    cx.globalAlpha = (this.currentTime - this.startTime) / this.duration;
    cx.translate(this.x, this.y);
    cx.beginPath();
    cx.arc(0, 0, this.radius, 0, Math.PI * 2);
    cx.fillStyle = this.color;
    cx.fill();
    cx.restore();
  }}


let frameId;
function frame(time) {
  const multiplier = 0.25;
  const expectedWidth = Math.floor(canvas.clientWidth * multiplier);
  if (canvas.width !== expectedWidth) {
    canvas.width = expectedWidth;
  }
  const expectedHeight = Math.floor(canvas.clientHeight * multiplier);
  if (canvas.height !== expectedHeight) {
    canvas.height = expectedHeight;
  }

  if (watercolors.length < 2) {
    watercolors.push(new Watercolor(time));
  }

  for (let index = watercolors.length - 1; index >= 0; index--) {
    const watercolor = watercolors[index];
    if (!watercolor.update(time)) {
      console.log(watercolors.splice(index, 1));
    }
  }

  for (const watercolor of watercolors) {
    watercolor.render(cx);
  }

  frameId = window.requestAnimationFrame(frame);
}

function start() {
  frameId = window.requestAnimationFrame(frame);
}

function stop() {
  window.cancelAnimationFrame(frameId);
}

start();
