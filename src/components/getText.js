console.log('d');
export default class getText{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.size = 1024
        // document.body.appendChild(this.canvas).classList.add('text');
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

        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle'; // аналог transform translate(-50%)

        this.ctx.fillText(this.text, this.size/2, this.size/2);
    }
}


 