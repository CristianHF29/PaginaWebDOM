/* Codigo para mostrar imagen en detalles dependiendo del id*/
document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const movies = {
        "1": {
            title: "Superman",
            badges: ["A - Todo Público", "2:10 Horas", "SUB/DOB"],
            description: "Nueva película de Superman, escrita por James Gunn, que «no será una historia de origen». Con su estilo característico, Gunn aborda al superhéroe original en el recién imaginado universo DC con una singular mezcla de acción épica, humor y corazón, ofreciendo un Superman impulsado por la compasión y una creencia inherente en la bondad de la humanidad.",
            poster: "../assets/superman.png",
            details: {
                estreno: "2025-07-10",
                original: "Superman Dob",
                genero: "Acción, Ciencia ficción",
                reparto: "Nicholas Hoult, David Corenswet",
                director: "James Gunn",
                produccion: "",
                edad: "A",
                exhibicion: "2D | 3D | VIP"
            }
        },
        "2": {
            title: "Los 4 Fantásticos: Primeros pasos",
            badges: ["A - Todo Público", "1:55 Horas", "SUB/DOB"],
            description: "Ambientada en el vibrante telón de fondo de un mundo retro-futurista inspirado en los años 60, presenta a la Primera Familia de Marvel mientras se enfrentan a su desafío más terrorífico hasta la fecha. Obligados a equilibrar sus roles como héroes con la fortaleza de su vínculo familiar, deben defender la Tierra de un dios espacial voraz llamado Galactus y su enigmático Heraldo, Silver Surfer. Y si el plan de Galactus de devorar todo el planeta y a todos en él no fuera lo suficientemente malo, de repente se vuelve muy personal. Estreno de «Los 4 Fantásticos» en el MCU.",
            poster: "../assets/4fantasticos.png",
            details: {
                estreno: "2025-07-24",
                original: "Los 4 Fantásticos: Primeros pasos",
                genero: "Acción, Ciencia ficción",
                reparto: "Pedro Pascal, Vanessa Kirby, Joseph Quinn",
                director: "Matt Shakmans",
                produccion: "",
                edad: "A",
                exhibicion: "2D | 3D | VIP"
            }
        },
        "3": {
            title: "Jurassic World: Renace",
            badges: ["Mayores de 12 años", "2:14 Horas", "SUB/DOB"],
            description: "Cinco años después de los acontecimientos de Jurassic World Dominion, la ecología del planeta Tierra ha demostrado ser insoportable para los dinosaurios. Los pocos que quedan viven en ambientes aislados en las regiones ecuatoriales, donde el clima se parece al que conocieron antaño. Las tres criaturas más grandes dentro de esta biosfera tropical tienen en su ADN la clave para fabricar un medicamento que aportará beneficios milagrosos a la raza humana. Zora Bennett, una experta en operaciones encubiertas, es contratada para dirigir a un equipo de especialistas en una misión secreta cuyo objetivo es conseguir el material genético. Pero la operación liderada por Zora se cruzará con una familia cuyo barco volcó por culpa de unos dinosaurios acuáticos y todos acabarán en una isla prohibida donde se ubicó hace años un centro de investigación ultrasecreto del Parque Jurásico. Allí, en un lugar poblado por dinosaurios de numerosas especies, se enfrentarán a un descubrimiento tan sorprendente como siniestro que lleva décadas escondido.",
            poster: "../assets/world.png",
            details: {
                estreno: "2025-07-03",
                original: "Jurassic World: Renace",
                genero: "Acción, Ciencia ficción",
                reparto: "Scarlett Johansson, Mahershala Ali, Rupert Friend",
                director: "Gareth Edwardss",
                produccion: "",
                edad: "Mayores de 12 años",
                exhibicion: "2D | 3D | VIP"
            }
        },
        "4": {
            title: "Pitufos",
            badges: ["A - Todo Público", "1:33 Horas", "SUB/DOB"],
            description: "Película musical de animación centrada en las icónicas creaciones de Peyo. Cuando Papá Pitufo es secuestrado de forma misteriosa por los malvados brujos Razamel y Gargamel, Pitufina lleva a los Pitufos a una misión al mundo real para salvarle. Con la ayuda de nuevos amigos, los Pitufos deberán descubrir qué define su destino para salvar el universo.",
            poster: "../assets/pitufos.png",
            details: {
                estreno: "2025-07-17",
                original: "Pitufos",
                genero: "Niños, Animado",
                reparto: "",
                director: "Chris Miller, Matt Landon",
                produccion: "",
                edad: "A",
                exhibicion: "2D | 3D | VIP"
            }
        },
        "5": {
            title: "Sé lo que hicieron el verano pasado",
            badges: ["Mayores de 15 años ", "1:50 Horas", "SUB/DOB"],
            description: "Cuando cinco amigos provocan sin querer un accidente de coche mortal, encubren su implicación y hacen un pacto para mantenerlo en secreto en lugar de afrontar las consecuencias. Un año después, su pasado vuelve para atormentarlos y se ven obligados a enfrentarse a una aterradora verdad: alguien sabe lo que hicieron el último verano… y está empeñado en vengarse. A medida que los amigos son acechados uno a uno por un asesino, descubren que esto ya ha sucedido antes, y recurren a dos supervivientes de la legendaria Masacre de Southport de 1997 en busca de ayuda.",
            poster: "../assets/horror.png",
            details: {
                estreno: "2025-07-17",
                original: "Sé lo que hicieron el verano pasado",
                genero: "Suspenso",
                reparto: "Madelyn Cline, Chase Sui Wonders, Jonah Hauer - King",
                director: "Jennifer Kaytin Robinson",
                produccion: "",
                edad: "Mayores de 15 años",
                exhibicion: "2D | VIP"
            }
        },
    };

    const movie = movies[id];

    if (!movie) {
        document.getElementById("title").textContent = "Película no encontrada";
        document.getElementById("description").textContent = "No hay datos para esta pelicula.";
        return;
    }

    // Cargar texto e imagen
    document.getElementById("title").textContent = movie.title;
    document.getElementById("description").textContent = movie.description;
    document.getElementById("poster").src = movie.poster;

    // Badges
    const badgeContainer = document.getElementById("badges");
    badgeContainer.innerHTML = "";
    movie.badges.forEach(badge => {
        const span = document.createElement("span");
        span.className = "badge badge-custom";
        span.textContent = badge;
        badgeContainer.appendChild(span);
    });

    // Detalles
    Object.entries(movie.details).forEach(([key, value]) => {
        const el = document.getElementById(key);
        if (el) el.textContent = value;
    });
});
