import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';


/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface NavButton {
  name: string;
  children?: NavButton[];
  selected?: boolean;
  route?: string;
}

const TREE_DATA: NavButton[] = [
  {
    name: 'Profile Forms',
    children: [{name: 'New Form'}, {name: 'Form List'}],
  }
];

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  treeControl = new NestedTreeControl<NavButton>(node => node.children);
  //navButtons = new MatTreeNestedDataSource<NavButton>();
  navButtons: NavButton[] = [];

  constructor() {
    //this.navButtons.data = TREE_DATA;
    this.navButtons = [
      {
        name: 'Profile Forms',
        children: [
          {
            name: 'New Form',
            route: 'profile-form'
          },
          {
            name: 'Form List',
            route: 'forms-list'
          }
        ],
        selected: true
      }
    ];
  }

  hasChild = (_: number, node: NavButton) => !!node.children && node.children.length > 0;
  //constructor(private router: Router) {}

  ngOnInit(): void {
    //this.router.navigate(['admin/forms-list'])

  }

}
