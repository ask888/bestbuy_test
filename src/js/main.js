
(function ($) {
    $(function () {
        $('.playstation-products-list-mobile').slick({
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            centerMode: true,
            centerPadding: '85px 0 15px',
            infinite: false
        });

        // Set the date we're counting down to
        var countDownDate = new Date("Dec 1, 2018 00:00:00").getTime();

        // Update the count down every 1 second
        var countDownTimer = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Display the result in Countdown element
            document.getElementById("day-number").innerHTML = days;
            document.getElementById("hour-number").innerHTML = hours;
            document.getElementById("min-number").innerHTML = minutes;
            document.getElementById("sec-number").innerHTML = seconds;

            // If the countdown is finished, write some text
            if (distance < 0) {
                clearInterval(countDownTimer);
                document.getElementById("demo").innerHTML = "EXPIRED";
            }
        }, 1000);

    });
})(jQuery);