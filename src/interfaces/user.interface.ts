export interface User {
  userId: number;
  username?: string;
  email: string;
  token: string;
}

export interface UserComplete extends User {
  created_at: string;
}
