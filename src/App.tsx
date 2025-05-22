
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
import Workspace from "./pages/Workspace";
import SubjectView from "./pages/SubjectView";
import AttendanceMark from "./pages/AttendanceMark";
import SemesterSelector from "./components/SemesterSelector";
import Subjects from "./pages/Subjects";
import SubjectQuestionBank from "./pages/SubjectQuestionBank";
import Students from "./pages/Students";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/select-semester" element={<SemesterSelector />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Index />} />
            <Route path="/subjects" element={<Subjects />} />
            <Route path="/subjects/:subjectId" element={<SubjectView />} />
            <Route path="/subjects/:subjectId/question-bank" element={<SubjectQuestionBank />} />
            <Route path="/students" element={<Students />} />
            <Route path="/calendar" element={<Index />} />
            <Route path="/assignments" element={<Index />} />
            <Route path="/analytics" element={<Index />} />
            <Route path="/ai-tools" element={<AITools />} />
            <Route path="/workspace" element={<Workspace />} />
            <Route path="/workspace/:subjectId" element={<SubjectView />} />
            <Route path="/workspace/attendance" element={<AttendanceMark />} />
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
