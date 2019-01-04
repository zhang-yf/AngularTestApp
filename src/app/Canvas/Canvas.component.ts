import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-canvas',
    templateUrl: './canvas.component.html',
    styleUrls : ['./canvas.component.css']
}
)

export class CanvasComponent implements OnInit {

    Pills: Array<any> = [];

    ngOnInit()  {
        this.Pills = [];
        // setInterval(this.RemoveOne, 2000, this.Pills );

    }
    onClickCanvas(event: Event) {
        console.log(event);
        if (event.type === 'click') {
            console.log('yes');

            const Dx = (<MouseEvent>event).offsetX - 10;
            const Dy = (<MouseEvent>event).offsetY - 10;
            this.Pills.push({'x': Dx, 'y': Dy});

            setTimeout(this.RemoveOne, 2000, this.Pills);

        }

    }
    GiveStyle2(x: number, y: number) {
        return { 'transform': `translate(${x}px,${y}px)`};

    }



    RemoveOne(array) {

        if (array.length > 0) {
            array.shift();
        }

    }
}
