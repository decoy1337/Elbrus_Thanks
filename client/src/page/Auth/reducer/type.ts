export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type StateAuth = {
  user: User | undefined;
};
