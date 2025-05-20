
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import NotFound from "./pages/NotFound";
import AITools from "./pages/AITools";
import Library from "./pages/Library";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/courses" element={<Index />} />
            <Route path="/students" element={<Index />} />
            <Route path="/calendar" element={<Index />} />
            <Route path="/messages" element={<Index />} />
            <Route path="/assignments" element={<Index />} />
            <Route path="/analytics" element={<Index />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/library" element={<Library />} />
            <Route path="/settings" element={<Index />} />
            <Route path="/help" element={<Index />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
