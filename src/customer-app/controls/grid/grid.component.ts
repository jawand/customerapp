import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'grid-ui',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})

export class GridComponent {

  // grid columns
  gridColumns: Array<Keyable> = new Array<Keyable>();

  // grid data
  gridData: Array<any> = new Array<any>();

  // emit event i.e. selected an data item
  @Output('grid-selected')
  eventEmitter: EventEmitter<any> = new EventEmitter();

  @Input('grid-columns')
  set setGridColumns(_gridColumns: Array<Keyable>) {
    this.gridColumns = _gridColumns;
  }

  @Input('grid-data')
  set setGridData(_gridData: Array<any>) {
    this.gridData = _gridData;
  }

  SelectGrid(_selected: any) {
    // send the selected object from the UI to here.
    // then emit an event to the UI under which this component is running
    this.eventEmitter.emit(_selected);
  }
}


interface Keyable {
  [key: string]: any
}