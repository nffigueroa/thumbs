import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-star-square',
  templateUrl: './star-square.component.html',
  styleUrls: ['./star-square.component.scss']
})
export class StarSquareComponent implements OnInit {
  config = [
    {
      nameStar: 'Kanye',
      name: 'Kanye Wets',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      timeAgo: '1 Month',
      where: 'Entertainment',
      statusVotation: true
    },
    {
      nameStar: 'Mark',
      name: 'Mark Zuckerbeg',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      timeAgo: '1 Month',
      where: 'Business',
      statusVotation: true
    },
    {
      nameStar: 'Cristina',
      name: 'Cristina Fernández de Kirchner',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      timeAgo: '1 Month',
      where: 'politics',
      statusVotation: true
    },
    {
      nameStar: 'Malala',
      name: 'Malala Yousafzai',
      description: 'Vestibulum diam ante, porttitor a odio eget, rhoncus neque. Aenean eu velit libero.',
      timeAgo: '1 Month',
      where: 'Entertainment',
      statusVotation: true
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
