import {connectionNodes } from './Block.js';

function circle_dist(x1, y1, x2, y2) {
    const xd = x2 - x1;
    const yd = y2 - y1;
    return xd * xd + yd * yd;
}


export class Point {
    constructor(x, y, r, name) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.ro = r;
        this.r = r;
        this.selected = false;
    }

    didClick() {
        const rdist = circle_dist(this.x, this.y, mouseX, mouseY)
        return rdist < (this.r * this.r);
    }

    draw(){
        push();
        strokeWeight(4);
        stroke(255, 0, 0);
        if (this.selected || this.didClick()) {
            fill(255, 255, 0);
        } else {
            fill(255, 255, 255);
        }
        circle(this.x, this.y, this.r);
        pop();

    }

    update_pos(x, y) {
        const width = windowWidth;

        this.x = x;
        this.y = y;
        this.r = (this.ro * (width / 1920));
    }
}

export class Adder1 {
    constructor(src1, src2, src3, r) {
        this.src1 = src1;
        this.src2 = src2;
        this.src3 = src3;

        this.ro = r;
        // this.cx = x;
        // this.cy = y;
        this.cr = r;
        this.one = new Point(this.cx - r - 7, this.cy, 15, 'a11');
        this.two = new Point(this.cx + r + 7, this.cy, 15, 'a12');
        this.three = new Point(this.cx, this.cy + this.cr + 7, 15, 'a13');
        this.four = new Point(this.cx, this.cy + this.cr + 120, 15, 'a14');
        connectionNodes.push(this.one);
        connectionNodes.push(this.two);
        connectionNodes.push(this.three);
        connectionNodes.push(this.four);

        this.update_pos();
    }

    mouseOver() {
        return false;
    }

    draw() {
        const x = this.cx;
        const y = this.cy;
        const r = this.cr;

        push();
        fill("white");
        circle(x, y, 2 * r);
        // Draw the adder cross line
        line(x - r, y, x + r, y);
        line(x, y - r, x, y + r);
        pop();

        this.one.draw();
        this.two.draw();
        this.three.draw();
        this.four.draw();
    }

    update_pos() {
        const sx1 = this.src1.cx;
        const sx2 = this.src2.cx;
        const sy1 = this.src1.cy;
        const sw1 = this.src1.cw;
        const sh1 = this.src1.ch;
        const sy3 = this.src3.cy;

        const width = windowWidth;

        this.cr = (this.ro * (width / 1920));

        this.cx = sx1 + sw1 + (sx2 - (sx1 + sw1)) / 2;
        this.cy = sy1 + (sh1 / 2);

        const fpos = sy1 + sh1 + (sy3 - (sy1 + sh1)) / 2;

        this.one.update_pos(this.cx - this.cr - 7, this.cy, 15, 'a11');
        this.two.update_pos(this.cx + this.cr + 7, this.cy, 15, 'a12');
        this.three.update_pos(this.cx, this.cy + this.cr + 7, 15, 'a13');
        this.four.update_pos(this.cx, fpos, 15, 'a14');
    }
}

export class Adder2 {
    constructor(src1, src2, src3, r) {
        this.src1 = src1;
        this.src2 = src2;
        this.src3 = src3;

        this.ro = r;

        this.cr = r;

        this.one = new Point(this.cx - this.cr - 7, this.cy, 15, 'a21');
        this.two = new Point(this.cx, this.cy - this.cr - 7, 15, 'a22');
        this.three = new Point(this.cx, this.cy + this.cr + 7, 15, 'a23');
        this.four = new Point(this.cx, this.cy - this.cr - 65, 15, 'a24');
        connectionNodes.push(this.one);
        connectionNodes.push(this.two);
        connectionNodes.push(this.three);
        connectionNodes.push(this.four);

        this.update_pos();
    }

    update_pos() {
        const sx1 = this.src1.cx;
        const sy1 = this.src1.cy;
        const sw1 = this.src1.cw;
        const sh1 = this.src1.ch;
        const sy2 = this.src2.cy;
        const sx3 = this.src3.cx;


        this.cx = sx1 + sw1 + (sx3 - (sx1 + sw1)) / 2;
        this.cy = sy1 + sh1 + (sy2 - (sy1 + sh1)) / 2;

        this.cr = (this.ro * (width / 1920));

        const fpos = sy1 + sh1 / 2;

        this.one.update_pos(this.cx - this.cr - 7, this.cy, 15, 'a21');
        this.two.update_pos(this.cx, this.cy - this.cr - 7, 15, 'a22');
        this.three.update_pos(this.cx, this.cy + this.cr + 7, 15, 'a23');
        this.four.update_pos(this.cx,  fpos, 15, 'a24');
    }

    mouseOver() {
        return false;
    }

    draw() {
        const x = this.cx;
        const y = this.cy;
        const r = this.cr;

        push();
        fill("white");
        circle(x, y, 2 * r);
        // Draw the adder cross line
        line(x - r, y, x + r, y);
        line(x, y - r, x, y + r);
        pop()

        this.one.draw();
        this.two.draw();
        this.three.draw();
        this.four.draw();
    }
}