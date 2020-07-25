import { Component, OnInit, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent {
  classContainer: string;
  classText: string;
  @Input() kindOf: string;
  @Input() text: string;
  constructor() { }

  ngOnChanges(): void {
    this.initializeClasses();
  }

  initializeClasses(): void {
    switch (this.kindOf) {
      case 'title-one':
        this.classContainer = 'labels__title-one';
        this.classText = 'labels__title-one--normal';
        break;
      case 'title-main':
        this.classContainer = 'labels__title-main';
        this.classText = 'labels__title-main--normal';
        break;
      case 'description':
        this.classContainer = 'labels__description';
        this.classText = 'labels__description--normal';
        break;
      case 'more-info':
        this.classContainer = 'labels__more-info';
        this.classText = 'labels__more-info--normal';
        break;
      case 'disclaimer':
        this.classContainer = 'labels__disclaimer';
        this.classText = 'labels__disclaimer--normal';
        break;
      case 'disclaimer-right-bold':
        this.classContainer = 'labels__disclaimer-right';
        this.classText = 'labels__disclaimer-right--bold';
        break;
      case 'disclaimer-right-regular':
        this.classContainer = 'labels__disclaimer-right';
        this.classText = 'labels__disclaimer-right--regular';
        break;
  }
}

}
