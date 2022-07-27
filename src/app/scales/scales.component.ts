import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-scales',
  templateUrl: './scales.component.html',
  styleUrls: ['./scales.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScalesComponent implements OnInit {
  scales = ["Scale #1 - Meat XC100", "Scale #2 - Deli XC100", "Scale #3 - Seafood XC100"];
  constructor() { }

  ngOnInit(): void {
  }

}
