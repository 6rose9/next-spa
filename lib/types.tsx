interface BaseModel {
  _id: string; //MongoDB primary key field
}

export interface Director extends BaseModel {
  name: string;
  phoneNo: string;
}

export interface Movie extends BaseModel {
  title: string;
  director: Director;
  year: number;
}
