async function cargarProductos(){
    let data = await fetch('/products');
    let products = await data.json();

    let ul = document.querySelector("ul#products");
    ul.innerHTML = "";

    let createButton = document.createElement("i");
    createButton.setAttribute("class", "fa-solid fa-plus");
    createButton.addEventListener('click', () => {
        let div = document.createElement("div");
        div.className = 'formulario';

        let inputNombre = document.createElement("input"); // Name, type y id
        div.appendChild(inputNombre);

        let inputPrice = document.createElement("input"); // Name, type y id
        div.appendChild(inputPrice);

        let boton = document.createElement("button");
        boton.addEventListener("click", async() => {
            await fetch('/products', {
                method: "POST",
                headers:{
                    "Content-Type": "application/json" // formencode
                },
                body: JSON.stringify({
                    name: inputNombre.value,
                    price: inputPrice.value
                })
            })
            cargarProductos();
        })
        div.appendChild(boton);
        ul.innerHTML = "";
        ul.appendChild(div);
    })
    ul.appendChild(createButton);

    products.forEach(function(product){
        let li = document.createElement('li');

        // ID
        let spanId = document.createElement('span');
        spanId.innerHTML = product.id;
        li.appendChild(spanId);
        
        // Nombre
        let spanName = document.createElement('span');
        spanName.innerHTML = product.name;
        li.appendChild(spanName);

        // Precio
        let spanPrice = document.createElement('span');
        spanPrice.innerHTML = product.price;
        li.appendChild(spanPrice);

        // Icono editar
        let iEditar = document.createElement('i');
        iEditar.setAttribute("class", "fa-solid fa-pen");
        iEditar.addEventListener("click", async() => {
            let div = document.createElement("div");
            div.className = 'formulario';

            let inputNombre = document.createElement("input"); // Name, type y id
            inputNombre.value = product.name;
            div.appendChild(inputNombre);

            let inputPrice = document.createElement("input"); // Name, type y id
            inputPrice.value = product.price;
            div.appendChild(inputPrice);

            let boton = document.createElement("button");
            boton.addEventListener("click", async() => {
                await fetch('/products/'+product.id, {
                    method: "PUT",
                    headers:{
                        "Content-Type": "application/json" // formencode
                    },
                    body: JSON.stringify({
                        name: inputNombre.value,
                        price: inputPrice.value,
                        category: null
                    })
                })
                cargarProductos();
            })
            div.appendChild(boton);
            ul.innerHTML = "";
            ul.appendChild(div);
        })
        li.appendChild(iEditar);
        
        // Icono borrar
        let iBorrar = document.createElement('i');
        iBorrar.setAttribute("class", "fa-solid fa-trash");
        iBorrar.addEventListener("click", async() => {
            await fetch('/products/'+product.id, {
                method: "DELETE"
            })
            cargarProductos();
        })
        li.appendChild(iBorrar);
        

        ul.appendChild(li);
    })


    return products;
}

window.addEventListener("load", async()=>{
    let products = await cargarProductos();
    console.log(products);
})