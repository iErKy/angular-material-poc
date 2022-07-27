import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scale-management',
  templateUrl: './scale-management.component.html',
  styleUrls: ['./scale-management.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ScaleManagementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
