//(function () {

    var grizCanvas, grizContext, canvasWidth, canvasHeight;

    var droplets = [];

    var mouseDown = false;

    var environment = {
        maxLoad: 2000,
        wind: 9,
        gravity: 7,
        lineCap: 'round',
        lineWidth: 1,
        forcePush: 0,
        forceScale: 300, 
        maxForcePush: 1000,
        magnet: {
            x: -1,
            y: -1,
            polarized: false
        }
    };

    class Droplet{
        constructor(maxX, maxY, yPull, xPull){
            this.x = Math.random() * maxX;
            this.y = Math.random() * maxY;

            this.color = 'rgba(174,194,224,0.5)';
            
            this.x2 = Math.random() > .5 ? this.y + xPull : this.x + xPull;
            this.y2 = Math.random() > .5 ? this.x + yPull : this.y + yPull;

            this.minX = this.x - (this.x * Math.random());
            this.maxX = this.x + (this.x * Math.random());

            this.xR = Math.random() > .5;
            this.yR = Math.random() > .5;
            this.isCaptured = false;

            this.forcePush = 0;

            this.withinPoint = function(p) {
                return this.x2 >= p.x - 50 && this.x2 <= p.x + 50 && this.y2 >= p.y - 50 && this.y2 <= p.y + 50;
            };

            this.checkBounds = function (minX, minY, maxX, maxY) {
                if(this.y < minY) this.yR = true;
                else if(this.y > maxY) this.yR = false;

                if(this.x > this.maxX) {
                    this.x = this.maxX;
                    this.xR = false;
                } else {
                    this.x = this.minX;
                    this.xR = true;
                }

                if(this.x2 < minX) this.x2 = minX;
                else if(this.x2 > maxX) this.x2 = maxX;

                if(this.y2 < minY) this.y2 = minY;
                else if(this.y2 > maxX) this.y2 = maxX;
            };

            this.checkCapture = function (environment){
                if(environment.magnet.polarized && this.forcePush == 0 && !this.isCaptured){
                    this.isCaptured = this.withinPoint(environment.magnet);
                    //if(this.isCaptured) this.color = randomAlpha();
                } else {
                    if(!environment.magnet.polarized){
                        this.isCaptured = false;
                    }
                }

                if(!this.isCaptured) this.color = 'rgba(174,194,224,0.5)';
            };

            this.move = function (environment) {
                this.x += this.xR ? environment.wind : -environment.wind;
                this.y += this.yR ? environment.gravity : -environment.gravity;
                
                if(this.isCaptured) {
                    this.pushForce(environment);
                    // if(this.forcePush > 0) {
                    //     this.pushForce(environment);
                    // } else {
                    //     this.x2 = environment.magnet.x;
                    //     this.y2 = environment.magnet.y;
                    // }
                } else {
                    if(Math.random() > .5) this.mY2(environment.wind * Math.random());
                    if(Math.random() > .5) this.mX2(environment.gravity * Math.random());    
                }
            };

            this.pushForce = function (environment) {
                var quad = Math.floor(Math.random()*4) + 1;

                this.x2 += quad == 1 || quad == 3 ? -environment.forceScale : environment.forceScale;
                this.y2 += quad == 1 || quad == 2 ? -environment.forceScale : environment.forceScale;
                this.forcePush -= environment.forceScale;

                if(this.forcePush <= 0) {
                    this.isCaptured = false;
                    this.forcePush = 0;
                }
            };

            this.mY2 = function (amt) {
                this.y2 += this.randomBetween(amt);
            };

            this.mX2 = function (amt) {
                this.x2 += this.randomBetween(amt);
            };

            this.randomBetween = function (val){
                return (Math.floor(Math.random()*val) + 1) * (Math.floor(Math.random()*2) == 1 ? 1 : -1);
            };
        }
    }

    //On ready lets setup the dwitter
    document.addEventListener("DOMContentLoaded", function() {
        if(initVars()){
            //step();
        }
    });

    document.onmousemove = function(e) {
        environment.magnet.x = canvasWidth * (e.pageX / canvasWidth);
        environment.magnet.y = canvasHeight * (e.pageY / canvasHeight);
    };

    document.onmouseup = function(e) {
        mouseDown = false;

        droplets.forEach(function (d) {
            if(d.isCaptured){
                d.forcePush = environment.forcePush;
            }
        });

        environment.forcePush = 0;
    };

    document.onmousedown = function(e) {
        mouseDown = true;
        buildForce();
    };

    window.addEventListener('resize',setCanvasSize, false);
    
    window.requestAnimationFrame = (function() {
        return window.requestAnimationFrame || 
               window.webkitRequestAnimationFrame || 
               window.mozRequestAnimationFrame || 
               window.oRequestAnimationFrame || 
               window.msRequestAnimationFrame || 
               function(callback) {
                    return window.setTimeout(callback, 1000 / 60);
                };
    })();

    window.step = function() {
        requestAnimationFrame(step);
        draw();
    };

    function buildForce(){
        environment.forcePush += environment.forceScale;
        if(environment.forcePush > environment.maxForcePush) environment.forcePush = environment.maxForcePush;
        console.log(environment.forcePush);

        if(mouseDown){
            setTimeout(buildForce, 30);
        }
    };

    function setCanvasSize(){
        grizCanvas.width = window.innerWidth;
        grizCanvas.height = window.innerHeight;
    };

    function initVars(){
        grizCanvas = document.getElementById('griz-dwitter');

        grizCanvas.addEventListener('mouseenter', function (e){
            environment.magnet.polarized = true;
        });

        grizCanvas.addEventListener('mouseleave', function (e){
            environment.magnet.polarized = false;
        });

        setCanvasSize();

        canvasWidth = grizCanvas.width;
        canvasHeight = grizCanvas.height;

        if(grizCanvas.getContext) {
            grizContext = grizCanvas.getContext('2d');
            
            var xMax = canvasWidth * 1.1;
            var yMax = canvasHeight * 1.1;

            for(var a = 0; a < environment.maxLoad; a++) {
                var drop = new Droplet(xMax, yMax, environment.wind, environment.gravity);
                droplets.push(drop);
            }
            return true;
        }
        return false;
    };

    function randomAlpha(){
        var str = 'rgba(';
        var randomNum = function(){
            return parseInt(Math.random() * 254);
        };
        return str + randomNum() + ',' + randomNum() + ',' + randomNum() + ',0.5)';
    }

    function draw() {
        grizContext.clearRect(0, 0, canvasWidth, canvasHeight);

        grizContext.lineWidth = environment.lineWidth;
        grizContext.lineCap = environment.lineCap;

        for(var c = 0; c < droplets.length; c++) {
            var d = droplets[c];
            grizContext.strokeStyle = d.color;
            grizContext.beginPath();
            grizContext.moveTo(d.x, d.y);
            grizContext.lineTo(d.x2, d.y2);
            grizContext.stroke();
        }

        move();
    };

    function move() {
        for(var b = 0; b < droplets.length; b++) {
            var p = droplets[b];

            p.checkCapture(environment);

            p.move(environment);

            p.checkBounds(-15, -15, canvasWidth, canvasHeight);
        }
    };


//})();