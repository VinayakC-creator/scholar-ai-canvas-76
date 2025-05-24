
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { 
  BookOpen, 
  Users, 
  FileText, 
  Plus
} from 'lucide-react';
import ClassView from '@/components/classroom/ClassView';

const VirtualClassroom: React.FC = () => {
  const [selectedClass, setSelectedClass] = useState<any>(null);

  const classStats = [
    { label: 'Your Classes', value: '3', icon: BookOpen, color: 'text-blue-500' },
    { label: 'This Week\'s Assignments', value: '5', icon: FileText, color: 'text-green-500' },
    { label: 'Total Students', value: '32', icon: Users, color: 'text-purple-500' }
  ];

  const classes = [
    {
      id: 'cs101',
      title: 'CS101: Intro to Programming',
      code: 'cs101f23',
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

  const handleVisitClass = (classItem: any) => {
    setSelectedClass(classItem);
  };

  const handleBackToClasses = () => {
    setSelectedClass(null);
  };

  if (selectedClass) {
    return <ClassView classData={selectedClass} onBack={handleBackToClasses} />;
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

      {/* Your Classes Section */}
      <div className="space-y-4">
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
                  onClick={() => handleVisitClass(classItem)}
                >
                  Visit Class
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VirtualClassroom;
