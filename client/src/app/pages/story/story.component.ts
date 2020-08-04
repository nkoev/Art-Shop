import { Component, OnInit } from '@angular/core';
import { NavBarService } from 'src/app/shared/services/nav-bar.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.sass'],
})
export class StoryComponent implements OnInit {
  constructor(private nav: NavBarService) {}

  ngOnInit(): void {
    this.nav.setCurrent('story');
  }
}
