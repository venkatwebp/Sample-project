import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-filter-courses',
  templateUrl: './filter-courses.component.html',
  styleUrls: ['./filter-courses.component.css']
})
export class FilterCoursesComponent {

   @Input() all: number = 0;
   @Input() free: number = 0;
   @Input() premium: number = 0;

   selectRadioButtonValue: string = 'all';
   @Output() FilterRadioButtonSelectChange: EventEmitter<string> = new EventEmitter<string>();

   onSelectionChange(){
    this.FilterRadioButtonSelectChange.emit(this.selectRadioButtonValue);
   }

}
