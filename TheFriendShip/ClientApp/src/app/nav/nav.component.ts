import { Component, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnDestroy {

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}

var filterByFemale = [
  { name: "Tracey", gender: true },
  { name: "Blanche", gender: true },
  { name: "Alicia", gender: true },
  { name: "Caroline", gender: true },
  { name: "Kathy", gender: true },
  { name: "Maldonado", gender: false },
  { name: "Moss", gender: false },
  { name: "Pierce", gender: false },
  { name: "Cole", gender: false },
  { name: "Prince", gender: false }
];

var o = filterByFemale.filter(e => e.gender);

console.log(o)

var filterByMale = [
  { name: "Tracey", gender: false },
  { name: "Blanche", gender: false },
  { name: "Alicia", gender: false },
  { name: "Caroline", gender: false },
  { name: "Kathy", gender: false },
  { name: "Maldonado", gender: true },
  { name: "Moss", gender: true },
  { name: "Pierce", gender: true },
  { name: "Cole", gender: true },
  { name: "Prince", gender: true }
];

var o = filterByMale.filter(e => e.gender);

console.log(o)
