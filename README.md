# Welcome, you have entered my GitHub
```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Terminal</title>

<style>
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background: #000;
        color: #00ff41;
        font-family: "Courier New", monospace;
        overflow: hidden;
    }

    /* =========================
       HACKER INTRO
    ========================= */

    #intro {
        position: fixed;
        inset: 0;
        background: #000;
        z-index: 9999;
        padding: 35px;
        overflow: hidden;
        transition: opacity 1s ease;
    }

    /* Scanlines */
    #intro::after {
        content: "";
        position: absolute;
        inset: 0;
        pointer-events: none;
        background: repeating-linear-gradient(
            to bottom,
            rgba(0,255,65,0.03) 0px,
            rgba(0,255,65,0.03) 1px,
            transparent 1px,
            transparent 4px
        );
    }

    /* Matrix background */
    #matrix {
        position: absolute;
        inset: 0;
        opacity: 0.12;
        font-size: 14px;
        overflow: hidden;
        pointer-events: none;
    }

    .matrix-line {
        white-space: nowrap;
        position: absolute;
        animation: fall linear infinite;
    }

    @keyframes fall {
        from {
            transform: translateY(-100vh);
        }
        to {
            transform: translateY(100vh);
        }
    }

    /* Terminal */
    .terminal {
        position: relative;
        z-index: 2;
        max-width: 1000px;
        margin: auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .top {
        color: #00ff41;
        margin-bottom: 25px;
    }

    .line {
        margin: 10px 0;
        text-shadow: 0 0 8px #00ff41;
    }

    .success {
        color: #00ff41;
    }

    .warning {
        color: #7cff91;
    }

    .big {
        text-align: center;
        font-size: clamp(35px, 7vw, 85px);
        font-weight: bold;
        margin: 40px 0 15px;
        letter-spacing: 8px;
        animation: glitch 1.5s infinite;
        text-shadow:
            0 0 5px #00ff41,
            0 0 20px #00ff41;
    }

    @keyframes glitch {
        0%, 90%, 100% {
            transform: translate(0);
        }

        92% {
            transform: translate(-5px, 2px);
        }

        94% {
            transform: translate(5px, -2px);
        }

        96% {
            transform: translate(-3px, 0);
        }
    }

    /* Loading bar */
    .loading-container {
        width: min(700px, 90%);
        margin: 30px auto;
    }

    .loading-border {
        border: 2px solid #00ff41;
        padding: 5px;
        box-shadow: 0 0 15px rgba(0,255,65,0.4);
    }

    #loading-bar {
        height: 25px;
        width: 0%;
        background: #00ff41;
        box-shadow: 0 0 15px #00ff41;
        transition: width 0.15s;
    }

    #percent {
        text-align: center;
        margin-top: 10px;
    }

    #enter {
        text-align: center;
        margin-top: 45px;
        animation: blink 1s infinite;
        cursor: pointer;
    }

    @keyframes blink {
        50% {
            opacity: 0.2;
        }
    }

    .cursor {
        display: inline-block;
        width: 10px;
        height: 18px;
        background: #00ff41;
        animation: blink 0.7s infinite;
        vertical-align: middle;
    }

    /* =========================
       YOUR ACTUAL WEBSITE
    ========================= */

    #website {
        display: none;
        min-height: 100vh;
        background:
            radial-gradient(circle at center, #061b0a, #000 70%);
        padding: 60px 20px;
        text-align: center;
    }

    #website h1 {
        font-size: 60px;
        text-shadow: 0 0 20px #00ff41;
    }

    #website p {
        color: #8aff9d;
        font-size: 18px;
    }

    .button {
        display: inline-block;
        margin-top: 25px;
        padding: 14px 30px;
        border: 1px solid #00ff41;
        color: #00ff41;
        text-decoration: none;
        transition: 0.2s;
    }

    .button:hover {
        background: #00ff41;
        color: #000;
        box-shadow: 0 0 25px #00ff41;
    }
</style>
</head>

<body>

<!-- =========================
     INTRO SCREEN
========================= -->

<div id="intro">

    <div id="matrix"></div>

    <div class="terminal">

        <div class="top">
            SYSTEM://BOOT_SEQUENCE
        </div>

        <div id="logs">
            <div class="line">> INITIALIZING SYSTEM...</div>
        </div>

        <div class="big">
            ACCESS GRANTED
        </div>

        <div style="text-align:center;">
            > WELCOME TO MY DOMAIN <span class="cursor"></span>
        </div>

        <div class="loading-container">

            <div class="loading-border">
                <div id="loading-bar"></div>
            </div>

            <div id="percent">
                LOADING... 0%
            </div>

        </div>

        <div id="enter">
            [ PRESS ENTER TO CONTINUE ]
        </div>

    </div>
</div>


<!-- =========================
     YOUR WEBSITE
========================= -->

<div id="website">

    <h1>MY WEBSITE</h1>

    <p>
        Welcome to my website.
    </p>

    <a href="#" class="button">
        ENTER
    </a>

</div>


<script>

    /* =========================
       MATRIX BACKGROUND
    ========================= */

    const matrix = document.getElementById("matrix");

    const characters =
        "01ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&@";

    for (let i = 0; i < 45; i++) {

        const line = document.createElement("div");

        line.className = "matrix-line";

        let text = "";

        for (let j = 0; j < 35; j++) {
            text += characters[
                Math.floor(Math.random() * characters.length)
            ];
        }

        line.textContent = text;

        line.style.left = Math.random() * 100 + "%";
        line.style.animationDuration =
            (4 + Math.random() * 8) + "s";

        line.style.animationDelay =
            Math.random() * 5 + "s";

        matrix.appendChild(line);
    }


    /* =========================
       BOOT LOGS
    ========================= */

    const logs = document.getElementById("logs");

    const bootMessages = [

        "> CHECKING SYSTEM PROTOCOLS... [ OK ]",

        "> LOADING CORE MODULES... [ OK ]",

        "> CONNECTING TO NETWORK... [ OK ]",

        "> VERIFYING ACCESS KEY... [ OK ]",

        "> ENCRYPTED CONNECTION ESTABLISHED",

        "> INITIALIZING USER PROFILE... [ OK ]",

        "> SCANNING PORTS... [ OK ]",

        "> LOADING INTERFACE... [ OK ]",

        "> SECURITY STATUS: ACTIVE",

        "> CONNECTION ESTABLISHED."

    ];

    let messageIndex = 0;

    function addLog() {

        if (messageIndex >= bootMessages.length) {
            return;
        }

        const line = document.createElement("div");

        line.className = "line success";

        line.textContent = bootMessages[messageIndex];

        logs.appendChild(line);

        messageIndex++;

        setTimeout(addLog, 350);
    }

    setTimeout(addLog, 500);


    /* =========================
       LOADING BAR
    ========================= */

    const bar = document.getElementById("loading-bar");
    const percent = document.getElementById("percent");

    let progress = 0;

    const loading = setInterval(() => {

        progress += Math.floor(Math.random() * 5) + 1;

        if (progress >= 100) {

            progress = 100;

            clearInterval(loading);

            percent.textContent =
                "SYSTEM READY — 100%";

            document.getElementById("enter").textContent =
                "[ PRESS ENTER TO CONTINUE ]";

        } else {

            percent.textContent =
                "LOADING... " + progress + "%";

        }

        bar.style.width = progress + "%";

    }, 100);


    /* =========================
       ENTER WEBSITE
    ========================= */

    function enterWebsite() {

        if (progress < 100) return;

        const intro = document.getElementById("intro");
        const website = document.getElementById("website");

        intro.style.opacity = "0";

        setTimeout(() => {

            intro.style.display = "none";
            website.style.display = "block";

            document.body.style.overflow = "auto";

        }, 1000);
    }


    document.addEventListener("keydown", (event) => {

        if (event.key === "Enter" || event.key === " ") {
            enterWebsite();
        }

    });

    document.getElementById("enter")
        .addEventListener("click", enterWebsite);

</script>

</body>
</html>
```
