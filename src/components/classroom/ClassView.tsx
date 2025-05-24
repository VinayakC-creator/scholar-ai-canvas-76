
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { 
  ArrowLeft, 
  Users, 
  FileText, 
  TrendingUp, 
  Settings, 
  Video,
  Plus,
  Upload,
  Image,
  MessageSquare
} from 'lucide-react';

interface ClassViewProps {
  classData: {
    id: string;
    title: string;
    code: string;
    semester: string;
    students: number;
    assignments: number;
    attendance: string;
  };
  onBack: () => void;
}

const ClassView: React.FC<ClassViewProps> = ({ classData, onBack }) => {
  const [announcement, setAnnouncement] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Button 
                variant="ghost" 
                onClick={onBack}
                className="text-white hover:bg-white/20"
              >
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div className="flex gap-6">
                <span className="text-blue-100 hover:text-white cursor-pointer border-b-2 border-white pb-1">Stream</span>
                <span className="text-blue-200 hover:text-white cursor-pointer">People</span>
                <span className="text-blue-200 hover:text-white cursor-pointer">Quizzes</span>
                <span className="text-blue-200 hover:text-white cursor-pointer">Leaderboard</span>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="secondary" size="sm">
                <Video className="h-4 w-4 mr-2" />
                Start Meet
              </Button>
              <Button variant="secondary" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Quick Settings
              </Button>
            </div>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold">{classData.title}</h1>
            <p className="text-blue-100 mt-1">{classData.semester}</p>
            <div className="flex gap-6 mt-3 text-sm">
              <span>Class Code: <span className="font-medium">{classData.code}</span></span>
              <span>Room: Room 101</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Stats Cards */}
          <Card className="border border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{classData.students}</p>
                  <p className="text-sm text-gray-600">Students</p>
                  <p className="text-xs text-gray-500">All students approved</p>
                </div>
                <Users className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{classData.assignments}</p>
                  <p className="text-sm text-gray-600">Uploaded Assignments</p>
                  <p className="text-xs text-gray-500">2 need grading</p>
                </div>
                <FileText className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card className="border border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl font-bold text-blue-600">{classData.attendance}</p>
                  <p className="text-sm text-gray-600">Class Average</p>
                  <p className="text-xs text-gray-500">+4% from last week</p>
                </div>
                <TrendingUp className="h-8 w-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Action Buttons */}
        <div className="grid gap-4 md:grid-cols-4 mt-6">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white justify-start h-12">
            <Plus className="h-4 w-4 mr-2" />
            Create Assignment
          </Button>
          <Button variant="outline" className="justify-start h-12">
            <Upload className="h-4 w-4 mr-2" />
            Create Material
          </Button>
          <Button variant="outline" className="justify-start h-12">
            <FileText className="h-4 w-4 mr-2" />
            Create Quiz
          </Button>
          <Button variant="outline" className="justify-start h-12">
            <MessageSquare className="h-4 w-4 mr-2" />
            Announcement
          </Button>
        </div>

        {/* Announcement Section */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Announce something to your class</h3>
            <Textarea 
              placeholder="Share something with your class..."
              value={announcement}
              onChange={(e) => setAnnouncement(e.target.value)}
              className="mb-4"
              rows={4}
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <Button variant="ghost" size="sm">
                  <Upload className="h-4 w-4 mr-2" />
                  Attach
                </Button>
                <Button variant="ghost" size="sm">
                  <Image className="h-4 w-4 mr-2" />
                  Media
                </Button>
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600">
                Post
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="mt-6">
          <CardContent className="p-6">
            <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <FileText className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New assignment posted</p>
                  <p className="text-xs text-gray-500">Programming Assignment #3: Loops and Conditions</p>
                  <p className="text-xs text-gray-400">2 hours ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ClassView;
