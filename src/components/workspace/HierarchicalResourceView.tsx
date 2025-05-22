
import React, { useState } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  FileText, 
  Presentation, 
  Image as ImageIcon, 
  Video, 
  File, 
  Folder,
  Sparkles,
  FileQuestion,
  Edit
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Subject, getSubject } from '@/data/subjectsData';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';
import { 
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface HierarchicalResourceViewProps {
  semester: string;
  searchQuery: string;
}

const HierarchicalResourceView: React.FC<HierarchicalResourceViewProps> = ({ semester, searchQuery }) => {
  const [expandedSubjects, setExpandedSubjects] = useState<Record<string, boolean>>({});
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Get filtered subjects based on search query
  const subjects = getSubjectsByParams({ semester, search: searchQuery });
  
  const toggleSubject = (subjectId: string) => {
    setExpandedSubjects(prev => ({
      ...prev,
      [subjectId]: !prev[subjectId]
    }));
  };
  
  const toggleModule = (moduleId: string) => {
    setExpandedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };
  
  const handleAITools = (name: string, level: 'subject' | 'module' | 'chapter') => {
    navigate('/ai-tools', { state: { 
      context: name, 
      level: level
    }});
  };
  
  const handlePPTEditor = (name: string) => {
    toast({
      title: "Opening PPT Editor",
      description: `Editing presentations for ${name}`,
    });
  };
  
  const handleGenerateQuestions = (name: string, level: 'subject' | 'module' | 'chapter') => {
    navigate('/workspace', { 
      state: { 
        activeTab: 'question-bank',
        context: name,
        level: level
      }
    });
  };
  
  const renderResourceIcon = (type: string) => {
    switch (type) {
      case 'pdf':
        return <FileText className="h-4 w-4 text-red-500" />;
      case 'ppt':
        return <Presentation className="h-4 w-4 text-orange-500" />;
      case 'image':
        return <ImageIcon className="h-4 w-4 text-green-500" />;
      case 'video':
        return <Video className="h-4 w-4 text-purple-500" />;
      default:
        return <File className="h-4 w-4 text-gray-500" />;
    }
  };
  
  if (subjects.length === 0) {
    return (
      <div className="text-center py-10">
        <Folder className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
        <h3 className="font-medium">No subjects found</h3>
        <p className="text-sm text-muted-foreground">Try adjusting your search</p>
      </div>
    );
  }
  
  return (
    <div className="space-y-2">
      {subjects.map((subject) => (
        <div key={subject.id} className="border rounded-md overflow-hidden">
          <div 
            className={`flex items-center justify-between p-3 cursor-pointer hover:bg-accent ${expandedSubjects[subject.id] ? 'bg-accent/50' : ''}`}
            onClick={() => toggleSubject(subject.id)}
          >
            <div className="flex items-center gap-2">
              {expandedSubjects[subject.id] ? 
                <ChevronDown className="h-4 w-4" /> : 
                <ChevronRight className="h-4 w-4" />
              }
              <Folder className="h-5 w-5" style={{ color: subject.color || '#4f46e5' }} />
              <span className="font-medium">{subject.name}</span>
              <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 rounded">
                {subject.code}
              </span>
            </div>
            
            <div className="flex gap-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAITools(subject.name, 'subject');
                      }}
                    >
                      <Sparkles className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>AI Tools</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePPTEditor(subject.name);
                      }}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>PPT Editor</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-7 w-7" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGenerateQuestions(subject.name, 'subject');
                      }}
                    >
                      <FileQuestion className="h-4 w-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Generate Questions</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          
          {expandedSubjects[subject.id] && (
            <div className="pl-6 pb-2">
              {subject.modules.map((module) => (
                <div key={module.id} className="mt-1">
                  <div 
                    className={`flex items-center justify-between p-2 cursor-pointer hover:bg-accent/30 rounded-md mx-2 ${expandedModules[module.id] ? 'bg-accent/20' : ''}`}
                    onClick={() => toggleModule(module.id)}
                  >
                    <div className="flex items-center gap-2">
                      {expandedModules[module.id] ? 
                        <ChevronDown className="h-3 w-3" /> : 
                        <ChevronRight className="h-3 w-3" />
                      }
                      <span className="text-sm font-medium">{module.name}</span>
                    </div>
                    
                    <div className="flex gap-1">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAITools(module.name, 'module');
                              }}
                            >
                              <Sparkles className="h-3 w-3" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>AI Tools</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handlePPTEditor(module.name);
                              }}
                            >
                              <Edit className="h-3 w-3" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>PPT Editor</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="h-6 w-6" 
                              onClick={(e) => {
                                e.stopPropagation();
                                handleGenerateQuestions(module.name, 'module');
                              }}
                            >
                              <FileQuestion className="h-3 w-3" />
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>Generate Questions</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                  </div>
                  
                  {expandedModules[module.id] && (
                    <div className="pl-5">
                      {module.chapters.map((chapter) => (
                        <div key={chapter.id} className="mt-1">
                          <div className="flex items-center justify-between p-2 cursor-pointer hover:bg-accent/20 rounded-md mx-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-medium">{chapter.name}</span>
                              <span className="text-xs text-muted-foreground">
                                ({chapter.presentations.length} presentations)
                              </span>
                            </div>
                            
                            <div className="flex gap-1">
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button 
                                      variant="ghost" 
                                      size="icon" 
                                      className="h-6 w-6" 
                                      onClick={() => handleAITools(chapter.name, 'chapter')}
                                    >
                                      <Sparkles className="h-3 w-3" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>AI Tools</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                              
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button 
                                      variant="ghost" 
                                      size="icon" 
                                      className="h-6 w-6" 
                                      onClick={() => handlePPTEditor(chapter.name)}
                                    >
                                      <Edit className="h-3 w-3" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>PPT Editor</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                              
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button 
                                      variant="ghost" 
                                      size="icon" 
                                      className="h-6 w-6" 
                                      onClick={() => handleGenerateQuestions(chapter.name, 'chapter')}
                                    >
                                      <FileQuestion className="h-3 w-3" />
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p>Generate Questions</p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </div>
                          </div>
                          
                          <div className="pl-5 py-1">
                            {chapter.presentations.map((presentation) => (
                              <div 
                                key={presentation.id} 
                                className="flex items-center gap-2 p-1 hover:bg-accent/10 rounded-md mx-2 cursor-pointer"
                                onClick={() => toast({
                                  title: "Opening presentation",
                                  description: `Opening ${presentation.name}`,
                                })}
                              >
                                <Presentation className="h-3 w-3 text-orange-500" />
                                <span className="text-xs">{presentation.name}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default HierarchicalResourceView;

export function getSubjectsByParams({ semester, search }: { semester: string; search: string }) {
  // This is a temporary function that should be imported from data/subjectsData.ts
  // but is defined here to avoid dependency issues during development
  
  // In production, this import would be used instead:
  // import { getSubjectsByParams } from '@/data/subjectsData';
  // return getSubjectsByParams({ semester, search });
  
  const { getSemesterSubjects } = require('@/data/subjectsData');
  const subjects = getSemesterSubjects(semester);
  
  if (!search) {
    return subjects.map((subject: any) => ({
      ...subject,
      color: subject.color || getRandomColor(subject.id),
      ongoing: subject.ongoing !== undefined ? subject.ongoing : Math.random() > 0.5,
      schedule: subject.schedule || {
        day: getRandomDay(),
        time: getRandomTime()
      },
      studentCount: subject.studentCount || Math.floor(Math.random() * 60) + 20
    }));
  }
  
  const searchLower = search.toLowerCase();
  return subjects
    .filter((subject: any) => 
      subject.name.toLowerCase().includes(searchLower) || 
      subject.code.toLowerCase().includes(searchLower)
    )
    .map((subject: any) => ({
      ...subject,
      color: subject.color || getRandomColor(subject.id),
      ongoing: subject.ongoing !== undefined ? subject.ongoing : Math.random() > 0.5,
      schedule: subject.schedule || {
        day: getRandomDay(),
        time: getRandomTime()
      },
      studentCount: subject.studentCount || Math.floor(Math.random() * 60) + 20
    }));
}

// Helper functions for generating random values
const getRandomColor = (id: string): string => {
  const colors = [
    '#FF5733', '#33FF57', '#3357FF', '#F033FF', '#FF33F0',
    '#33FFF0', '#F0FF33', '#5733FF', '#FF5733', '#33FF57'
  ];
  // Use the id to generate a consistent color for the same subject
  const index = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  return colors[index];
};

const getRandomDay = (): string => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
  return days[Math.floor(Math.random() * days.length)];
};

const getRandomTime = (): string => {
  const hours = ['8:00', '9:30', '11:00', '1:00', '2:30', '4:00'];
  const periods = ['AM', 'AM', 'AM', 'PM', 'PM', 'PM'];
  const index = Math.floor(Math.random() * hours.length);
  return `${hours[index]} ${periods[index]}`;
};
