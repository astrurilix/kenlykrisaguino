$(document).ready(function() {
    const cards = $('.social-card');
    const cardsContainer = $('.socials-media-cards');

    cardsContainer.on("mousemove", function(e) {
        cards.each(function() {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            $(this).css("--mouse-x", `${x}px`);
            $(this).css("--mouse-y", `${y}px`);
        });
    });
});