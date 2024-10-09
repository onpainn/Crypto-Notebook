
const form = document.querySelector('#form');
const cards = document.querySelector('#cards')

function playAnimate(){
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

const fetchData = async () => {
    const url = `https://api.cryptorank.io/v1/currencies?api_key=19615549501bc12ec034522707875f6411d430f235e44d3d4138a8c851a0`;
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
    let i = 0;
    while(i < 100){       
        playAnimate();
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




