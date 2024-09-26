import flags from './model/flags.js';

const content = document.querySelector('.conteudo')

for (let flag of flags) {
    content.insertAdjacentHTML('beforeend',`
    <div class="flag col-2 my-2 text-center">
        <img src="${flag.image}" alt="${flag.name}">
        <p>${flag.name}</p>
      </div>
    `)
}