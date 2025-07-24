let snacks = [{ /*arrays con la informacion de dulceria*/
    key: 1,
    name: "MEGA COMBO MIX",
    price: 26.55,
    descripcion: "Contiene 2 palomitas Jumbo, 1 hot dog, 1 orden de nachos, y dos bebidas grandes",
    img: 'https://assets.biggerpicture.ai/assets/HO-1610/products/2125_4.png',
    amount: 0
},
{
    key: 2,
    name: "COMBO AMIGOS",
    price: 12.95,
    descripcion: "Contiene 1 palomita Jumbo, y dos bebidas grandes",
    img: 'https://assets.biggerpicture.ai/assets/HO-1610/products/2131_4.png',
    amount: 0
},
{
    key: 3,
    name: "COMBO CLÁSICO",
    price: 17.50,
    descripcion: "Contiene 1 palomita Jumbo, 1 orden de nachos, y 2 bebidas grandes",
    img: 'https://assets.biggerpicture.ai/assets/HO-1610/products/2129_4.png'

},
{
    key: 4,
    name: "COMBO JUNIOR",
    price: 10.50,
    descripcion: "Contiene 1 palomita Junior, 1 bebida pequeña, y 1 barra de chocolate",
    img: 'https://assets.biggerpicture.ai/assets/HO-1610/products/2141_4.png'
}
]
 
const billboard = [{ /*arrays con la informacion de promociones en cartelera*/
    key: 1,
    name: "Cinepack día de descuento",
    description: "Disfruta la experiencia completa con 2 Boletos a precio de día de descuento + Megacombo regular  (con 15% de descuento). ",
    img: 'https://cinemarkla.modyocdn.com/uploads/564fd099-139e-4b04-ae84-240d8270a3dd/original/d4.png'
},
{
    key: 2,
    name: "Descuento de Matinee",
    description: "Tus boletos para las funciones antes de las 12:00 M. tienen precio especial",
    img: 'https://cinemarkla.modyocdn.com/uploads/564fd099-139e-4b04-ae84-240d8270a3dd/original/d4.png'
},
{
    key: 3,
    name: "Cinepack Día de descuento Individual",
    description: "Disfruta tu escapada de día miércoles con el Cinepack individual:   Boleto 2D a precio de descuento  + soda grande + popcorn mediano salado (con 15% de descuento en soda y popcorn)",
    img: 'https://cinemarkla.modyocdn.com/uploads/4672c1dc-ce0f-47de-86f8-c87ede611114/original/dia_de_descuento_individual.png',
},
{
    key: 4,
    name: "Miércoles de Descuento ",
    description: "El mejor día de la semana es el Miércoles de De$cuento Cinemark. Todas las películas en cartelera, al mejor precio, no te lo puedes perder.",
    img: 'https://cinemarkla.modyocdn.com/uploads/32ccea90-613c-4fdb-8d93-3f808acfacd4/original/miercoles_descuento.jpg',
}
]


let cart = []/*carrito de compra*/

let snacksbtn = document.getElementById('snacks-btn')
let billboardbtn = document.getElementById('billboard-btn')
let cartbtn = document.getElementById('card-btn')
let totalContainer = document.getElementById('show-total')


/*se mandan a llamar todos los botones de html*/

function Snacks(){
    /*cuando se presione el primer boton de dulceria, esta informacion aparecerá*/
    document.getElementById('card-container').innerHTML = ""
    
    /*actualizar clases para mostrar cual pestaña esta activa*/
    snacksbtn.classList.add("btn-dark")
    billboardbtn.classList.remove("btn-dark")
    cartbtn.classList.remove("btn-dark")
    totalContainer.classList.add("d-none")

    /*recorriendo el array para generar cada card*/
    for(let i = 0; i < snacks.length; i++){
        let quantity = 0
        const card = document.createElement("div")

        const cardHolder = document.createElement("div")
        

        const addInput = document.createElement("input")
        addInput.type = "number"

        /*recorriendo el carrito para reemplazar la cantidad en el input*/
        const snackKey = snacks[i].key;
        const snackCart = cart.find(item => item.key === snackKey);

        if (snackCart) {
            addInput.value = snackCart.amount;
            quantity = snackCart.amount;
        } else {
            addInput.value = "0";
            quantity = 0;
        }

        /*creando los botones para sumar, restar y agregar al carrito*/ 
        const addBtn = document.createElement("button")
        addBtn.textContent = "Agregar"
        addBtn.classList.add("btn", "btn-reservar")

        const sumarBtn = document.createElement("button")
        sumarBtn.textContent = "+"

        const restarBtn = document.createElement("button")
        restarBtn.textContent = "-"

        card.classList.add("card", "p-2", "m-2", "hover-zoom")
        card.style.width = '18rem'

        /*creacion de cada card con la informacion del array snacks*/
        card.innerHTML = `<img class="card-img-top" src="${snacks[i].img}" alt="">
                    <div class="card-body">
                        <h5 class="card-title">${snacks[i].name}</h5>
                        <p class="card-text">${snacks[i].price}</p>
                        <p class="card-text">${snacks[i].descripcion}</p>
                    </div>`

        cardHolder.appendChild(restarBtn)
        cardHolder.appendChild(addInput)
        cardHolder.appendChild(sumarBtn)
        cardHolder.appendChild(addBtn)
        card.appendChild(cardHolder)

        /*agregando css despues de agregar todo el html*/
        sumarBtn.classList.add("btn", "m-1", "p-1", "btn-sm", "rounded")
        restarBtn.classList.add("btn", "m-1", "p-1", "btn-sm", "rounded")
        cardHolder.classList.add("d-flex", "col", "justify-content-center", "align-items-center")
        addInput.classList.add("input-group-text", "w-25")
        addBtn.classList.add( "btn", "btn-reservar")
        

        document.getElementById('card-container').appendChild(card)

        /*boton para sumar la cantidad a comprar*/
        sumarBtn.addEventListener("click", ()=>{
           (addInput.value)++
           quantity = parseInt(addInput.value)
            
        })

        /*boton para restar la cantidad a comprar*/
        restarBtn.addEventListener("click", ()=>{
            if(quantity > 0)
                (addInput.value)--
            else
                {return}
            
            quantity = parseInt(addInput.value)
        })

        /*boton para agregar al carrito*/
        addBtn.addEventListener("click", ()=>{
            /*agregar al carrito, si la cantidad es mayor que 0 se ejecuta*/
            if(quantity > 0){
                const index = cart.findIndex(item => item.key == snacks[i].key)

                /*si el snack ya esta agregado anteriormente, solo la cantidad a comprar sera actualizada*/
                if (index != -1){
                    cart[index].amount = quantity
                    alert(`${cart[index].amount} ${cart[index].name} fue modificado en el carrito. Esto reemplazará la cantidad anterior`)
                }else{
                    /* si el snack no esta agregado, se agrega al array del carrito*/
                    let newSnack = {...snacks[i]}
                    newSnack.amount = quantity
                    cart.push(newSnack)
                    alert(`${newSnack.amount} ${newSnack.name} fue agregado al carrito. Esto reemplazará la cantidad anterior`)
                    
                }
                
                addInput.value = cart[index].amount;
                quantity = 0;
                
            }else{
                /* si la cantidad a comprar es 0 no hace nada*/
                alert("No ha sido seleccionada una cantidad")
            }
        })
    }
}

/*imprimir la informacion del carrito*/
function showCart() {
    const container = document.getElementById('card-container') 
    container.innerHTML =" "

    snacksbtn.classList.remove("btn-dark")
    billboardbtn.classList.remove("btn-dark")
    cartbtn.classList.add("btn-dark")  
    totalContainer.classList.remove("d-none")/* mostrar el div para el carrito*/

    if (cart.length == 0) {
        container.innerHTML = "<p>El carrito está vacío.</p>"
        return;
    }

    let totalCost = 0/*total de costo del carrito*/

    cart.forEach(item => {
        const card = document.createElement("div")
        
        card.classList.add("card", "p-2", "m-2")
        card.style.width = '18rem'

        let cost = item.price * item.amount
        totalCost += cost

        console.log(totalCost)

        card.innerHTML = `
            <img class="card-img-top" src="${item.img}" alt="">
            <div class="card-body">
                <h5 class="card-title">${item.name}</h5>
                <p class="card-text">Precio: ${item.price}</p>
                <p class="card-text">Cantidad: ${item.amount}</p>
                <p class="card-text">Subtotal: ${cost.toFixed(2)}</p>
            </div>
        `
        container.appendChild(card)
    })

    totalContainer.innerHTML = `
    <p>El total es ${totalCost.toFixed(2)}
    `
}

/*La segunda pestaña, imprime la informacion del array de promociones*/
function Billboard(){
    document.getElementById('card-container').innerHTML = ""

    snacksbtn.classList.remove("btn-dark")
    billboardbtn.classList.add("btn-dark")
    cartbtn.classList.remove("btn-dark")
    totalContainer.classList.add("d-none")
    billboardbtn.style.transition = "0.5s"

    for(let i = 0; i < billboard.length; i++){

        const col = document.createElement("div");
        col.classList.add("col-12", "col-md-6", "mb-4", "hover-zoom");

        const card = document.createElement("div")
        card.classList.add("card", "h-100")


        card.innerHTML = `<div class="row g-1 align-items-stretch h-100">
                        <div class="col-md-6 d-flex justify-content-center align-items-center">
                        <img class="img-fluid w-75" src="${billboard[i].img}" alt="">
                       </div>
                       <div class="col-md-6 d-flex h-100">
                        <div class="card-body d-flex flex-column h-100 text-justify">
                            <h5 class="card-title">${billboard[i].name}</h5>
                            <p class="card-text">${billboard[i].description}</p>
                        </div> 
                        </div>
                     </div>
                     `

        col.appendChild(card);
        document.getElementById('card-container').appendChild(col);
        
    }
}