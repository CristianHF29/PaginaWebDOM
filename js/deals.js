const snacks = [{
    key: 1,
    name: "MEGA COMBO MIX",
    price: 26.55,
    descripcion: "Contiene 2 palomitas Jumbo, 1 hot dog, 1 orden de nachos, y dos bebidas grandes",
    img: 'https://assets.biggerpicture.ai/assets/HO-1610/products/2125_4.png'
},
{
    key: 2,
    name: "COMBO AMIGOS",
    price: 12.95,
    descripcion: "Contiene 1 palomita Jumbo, y dos bebidas grandes",
    img: 'https://assets.biggerpicture.ai/assets/HO-1610/products/2131_4.png'
}
]



function Snacks(){
    const container = document.getElementById('card-container').innerHTML = ""
    

    let snacksbtn = document.getElementById('snacks-btn')
    snacksbtn.classList.add("btn-dark")

    let billboardbtn = document.getElementById('billboard-btn')
    billboardbtn.classList.remove("btn-dark")


    for(i = 0; i < snacks.length; i++){
        const card = document.createElement("div")
        card.classList.add("card")
        card.classList.add("p-2")
        card.classList.add("m-2")
        /*Lo cambiare a flex o col*/
        card.style.width = '18rem'


        card.innerHTML = `<img class="card-img-top" src="${snacks[i].img}" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${snacks[i].name}</h5>
                        <p class="card-text">${snacks[i].price}</p>
                        <p class="card-text">${snacks[i].descripcion}</p>
                    </div>`

        document.getElementById('card-container').appendChild(card)
        

    }
}



function Billboard(){
    document.getElementById('card-container').innerHTML = ""

    let snacksbtn = document.getElementById('snacks-btn')
    snacksbtn.classList.remove("btn-dark")

    let billboardbtn = document.getElementById('billboard-btn')
    billboardbtn.classList.add("btn-dark")
}

