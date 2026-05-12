import { useEffect, useState } from "react";
import { getProfile } from "./api/user";
import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Login from "./pages/Login";

<Route path="/login" element={<Login />} />

const queryClient = new QueryClient();

function Home() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const data = await getProfile();
        setUser(data);
      } catch (err) {
        console.log("Erreur récupération user");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">
          Dashboard Librafolio
        </h1>

        {loading && <p>Chargement...</p>}

        {user && (
          <div className="mt-4">
            <p>👤 {user.username}</p>
            <p>📧 {user.email}</p>

            <button
              onClick={logout}
              style={{
                marginTop: "10px",
                padding: "8px 12px",
                background: "red",
                color: "white",
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      {/* PUBLIC */}
      <Route path="/login" component={Login} />

      {/* PROTECTED */}
      <Route path="/">
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
