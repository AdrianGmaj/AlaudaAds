import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-video-marketing',
  templateUrl: './video-marketing.component.html',
  styleUrls: ['./video-marketing.component.scss']
})
export class VideoMarketingComponent implements OnInit, AfterViewInit {

  constructor(private route: ActivatedRoute,
    private viewportScroller: ViewportScroller,) {

  }

  ngOnInit() {
  }
  ngAfterViewInit(): void {
    this.route.fragment.subscribe(fragment => {
      this.viewportScroller.scrollToAnchor(fragment)
      console.log(fragment)
    }
    )
  }
}
