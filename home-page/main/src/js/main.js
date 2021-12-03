document.addEventListener('DOMContentLoaded', () => {

    //============== переход на второстепенные страницы ==========

    document.querySelector('#plugLeft').addEventListener('click', () => {
        
    });

    document.querySelector('#plugRight').addEventListener('click', () => {
        
    });

    document.querySelector('#portraits').addEventListener('click', () => {
        
    });

    document.querySelector('#priority').addEventListener('click', () => {
        
    });

    document.querySelector('#all_branches').addEventListener('click', () => {
        
    });

    document.querySelector('#plan').addEventListener('click', () => {
        
    });

    document.querySelector('#staff').addEventListener('click', () => {
        
    });

    document.querySelector('#finance').addEventListener('click', () => {
        
    });

    document.querySelector('#science').addEventListener('click', (evt) => {
        let target = evt.target
       
        if (target.hasAttribute('data-btn')) {
            // выполнить ф-ию changeScienceDiagramData
            // ф-ия changeScienceDiagramData описана в ниже в блоке science 
            changeScienceDiagramData(target)
            clearTimeout(tr)
        } 
        else {
            // открыть страницу science
        }
    });

    document.querySelector('#international').addEventListener('click', () => {
        
    });

    document.querySelector('#vaccination').addEventListener('click', () => {
        
    });

    document.querySelector('#vaccination').addEventListener('click', () => {
        
    });

 

   
    //=================== служебные функции =====================

    function progressLength(progressBar, data) {
        let currentValue;

        if (data > 100) {
            currentValue = progressBar.length;
        } else {
            currentValue = Math.round((progressBar.length / 100) * data);
        }

        return currentValue; 
    }

    
    function setProgressBar(progressBar, length, val) {
        for (let i = 0; i < length; i++) {
            progressBar[i].style.fill = val;
        }
    }  

    
    const insertToPage = (className, data) => document.querySelector(`.${className}`).innerHTML = data;


    function numDataOutput(num) {
        let str = num.toString();
        let out;

        if (str.indexOf('.') !== -1) {
            str = num.toString().split('.');

            const intPart = str[0];
            const decimalPart = str[1];

            if (intPart.length <= 3) {
                out = intPart
            }
            else {
                out = intPart.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
            }
    
            out += '.' + decimalPart;
        }
        else {
            if (str.length <= 3) {
                out = str;
            }
            else {
                out = str.replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
            }
        }    

        return out;
    } 




    //=================== центральная диаграмма =====================


    let d = () => {
        return `
       
        <div class="performance-diagram__contains">
            <svg class="performance-diagram-svg" width="10vw" height="10.1vw" viewBox="0 0 366 369" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-1"  d="M47.8668 179.775C47.9261 177.007 48.0712 174.231 48.3039 171.451L3.4607 167.698C3.15005 171.409 2.95626 175.115 2.87708 178.811L47.8668 179.775Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-2"  d="M48.7156 167.304C49.0319 164.554 49.4345 161.801 49.9253 159.048L5.62365 151.151C4.96946 154.821 4.43237 158.493 4.01031 162.163L48.7156 167.304Z" fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-3"  d="M50.7198 154.958C51.2891 152.249 51.9448 149.541 52.6887 146.837L9.30075 134.9C8.31247 138.493 7.44017 142.094 6.68203 145.701L50.7198 154.958Z"   fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-4"  d="M53.8723 142.814C54.691 140.132 55.5863 137.494 56.5549 134.901L14.4008 119.152C13.1108 122.605 11.9201 126.114 10.8324 129.678L53.8723 142.814Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-5"  d="M58.0757 131.041C59.1416 128.447 60.2797 125.904 61.4866 123.413L20.9899 103.791C19.3827 107.108 17.869 110.491 16.4529 113.937L58.0757 131.041Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-6"  d="M63.3283 119.353C64.6088 116.899 65.9698 114.475 67.4113 112.086L28.8827 88.8366C26.9584 92.0255 25.1413 95.2613 23.4315 98.5387L63.3283 119.353Z" fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-7"  d="M69.6193 108.552C71.1222 106.228 72.704 103.939 74.3648 101.688L38.1591 74.9649C35.9453 77.9642 33.8354 81.0175 31.8298 84.1197L69.6193 108.552Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-8"  d="M76.8906 98.3745C78.6019 96.1993 80.3904 94.063 82.2563 91.9693L48.6609 62.0301C46.1822 64.8116 43.8031 67.6531 41.5241 70.5499L76.8906 98.3745Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-9"  d="M85.1011 88.8883C87.0244 86.8471 88.9968 84.8794 91.0147 82.9852L60.2157 50.1763C57.5284 52.699 54.9049 55.3165 52.3499 58.028L85.1011 88.8883Z"   fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-10" d="M94.0897 80.1997C96.1955 78.3474 98.3433 76.5727 100.529 74.8755L72.9335 39.3302C70.0221 41.5906 67.1653 43.9512 64.3679 46.412L94.0897 80.1997Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-11" d="M103.906 72.4005C106.152 70.7817 108.456 69.2266 110.816 67.7388L86.8184 29.6714C83.6677 31.6576 80.5917 33.7338 77.5929 35.8953L103.906 72.4005Z" fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-12" d="M114.375 65.5713C116.761 64.1684 119.202 62.8325 121.696 61.567L101.333 21.4377C98.009 23.1245 94.7533 24.9063 91.5688 26.7784L114.375 65.5713Z"   fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-13" d="M125.44 59.7393C127.946 58.5635 130.503 57.457 133.11 56.4233L116.523 14.5917C113.059 15.965 109.658 17.4367 106.322 19.0026L125.44 59.7393Z"      fill="#0C1C52"/>              
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-14" d="M137.035 54.9466C139.669 53.9856 142.315 53.1123 144.968 52.3251L132.168 9.18391C128.635 10.2323 125.116 11.3941 121.616 12.6707L137.035 54.9466Z" fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-15" d="M148.966 51.2157C151.679 50.5054 154.395 49.8833 157.111 49.3476L148.401 5.19852C144.785 5.91191 141.172 6.7395 137.568 7.68319L148.966 51.2157Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-16" d="M161.461 48.3743C164.192 47.9193 166.946 47.5471 169.722 47.2602L165.094 2.49881C161.389 2.88185 157.711 3.37872 154.065 3.98631L161.461 48.3743Z" fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-17" d="M173.873 46.8958C176.634 46.6966 179.414 46.5817 182.21 46.5533L181.754 1.55565C178.027 1.59342 174.319 1.74667 170.634 2.01252L173.873 46.8958Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-18" d="M186.377 46.5753C189.144 46.6324 191.926 46.7746 194.722 47.0041L198.405 2.15513C194.692 1.85018 190.99 1.66098 187.305 1.58492L186.377 46.5753Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-19" d="M198.894 47.4212C201.682 47.7282 204.44 48.1187 207.168 48.5897L214.826 4.24614C211.194 3.61888 207.524 3.09963 203.821 2.69171L198.894 47.4212Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-20" d="M211.243 49.3684C213.99 49.9348 216.7 50.5815 219.371 51.3055L231.142 7.87239C227.585 6.90823 223.98 6.04811 220.331 5.29568L211.243 49.3684Z"     fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-21" d="M222.867 51.819C225.488 52.7102 228.091 53.6857 230.672 54.746L247.774 13.1225C244.329 11.707 240.854 10.4046 237.354 9.21455L222.867 51.819Z"     fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-22" d="M234.501 56.3893C237.028 57.5202 239.532 58.7343 242.009 60.0326L262.898 20.175C259.596 18.4445 256.257 16.8249 252.885 15.3158L234.501 56.3893Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-23" d="M245.669 62.0229C248.08 63.3825 250.464 64.8243 252.817 66.349L277.283 28.5809C274.156 26.5553 270.985 24.6374 267.774 22.8268L245.669 62.0229Z"   fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-24" d="M256.296 68.6914C258.607 70.2809 260.852 71.9302 263.032 73.6356L290.76 38.1934C287.857 35.9223 284.87 33.7286 281.801 31.617L256.296 68.6914Z"    fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-25" d="M266.254 76.2497C268.406 78.0483 270.487 79.9003 272.498 81.8021L303.419 49.1082C300.741 46.5755 297.972 44.1121 295.114 41.7228L266.254 76.2497Z" fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-26" d="M275.814 84.7822C277.768 86.7434 279.668 88.7719 281.511 90.8666L315.297 61.1433C312.837 58.3469 310.3 55.6385 307.691 53.0199L275.814 84.7822Z"   fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-27" d="M284.214 94.0377C285.977 96.1716 287.683 98.3701 289.328 100.632L325.725 74.1712C323.533 71.1559 321.259 68.2235 318.906 65.3757L284.214 94.0377Z" fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-28" d="M291.726 104.039C293.283 106.327 294.781 108.677 296.214 111.087L334.891 88.0845C332.987 84.8823 330.995 81.7571 328.92 78.7106L291.726 104.039Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-29" d="M298.294 114.729C299.66 117.178 300.942 119.652 302.139 122.147L342.709 102.676C341.114 99.3534 339.409 96.0627 337.595 92.8089L298.294 114.729Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-30" d="M303.867 125.919C304.998 128.486 306.043 131.069 307.002 133.665L349.214 118.073C347.937 114.616 346.548 111.18 345.045 107.771L303.867 125.919Z"  fill="#0C1C52"/>
                <path class="performance-diagram__item absolute-progrss-bar absolute-progrss-bar-item-31" d="M308.343 137.63C309.209 140.26 309.997 142.925 310.704 145.624L354.236 134.224C353.293 130.621 352.241 127.062 351.084 123.551L308.343 137.63Z"    fill="#0C1C52"/>
                <g filter="url(#filter0_d)">
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-28"  d="M69.7623 250.402C68.3051 248.006 66.9317 245.582 65.6412 243.133L25.8324 264.116C27.5511 267.376 29.378 270.601 31.3139 273.784L69.7623 250.402Z"  fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-27"  d="M76.7284 260.836C75.0857 258.609 73.5009 256.318 71.9777 253.963L34.1933 278.403C36.2168 281.531 38.3246 284.58 40.5123 287.546L76.7284 260.836Z"  fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-26"  d="M84.6103 270.549C82.7682 268.483 80.9812 266.35 79.2527 264.151L43.8754 291.962C46.1793 294.893 48.5628 297.738 51.0211 300.495L84.6103 270.549Z"  fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-25"  d="M93.5593 278.466C91.4457 276.623 89.4036 274.728 87.4331 272.784L55.833 304.822C58.4572 307.411 61.1736 309.932 63.9815 312.38L93.5593 278.466Z"   fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-24"  d="M103.355 286.306C101.115 284.679 98.9118 282.974 96.7478 281.19L68.1229 315.912C70.9976 318.282 73.9285 320.55 76.9108 322.716L103.355 286.306Z"   fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-23"  d="M113.804 293.181C111.424 291.768 109.075 290.276 106.763 288.702L81.4518 325.909C84.5341 328.006 87.6662 329.997 90.8432 331.882L113.804 293.181Z" fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-22"  d="M124.839 299.051C122.337 297.866 119.863 296.599 117.421 295.251L95.67 334.645C98.9305 336.445 102.234 338.137 105.575 339.719L124.839 299.051Z"   fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-21"  d="M136.72 303.851C134.087 302.885 131.502 301.846 128.967 300.736L110.917 341.957C114.294 343.435 117.732 344.818 121.23 346.1L136.72 303.851Z"      fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-20"  d="M148.647 307.598C145.935 306.883 143.264 306.09 140.636 305.222L126.52 347.95C130.02 349.107 133.572 350.161 137.175 351.111L148.647 307.598Z"     fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-19"  d="M160.903 310.282C158.174 309.817 155.443 309.266 152.713 308.626L142.453 352.441C146.081 353.291 149.714 354.024 153.347 354.643L160.903 310.282Z" fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-18"  d="M173.317 311.809C170.557 311.599 167.79 311.302 165.02 310.918L158.833 355.491C162.525 356.003 166.215 356.399 169.899 356.679L173.317 311.809Z"   fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-17"  d="M185.811 312.178C183.043 312.225 180.264 312.187 177.477 312.061L175.451 357.015C179.172 357.183 182.882 357.234 186.578 357.171L185.811 312.178Z" fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-16"  d="M197.58 310.555C194.804 310.95 192.034 311.258 189.276 311.479L192.878 356.335C196.552 356.04 200.236 355.631 203.924 355.105L197.58 310.555Z"     fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-15"  d="M209.86 308.213C207.133 308.866 204.404 309.431 201.678 309.91L209.46 354.232C213.09 353.595 216.719 352.843 220.342 351.975L209.86 308.213Z"      fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-14"  d="M221.926 304.778C219.303 305.66 216.636 306.467 213.928 307.195L225.621 350.649C229.219 349.681 232.766 348.608 236.26 347.434L221.926 304.778Z"   fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-13"  d="M233.586 300.25C231.055 301.371 228.478 302.419 225.855 303.391L241.494 345.586C244.99 344.29 248.428 342.893 251.806 341.397L233.586 300.25Z"     fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-12"  d="M244.768 294.663C242.351 296.014 239.885 297.296 237.37 298.504L256.856 339.066C260.213 337.453 263.506 335.743 266.732 333.938L244.768 294.663Z"  fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-11"  d="M255.566 287.766C253.253 289.351 250.908 290.855 248.533 292.277L271.653 330.883C274.815 328.989 277.935 326.989 281.008 324.883L255.566 287.766Z" fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-10"  d="M265.535 280.221C263.38 282.016 261.185 283.732 258.954 285.37L285.583 321.645C288.554 319.464 291.473 317.181 294.336 314.797L265.535 280.221Z"   fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-9"   d="M274.827 271.791C272.866 273.745 270.834 275.651 268.73 277.505L298.48 311.268C301.275 308.804 303.979 306.27 306.59 303.668L274.827 271.791Z"     fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-8"   d="M283.269 262.562C281.498 264.689 279.652 266.771 277.733 268.806L310.461 299.69C313.02 296.979 315.482 294.201 317.846 291.363L283.269 262.562Z"   fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-7"   d="M290.814 252.597C289.247 254.879 287.605 257.122 285.886 259.32L321.339 287.035C323.633 284.101 325.826 281.107 327.917 278.059L290.814 252.597Z"  fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-6"   d="M297.794 242.404C296.426 244.852 294.992 247.241 293.496 249.569L331.357 273.891C333.349 270.79 335.256 267.612 337.074 264.36L297.794 242.404Z"   fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-5"   d="M303.375 231.217C302.241 233.783 301.037 236.295 299.766 238.753L339.735 259.428C341.429 256.154 343.03 252.812 344.536 249.404L303.375 231.217Z"  fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-4"   d="M307.957 219.538C307.068 222.159 306.093 224.769 305.031 227.365L346.681 244.402C348.092 240.953 349.389 237.482 350.572 233.991L307.957 219.538Z" fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-3"   d="M311.421 207.519C310.779 210.211 310.05 212.897 309.234 215.571L352.274 228.707C353.362 225.141 354.334 221.56 355.192 217.966L311.421 207.519Z"   fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-2"   d="M313.755 195.239C313.365 197.98 312.889 200.719 312.326 203.451L356.399 212.537C357.151 208.89 357.786 205.233 358.307 201.574L313.755 195.239Z"   fill="#0C1C52"/>
                    <path class="performance-diagram__item quality-progrss-bar quality-progrss-bar-item-1"   d="M314.814 182.469C314.673 185.27 314.447 188.047 314.139 190.798L358.859 195.808C359.269 192.145 359.57 188.451 359.757 184.73L314.814 182.469Z"    fill="#0C1C52"/>
                </g>
                <defs>
                    <filter id="filter0_d" x="21" y="182" width="344.046" height="186.084" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feComposite in2="hardAlpha" operator="out"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                </defs>
            </svg>
            
            <div class="performance-diagram__value"></div>
        `
    }
 
    const performanceData = {
        absolute: 77,
        quality: 55
    }
    
    function performanceDiagram(absoluteValue, qualityValue, animationTime = 3200) {

        

        const absoluteProgrssbar = Array.from(document.querySelectorAll('.absolute-progrss-bar'));
        const qualityProgrssbar = Array.from(document.querySelectorAll('.quality-progrss-bar')).reverse();

        let absoluteLength = progressLength(absoluteProgrssbar, absoluteValue);
        let qualityLength = progressLength(qualityProgrssbar, qualityValue);

        setTimeout(() => {
            setProgressBar(absoluteProgrssbar, absoluteLength, '#FB9B2B');
            setProgressBar(qualityProgrssbar, qualityLength, '#217AFF');
           
            
        }, animationTime)
        
        function progressLength(progressBar, data) {
            let currentValue;

            if (data > 100) {
                currentValue = progressBar.length;
            } else {
                currentValue = Math.round((progressBar.length / 100) * data);
            }

            return currentValue; 
        }

        function setProgressBar(progressBar, length, val) {
            for (let i = 0; i < length; i++) {
                progressBar[i].style.fill = val;
            }
        }  

        


    }

    document.querySelector('.performance-diagram-quality-value').textContent = '60%';
    document.querySelector('.performance-diagram-absolute-value').textContent = '77%';

    performanceDiagram(performanceData.absolute, performanceData.quality);

    function performanceDiagramAnimation() {
        setTimeout(() => {
            
            document.querySelector('.performance-diagram').innerHTML =  d ()
            performanceDiagram(performanceData.absolute, performanceData.quality);
            performanceDiagramAnimation()()
        }, 7000) 
        
    }
    performanceDiagramAnimation()

    //=================== центральный блок данных =====================

    const generalData = {
        students:  4844,
        rate: 5,
        teachers: 1279,
        scientists: 347,
        score: 4.2,
        contracts: 111,
        progress: 39.62,
        publications: 1078,
        cash: 3.45,
        budget: 4.08 
    }
 
    function  generalDataOutput(data) {
        for (let key in data) {
            document.querySelector(`.circle-block__value_${key}`).textContent = data[key];
        }
    }

    generalDataOutput(generalData);



    //=================== финансы =====================

    const financeData = {
        date: '15.01.2021',
        total: 600000000,
        budgetResources: 1092045473,
        otherResources: 1572394226,
        wageFund: 2664439699,
        landTax: 65185520,
        propertyTax: 75229727
    }


 

    wageFundDiagramData = Object.values(financeData).slice(2, 4);
    сostsDiagramData = Object.values(financeData).slice(4, 7).reverse();
    
    
    class Diagram  {
        constructor (title, data, colors, parentSelector, isDecorated = false) {
            this.parentSelector = document.querySelector(`.${ parentSelector }`),
            this.segmentColors  = colors,
            this.isDecorated    = isDecorated,
            this.title          = title,
            this.data           = data,
            this.fill           = '#112054',
            this.diff(),
            this.offset(),
            this.sector(),
            this.insDiagramSectors(),
            this.diagrammSegmentConfig()
        }
    
        get diagramValues () { 
            const sumValues = this.data.reduce((a, b) => a + b);
    
            let array = this.data.map(i => Math.round( i / sumValues * 100));
            let max = Math.max(...array);
           
            if (this.isDecorated) {
                array = array.map(i => i < 5 ? i + 10 : i)
            }
    
            const sumRatio = array.reduce((a, b) => a + b);
            const diff = sumRatio - 100;
    
            return array.map(i => i === max ? i - diff : i);
        }
    
        get internalEclipseColor () { return this.segmentColors[this.segmentColors.length - 1] }
    
        diff (val) { return 100 - val }
    
        offset (index) { 
            const start = 25;
            let location = 0;
            let sum = 0;
          
            this.diagramValues.map((_, i, array) => {
                if (i == index && i !== 0) {
                    for (let j = 0; j < i; j++) {
                        sum += array[j];
                    }
                    sum = 100 - sum;
                }
            })    
            location = start + sum;
           
            return location;  
        }
    
        diagrammSegmentConfig (r = 15.91549430918954) { return `class="donut-segment" cx="21" cy="21" r="${r}"` }
    
        sector (item, index) { 
            const strokeWidth = index == 0 ? 10 : index == this.diagramValues.length - 1 ? 5 : 7; 
            return `<circle  ${this.diagrammSegmentConfig()} fill="${this.fill}" stroke="${this.segmentColors[index]}" stroke-width="${strokeWidth}" stroke-dasharray="${item} ${this.diff(item)}" stroke-dashoffset="${this.offset(index)}"></circle>`; 
        }
    
        insDiagramSectors() { return this.diagramValues.map((i, index) => this.sector(i, index)).join('') }
      
    
        render () { 
            const diagram = document.createElement('div');
            diagram.classList.add('diagram');
            diagram.innerHTML = `
    
                <svg width="100%" height="100%" viewBox="0 0 42 42" class="donut">
                    ${this.insDiagramSectors()}
                    <circle ${this.diagrammSegmentConfig(12)} fill="${this.fill}" stroke="${this.internalEclipseColor}" stroke-width="0.3"></circle>
                </svg>
    
                <div class="finance__diagram-text">${this.title}</div>
            `;
            
            this.parentSelector.append(diagram);
            
            
        }
    
    }
    
    new Diagram('Фонд оплаты труда', wageFundDiagramData, ['#2BD6FB', '#217AFF'], 'finance__diagram_wage-fund', ).render()
    new Diagram('Затраты', сostsDiagramData, ['#FFC01D',  '#FB9B2B', '#FD6A6A'], 'finance__diagram_сosts', true).render()

    function financeDataOutput(data) {
        insertToPage('finance__total-value', numDataOutput(data.total));
        
        insertToPage('finance__diagram-value_budget-resources', numDataOutput(data.budgetResources));
        insertToPage('finance__diagram-value_other-resources', numDataOutput(data.otherResources));
        insertToPage('finance__diagram-value_wage-fund', numDataOutput(data.wageFund));
        insertToPage('finance__diagram-value_land-tax', numDataOutput(data.landTax));
        insertToPage('finance__diagram-value_property-tax', numDataOutput(data.propertyTax));
    }

    financeDataOutput(financeData);




    //=========== международная деятельность =============


    const internationalData = {
        date: '07.10.2021',
        foreignStudents: 1224,
        nonresidentStudents: 6556,
        partners: 'XX',
    }


    function internationalDataOutput(data) {
        insertToPage('international__value_foreign-students', numDataOutput(data.foreignStudents));
        insertToPage('international__value_nonresident-students', numDataOutput(data.nonresidentStudents));
        insertToPage('international__value_partners', data.partners);
    }

    internationalDataOutput(internationalData);



    //=================== вакцинация =====================

    const vaccinationData = {
        date: '01.10.2021',
        total: 3345,
        vaccinated: 2457,
        unvaccinated: 887,
        recovered: 1050,
        unsuitable: 232,
        sick: 108
    }

    function vaccinationDataOutput(data) {

        function sumData() {
            const result = [data.vaccinated, data.unvaccinated, data.recovered, data.sick, data.unsuitable];
            const sum = result.reduce((a, b) => a + b)

            return sum;
        } 

        const categoryRatio = category => Math.ceil((category / sumData()) * 100);

        const setLine = (value, color) => {
            return  `
                <svg width="100%" overflow="visible" viewBox="0 0 120 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <svg class="vaccination__graphiс-data" width="${categoryRatio(value + 1)}" x="0" y="0" >
                    <rect class="vaccination__graphiс-row" fill=${color} x="0" y="0" transform="translate(-5)"/>
                    <text class="vaccination__graphiс-value" x="100%" y="60%"  text-anchor="middle" dy="0.3em" transform="translate(5)">
                        ${value}
                    </text>
                </svg>
            </svg>`
        }
                
        function output (data) {
            const element = document.createElement('div');

            element.classList.add('vaccination__graphiс');

            element.innerHTML = `

                ${setLine(data.vaccinated,'#217AFF')}
                ${setLine(data.unvaccinated, '#6C38FF')}
                ${setLine(data.recovered, '#A7EB17')}
                ${setLine(data.unsuitable, '#FB9B2B' )}
                ${setLine(data.sick, '#FD6A6A')}
           
            `;

            document.querySelector('.vaccination__diagram-wrap').append(element);
        }

        output(data);
        document.querySelector('.vaccination__diagram-value').textContent = data.total;
    }

    vaccinationDataOutput(vaccinationData);



    //=================== наука =====================

    const scienceData = {
        date: '21.11.2021',
        plan: {
            currentPlan: 50000.6,
            currentReceipts: 199583.4,
            expectedReceipts: 233203.6,
            progress: 80.62 
        },
        publications: {
            scopus: {
                scopusTotal: 694,
                q1q2Total: 113,
                scopusInSixMonths: [
                    {
                        month: 'Май',
                        value: 151
                    },
                    {
                        month: 'Июнь',
                        value: 112
                    },
                    {
                        month: 'Июль',
                        value: 70
                    },
                    {
                        month: 'Август',
                        value: 94
                    },
                    {
                        month: 'Сентябрь',
                        value: 59
                    },
                    {
                        month: 'Октябрь',
                        value: 41
                    },
                ],
                q1q2InSixMonths: [
                    {
                        month: 'Май',
                        value: 25
                    },
                    {
                        month: 'Июнь',
                        value: 59
                    },
                    {
                        month: 'Июль',
                        value: 28
                    },
                    {
                        month: 'Август',
                        value: 45
                    },
                    {
                        month: 'Сентябрь',
                        value: 33
                    },
                    {
                        month: 'Октябрь',
                        value: 13
                    },
                ],
            },
            wos: {
                wosTotal: 407,
                q1q2Total: 113,
                wosInSixMonths: [
                    {
                        month: 'Май',
                        value: 55
                    },
                    {
                        month: 'Июнь',
                        value: 32
                    },
                    {
                        month: 'Июль',
                        value: 61
                    },
                    {
                        month: 'Август',
                        value: 68
                    },
                    {
                        month: 'Сентябрь',
                        value: 44
                    },
                    {
                        month: 'Октябрь',
                        value: 44
                    },
                ],
                q1q2InSixMonths: [
                    {
                        month: 'Май',
                        value: 18
                    },
                    {
                        month: 'Июнь',
                        value: 7
                    },
                    {
                        month: 'Июль',
                        value: 6
                    },
                    {
                        month: 'Август',
                        value: 8
                    },
                    {
                        month: 'Сентябрь',
                        value: 6
                    },
                    {
                        month: 'Октябрь',
                        value: 17
                    },
                ]
            }
            
        }
        
    }

    function scienceProgressbarDataOutput(data) {
        const progress = ((data.currentReceipts / data.currentPlan) * 100).toFixed(2);

        const scienceProgressbar = Array.from(document.querySelectorAll('.science__plan-progressbar-item'));
        const scienceProgressbarLength = progressLength(scienceProgressbar, progress);
        
        function setProgressBar(progressBar, length, val) {
            for (let i = 0; i < length; i++) {
                progressBar[i].setAttribute('fill-opacity', val)
            }
        } 

        setProgressBar(scienceProgressbar, scienceProgressbarLength, 1)

        insertToPage('science__plan-ratio', progress + '%');
        insertToPage('science__plan-value', numDataOutput(data.currentPlan) );
        insertToPage('science__legend-value_current-receipts', numDataOutput(data.currentReceipts));
        insertToPage('science__legend-value_expected-receipts', numDataOutput(data.expectedReceipts));
    }

    scienceProgressbarDataOutput(scienceData.plan)

        
        

    function publicationsDataOutput(data, category, color = '#FB9B2B') {
        const diagram = Array.from(document.querySelectorAll(`.wos rect`));

        const max = Math.max(...data[category]);

        diagram.map((i, index) => {
            let value = (data[category][index] / max) * 100;

            i.setAttribute('fill', color)
            i.setAttribute('height', `${value}%`);
            i.setAttribute('y', `${100 - value}%`);
        });

        document.querySelector('.science__diagram-value').textContent = max;
    }

    function getPublicationsData(data) {
        const getArray = data => data.map(i => i.value);

        const publications = {};

        publications.wos = getArray(data.wos.wosInSixMonths);
        publications.wosQ1Q2 = getArray(data.wos.q1q2InSixMonths);
        publications.scopus = getArray(data.scopus.scopusInSixMonths);
        publications.scopusQ1Q2 = getArray(data.scopus.q1q2InSixMonths);

        return publications;
    }

    const publicationsData = getPublicationsData(scienceData.publications)

    function changeScienceDiagramData(element) {
        const category = element.getAttribute('data-btn');

        const listItems = document.querySelectorAll('.science__list-item');

        let color = ''

        switch(category) {
            case 'wos':
                color = '#FB9B2B'
                break;
            case 'wosQ1Q2':
                color = '#FFDD85'
                break;
            case 'scopus':
                color = '#217AFF'
                break;
            case 'scopusQ1Q2':
                color = '#44BCFF'
                break;    
    
        }

        for (let i of listItems) {
            i.classList.remove('science__list-item_active')
            if (i.getAttribute('data-btn') == category) {
               i.classList.add('science__list-item_active')
            }
        }

        publicationsDataOutput(publicationsData, category, color);
    }

    
    publicationsDataOutput(publicationsData, 'wos');

    let publicationsDiagramCounter = 0

    let publicationsDiagramItems = ['wos', 'wosQ1Q2', 'scopus', 'scopusQ1Q2'] 
    let publicationsDiagramColors = ['#FB9B2B', '#FFDD85', '#217AFF', '#44BCFF']

    let tr

    function publicationsDiagramAnimation() {
        tr = setTimeout(()=> {
            if (publicationsDiagramCounter <= 3) {
                document.querySelectorAll('.science__list-item').forEach(i => {
                    i.classList.remove('science__list-item_active')
                })
                document.querySelectorAll('.science__list-item')[publicationsDiagramCounter].classList.add('science__list-item_active')
                publicationsDataOutput(publicationsData, publicationsDiagramItems[publicationsDiagramCounter], publicationsDiagramColors[publicationsDiagramCounter]);
                publicationsDiagramCounter++
            } 
            else {
                
                publicationsDiagramCounter = 0
            }
            
            publicationsDiagramAnimation()
        }, 3000)  
    }
    
    publicationsDiagramAnimation()

// ============================== студенты ===========================================


    const staffData = {
        date: '2.10.2021',
        employment: 91,
        load: {
            hours: 950537,
            ratio: 6.7
        },
        categories: {
            occupation: {
                fullTime: 30164,
                distance: 5634,
                extramural: 7061
            },
            payment: {
                public: 9831,
                nonBudget: 33928
            },
            groups: {
                bachelors: 1214535,
                specialists: 2421360,
                magisters: 6422663
            }
            
        }

    }

    function studentsEmploymentDataOutput(data) {

        const studentsEmploymentProgressbar = Array.from(document.querySelectorAll('.students__employment-diagram path')).reverse();

        const studentsEmploymentProgressLength = progressLength(studentsEmploymentProgressbar, data);

        setProgressBar(studentsEmploymentProgressbar, studentsEmploymentProgressLength, '#FB9B2B');

        insertToPage('students__employment-value', data + '%')
    }

    studentsEmploymentDataOutput(staffData.employment)


    function teachingLoadDataOutput(data) {
        const teachingLoadProgressbar = Array.from(document.querySelectorAll('.students__teaching-load-progressbar span'));

        const teachingLoadProgressLength = progressLength(teachingLoadProgressbar, data.ratio);

        function setProgressBarteachingLoad (progressBar, length, val) {
            for (let i = 0; i < length; i++) {
                progressBar[i].style.backgroundColor = val;
            }
        }  

        setProgressBarteachingLoad(teachingLoadProgressbar, teachingLoadProgressLength, '#1A5FC7');
        insertToPage('spanstudents__teaching-load-value', data.hours);
        insertToPage('students__teaching-load-ratio', data.ratio + '%');
    }

    teachingLoadDataOutput(staffData.load);



    function studentsCategoryDataOutput(data) {
        const graphics = Array.from(document.querySelectorAll('.students__graphic svg'));


        function sumData(...data) {
            const result = data;
            const sum = result.reduce((a, b) => a + b);

            return sum;
        } 

        const categoryRatio = (category, sum) => Math.ceil((category / sum) * 100);

        const occupationSum = sumData(data.occupation.fullTime, data.occupation.distance, data.occupation.extramural);
        const paymentSum = sumData(data.payment.public, data.payment.nonBudget);

        graphics[0].setAttribute('width', categoryRatio(data.occupation.fullTime, occupationSum));
        graphics[1].setAttribute('width', categoryRatio(data.occupation.distance, occupationSum));
        graphics[2].setAttribute('width', categoryRatio(data.occupation.extramural, occupationSum));
        graphics[3].setAttribute('width', categoryRatio(data.payment.public, paymentSum));
        graphics[4].setAttribute('width', categoryRatio(data.payment.nonBudget, paymentSum));

        insertToPage('students__graphic-value_fullTime', numDataOutput(data.occupation.fullTime));
        insertToPage('students__graphic-value_distance', numDataOutput(data.occupation.distance));
        insertToPage('students__graphic-value_extramural', numDataOutput(data.occupation.extramural));
        insertToPage('students__graphic-value_public', numDataOutput(data.payment.public));
        insertToPage('students__graphic-value_nonBudget', numDataOutput(data.payment.nonBudget));
    }

    studentsCategoryDataOutput(staffData.categories)



    // ======================= календарь ===============================


    function calendar(dateOfUpdate, isDouble, ...selectors) {
        const array = dateOfUpdate.toString().split('.');
        
        const date = new Date();
        const currentMonth = +array[1];
        const year = new Date().getFullYear();
        const minOpacity = 0.2;
        const maxOpacity = 1;
        const monthProgressBar = Array.from(document.querySelectorAll(`.${selectors[0]} path`));
        let yearProgressBar = [];


        const addZeroBeforeValue = val => val < 10 ? '0' + val : val;

        const month = () => addZeroBeforeValue(currentMonth);
        
        const day = () => addZeroBeforeValue(+array[0]);
        
        const yearRatio = () => {
            const dayFirst = new Date(date.getFullYear(), 0, 0);
            const diff = new Date() - dayFirst;
            const day = 1000 * 60 * 60 * 24;
            const dayNum = Math.floor(diff / day);
            const ratio =  Math.floor((dayNum / 365) * 100); 
            
            return ratio;
        } 

        function setCalendarProgressBar(progressBar, length, val) {
            for (let i = 0; i < length; i++) {
                progressBar[i].setAttribute('fill-opacity', val);
            }
        }

        function setMonthProgressBar() {
            const dayLast = new Date(year, currentMonth, 0).getDate();
            const ratio = 15 / dayLast;
            const progressLength =  Math.round(+array[0] * ratio); 
            
            setCalendarProgressBar(monthProgressBar, progressLength, maxOpacity);
        }

        if (isDouble) {
            yearProgressBar = Array.from(document.querySelectorAll(`.${selectors[1]} path`));

            function setYearProgressBar() {
                const progressLength = Math.round((100 - yearRatio()) * 0.15);
        
                setCalendarProgressBar(yearProgressBar, progressLength, minOpacity);
            }

            setCalendarProgressBar(yearProgressBar, 15, maxOpacity);
            insertToPage(`${selectors[1]}-value`, `${yearRatio()}% год`);
            setYearProgressBar();
        }

        setCalendarProgressBar(monthProgressBar, 15, minOpacity);
        setMonthProgressBar();
        insertToPage(`${selectors[0]}-value`, `${day()}.${month()}.${year}`);
    }

    calendar(financeData.date , true, 'calendar__month-progress-bar__finance', 'calendar__year-progress-bar__finance');
    calendar(scienceData.date, true,'calendar__month-progress-bar__science', 'calendar__year-progress-bar__science');
    calendar( vaccinationData.date , true,'calendar__month-progress-bar__vaccination', 'calendar__year-progress-bar__vaccination');
    calendar( internationalData.date , true,'calendar__month-progress-bar__international', 'calendar__year-progress-bar__international');
    calendar(staffData.date , false, 'calendar__month-progress-bar__students');

	

    //================== глобус =========================

    function globus() {
        let myearth;
        let sprites = [];

        myearth = new Earth("myearth", {
        location: {
            lat: 20,
            lng: 20,
        },
        light: "none",
            mapImage: "../assets/img/main/hologram-map.svg",
            transparent: true,
            autoRotate: true,
            autoRotateSpeed: 5,
            autoRotateDelay: 100,
            autoRotateStart: 1000,
        });

        myearth.addEventListener("ready", function () {
        this.startAutoRotate();

        // connections

        var line = {
            color: "#009CFF",
            opacity: 0.15,
            hairline: true,
            offset: -0.5,
        };

        for (var i in connections) {
            line.locations = [
            {
                lat: connections[i][0],
                lng: connections[i][1],
            },
            {
                lat: connections[i][2],
                lng: connections[i][3],
            },
            ];
            this.addLine(line);
        }

        // add 8 shine sprites

        for (var i = 0; i < 8; i++) {
            sprites[i] = this.addSprite({
            image: "../assets/img/main/hologram-shine.svg",
            scale: 1,
            offset: -0.5,
            opacity: 1,
            });
            pulse(i);
        }
        });

        function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
        }

        function pulse(index) {
        var random_location =
            connections[getRandomInt(0, connections.length - 1)];
        sprites[index].location = {
            lat: random_location[0],
            lng: random_location[1],
        };

        sprites[index].animate("scale", 0.5, {
            duration: 320,
            complete: function () {
            this.animate("scale", 0.2, {
                duration: 320,
                complete: function () {
                setTimeout(function () {
                    pulse(index);
                }, getRandomInt(100, 400));
                },
            });
            },
        });
        }

        var connections = [
        [59.651901245117, 17.918600082397, 41.8002778, 12.2388889],
        [59.651901245117, 17.918600082397, 51.4706, -0.461941],

        [13.681099891662598, 100.74700164794922, -6.1255698204, 106.65599823],
        [
            13.681099891662598, 100.74700164794922, 28.566499710083008,
            77.10310363769531,
        ],

        [30.12190055847168, 31.40559959411621, -1.31923997402, 36.9277992249],
        [30.12190055847168, 31.40559959411621, 25.2527999878, 55.3643989563],
        [30.12190055847168, 31.40559959411621, 41.8002778, 12.2388889],

        [
            28.566499710083008, 77.10310363769531, 7.180759906768799,
            79.88410186767578,
        ],
        [
            28.566499710083008, 77.10310363769531, 40.080101013183594,
            116.58499908447266,
        ],
        [28.566499710083008, 77.10310363769531, 25.2527999878, 55.3643989563],

        [-33.9648017883, 18.6016998291, -1.31923997402, 36.9277992249],

        [-1.31923997402, 36.9277992249, 25.2527999878, 55.3643989563],

        [41.8002778, 12.2388889, 51.4706, -0.461941],
        [41.8002778, 12.2388889, 40.471926, -3.56264],

        [19.4363, -99.072098, 25.79319953918457, -80.29060363769531],
        [19.4363, -99.072098, 33.94250107, -118.4079971],
        [19.4363, -99.072098, -12.0219, -77.114304],

        [-12.0219, -77.114304, -33.393001556396484, -70.78579711914062],
        [-12.0219, -77.114304, -34.8222, -58.5358],
        [-12.0219, -77.114304, -22.910499572799996, -43.1631011963],

        [-34.8222, -58.5358, -33.393001556396484, -70.78579711914062],
        [-34.8222, -58.5358, -22.910499572799996, -43.1631011963],

        [22.3089008331, 113.915000916, 13.681099891662598, 100.74700164794922],
        [22.3089008331, 113.915000916, 40.080101013183594, 116.58499908447266],
        [22.3089008331, 113.915000916, 31.143400192260742, 121.80500030517578],

        [35.552299, 139.779999, 40.080101013183594, 116.58499908447266],
        [35.552299, 139.779999, 31.143400192260742, 121.80500030517578],

        [33.94250107, -118.4079971, 40.63980103, -73.77890015],
        [33.94250107, -118.4079971, 25.79319953918457, -80.29060363769531],
        [33.94250107, -118.4079971, 49.193901062, -123.183998108],

        [40.63980103, -73.77890015, 25.79319953918457, -80.29060363769531],
        [40.63980103, -73.77890015, 51.4706, -0.461941],

        [51.4706, -0.461941, 40.471926, -3.56264],

        [
            40.080101013183594, 116.58499908447266, 31.143400192260742,
            121.80500030517578,
        ],

        [-33.94609832763672, 151.177001953125, -41.3272018433, 174.804992676],
        [-33.94609832763672, 151.177001953125, -6.1255698204, 106.65599823],

        [55.5914993286, 37.2615013123, 59.651901245117, 17.918600082397],
        [55.5914993286, 37.2615013123, 41.8002778, 12.2388889],
        [55.5914993286, 37.2615013123, 40.080101013183594, 116.58499908447266],
        [55.5914993286, 37.2615013123, 25.2527999878, 55.3643989563],
        ];
    }

    globus();

    //====================== анимация кнопок центрального блока ===================

    
    const allBranchesBtn = document.querySelector('.circle-block__first-clicked-aria');
    const staffBtn = document.querySelector('.circle-block__third-clicked-aria');
    const planBtn = document.querySelector('.circle-block__fifth-clicked-aria');

    const allBranchesBg = document.querySelector('.circle-first__icon');
    const staffBg = document.querySelector('.staff-bg');
    const planBg = document.querySelector('.plan-bg');


    function animateButtonHover(clickedElement, bgElement, className) {
        clickedElement.addEventListener('mouseover', () => {
            bgElement.classList.add(className);
        });
    
        clickedElement.addEventListener('mouseout', () => {
            bgElement.classList.remove(className);
        });
    }

    animateButtonHover(staffBtn, staffBg, 'max-opacity');
    animateButtonHover(allBranchesBtn, allBranchesBg, 'scale');
    animateButtonHover(planBtn, planBg, 'white-stroke');


    // ========  изменение окончании слова "человек(ка)", блок вакцинация =========

    function setVaccinationtDescription(data) {
        const description = document.querySelector('.vaccination__diagram-descr span');

        const getlastNum = () => {
            let array = data.toString().split('');

            return +array[array.length - 1]
        } 

        const lastNum = getlastNum()

        let str = 'челове';

        if (lastNum === 2 || lastNum === 3 || lastNum === 4) {
            str += 'ка'
        } 
        else {
            str += 'к'
        }

        description.textContent = str;
    }

    setVaccinationtDescription(vaccinationData.total)



    //  ========= данные для легенды центральной диаграммы в блоке студенты ========

    insertToPage('students__diagram-info__value_bachelors', numDataOutput(staffData.categories.groups.bachelors));
    insertToPage('students__diagram-info__value_specialists', numDataOutput(staffData.categories.groups.specialists));
    insertToPage('students__diagram-info__value_magisters', numDataOutput(staffData.categories.groups.magisters));



    // =================== отображение месяца ================================

    function setMonth(date, selector) {
        const array = date.split('.');
        const month = array[1]
        let str = ''

        switch (month) {
            case '01':
              str = 'январь'
              break;
            case '02':
              str = 'февраль'
              break;
            case '03':
              str = 'март'
              break;
            case '04':
              str = 'апрель'
              break;
            case '05':
              str = 'май'
              break;
            case '06':
              str = 'июнь'
              break;
            case '07':
              str = 'июль'
              break;
            case '08':
              str = 'август'
              break;
            case '09':
              str = 'сентябрь'
              break;
            case '10':
              str = 'октябрь'
              break;
            case '11':
              str = 'ноябрь'
              break;
            case '12':
              str = 'декабрь'
              break;
            default :   
              str = '';
              break;
        }

        insertToPage(selector, str)
    }

    setMonth(staffData.date, 'students__diagram-month-text');  
    setMonth(scienceData.date, 'science__diagram-month-text');  

})


