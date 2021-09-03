var x = document.getElementById("chat_on");
        var y = document.getElementById("chat_off");
        var z = document.getElementById('chat-frame').src;
        var mainContainer = document.getElementById('main-container');
        var botLogo = document.getElementById('logo');
        var closeLogo = document.getElementById('close-logo');
        document.getElementById('main-container').style.display = 'none';
        document.getElementById('close-logo').style.display = 'none';

        function botIcon() {
            toggleForm();
            mainContainer.style.display = 'flex';
            botLogo.style.display = 'none'
            if (mainContainer.style.display === 'flex') {
                document.getElementById('close-logo').style.display = 'flex';
                document.getElementById('CTA_block').style.display = 'none';
            }

            if ((z === '') || (z === null)) {
                document.getElementById('chat-frame').src = 'https://ui.srv12-va.com/agent/'
                z = document.getElementById('chat-frame').src;
            }
        }

        botLogo.addEventListener('keydown', function () {
            if ((event.keyCode === 38) || (event.keyCode === 40) || (event.keyCode === 32) || (event.keyCode === 13)) {
                botIcon();
            }
        })

        closeLogo.addEventListener('click', close => {
            toggleForm();
            document.getElementById('chat-frame').src = 'https://ui.srv12-va.com/agent/';
            mainContainer.style.display = 'none';
            if (mainContainer.style.display === 'none') {
                closeLogo.style.display = 'none';
                botLogo.style.display = 'flex';
                document.getElementById('CTA_block').style.display = 'flex';
                document.getElementById('CTA_text').classList.add("CTA_text_container");
                document.getElementById('CTA_text_newline').classList.add("CTA_text_container_close");
                document.getElementById('cross').classList.add('cross_on_close_icon')
            }
        })

        closeLogo.addEventListener('keydown', function() {
            botLogo.style.display = 'flex'
            if ((event.keyCode === 38) || (event.keyCode === 40) || (event.keyCode === 32) || (event.keyCode === 13)) {
                toggleForm();
              	document.getElementById('chat-frame').src = 'https://ui.srv12-va.com/agent/';
                mainContainer.style.display = 'none';
                if (mainContainer.style.display === 'none') {
                    closeLogo.style.display = 'none';
                    botLogo.style.display = 'flex';
                    document.getElementById('CTA_block').style.display = 'flex';
                    document.getElementById('CTA_text').classList.add("CTA_text_container");
                    document.getElementById('CTA_text_newline').classList.add("CTA_text_container_close");
                    document.getElementById('cross').classList.add('cross_on_close_icon')
                }
            }
        })

        // To handle keyboard operations and mouse click starts here
        document.getElementById('chat_off').addEventListener('mousedown', function () {
            toggleForm();
            if ((z === '') || (z === null)) {
                document.getElementById('chat-frame').src = 'https://ui.srv12-va.com/agent/'
                z = document.getElementById('chat-frame').src
            }

        });

        // closing chatBot
        // mousedown event on heading area to close the chatBot
        document.getElementById('chat_on').addEventListener('mousedown', function () {
            toggleForm();
            mainContainer.style.display = 'none';
            if (mainContainer.style.display === 'none') {
                closeLogo.style.display = 'none'
                botLogo.style.display = 'flex'
            }
        });

        //keydown event on heading area to close the chatbot
        document.getElementById('chat_on').addEventListener('keydown', function () {
          	botLogo.style.display = 'none'
            if ((event.keyCode === 38) || (event.keyCode === 40) || (event.keyCode === 32) || (event.keyCode === 13)) {
                toggleForm();
                mainContainer.style.display = 'none';
                if (mainContainer.style.display === 'none') {
                    closeLogo.style.display = 'none'
                    botLogo.style.display = 'flex'
                    document.getElementById('CTA_block').style.display = 'flex';
                }
            }
        });

        function closeCTA() {
            document.getElementById('CTA_block').style.display = 'none';
        }

        // To handle keyboard operations and mouse click end here
        function toggleForm() {
            document.getElementById('CTA_block').style.display = 'flex';
            document.getElementById('CTA_text').classList.add("CTA_text_container");
            document.getElementById('CTA_text_newline').classList.add("CTA_text_container_close");
            document.getElementById('cross').classList.add('cross_on_close_icon')
            if (y.style.display === "block") {
                y.style.display = "none";
                x.style.display = "block";
            } else if (y.style.display === "none") {
                x.style.display = "none";
                y.style.display = "block";
            }
            const state = document.getElementById("chat-window").style.display;
            const newState = state === 'none' ? 'flex' : 'none';
            newState === "none" ?
                document.getElementById("toggle-open").classList.add("toggle-icon-open") :
                document
                    .getElementById("toggle-open")
                    .classList.remove("toggle-icon-open");
            document.getElementById("chat-window").style.display = newState;

            if (newState === "none") {
                document.getElementById('main-container').classList.add("close");
                document.getElementById('main-container').classList.remove("open");
            } else if (newState === 'flex') {
                document.getElementById('main-container').classList.remove("close");
                document.getElementById('main-container').classList.add("open");
            }

        }