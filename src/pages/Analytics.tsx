
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowUpRight, ArrowDownRight, BarChart as BarChartIcon, LineChart as LineChartIcon, PieChart as PieChartIcon, Download, Share2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Sample data
const attendanceData = [
  { name: 'Week 1', attendance: 95 },
  { name: 'Week 2', attendance: 92 },
  { name: 'Week 3', attendance: 88 },
  { name: 'Week 4', attendance: 93 },
  { name: 'Week 5', attendance: 85 },
  { name: 'Week 6', attendance: 90 },
  { name: 'Week 7', attendance: 94 },
  { name: 'Week 8', attendance: 91 },
];

const gradeData = [
  { name: 'Assignment 1', avgGrade: 82, highestGrade: 98, lowestGrade: 65 },
  { name: 'Assignment 2', avgGrade: 78, highestGrade: 95, lowestGrade: 60 },
  { name: 'Quiz 1', avgGrade: 85, highestGrade: 100, lowestGrade: 72 },
  { name: 'Midterm', avgGrade: 76, highestGrade: 94, lowestGrade: 58 },
  { name: 'Assignment 3', avgGrade: 81, highestGrade: 97, lowestGrade: 63 },
  { name: 'Quiz 2', avgGrade: 83, highestGrade: 99, lowestGrade: 70 },
  { name: 'Final Project', avgGrade: 87, highestGrade: 100, lowestGrade: 75 },
];

const subjectPerformanceData = [
  { name: 'Database Management', avgGrade: 85, passRate: 92 },
  { name: 'Programming Fundamentals', avgGrade: 78, passRate: 88 },
  { name: 'Data Structures', avgGrade: 72, passRate: 84 },
  { name: 'Web Technologies', avgGrade: 81, passRate: 90 },
  { name: 'Computer Networks', avgGrade: 76, passRate: 86 },
];

const engagementData = [
  { name: 'Questions Asked', value: 65, color: '#8884d8' },
  { name: 'Discussion Posts', value: 45, color: '#82ca9d' },
  { name: 'Resource Downloads', value: 90, color: '#ffc658' },
  { name: 'Video Watches', value: 80, color: '#ff8042' },
];

const submissionTimeData = [
  { name: '> 3 days early', value: 15, color: '#4caf50' },
  { name: '1-3 days early', value: 30, color: '#8bc34a' },
  { name: 'Last 24 hours', value: 40, color: '#ffeb3b' },
  { name: 'Last 6 hours', value: 10, color: '#ff9800' },
  { name: 'Late', value: 5, color: '#f44336' },
];

const Analytics: React.FC = () => {
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedSemester, setSelectedSemester] = useState<string>('current');
  const [dateRange, setDateRange] = useState<string>('semester');
  const { toast } = useToast();

  const handleExportData = () => {
    toast({
      title: "Analytics Exported",
      description: "Your analytics data has been exported to CSV.",
    });
  };
  
  const handleShareReport = () => {
    toast({
      title: "Report Shared",
      description: "Analytics report has been shared with administrators.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track student performance and teaching effectiveness</p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline"
            onClick={handleExportData}
            className="hover-scale"
          >
            <Download className="mr-2 h-4 w-4" />
            Export Data
          </Button>
          
          <Button 
            onClick={handleShareReport}
            className="hover-scale"
          >
            <Share2 className="mr-2 h-4 w-4" />
            Share Report
          </Button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <Select value={selectedSubject} onValueChange={setSelectedSubject}>
            <SelectTrigger>
              <SelectValue placeholder="All Subjects" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              <SelectItem value="database">Database Management</SelectItem>
              <SelectItem value="programming">Programming Fundamentals</SelectItem>
              <SelectItem value="datastructures">Data Structures</SelectItem>
              <SelectItem value="web">Web Technologies</SelectItem>
              <SelectItem value="networks">Computer Networks</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <Select value={selectedSemester} onValueChange={setSelectedSemester}>
            <SelectTrigger>
              <SelectValue placeholder="Current Semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="current">Current Semester</SelectItem>
              <SelectItem value="previous">Previous Semester</SelectItem>
              <SelectItem value="all">All Semesters</SelectItem>
            </SelectContent>
          </Select>
        </div>
        
        <div className="flex-1 min-w-[200px]">
          <Select value={dateRange} onValueChange={setDateRange}>
            <SelectTrigger>
              <SelectValue placeholder="This Semester" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="semester">This Semester</SelectItem>
              <SelectItem value="month">Last Month</SelectItem>
              <SelectItem value="year">Last Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Average Grade</p>
                <p className="text-2xl font-bold">82%</p>
              </div>
              <div className="flex items-center text-green-600">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+5%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Compared to previous semester</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Attendance Rate</p>
                <p className="text-2xl font-bold">89%</p>
              </div>
              <div className="flex items-center text-green-600">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+2%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Compared to previous semester</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Pass Rate</p>
                <p className="text-2xl font-bold">91%</p>
              </div>
              <div className="flex items-center text-green-600">
                <ArrowUpRight className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">+3%</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Compared to previous semester</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm font-medium text-muted-foreground">At-Risk Students</p>
                <p className="text-2xl font-bold">6</p>
              </div>
              <div className="flex items-center text-red-600">
                <ArrowDownRight className="h-4 w-4 mr-1" />
                <span className="text-sm font-medium">-2</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-2">Improved from 8 last semester</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Analytics Content */}
      <Tabs defaultValue="performance" className="w-full">
        <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
          <TabsTrigger value="performance">
            <BarChartIcon className="h-4 w-4 mr-2" /> Performance
          </TabsTrigger>
          <TabsTrigger value="attendance">
            <LineChartIcon className="h-4 w-4 mr-2" /> Attendance
          </TabsTrigger>
          <TabsTrigger value="engagement">
            <PieChartIcon className="h-4 w-4 mr-2" /> Engagement
          </TabsTrigger>
        </TabsList>

        {/* Performance Tab */}
        <TabsContent value="performance" className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Grade Distribution By Assignment</CardTitle>
                <CardDescription>Average, highest, and lowest grades across assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={gradeData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="avgGrade" name="Average Grade" fill="#8884d8" />
                      <Bar dataKey="highestGrade" name="Highest Grade" fill="#82ca9d" />
                      <Bar dataKey="lowestGrade" name="Lowest Grade" fill="#ff8042" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Subject Performance</CardTitle>
                <CardDescription>Average grade and pass rate by subject</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={subjectPerformanceData}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                      layout="vertical"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="avgGrade" name="Avg Grade" fill="#8884d8" />
                      <Bar dataKey="passRate" name="Pass Rate %" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Assignment Submission Timing</CardTitle>
                <CardDescription>When students submit their assignments</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={submissionTimeData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      >
                        {submissionTimeData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Attendance Tab */}
        <TabsContent value="attendance" className="space-y-6 animate-fade-in">
          <Card>
            <CardHeader>
              <CardTitle>Attendance Trends</CardTitle>
              <CardDescription>Weekly attendance rate across all classes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={attendanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="attendance" name="Attendance %" stroke="#8884d8" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-green-50">
              <CardContent className="pt-6">
                <h3 className="font-medium text-green-700">Highest Attendance</h3>
                <p className="text-2xl font-bold">Monday</p>
                <p className="text-sm text-green-600">95% average attendance</p>
              </CardContent>
            </Card>
            
            <Card className="bg-red-50">
              <CardContent className="pt-6">
                <h3 className="font-medium text-red-700">Lowest Attendance</h3>
                <p className="text-2xl font-bold">Friday</p>
                <p className="text-sm text-red-600">82% average attendance</p>
              </CardContent>
            </Card>
            
            <Card className="bg-amber-50">
              <CardContent className="pt-6">
                <h3 className="font-medium text-amber-700">Chronic Absentees</h3>
                <p className="text-2xl font-bold">3 Students</p>
                <p className="text-sm text-amber-600">Missing > 20% of classes</p>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50">
              <CardContent className="pt-6">
                <h3 className="font-medium text-blue-700">Perfect Attendance</h3>
                <p className="text-2xl font-bold">12 Students</p>
                <p className="text-sm text-blue-600">Never missed a class</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Engagement Tab */}
        <TabsContent value="engagement" className="space-y-6 animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Student Engagement Metrics</CardTitle>
                <CardDescription>Interaction with course materials and discussions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={engagementData}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                      >
                        {engagementData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Resource Popularity</CardTitle>
                <CardDescription>Most accessed learning materials</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Lecture Slides - Week 5</span>
                      <span className="text-sm font-medium">98 views</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '98%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Database Design Example</span>
                      <span className="text-sm font-medium">87 views</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '87%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Midterm Review Guide</span>
                      <span className="text-sm font-medium">76 views</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '76%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Tutorial Video - SQL Joins</span>
                      <span className="text-sm font-medium">65 views</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">Practice Questions</span>
                      <span className="text-sm font-medium">52 views</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-primary h-2 rounded-full" style={{ width: '52%' }}></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Engagement vs. Performance</CardTitle>
                <CardDescription>Correlation between student engagement and grades</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis
                        dataKey="name"
                        type="category"
                        allowDuplicatedCategory={false}
                        label={{ value: 'Engagement Level', position: 'insideBottomRight', offset: -10 }}
                      />
                      <YAxis
                        label={{ value: 'Average Grade', angle: -90, position: 'insideLeft' }}
                        domain={[0, 100]}
                      />
                      <Tooltip />
                      <Line 
                        data={[
                          { name: 'Very Low', grade: 65 },
                          { name: 'Low', grade: 72 },
                          { name: 'Medium', grade: 78 },
                          { name: 'High', grade: 86 },
                          { name: 'Very High', grade: 93 }
                        ]} 
                        dataKey="grade" 
                        name="Average Grade" 
                        stroke="#8884d8" 
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
