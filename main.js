import { select } from 'd3';

const svg = select('svg');

const width = document.body.clientWidth;
const height = document.body.clientHeight;

svg
    .attr('width', width)
    .attr('height', height)
  .append('rect')
    .attr('width', width)
    .attr('height', height)
    .attr('rx', 40)

// document.querySelector('#app').innerHTML = `
//   <h1>Hello Vite!</h1>
//   <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
// `
