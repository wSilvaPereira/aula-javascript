var partes = ['ombro', 'joelho'];
var musica = ['cabeça', ...partes, 'e', 'pés'];
console.log(musica);

function fn(x, y, z) {
  console.log(x, y, z);
}
var args = [0, 1, 2];
fn(...args);
