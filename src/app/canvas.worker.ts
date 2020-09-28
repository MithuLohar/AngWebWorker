/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  let canvas = data.canvas;
  let context = canvas.getContext('2d');
  context.beginPath();
  for (let x = 0; x < 1091; x++) {
    for (let y = 0; y < 891; y++) {
      context.fillRect(x, y, 10, 10);
    }
  }
});
