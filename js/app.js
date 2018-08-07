
let baregays = [
{nombre:'Nicho Bears y Bar',
dirección: 'Londres 182 Juárez',
vestimenta: 'Informal',
horarioDeApertura: 21,
foto: "https://media.timeout.com/images/101658309/630/472/image.jpg"},

{nombre:'TOM´S Leather Bar',
dirección: 'Avenida de los Insurgentes Sur 357, Hipódromo',
vestimenta: 'Informal',
horarioDeApertura: 20},

{nombre: 'Kinky Bar',
dirección: 'Calle Amberes 1',
vestimenta: 'Informal',
horarioDeApertura: 21},

{nombre: 'El Almacén',
dirección: 'Florencia 37-B Juárez',
vestimenta: 'Informal',
horarioDeApertura: 20},

{nombre: 'Kashbah Le Club',
dirección: 'Calle Bolivar 285',
vestimenta: 'Informal',
horarioDeApertura: 22},

{nombre: 'BB SHOW BAR',
dirección: 'Calle Amberes 21, Juárez',
vestimenta: 'Informal',
horarioDeApertura: 21},

{nombre: 'Cabare-tito Neón',
dirección: 'Florencia 37-a, Zona Rosa',
vestimenta: 'Informal',
horarioDeApertura: 20},

{nombre: 'Drrama Bar',
dirección: 'Calle Amberes 4, Juárez',
vestimenta: 'Informal',
horarioDeApertura: '20'},

{nombre: 'BAR VIENA',
dirección:  'Calle Republica de Cuba 2',
vestimenta: 'Informal',
horarioDeApertura: 21},

{nombre: 'Dance Floor',
dirección:  'Coahuila 92',
vestimenta: 'Informal',
horarioDeApertura: 22,}

]

document.getElementById('20').addEventListener("click",(event)=>{
const result = baregays.filter(word =>(word.horarioDeApertura == 20));
console.log(result);
let imprimibares = document.getElementById("impresiobares");
let bares8 = "";
for (let i= 0; i < result.length; i++){
  bares8 += `<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${result[i].nombre}</h1>
    <p class="lead">${result[i].dirección}</p>
    <p class="lead">${result[i].vestimenta}</p>
    <p class="lead">${result[i].horarioDeApertura}</p>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <img src="../image/nichos bar.jpg" height="auto" width="auto">
        </div>
      </div>
    </div>
  </div>
</div>`
}
imprimibares.innerHTML= bares8;
});

document.getElementById('21').addEventListener("click",(event)=>{
const result = baregays.filter(word =>(word.horarioDeApertura == 21));
console.log(result);
let imprimibares = document.getElementById("impresiobares");
let bares8 = "";
for (let i= 0; i < result.length; i++){
  bares8 += `<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${result[i].nombre}</h1>
    <p class="lead">${result[i].dirección}</p>
    <p class="lead">${result[i].vestimenta}</p>
    <p class="lead">${result[i].horarioDeApertura}</p>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <img src="../image/nichos bar.jpg" height="auto" width="auto">
        </div>
      </div>
    </div>
  </div>
</div>`
}
imprimibares.innerHTML= bares8;
});
document.getElementById('22').addEventListener("click",(event)=>{
const result = baregays.filter(word =>(word.horarioDeApertura == 22));
console.log(result);
let imprimibares = document.getElementById("impresiobares");
let bares8 = "";
for (let i= 0; i < result.length; i++){
  bares8 += `<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">${result[i].nombre}</h1>
    <p class="lead">${result[i].dirección}</p>
    <p class="lead">${result[i].vestimenta}</p>
    <p class="lead">${result[i].horarioDeApertura}</p>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <img src="../image/nichos bar.jpg" height="auto" width="auto">
        </div>
      </div>
    </div>
  </div>
</div>`
}
imprimibares.innerHTML= bares8;
});
