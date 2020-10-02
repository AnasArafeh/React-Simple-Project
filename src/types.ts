export interface dataT {
  id: number;
  name: string;
  mobile: string;
  address: string;
}

export interface stateX {
  statex: dataT[];
}

export interface contextT {
  state: stateX;
  dispatch: any;
}

export interface actionT {
  type: string;
  payload: any;
}
