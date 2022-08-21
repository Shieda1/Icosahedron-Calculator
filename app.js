// https://calculator.swiftutors.com/icosahedron-calculator.html

const v1 =  document.getElementById('v1');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const surfaceAreaofIcosahedronRadio = document.getElementById('surfaceAreaofIcosahedronRadio');
const volumeofIcosahedronRadio = document.getElementById('volumeofIcosahedronRadio');
const lengthofanyEdgeRadio = document.getElementById('lengthofanyEdgeRadio');

let surfaceAreaofIcosahedron;
let lengthofanyEdge = v1;

// labels of the inpust
const variable1 = document.getElementById('variable1');

surfaceAreaofIcosahedronRadio.addEventListener('click', function() {
  variable1.textContent = '(s) Length of any Edge';
  lengthofanyEdge = v1;
  result.textContent = '';
});

volumeofIcosahedronRadio.addEventListener('click', function() {
  variable1.textContent = '(s) Length of any Edge';
  lengthofanyEdge = v1;
  result.textContent = '';
});

lengthofanyEdgeRadio.addEventListener('click', function() {
  variable1.textContent = 'Surface Area of Icosahedron';
  surfaceAreaofIcosahedron = v1;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(surfaceAreaofIcosahedronRadio.checked)
    result.textContent = `Surface Area of Icosahedron = ${computeSurfaceAreaofIcosahedron().toFixed(2)}`;

  else if(volumeofIcosahedronRadio.checked)
    result.textContent = `Volume of Icosahedron = ${computeVolumeofIcosahedron().toFixed(2)}`;

  else if(lengthofanyEdgeRadio.checked)
    result.textContent = `Length of any Edge = ${computeLengthofanyEdge().toFixed(2)}`;
})

// calculation

function computeSurfaceAreaofIcosahedron() {
  return 5 * Math.sqrt(3) * Math.pow(Number(lengthofanyEdge.value), 2);
}

function computeVolumeofIcosahedron() {
  return (5 / 12) * (3 + Math.sqrt(5)) * Math.pow(Number(lengthofanyEdge.value), 3);
}

function computeLengthofanyEdge() {
  return Math.sqrt(Number(surfaceAreaofIcosahedron.value) / (5 * Math.sqrt(3)));
}