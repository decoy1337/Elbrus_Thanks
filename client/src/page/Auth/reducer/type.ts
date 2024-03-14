export type User = {
  id: number;
  login: string;
  name: string;
  email: string;
  password: string;
};

export type StateAuth = {
  user: User | undefined;
};
