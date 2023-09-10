import { Component, Output } from '@angular/core';
import { Heros } from '../heros';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  title = 'Search';
  search = '';
  filteredHeros: any = [];
  filtered: boolean = false;
  visible: boolean = false;
  details: any;
  heroes: Heros[] = [
    {
      id: '11',
      name: 'Mr. Nice',
      country: 'India',
      componentName: 'OK',
      version: '10',
    },
  ];

  // explain = [{ id: 11, componentName: 'India', componentVersion: '753014' }];

  onChange(event: any) {
    this.search = event.target.value;
    console.log(this.search);
  }

  filter(show: boolean) {
    if (show) {
      this.filteredHeros = this.heroes.filter(
        (hero) => hero.country === this.search
      );
      this.filtered = true;
    } else {
      this.filteredHeros = [];
      this.filtered = false;
    }
  }

  showDialog(id: any) {
    this.visible = true;
    this.details = this.heroes.find((x) => x.id == id);
  }

  getFileData(event: any) {
    let heros: Heros = {
      id: event[0],
      name: event[1],
      country: event[2],
      componentName: event[3],
      version: event[4],
    };

    this.heroes.push(heros);
  }
}
