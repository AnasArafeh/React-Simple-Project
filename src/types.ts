interface dataT {
  id: number;
  name: string;
  mobile: string;
  address: string;
}
// interface IAction {
//   type: dataT;
//   payload: any;
// }

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

export interface addT {}

export default dataT;
