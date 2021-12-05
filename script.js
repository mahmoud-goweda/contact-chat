$(document).ready(function() {
    $('#prime').click(function() {
        toggleFab();

    });
    //Toggle chat and links
    function toggleFab() {
        $('.prime').toggleClass(' far fa-comment-alt');
        $('.prime').toggleClass('fas fa-times');
        $('.prime').toggleClass('is-active');
        $('.prime').toggleClass('is-visible');
        $('#prime').toggleClass('is-float');
        $('.chat').toggleClass('is-visible');
        $('.fab').toggleClass('is-visible');
        $('.contactmessege-button-popup').removeClass('active')
        $('.contactmessege-button-popup').removeClass('isPopoup-open')
        $('.contactmessege-button-button').css('display', 'block')
    }


    // add chat platforms
    $('#whatsUp-button').contactmessegeButton({
        id_phone: '+201016163853',
        messengerType: 'whatsup', //whatsup or messenger
        message: "",
        chatMessage: 'Hi there 👋<br>',
        showPopup: true,
        // headerColor: '#033E8C',
        buttonColor: 'unset',
        // avatar: './assets/avatar.jpg',
        position: "right",
        linkButton: false,
        showOnIE: false,
        header_text: false,
        nameClient: "",
        headerTitle: '',
        buttonImage: "./contact-chat/assets/whatsapp.svg"

    });

    $('#messenger-button').contactmessegeButton({
        messengerType: 'messenger', //whatsup or messenger
        id_phone: '1610773482319571', //whatsup number or messenger Id
        showPopup: false,
        buttonColor: 'unset',
        position: "right",
        linkButton: true,
        showOnIE: false,
        buttonImage: "./contact-chat/assets/messenger.png"
    });

    // clear time

    let clearTime
    $('.contactmessege-button-button').click(function() {
        $('.contactmessege-button-popup').toggleClass('isPopoup-open')
        $('.contactmessege-button-button').css('display', 'none')
        clearTime = setTimeout(() => {
            $('.contactmessege-button-popup').css('transition', '.5s ease-in-out all')
            $('.contactmessege-button-popup').removeClass('popup-margin')
            $('.contactmessege-button-popup').css('margin-bottom', '0');
            // clearTimeout(clearTime)
            myStopFunction()

        }, 500);
    });

    function myStopFunction() {
        clearTimeout(clearTime);
    }

    $('#closePopup').click(function() {
        $('.contactmessege-button-popup').toggleClass('isPopoup-open');
        $('.contactmessege-button-button').css('display', 'block');
        // $clearTime = setTimeout(() => {
        // $('.contactmessege-button-popup').css('transition', '.5s ease-in-out all')
        $('.contactmessege-button-popup').toggleClass('popup-margin')
        $('.prime').removeClass(' far fa-comment-alt');
        $('.prime').addClass('fas fa-times');
        $('.prime').addClass('is-active');

    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#handlescroll').css('transition', '.5s ease-in-out all')

            $('#handlescroll').css('right', '68px')
        } else {
            $('#handlescroll').css('transition', '.5s ease-in-out all')

            $('#handlescroll').css('right', '0')
        }
    });

    // copy text 
    function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        alert('Copied to Clipboard');
        $temp.remove();
    }
    $('#copy-cli').click(function copyToClipboard(element) {
        var $temp = $("<input>");
        $("body").append($temp);
        $temp.val($(element).text()).select();
        document.execCommand("copy");
        alert('Copied to Clipboard');
        $temp.remove();
    })
})