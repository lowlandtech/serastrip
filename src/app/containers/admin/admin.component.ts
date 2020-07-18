import { Component, OnInit, ViewEncapsulation, HostBinding } from '@angular/core';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AdminContainerComponent implements OnInit {
  @HostBinding('class.container') class1 = true;
  constructor() { }

  ngOnInit(): void {
  }

}
