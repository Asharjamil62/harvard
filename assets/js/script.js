// Show each ".reveal" box with an animation when it comes into view
const boxes = document.querySelectorAll(".reveal");

const watcher = new IntersectionObserver(function (items) {
    items.forEach(function (item) {
        if (item.isIntersecting) {
            item.target.classList.add("show");
            watcher.unobserve(item.target);
        }
    });
}, { threshold: 0.2 });

boxes.forEach(function (box) {
    watcher.observe(box);
});
