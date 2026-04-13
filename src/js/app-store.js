document.addEventListener('DOMContentLoaded', function () {

/*Productos */
    const productos = [
        {
            id: 0,
            img_src: "/src/assets/muneco/muneco.png",
            name: "KALUNA",
            title: "UN RITUAL ANCESTRAL",
            subtitle: "Guardiana de tus emociones lunares",
            price: 100000,
            description: `Kaluna es un ritual hecho cuerpo.<br>
                        Una guardiana creada para acompañarte en cada fase de tu ciclo y sostener aquello que necesitas
                        liberar.
                        A través de la costura, puedes depositar emociones, pensamientos y memorias en su interior, creando
                        un espacio íntimo de expresión y transformación.
                        Cuando el proceso se completa, Kaluna puede ser entregada al fuego como acto simbólico de
                        transmutación.
                        Kaluna no guarda lo que duele.
                        Lo transforma. <br>
                        <br>
                        Ideal para: <br>
                        
                        • Procesos emocionales profundos <br>
                        • Acompañamiento del ciclo menstrual <br>
                        • Ritualizar cierres y renacimientos <br>`
            ,
            video: ""
        },
        
        {
            id: 1,
            img_src: "/src/assets/esencias/esencia_img_1.jpg",
            name: "ESENCIAS",
            title: "Kit de sincronización femenina",
            subtitle: "Un ritual para volver a ti.",
            price: 100000,
            description: `Este kit reúne 4 esencias naturales,
creadas para acompañarte en cada fase de tu ciclo: <br>
 Bruja – limpieza <br>
 Virgen – energía <br>
 Madre – calma <br>
 Puta – corazón <br>
Cada una sostiene lo que tu cuerpo y tu emoción necesitan,
ayudándote a sincronizar tus ritmos
y transformar tu ciclo en un ritual diario.
`,
            video: ""
        },
        {
            id: 2,
            img_src: "/src/assets/parches/parche_demo.webp",
            name: "PARCHES",
            title: "PARCHES NATURALES PARA CÓLICOS",
            subtitle: "Un abrazo cálido para tu vientre.",
            price: 100000,
            description: `Nuestros parches están diseñados para acompañar los días en los que tu cuerpo pide descanso, contención y suavidad.
El calor natural ayuda a aliviar la tensión, mientras te invita a detenerte, respirar y habitar tu cuerpo con mayor presencia.<br>
No es solo alivio físico…<br>
es un recordatorio de cuidado hacia ti misma.
 Ideales para:<br>
 • Dolores menstruales<br>
 • Momentos de descanso y pausa<br>
 • Conectar con tu cuerpo desde el amor<br>`
            ,
            video: "/src/assets/video/parches-video.mp4"
        },

    ]

    //Creador de productos
    const section_products = document.querySelector('.products');
    for (let iterador in productos) {

        //tarjeta producto
        const product_card = document.createElement("div");
        product_card.classList.add("product-container");

        const product_img = document.createElement("div");
        product_img.classList.add("product-img");

        const img = document.createElement("img");
        img.classList.add("img-item");

        img.src = productos[iterador].img_src;

        product_img.append(img);

        const product_name = document.createElement("p");
        product_name.classList.add("product-name");

        product_name.innerHTML = productos[iterador].name;

        const product_title = document.createElement("p");
        product_title.classList.add("product-title");

        product_title.textContent = productos[iterador].title;

        const product_price = document.createElement("p");
        product_price.classList.add("product-price");

        product_price.textContent = productos[iterador].price + " COP";

        const info_card = document.createElement("div");
        info_card.classList.add("product-infocard");

        const subtitle_product = document.createElement("p");
        subtitle_product.classList.add("subtitle-product");
        subtitle_product.textContent = productos[iterador].subtitle;

        const descripction_product = document.createElement("p");
        descripction_product.classList.add("description-item");
        //Lo dejo como innerHTML para que cargue las etiquetas html dentro del texto
        descripction_product.innerHTML = productos[iterador].description;

        info_card.append(subtitle_product, descripction_product);

        const button_get = document.createElement("button");
        button_get.classList.add("product-button-get");
        button_get.textContent = "Comprar";

        product_card.append(product_img, product_name, product_title, product_price, info_card, button_get);
        section_products.append(product_card);
    }



    const footer = document.querySelector('.footer');
    footer.classList.toggle('footer-store');
    });