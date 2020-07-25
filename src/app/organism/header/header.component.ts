import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  img = '../../../assets/img/pope.png';
  item = {
    nameStar: 'pope',
    name: 'Pope Francis?',
    description: 'He’s talking tough on clergy sexual abuse, but is he just another papal pervert protector?' +
    '(thumbs down) or a true pedophile punishing pontiff? (thumbs up) ',
    statusVotation: true
  };
  constructor() { }

  ngOnInit() {
  }

}
