import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-vote-now',
  templateUrl: './vote-now.component.html',
  styleUrls: ['./vote-now.component.scss']
})
export class VoteNowComponent implements OnInit {
  @Input() star: string;
  @Output() vote = new EventEmitter<any>();

  currentSelection: boolean;
  hideOptions: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  preselectOption(vote): void {
    this.currentSelection = vote;
  }

  emitVote(): void{
    this.hideOptions = true;
    this.vote.emit({star: this.star, vote: this.currentSelection});
  }

  showOptions(): void {
    this.hideOptions = false;
  }

}
