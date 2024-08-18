export interface Fixed {
  id: number;
  title: string;
  items: Array<Items>;
}

export interface Items {
  subtitle: string;
  options: Array<Options>;
}

export interface Options {
  label: string;
  value: number;
}
