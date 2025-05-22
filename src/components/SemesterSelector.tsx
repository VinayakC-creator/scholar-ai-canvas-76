
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sparkles } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const SemesterSelector: React.FC = () => {
  const [selectedSemester, setSelectedSemester] = useState<string>("");
  const [availableSemesters, setAvailableSemesters] = useState([
    { id: "1", name: "1st Semester" },
    { id: "2", name: "2nd Semester" },
    { id: "3", name: "3rd Semester" },
    { id: "4", name: "4th Semester" },
    { id: "5", name: "5th Semester" },
    { id: "6", name: "6th Semester" },
    { id: "7", name: "7th Semester" },
    { id: "8", name: "8th Semester" },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleContinue = () => {
    if (!selectedSemester) {
      toast({
        title: "Selection required",
        description: "Please select a semester to continue.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Save selected semester to session storage
    sessionStorage.setItem('currentSemester', selectedSemester);
    
    // Simulate loading for demonstration
    setTimeout(() => {
      toast({
        title: "Semester selected",
        description: `You are now managing ${availableSemesters.find(sem => sem.id === selectedSemester)?.name}`,
      });
      navigate('/');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-edu-light via-white to-edu-gray-light flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-fade-in">
        <Card className="bg-white rounded-2xl shadow-xl overflow-hidden animate-scale-in">
          <CardHeader className="pb-3">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-edu-primary flex items-center justify-center text-white animate-float">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
            <CardTitle className="text-xl font-bold text-center">Select Semester</CardTitle>
            <CardDescription className="text-center">
              Please select the semester you would like to manage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <Select value={selectedSemester} onValueChange={setSelectedSemester}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a semester" />
                  </SelectTrigger>
                  <SelectContent>
                    {availableSemesters.map((semester) => (
                      <SelectItem key={semester.id} value={semester.id}>
                        {semester.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <p>Your selected semester data will be isolated from other semesters.</p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={handleContinue}
              className="w-full bg-edu-primary hover:bg-edu-dark flex items-center justify-center gap-2 h-11 transition-all duration-300 hover:shadow-lg hover:translate-y-[-2px]"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                "Continue to Dashboard"
              )}
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default SemesterSelector;
