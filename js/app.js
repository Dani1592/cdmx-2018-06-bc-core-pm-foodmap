
let baregays = [
{nombre:'Nicho Bears y Bar',
dirección: 'Londres 182 Juárez',
vestimenta: 'Informal',
horarioDeApertura: 21,
foto: "https://media.timeout.com/images/101658309/630/472/image.jpg"},

{nombre:'TOM´S Leather Bar',
dirección: 'Avenida de los Insurgentes Sur 357, Hipódromo',
vestimenta: 'Informal',
horarioDeApertura: 20,
foto: "https://media.timeout.com/images/102956080/1372/772/image.jpg"},


{nombre: 'Kinky Bar',
dirección: 'Calle Amberes 1',
vestimenta: 'Informal',
horarioDeApertura: 21,
foto: "http://new.maspormas.com.s3.amazonaws.com/wp-content/uploads/2015/08/18185150/kinky-bar.jpg"},

{nombre: 'El Almacén',
dirección: 'Florencia 37-B Juárez',
vestimenta: 'Informal',
horarioDeApertura: 20,
foto: "https://i.pinimg.com/originals/60/17/ec/6017ec51912ce5737cca4a79ba503dc0.jpg"},

{nombre: 'Kashbah Le Club',
dirección: 'Calle Bolivar 285',
vestimenta: 'Informal',
horarioDeApertura: 22,
foto: "https://pbs.twimg.com/profile_images/855254177907228672/QjYn-Dyz.jpg"},

{nombre: 'BB SHOW BAR',
dirección: 'Calle Amberes 21, Juárez',
vestimenta: 'Informal',
horarioDeApertura: 21,
foto: "https://pbs.twimg.com/media/Bo2oGliCcAIq49O.jpg"},


{nombre: 'Cabare-tito Neón',
dirección: 'Florencia 37-a, Zona Rosa',
vestimenta: 'Informal',
horarioDeApertura: 20,
foto: "https://pbs.twimg.com/media/C7KVWpJVAAAEjR2.jpg"},

{nombre: 'Drrama Bar',
dirección: 'Calle Amberes 4, Juárez',
vestimenta: 'Informal',
horarioDeApertura: '20',
foto: "https://pbs.twimg.com/media/DY6VK-JWkAA1A6e.jpg"},

{nombre: 'BAR VIENA',
dirección:  'Calle Republica de Cuba 2',
vestimenta: 'Informal',
horarioDeApertura: 21,
foto: "https://media.timeout.com/images/101678279/image.jpg"},

{nombre: 'Dance Floor',
dirección:  'Coahuila 92',
vestimenta: 'Informal',
horarioDeApertura: 22,
foto: "http://bookersnap.com/archivo/img-slider/800x800/97dabf718a-dancefloor-21mayo-35.jpg"}

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
    <p class="lead">¿Donde esta? ${result[i].dirección}</p>
    <p class="lead">¿Como puedo ir vestido? ${result[i].vestimenta}</p>
    <p class="lead">¿A que hora abren? ${result[i].horarioDeApertura} hrs.</p>
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Foto</button>
    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
        <img src=${result[i].foto} height="auto" width="auto">
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
  console.log(result[i])
  bares8 += `<div class="jumbotron jumbotron-fluid">
  <div class="container">
  <h1 class="display-4">${result[i].nombre}</h1>
  <p class="lead">¿Donde esta? ${result[i].dirección}</p>
  <p class="lead">¿Como puedo ir vestido? ${result[i].vestimenta}</p>
  <p class="lead">¿A que hora abren? ${result[i].horarioDeApertura} hrs.</p>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Foto</button>
  <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
      <img src=${result[i].foto} height="auto" width="auto">
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
  <p class="lead">¿Donde esta? ${result[i].dirección}</p>
  <p class="lead">¿Como puedo ir vestido? ${result[i].vestimenta}</p>
  <p class="lead">¿A que hora abren? ${result[i].horarioDeApertura} hrs.</p>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Foto</button>
  <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
      <img src=${result[i].foto} height="auto" width="auto">
        </div>
      </div>
    </div>
  </div>
</div>`
}
imprimibares.innerHTML= bares8;
});
