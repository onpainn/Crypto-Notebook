
const form = document.querySelector('#form');
const cards = document.querySelector('#cards')

function playAnimateItem(){
            function onEntry(entry){
                entry.forEach(change => {
                if(change.isIntersecting){
                    change.target.classList.add('show');
                }
                });
            }
            let options = { threshold: [0.5] };
            let observer = new IntersectionObserver(onEntry, options);
            let elements = document.querySelectorAll('.item');

            for (let elm of elements){
                observer.observe(elm);
            };
        };

function playAnimatePage(){
    function onEntry(entry){
        entry.forEach(change => {
            if(change.isIntersecting){
                change.target.classList.add('showhad');
            }
        });
    }
    let options = { threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.hed');

    for (let elm of elements){
        observer.observe(elm);
    };
};
playAnimatePage();
const fetchData = async () => {
    const url = `https://api.cryptorank.io/v1/currencies?api_key=19615549501bc12ec034522707875f6411d430f235e44d3d4138a8c851a0`;
    const response = await fetch(url);
    const data = await response.json()


    let i = 0;
    while(i < 100){       
        playAnimateItem();
        const html = `
        <div class="item">
            <div class="info">
                <h1 class="name">${data.data[i].name} </h1>
                <p class="price">${data.data[i].values.USD.price.toFixed(2)}$</p>
            </div>
            <div class="image">
                <span class="symbol">${data.data[i].symbol}</span>
            </div>                
        </div>
    `;
    cards.insertAdjacentHTML('beforeend',html);
    i++;
    };
}
fetchData();

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
});
// Реализация поиска реального времени
document.querySelector("input[type=\"text\"]").addEventListener("input", (e) => {
    [...document.querySelectorAll(".item")]
    .forEach(item => {
      if (item.textContent.toLowerCase().includes(e.target.value.toLowerCase())) {
        item.style.display = "flex";
      } 
      else {
        item.style.display = "none";
      }
    });
  });




