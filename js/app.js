
import { GlowParticle } from './glowparticle.js';

/* Moving gradient */
const colors = [
    {r: 60, g: 60, b: 59}, //dark
    {r: 74, g: 82, b: 94}, //medium dark
    {r: 121, g: 132, b: 148}, //medium
    {r: 176, g: 201, b: 234}, //blue
    {r: 249, g: 248, b: 246} //light
];

class App{
    constructor(){
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');

        this.pixelRatio = (window.devicePixelRatio > 1) ? 2 : 1;

        this.totalParticles = 15;
        this.particles = [];
        this.maxRadius = 1500;
        this.minRadius = 500;

        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.ctx.globalCompositeOperation = 'saturation';

        this.createParticles();
    }

    createParticles() {
        let currentColor = 0;
        this.particles = [];

        for (let i = 0; i < this.totalParticles; i++) {
            const item = new GlowParticle(
                Math.random() *  this.stageWidth,
                Math.random() * this.stageHeight,
                Math.random() * (this.maxRadius - this.minRadius) + this.minRadius, 
                colors[currentColor]
            );

            if (++currentColor >= colors.length){
                currentColor = 0;
            }

            this.particles[i] = item;
        }
    }

    animate(){
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        for (let i = 0; i < this.totalParticles; i++){
            const item = this.particles[i];
            item.animate(this.ctx, this.stageWidth, this.stageHeight);
        }
    }
}

window.onload = () => {
    new App();
}