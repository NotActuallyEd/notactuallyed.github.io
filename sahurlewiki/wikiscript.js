document.addEventListener('DOMContentLoaded', function () {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById('mobile-message').style.display = 'block';
        document.getElementById('wiki-card').style.display = 'none';
        document.getElementById('references').style.display = 'none'
    }
});
