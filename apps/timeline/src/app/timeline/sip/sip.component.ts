import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Sip } from './sip';
import { fromEvent, Subject } from 'rxjs';
import { map, exhaustMap } from 'rxjs/operators';

@Component({
  selector: 'twhisky-sip',
  templateUrl: './sip.component.html',
  styleUrls: ['./sip.component.css'],
})
export class SipComponent implements OnInit, AfterViewInit {
  @Input() sip!: Sip;

  @ViewChild('likes') likesElement!: ElementRef;
  @ViewChild('retweets') retweetsElement!: ElementRef;

  private afterViewInit$ = new Subject<void>();

  @Output() likes = this.afterViewInit$
    .asObservable()
    .pipe(exhaustMap((_) => fromEvent(this.likesElement.nativeElement, 'click').pipe(map((_) => this.sip))));

  @Output() retweets = this.afterViewInit$
    .asObservable()
    .pipe(exhaustMap((_) => fromEvent(this.retweetsElement.nativeElement, 'click').pipe(map((_) => this.sip))));

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.afterViewInit$.next();
  }
}
