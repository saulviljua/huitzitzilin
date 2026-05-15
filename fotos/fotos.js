function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function mostrarImagen() {
    const random_num = Math.floor(randomInt(0,9));
    const img_selector = "img" + random_num;
    const img = document.getElementById(img_selector);
    const ojo = document.getElementById("ojo");
	img.classList.add("visible");
    img.classList.remove("op");
    ojo.classList.remove("op");
    ojo.classList.add("ojo");
    setTimeout(() => {
		img.classList.remove("visible");
        img.classList.add("op");
        ojo.classList.add("op");
        ojo.classList.remove("ojo");
	}, 4000);
}