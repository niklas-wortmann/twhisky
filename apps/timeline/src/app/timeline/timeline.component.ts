import { Component, OnInit } from '@angular/core';
import { Sip, UserId, asUserId } from './sip/sip';

@Component({
  selector: 'twhisky-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  sips: Sip[] = [
    {
      content: 'Connamara is a pretty good whisky',
      userId: asUserId('1'),
      likes: 100000,
      retweets: 1500,
      date: '28.05.2020',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onRetweet(_sip: Sip): void {
    _sip.retweets++;
  }

  onLike(_sip: Sip): void {
    _sip.likes++;
  }
}
