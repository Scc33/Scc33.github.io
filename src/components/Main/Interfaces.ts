export interface svg {
  viewBox: string;
  path: string;
}

export interface Skills {
  name: string;
  icon: svg;
}

export interface Hobbies {
  name: string;
  icon: svg;
}

export interface Cateogry {
  name: string;
  category: Skills[];
}
