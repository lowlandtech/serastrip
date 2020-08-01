import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // constant for swipe action: left or right
  SWIPE_ACTION = { DOWN: 'swipedown', UP: 'swipeup' };

  // our list of avatars
  avatars = [
    {
      name: 'kristy',
      image: 'https://semantic-ui.com/images/avatar2/large/kristy.png',
      visible: true
    },
    {
      name: 'matthew',
      image: 'https://semantic-ui.com/images/avatar2/large/matthew.png',
      visible: false
    },
    {
      name: 'chris',
      image: 'https://semantic-ui.com/images/avatar/large/chris.jpg',
      visible: false
    },
    {
      name: 'jenny',
      image: 'https://semantic-ui.com/images/avatar/large/jenny.jpg',
      visible: false
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // action triggered when user swipes
  swipe(currentIndex: number, action = this.SWIPE_ACTION.UP) {
    // out of range
    if (currentIndex > this.avatars.length || currentIndex < 0) { return; }

    let nextIndex = 0;

    // swipe right, next avatar
    if (action === this.SWIPE_ACTION.UP) {
      const isLast = currentIndex === this.avatars.length - 1;
      nextIndex = isLast ? 0 : currentIndex + 1;
    }

    // swipe left, previous avatar
    if (action === this.SWIPE_ACTION.DOWN) {
      const isFirst = currentIndex === 0;
      nextIndex = isFirst ? this.avatars.length - 1 : currentIndex - 1;
    }

    // toggle avatar visibility
    this.avatars.forEach((x, i) => x.visible = (i === nextIndex));
  }

}
