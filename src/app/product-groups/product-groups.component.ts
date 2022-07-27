import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

interface Group {
  id: string;
  name: string;
}
const ELEMENT_DATA: Array<Group> = [
  {
    id: '1',
    name: 'Beef'
  },
  {
    id: '2',
    name: 'Pork'
  },
  {
    id: '3',
    name: 'Lamb'
  }
];
@Component({
  selector: 'app-product-groups',
  templateUrl: './product-groups.component.html',
  styleUrls: ['./product-groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductGroupsComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  displayedColumns: string[] = ['id', 'name'];
  constructor() { }

  ngOnInit(): void {
  }

}
