
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { BookOpen, Video, Users, MessageSquare, FileText, Calendar } from 'lucide-react';

const VirtualClassroom: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Virtual Classroom</h1>
          <p className="text-muted-foreground">
            Access your virtual learning environment
          </p>
        </div>
        <Button>Start New Session</Button>
      </div>

      <Tabs defaultValue="upcoming" className="w-full">
        <TabsList className="grid w-full md:w-[400px] grid-cols-3">
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="ongoing">Ongoing</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
        
        <TabsContent value="upcoming" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Introduction to Algorithms",
                date: "Tomorrow, 10:00 AM",
                subject: "Computer Science",
                icon: <BookOpen className="h-5 w-5 text-edu-accent" />
              },
              {
                title: "Physics Lab Session",
                date: "May 25, 2:30 PM",
                subject: "Physics",
                icon: <Video className="h-5 w-5 text-edu-primary" />
              },
              {
                title: "Group Project Discussion",
                date: "May 26, 11:15 AM",
                subject: "Software Engineering",
                icon: <Users className="h-5 w-5 text-indigo-500" />
              }
            ].map((session, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-medium">{session.title}</CardTitle>
                    {session.icon}
                  </div>
                  <CardDescription>{session.subject}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{session.date}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Join Session</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="ongoing" className="mt-6">
          <div className="rounded-xl border bg-card text-card-foreground shadow-sm p-6">
            <div className="flex flex-col items-center justify-center py-12">
              <Video className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-xl font-medium mb-2">No Ongoing Sessions</h3>
              <p className="text-muted-foreground mb-4">There are no active virtual classroom sessions at the moment.</p>
              <Button>Create New Session</Button>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="past" className="space-y-4 mt-6">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Advanced Mathematics",
                date: "May 20, 9:00 AM",
                subject: "Mathematics",
                icon: <FileText className="h-5 w-5 text-green-500" />
              },
              {
                title: "English Literature Discussion",
                date: "May 18, 1:00 PM",
                subject: "English",
                icon: <MessageSquare className="h-5 w-5 text-amber-500" />
              }
            ].map((session, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-medium">{session.title}</CardTitle>
                    {session.icon}
                  </div>
                  <CardDescription>{session.subject}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-1 text-muted-foreground" />
                    <span>{session.date}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex items-center justify-between gap-2">
                  <Button variant="outline" size="sm">View Recording</Button>
                  <Button variant="outline" size="sm">Resources</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VirtualClassroom;
