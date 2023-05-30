"use client";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../components/ui/loginButton";

export default function Home() {
  const { user, error, isLoading } = useAuth0();

  if (isLoading) return <div>Loading...</div>;
  console.log(user);
  // if (error) return <div>{error.message}</div>;

  // if (user) {
  //   return (
  //     <div>
  //       Welcome {user.name}! <a href="/api/auth/logout">Logout</a>
  //     </div>
  //   );
  // }

  return <LoginButton />;
}
