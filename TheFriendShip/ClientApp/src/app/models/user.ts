export class User {
  usesrname: string;
  password: string;
}
export interface User {
  id: string;
  userName: string;
}
export interface AuthUser {
  tokenString: string;
  user: string;
}
