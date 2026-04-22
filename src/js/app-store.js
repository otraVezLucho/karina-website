document.addEventListener('DOMContentLoaded', function () {
    const formatoMoneda = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  minimumFractionDigits: 0
});
    /*Productos */
    const productos = [
        {
            id: 0,
            img_src: "/src/assets/muneco/muneco.png",
            name: "KALUNA",
            title: "Guardiana de tu emociones",
            subtitle: "¿Qué haces con lo que te duele?",
            price: 39999,
            description: `Conoce a <strong>Kaluna</strong>, la guardiana de tu mundo emocional.<br>
                        <strong>Tu compañera de proceso</strong> <br>
                        Diseñada para transitar contigo cada fase de tu ciclo, Kaluna es un contenedor seguro para tu historia.
                        <br><br>
                        <strong>El Ritual: Coser para Sanar </strong><br>
                        <br>


                        A través de la costura consciente, transfieres a su interior:<br>
                        • Miedos y ansiedades.<br>
                        • Recuerdos que pesan.<br>
                        • Emociones que necesitan lugar.<br>
                        <br>
                        <br>
                        
                         <strong>El kit incluye:<br></strong>
                         <br>
                        1 Muñeco de tela relleno<br>
                        2- 1 caja de fósforos<br>
                        3- 1 vela<br>
                        4- 1 kit de coser<br>
                        <br>
                        <strong>Modo de uso:</strong>  Enciende tu vela y respira profundo…<br>
                        <br>
                        <strong>Elige tu emoción:</strong> Permite que tu cuerpo te muestre
                        qué necesitas liberar hoy. No lo pienses…siéntelo<br>
                        <br>
                        <strong>Cose con intención:</strong>  Con cada puntada
                        entrega eso que ya no quieres cargar. No tiene que ser perfecto
                        solo real.<br>
                        <br>
                        <strong>Cierre:</strong>  Respira…Alquimia de Fuego <br>
                        Cuando estés lista, entrega tu guardiana al fuego. Un acto simbólico de transmutación para liberar espacio en tu interior.<br>
                        Algo dentro de ti<br>
                        ya comenzó a transformarse<br><br>
                        Kaluna no guarda el dolor, lo libera.
                        <br><br>
                        <strong>No incluye envio</strong>
                        `
            ,
            video: ""
        },
        /*{
            id: 1,
            img_src: "/src/assets/esencias/esencia_img_1.jpg",
            name: "ESENCIAS",
            title: "Kit de sincronización femenina",
            subtitle: "Un ritual para volver a ti.",
            price: 29900,
            
            description: `Un aroma que te invita a ir hacia adentro. <br><br>
            Esta mezcla sagrada de mirra, incienso, ruda y eucalipto
            crea un espacio de limpieza, protección y transmutación profunda.
            <br><br>
            Ideal para acompañarte en tu fase bruja,
            cuando el cuerpo pide silencio,
            la alma introspección
            y la energía depuración.
            <br><br>
            Es un ritual para soltar lo que pesa,
            ordenar lo que sientes
            y volver a tu centro.
            <br><br>
            No es solo una esencia…<br>
            es un espacio para limpiar, calmar y transformar tu energía.<br>
            <strong>Ingredientes:</strong> Mezcla de aceites esenciales de ruda, mirra, incienso y eucalipto en una base de alcohol. <br><br>
            <strong>Modo de uso:</strong> Agitar antes de usar. Puedes usarlo como perfume protector, ambientador y como limpiador energético sobre la ropa de cama.<br><br>
            <strong>PRECAUCIÓN:</strong> NO INGERIR. No es un medicamento. En caso de presentarse algún efecto adverso suspende su uso inmediatamente y consulta a un médico.<br><br>

            `,
            video: ""
        },
        {
            id: 2,
            img_src: "/src/assets/parches/parche_demo.webp",
            name: "PARCHES",
            title: "PARCHES NATURALES PARA CÓLICOS",
            subtitle: "Un abrazo cálido para tu vientre.",
            price: 39900,
            description: `<strong>No es solo alivio físico…</strong><br>
                        es un recordatorio de cuidado hacia ti misma.                                                                           Un abrazo cálido para tu vientre.
                        <br><br>
                        Nuestros parches están diseñados para acompañar los días en los que tu cuerpo pide descanso, contención y suavidad.
                        El calor natural ayuda a aliviar la tensión, mientras te invita a detenerte, respirar y habitar tu cuerpo con mayor presencia.
                    <br><br>
                        <strong>Ideales para:</strong><br>
                        • Dolores menstruales<br>
                        • Momentos de descanso y pausa<br>
                        • Conectar con tu cuerpo desde el amor<br>
                            <br>
                        <strong>Modo de uso:</strong><br><br>
                        1 - Abre el paquete, saca el parche.<br>
                        2 - Remueve la película protectora del adhesivo.<br>
                        3 - Pégalo en tu ropa interior a la altura del vientre o sobre la zona deseada.<br>
                        4 - Espera entre 10-20 minutos que el parche alcance su temperatura ideal.<br>
                        5 - Duración entre 6 a 8 horas.<br>
                        6 - Cuando termine su efecto desprende suavemente y desecha.<br><br>
                        <strong>PRECAUCIÓN:</strong> NO APTO para piel sensible, embarazo o para un niño.  No en microondas. No usarlo simultáneamente con cremas tópicas. En caso de irritación suspender inmediatamente y consultar a un médico. Mantenerse fuera del alcance de los niños. <br><br>
                        <strong>Ingredientes:</strong> Iron, oxide black, celulosa, edta y fragancia. Parche diseñado con ajuste ergonómico y seguro, Almohadilla térmica relajante cómoda diaria,
                        Origen y tecnología: China.<br><br>
                        PRECIO 1 paquete X3 9.999    2 paquete X 6 19.999   <br><br>    
                        <strong>NO INCLUYE ENVIO</strong>
                        <br>`
            ,
            video: "/src/assets/video/parches-video.mp4"
        },*/

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



    
});