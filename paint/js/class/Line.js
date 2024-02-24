import { Shape } from "./Shape.js"

export class Line extends Shape {
    #start
    #end
    constructor(x,y,start, end){
        super(x,y)
        this.#start = start
        this.#end = end
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.moveTo(this._x, this._y)
        ctx.lineTo(this.#start,this.#end)
        ctx.lineWidth = this._lineWidth
        ctx.strokeStyle = this._color
        ctx.stroke()
    }
}
