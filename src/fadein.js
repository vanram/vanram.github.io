// On scroll, when an element appears it will fade in
document.addEventListener("scroll", function (e) {
    let pageTop = $(document).scrollTop()
    let pageBottom = pageTop + $(window).height()
    let tags = document.getElementsByClassName('job-item') // <--- Class name here

    for (let i = 0; i < tags.length; i++) {
        let tag = tags[i]

        if ($(tag).position().top + 100 < pageBottom) {
            $(tag).addClass("visible")
        }
    }
})

/* CSS Rules
.class {
    opacity: 0;
    transform: translate(0, 50px);
    transition: all 1s;
}
.class.visible {
    opacity: 1;
    transform: translate(0, 0);
}
 */