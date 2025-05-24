import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  BookOpen, 
  Video, 
  Users, 
  MessageSquare, 
  FileText, 
  Calendar, 
  Plus,
  Upload,
  Send,
  Download,
  Eye,
  Clock,
  User,
  CheckCircle,
  ArrowLeft
} from 'lucide-react';

const VirtualClassroom: React.FC = () => {
  const [announcement, setAnnouncement] = useState('');
  const [selectedClass, setSelectedClass] = useState<string | null>(null);

  const classStats = [
    { label: 'Your Classes', value: '3', icon: BookOpen, color: 'text-blue-500' },
    { label: 'This Week\'s Assignments', value: '5', icon: FileText, color: 'text-green-500' },
    { label: 'Total Students', value: '32', icon: Users, color: 'text-purple-500' }
  ];

  const classes = [
    {
      id: 'cs101',
      title: 'CS101: Intro to Programming',
      code: 'cs101023',
      semester: 'Fall 2023',
      color: 'bg-blue-500',
      students: 3,
      assignments: 1,
      attendance: '70%'
    },
    {
      id: 'math202',
      title: 'MATH202: Advanced Calculus',
      code: 'math202123',
      semester: 'Fall 2023',
      color: 'bg-green-500',
      students: 5,
      assignments: 2,
      attendance: '85%'
    },
    {
      id: 'phys101',
      title: 'PHYS101: Introduction to Physics',
      code: 'phys101123',
      semester: 'Fall 2023',
      color: 'bg-yellow-500',
      students: 4,
      assignments: 3,
      attendance: '92%'
    }
  ];

  const materials = [
    { name: 'Course Syllabus', type: 'PDF', size: '2.4 MB' },
    { name: 'Question Bank for Unit 1', type: 'DOC', size: '1.8 MB' },
    { name: 'Lecture 01: Web Development', type: 'PPT', size: '5.2 MB' }
  ];

  const handleVisitClass = (classId: string) => {
    setSelectedClass(classId);
  };

  const handleBackToClasses = () => {
    setSelectedClass(null);
  };

  // If a class is selected, show the class interface
  if (selectedClass) {
    return (
      <div className="min-h-screen bg-background">
        {/* Back button */}
        <div className="p-4 border-b">
          <Button variant="ghost" onClick={handleBackToClasses} className="mb-2">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Classes
          </Button>
        </div>
        
        {/* Class interface image */}
        <div className="w-full h-[calc(100vh-80px)]">
          <img 
            src="/lovable-uploads/36a97894-54f1-425b-90c8-1a425da7d124.png" 
            alt="Class Interface" 
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Header with Welcome and Stats */}
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Welcome back, Arjun</h1>
          <p className="text-muted-foreground">Thursday, May 15, 2025</p>
        </div>

        {/* Stats Cards */}
        <div className="grid gap-4 md:grid-cols-3">
          {classStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Tabs defaultValue="classes" className="w-full">
        <TabsList className="grid w-full md:w-[600px] grid-cols-4">
          <TabsTrigger value="classes">Your Classes</TabsTrigger>
          <TabsTrigger value="assignments">Assignments</TabsTrigger>
          <TabsTrigger value="materials">Materials</TabsTrigger>
          <TabsTrigger value="announcements">Announcements</TabsTrigger>
        </TabsList>
        
        <TabsContent value="classes" className="space-y-4 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Your Classes</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Class
            </Button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {classes.map((classItem) => (
              <Card key={classItem.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className={`h-24 ${classItem.color} rounded-lg mb-3 flex items-center justify-center`}>
                    <h3 className="text-white font-semibold text-center px-2">{classItem.title}</h3>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm text-muted-foreground">Created on May 15, 2025</p>
                    <p className="text-sm">Class Code: <span className="text-blue-500">{classItem.code}</span></p>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div>
                      <p className="text-lg font-semibold">{classItem.students}</p>
                      <p className="text-xs text-muted-foreground">Students Joined</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">{classItem.assignments}</p>
                      <p className="text-xs text-muted-foreground">Assignments</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold">{classItem.attendance}</p>
                      <p className="text-xs text-muted-foreground">Attendance</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => handleVisitClass(classItem.id)}
                  >
                    Visit Class
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="assignments" className="space-y-4 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Assignments</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Assignment
            </Button>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Create Material
                </CardTitle>
                <CardDescription>Create assignment materials and resources</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Assignment title" />
                <Textarea placeholder="Assignment description" rows={3} />
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Upload className="h-4 w-4 mr-2" />
                    Upload File
                  </Button>
                  <Button variant="outline" size="sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    Set Due Date
                  </Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Create Assignment</Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Upcoming Deadlines</CardTitle>
                <CardDescription>This Week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Programming Assignment #3: Loops and Conditions</p>
                    <p className="text-sm text-muted-foreground">CS101: Intro to Programming</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-orange-500">Due Tomorrow</p>
                    <p className="text-xs text-muted-foreground">Oct 15, 2023</p>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">Reading: Chapter 5 Summary</p>
                    <p className="text-sm text-muted-foreground">CS101: Intro to Programming</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-blue-500">Due in 4 days</p>
                    <p className="text-xs text-muted-foreground">Oct 18, 2023</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="materials" className="space-y-4 mt-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Materials</h2>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Create Material
            </Button>
          </div>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                {materials.map((material, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{material.name}</p>
                        <p className="text-sm text-muted-foreground">{material.type} • {material.size}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="announcements" className="space-y-4 mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Announce something to your class...
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Textarea 
                  placeholder="Type your announcement here..."
                  value={announcement}
                  onChange={(e) => setAnnouncement(e.target.value)}
                  rows={4}
                />
                <div className="flex justify-between items-center">
                  <p className="text-sm text-muted-foreground">
                    Data Structures & Algorithms • 1 hr ago
                  </p>
                  <Button>
                    <Send className="h-4 w-4 mr-2" />
                    Post Announcement
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Recent Announcements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4 py-2">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <p className="font-medium">Assignment Due Date Extended</p>
                      <p className="text-sm text-muted-foreground">
                        The programming assignment deadline has been extended to next Friday due to technical issues.
                      </p>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <User className="h-3 w-3" />
                        <span>Prof. Johnson</span>
                        <Clock className="h-3 w-3 ml-2" />
                        <span>2 hours ago</span>
                      </div>
                    </div>
                    <CheckCircle className="h-5 w-5 text-green-500 mt-1" />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VirtualClassroom;
