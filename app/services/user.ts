import { User } from "../model";

export const createUser = async (user: User) => {
  const response = await fetch(`/api/auth`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  if (response.status === 409) {
    throw new Error("Email already exists");
  }
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const response = await fetch(`/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  if (response.status === 401) {
    throw new Error("Email or password is wrong");
  }
  if (!response.ok) {
    throw new Error("Sorry! Something went wrong");
  }
};
export const logout = async () => {
  const response = await fetch(`/api/auth/logout`);

  if (!response.ok) {
    throw new Error("Sorry! Something went wrong");
  }
};
