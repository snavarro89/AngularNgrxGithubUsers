import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[repos]'
})
export class ReposDirective implements OnChanges, OnInit {
  
    @Input() repos: number

  constructor(private el: ElementRef) {
   }
    ngOnInit(): void {
        this.checkRepo()
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.checkRepo()
    }

    checkRepo(){
        if(this.repos>1){
            this.el.nativeElement.style.color= 'red'
        }
    }


}