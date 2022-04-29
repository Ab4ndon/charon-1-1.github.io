$(function () {
    setTimeout(function () {
        $('.name').animate({
            opacity: "1",
            top: "15%"
        }, 2000);

    }, 6000);
    setTimeout(function () {
        $('.happy').animate({
            opacity: "1",
            top: "15%"
        }, 2000);

    }, 6000);
    setTimeout(function () {
        $('.button-style1').animate({
            opacity: "1",
            top: "70%"
        }, 1500);
        $('.button-style2').animate({
            opacity: "1",
            top: "85%"
        }, 2000);
    }, 9000);
    $(window).click(function () {
        $('audio')[0].play();
    });
})<script>
        document.querySelectorAll('.github-emoji')
          .forEach(el => {
            if (!el.dataset.src) { return; }
            const img = document.createElement('img');
            img.style = 'display:none !important;';
            img.src = el.dataset.src;
            img.addEventListener('error', () => {
              img.remove();
              el.style.color = 'inherit';
              el.style.backgroundImage = 'none';
              el.style.background = 'none';
            });
            img.addEventListener('load', () => {
              img.remove();
            });
            document.body.appendChild(img);
          });
      </script>