import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'MaS-router-discovery',
  templateUrl: './router-discovery.component.html',
  styles: []
})
export class RouterDiscoveryComponent implements OnInit, OnDestroy {

  private subscription: Subscription;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: Params) => { console.log(params['id']); }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
