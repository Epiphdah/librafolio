import { Redirect } from "wouter";
import { isAuthenticated } from "../utils/auth";

export default function ProtectedRoute({ children }: any) {
  if (!isAuthenticated()) {
    return <Redirect to="/login" />;
  }

  return children;
}