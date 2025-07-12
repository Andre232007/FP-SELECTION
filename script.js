// script.js
const cars = [
    {
        image: "./img/carro-1.png",
        title: "911 Turbo",
        year: "2023",
        description: "Explore the 2023 Porsche 911 Turbo, a masterpiece of German engineering. This model boasts a twin-turbocharged 3.8-liter flat-six engine, producing an exhilarating 572 horsepower. It goes from 0 to 60 mph in just 2.7 seconds, offering unmatched performance and a luxurious interior crafted with premium materials. Experience cutting-edge technology and a design that blends classic Porsche lines with modern aesthetics.",
        price: "R$ 1.500.000",
        features: [
            "Engine: 3.8L Twin-Turbo Flat-Six",
            "Horsepower: 572 hp",
            "0-60 mph: 2.7 seconds",
            "Transmission: 8-speed PDK",
            "Top Speed: 205 mph (330 km/h)",
            "Interior: Leather, Carbon Fiber accents, 10.9-inch touchscreen"
        ]
    },
    {
        image: "./img/carro-2.png",
        title: "Ferrari F8 ",
        year: "2021",
        description: "The 2021 Ferrari F8 Tributo is a tribute to raw power and aerodynamic efficiency. Its 3.9-liter twin-turbo V8 engine delivers a staggering 710 horsepower, making it one of the most powerful V8s in Ferrari history. With a top speed of over 211 mph (340 km/h) and a 0-60 mph time of 2.9 seconds, the F8 Tributo offers an unparalleled driving experience. Its design emphasizes performance, with innovative aerodynamic solutions seamlessly integrated into its iconic lines.",
        price: "R$ 2.800.000",
        features: [
            "Engine: 3.9L Twin-Turbo V8",
            "Horsepower: 710 hp",
            "0-60 mph: 2.9 seconds",
            "Transmission: 7-speed F1 dual-clutch",
            "Top Speed: 211 mph (340 km/h)",
            "Interior: Sport seats, Alcantara, Advanced infotainment system"
        ]
    },
    {
        image: "./img/carro-3.png",
        title: "Lamborghini ",
        year: "2022",
        description: "Unleash the beast with the 2022 Lamborghini Aventador SVJ. This limited-edition supercar is powered by a naturally aspirated 6.5-liter V12 engine, pushing out an incredible 759 horsepower. It holds the record for the fastest production car on the Nürburgring Nordschleife. The SVJ features advanced active aerodynamics (ALA 2.0) for superior downforce and handling, delivering a truly visceral and unforgettable driving experience.",
        price: "R$ 4.000.000",
        features: [
            "Engine: 6.5L Naturally Aspirated V12",
            "Horsepower: 759 hp",
            "0-60 mph: 2.8 seconds",
            "Transmission: 7-speed ISR (Independent Shifting Rod)",
            "Top Speed: 217 mph (350 km/h)",
            "Interior: Carbon skin, TFT digital display, Navigation system"
        ]
    }
];

let currentIndex = 0;

const carImg = document.querySelector(".car-img img");
const carTitle = document.querySelector(".car-info h2");
const carYear = document.querySelector(".car-info .year");
const carDescription = document.querySelector(".car-info p");
const carNumber = document.querySelector(".indicators .number");

const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const indicators = document.querySelectorAll(".indicators ul li");

function animateCar() {
    const carContainer = document.querySelector(".car-img");
    carContainer.style.animation = "none"; 
    setTimeout(() => {
        carContainer.style.animation = "slideIn 1s ease-out";
    }, 10); 
}


function updateCar(index) {
    carImg.src = cars[index].image;
    carTitle.textContent = cars[index].title;
    carYear.textContent = cars[index].year;
    carDescription.innerHTML = cars[index].description.split('.')[0] + "..."; 
    
    carNumber.textContent = `0${index + 1}`;

    indicators.forEach((indicator, i) => {
        indicator.classList.toggle("active", i === index);
    });

    animateCar();
}
leftArrow.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + cars.length) % cars.length;
    updateCar(currentIndex);
});

rightArrow.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % cars.length;
    updateCar(currentIndex);
});

updateCar(currentIndex);
