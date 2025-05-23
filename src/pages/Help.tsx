
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Help: React.FC = () => {
  return (
    <div className="container mx-auto py-6 space-y-8 animate-fade-in">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">Help Center</h1>
        <p className="text-muted-foreground">Find guides and answers to common questions about PyGenicArc LMS.</p>
      </div>
      
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input 
          placeholder="Search for help articles..." 
          className="pl-9 h-12 bg-background/90 border border-input hover:border-accent-foreground transition-all" 
        />
      </div>
      
      <Tabs defaultValue="getting-started" className="space-y-6">
        <TabsList className="grid w-full max-w-2xl grid-cols-4">
          <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
          <TabsTrigger value="instructor">For Instructors</TabsTrigger>
          <TabsTrigger value="ai-tools">AI Tools</TabsTrigger>
          <TabsTrigger value="faq">FAQ</TabsTrigger>
        </TabsList>
        
        <TabsContent value="getting-started" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Welcome to PyGenicArc LMS</CardTitle>
              <CardDescription>
                Follow these steps to get started with the PyGenicArc Learning Management System.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                    <h3 className="font-medium text-lg">Select Your Semester</h3>
                  </div>
                  <p className="text-muted-foreground pl-14">
                    When you first log in, you'll be prompted to select which semester you're teaching. This helps organize your dashboard and content.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">2</div>
                    <h3 className="font-medium text-lg">Explore the Dashboard</h3>
                  </div>
                  <p className="text-muted-foreground pl-14">
                    The dashboard provides an overview of your courses, upcoming assignments, student activity, and analytics at a glance.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">3</div>
                    <h3 className="font-medium text-lg">Set Up Your Profile</h3>
                  </div>
                  <p className="text-muted-foreground pl-14">
                    Update your profile information in the Settings page to personalize your experience and let students know about you.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">4</div>
                    <h3 className="font-medium text-lg">Create Your First Assignment</h3>
                  </div>
                  <p className="text-muted-foreground pl-14">
                    Navigate to the Assignments section to create your first assignment and share it with your students.
                  </p>
                </div>
              </div>
              
              <div className="rounded-lg bg-muted p-4">
                <h4 className="font-medium mb-2">Need more help?</h4>
                <p className="text-sm text-muted-foreground">
                  Check out our comprehensive video tutorials or contact support for personalized assistance.
                </p>
                <div className="flex gap-3 mt-3">
                  <Button variant="outline">Watch Tutorials</Button>
                  <Button>Contact Support</Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Navigating the Interface</CardTitle>
              <CardDescription>
                Understanding the main navigation and key areas of PyGenicArc LMS.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="sidebar">
                  <AccordionTrigger>Understanding the Sidebar</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      The sidebar provides access to all major areas of the LMS. Here's what each icon represents:
                    </p>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 9h.01"/><path d="M15 9h.01"/><path d="M9 15h.01"/><path d="M15 15h.01"/></svg>
                        </div>
                        <div>
                          <strong>Dashboard</strong> - Overview of all activities and important information
                        </div>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                        </div>
                        <div>
                          <strong>Live Classroom</strong> - Start or join live teaching sessions
                        </div>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                        </div>
                        <div>
                          <strong>Students</strong> - Manage students, track progress and engagement
                        </div>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                        </div>
                        <div>
                          <strong>Calendar</strong> - Schedule classes, events, and manage deadlines
                        </div>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-md bg-primary/10 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
                        </div>
                        <div>
                          <strong>Assignments</strong> - Create and manage assignments and grading
                        </div>
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="header">
                  <AccordionTrigger>Using the Header</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      The header at the top of the screen provides quick access to system-wide functions:
                    </p>
                    <ul className="space-y-2 text-sm">
                      <li>
                        <strong>Search:</strong> Quickly find content across all your courses and materials
                      </li>
                      <li>
                        <strong>Notifications:</strong> Stay updated with important events and activities
                      </li>
                      <li>
                        <strong>Settings:</strong> Access your account settings and appearance preferences
                      </li>
                      <li>
                        <strong>Profile:</strong> View and modify your personal information
                      </li>
                      <li>
                        <strong>Semester selector:</strong> Quickly switch between different semesters
                      </li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="shortcuts">
                  <AccordionTrigger>Keyboard Shortcuts</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-4">
                      Speed up your workflow with these helpful keyboard shortcuts:
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div className="flex items-center justify-between">
                        <span>Open Search</span>
                        <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl + K</kbd>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Dashboard</span>
                        <kbd className="px-2 py-1 bg-muted rounded text-xs">Alt + 1</kbd>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Live Classroom</span>
                        <kbd className="px-2 py-1 bg-muted rounded text-xs">Alt + 2</kbd>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Students</span>
                        <kbd className="px-2 py-1 bg-muted rounded text-xs">Alt + 3</kbd>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Calendar</span>
                        <kbd className="px-2 py-1 bg-muted rounded text-xs">Alt + 4</kbd>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Save Changes</span>
                        <kbd className="px-2 py-1 bg-muted rounded text-xs">Ctrl + S</kbd>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="instructor" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Instructor Tools</CardTitle>
              <CardDescription>
                Learn how to use the powerful tools designed specifically for instructors.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="attendance">
                  <AccordionTrigger>Taking Attendance</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p>
                        You can easily track student attendance for both in-person and virtual classes.
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Navigate to the <strong>Live Classroom</strong> section</li>
                        <li>Select the subject/class for which you want to mark attendance</li>
                        <li>Click on the <strong>Attendance</strong> button</li>
                        <li>Mark students as present, absent, or excused</li>
                        <li>Save the attendance record for the day</li>
                      </ol>
                      <p>
                        You can also view and modify past attendance records through the Analytics section.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="assignments">
                  <AccordionTrigger>Creating and Managing Assignments</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p>
                        Create engaging assignments for your students and efficiently manage their submissions.
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Go to the <strong>Assignments</strong> section from the sidebar</li>
                        <li>Click <strong>Create New Assignment</strong></li>
                        <li>Fill in the assignment details, including title, instructions, due date, and points</li>
                        <li>Attach any necessary files or resources</li>
                        <li>Select which class or individual students should receive the assignment</li>
                        <li>Publish the assignment</li>
                      </ol>
                      <p className="font-medium mt-4">Reviewing Submissions:</p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Click on any assignment from the assignments list</li>
                        <li>View all student submissions in one place</li>
                        <li>Provide feedback and grades directly on each submission</li>
                        <li>Track which students have submitted and which haven't</li>
                      </ol>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="question-bank">
                  <AccordionTrigger>Using the Question Bank</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p>
                        The Question Bank allows you to create, store, and organize questions for quizzes and assessments.
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Navigate to a subject and click on <strong>Question Bank</strong></li>
                        <li>Create categories for organizing your questions (e.g., by topic, difficulty)</li>
                        <li>Add new questions of various types (multiple choice, true/false, short answer)</li>
                        <li>Use the AI tools to help generate question variations</li>
                        <li>Import questions from existing resources</li>
                      </ol>
                      <p className="mt-3">
                        When creating a quiz or exam, you can easily pull questions from your question bank, 
                        saving time and maintaining consistency across assessments.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="analytics">
                  <AccordionTrigger>Understanding Analytics</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p>
                        The Analytics section provides insights into student performance and engagement.
                      </p>
                      <p>Key analytics features include:</p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Grade distribution across assignments and assessments</li>
                        <li>Student engagement metrics (participation, resource access)</li>
                        <li>Attendance patterns and trends</li>
                        <li>Subject performance comparisons</li>
                        <li>Individual student progress tracking</li>
                      </ul>
                      <p className="mt-2">
                        Use filters to narrow down data by date range, subject, or specific metrics. 
                        You can also export these analytics as reports for department meetings or 
                        administrative purposes.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ai-tools" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI-Powered Features</CardTitle>
              <CardDescription>
                Learn how to leverage the AI tools to enhance your teaching and save time.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="summary-tool">
                  <AccordionTrigger>Content Summarizer</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p>
                        The AI Summarizer tool can condense articles, research papers, or any text into concise summaries.
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Go to <strong>AI Tools</strong> in the sidebar</li>
                        <li>Select <strong>AI Summarizer</strong></li>
                        <li>Upload a document or paste text into the input area</li>
                        <li>Choose the desired summary length (brief, medium, detailed)</li>
                        <li>Click "Generate Summary"</li>
                        <li>Review, edit if needed, and use the summary in your materials</li>
                      </ol>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong>Tip:</strong> You can also summarize student submissions to quickly grasp the main points before detailed review.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="ppt-generator">
                  <AccordionTrigger>Presentation Generator</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p>
                        Create professional slide decks quickly with the AI-powered presentation generator.
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Navigate to <strong>AI Tools</strong> > <strong>PPT Generator</strong></li>
                        <li>Enter your topic or paste your lecture notes</li>
                        <li>Select the presentation style and number of slides</li>
                        <li>Choose a visual theme that matches your subject</li>
                        <li>Click "Generate Presentation"</li>
                        <li>Review and edit the generated slides</li>
                        <li>Download as PowerPoint or directly use in your live classroom</li>
                      </ol>
                      <p className="text-sm text-muted-foreground mt-2">
                        <strong>Tip:</strong> You can combine generated slides with your existing materials to save time while maintaining your personal teaching style.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="question-generator">
                  <AccordionTrigger>Question Bank Generator</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p>
                        Generate various types of assessment questions from your teaching material.
                      </p>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>Go to <strong>AI Tools</strong> > <strong>Question Bank Generator</strong></li>
                        <li>Upload your course material or paste text</li>
                        <li>Select question types (multiple choice, short answer, etc.)</li>
                        <li>Choose difficulty levels and number of questions</li>
                        <li>Click "Generate Questions"</li>
                        <li>Review and edit generated questions</li>
                        <li>Save to your question bank for future use</li>
                      </ol>
                      <p className="text-sm mt-3">
                        The AI will analyze your content and create relevant questions that assess different cognitive levels, from basic recall to application and analysis.
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="ai-limits">
                  <AccordionTrigger>Understanding AI Limitations</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3">
                      <p>
                        While our AI tools are powerful, it's important to understand their limitations:
                      </p>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>Always review AI-generated content</strong> - While generally accurate, AI may occasionally produce factual errors or unclear content
                        </li>
                        <li>
                          <strong>Subject-specific accuracy varies</strong> - AI performs better in some subjects than others
                        </li>
                        <li>
                          <strong>Consider AI as an assistant, not a replacement</strong> - Your expertise and judgment remain essential
                        </li>
                        <li>
                          <strong>Complex or novel topics may need more editing</strong> - AI works best with established knowledge
                        </li>
                      </ul>
                      <div className="p-3 bg-muted rounded-md mt-3">
                        <p className="text-sm">
                          "The AI tools are designed to save you time and inspire creativity, but you should always review and personalize the outputs to ensure they meet your specific teaching goals and standards."
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="faq" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>
                Find answers to common questions about using PyGenicArc LMS.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger>How do I change my current semester?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      To change your active semester, click on the semester badge in the top navigation bar, or access it through your profile dropdown menu. 
                      This will take you to the semester selection screen where you can choose a different semester.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-2">
                  <AccordionTrigger>Can I access the system from my mobile device?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Yes, PyGenicArc LMS is fully responsive and works on mobile devices. You can access all features through your mobile browser. 
                      We also offer dedicated mobile apps for iOS and Android for a more optimized experience.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-3">
                  <AccordionTrigger>How do I export grades and reports?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      You can export grades and reports from the Analytics section. Navigate to the specific report you want to export, 
                      then look for the Export or Download button (usually represented by a download icon). 
                      You can export data in various formats including Excel, CSV, and PDF.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-4">
                  <AccordionTrigger>How can I customize the dashboard to show what's most important to me?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      You can customize your dashboard by clicking the "Customize" button at the top right of the dashboard. 
                      This allows you to add, remove, or rearrange widgets to show the information most relevant to you. 
                      Each widget also has its own settings that you can adjust by clicking the gear icon in its top right corner.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-5">
                  <AccordionTrigger>Can I schedule recurring assignments?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Yes, when creating an assignment, you can enable the "Recurring" option and set a frequency (weekly, bi-weekly, monthly). 
                      This is particularly useful for regular homework or class activities. Each instance will be created as a separate assignment 
                      that you can modify individually if needed.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="faq-6">
                  <AccordionTrigger>How do I get technical support if I encounter issues?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      For technical support, click on the "Help" icon in the bottom of the sidebar, then select "Contact Support". 
                      You can also email support directly at support@pygenicarcLMS.com. 
                      Our support team is available Monday through Friday, 8am to 8pm EST.
                    </p>
                    <p className="mt-2">
                      For urgent issues outside these hours, use the emergency support option in the Help section.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Still Need Help?</CardTitle>
              <CardDescription>
                Get in touch with our support team or access additional resources.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="font-medium text-lg mb-2">Contact Support</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Our dedicated support team is ready to help with any issues or questions you may have.
                  </p>
                  <Button className="w-full">Email Support Team</Button>
                </div>
                
                <div className="p-6 border rounded-lg bg-card">
                  <h3 className="font-medium text-lg mb-2">Video Tutorials</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Watch step-by-step video guides on how to use all features of the PyGenicArc LMS.
                  </p>
                  <Button variant="outline" className="w-full">Browse Tutorial Library</Button>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-muted rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Join our Community Forum</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with other instructors, share ideas, and learn best practices.
                  </p>
                </div>
                <Button variant="secondary">Visit Forum</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
      
      <Separator className="my-6" />
      
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Documentation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Access comprehensive documentation for all features and tools.
            </p>
            <Button variant="outline" className="w-full">View Documentation</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Video Guides</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Watch tutorials and walkthroughs of key features and workflows.
            </p>
            <Button variant="outline" className="w-full">Watch Videos</Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Webinars</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Join live training sessions and Q&A with our product experts.
            </p>
            <Button variant="outline" className="w-full">Register for Webinars</Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Help;
