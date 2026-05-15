function startLoader() {
    let counterElement = document.querySelector(".counter");

    let currentValue = 0;

    function updateCounter() {
        if (currentValue === 100) {
            return
        }

        currentValue += Math.floor(Math.random()*10)+1;

        if(currentValue>100) {
            currentValue = 100;
        }

        counterElement.textContent = currentValue;

        let delay = Math.floor(Math.random() *200)+10;
        setTimeout(updateCounter, delay);
    }

    updateCounter();

    gsap.to(".counter", 0.25, {
        delay: 3.5,
        opacity: 0,
        display: "none",
        onComplete: function() {
            // Apply CSS animation after GSAP animation finishes
            let element1 = document.querySelector(".first-name");
            let element2 = document.querySelector(".second-name");
            let element3 = document.querySelector(".myself");

            element1.style.animation = "slideIn 1.6s ease forwards";
            element2.style.animation = "slideInLess 1.8s ease forwards 0.2s";
            element3.style.animation = "slideIn 2s ease forwards 0.5s";
        }
    })

    gsap.to(".overlay", 1.5, {
        delay:3.5,
        opacity: 0,
        display: "none",
    })
}

startLoader();