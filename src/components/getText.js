console.log('d');
export default class getText{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.size = 1024
        document.body.appendChild(this.canvas).classList.add('text');
        this.ctx = this.canvas.getContext('2d');
      
        this.canvas.width = this.size;
        this.canvas.height = this.size;
        this.color = '#ffffff';
        this.ctx.font = '120px Arial';
      
        this.text = 'Mortal Kombat'
    }

    draw(){
        this.ctx.fillStyle = '#ffffff';
        this.ctx.clearRect(0, 0, this.size, this.size);
        this.ctx.fillText(this.text, 100, 150);

        // this.ctx.fillRect(100, 100, 250, 250);
        // this.ctx.fillRect(600, 600, 250, 250);
    }
}


 