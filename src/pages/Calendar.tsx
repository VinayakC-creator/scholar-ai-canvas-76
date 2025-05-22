
import React, { useState } from 'react';
import { format, parse, startOfToday, add, eachDayOfInterval, isSameDay, isToday, isWithinInterval, endOfWeek, startOfWeek } from 'date-fns';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarPlus, Users, BookOpen, CalendarClock, ChevronLeft, ChevronRight, Clock, Plus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

// Sample data for events
const initialEvents = [
  {
    id: '1',
    title: 'Introduction to Python Programming',
    date: '2025-05-22T10:00:00',
    endTime: '2025-05-22T11:30:00',
    type: 'class',
    subject: 'Computer Science',
    location: 'Room 101',
    description: 'Introduction to Python basics, variables, and control structures.'
  },
  {
    id: '2',
    title: 'Office Hours',
    date: '2025-05-22T13:00:00',
    endTime: '2025-05-22T15:00:00',
    type: 'office_hours',
    subject: 'General',
    location: 'Office #42',
    description: 'Available for student questions and consultation.'
  },
  {
    id: '3',
    title: 'Faculty Meeting',
    date: '2025-05-23T14:00:00',
    endTime: '2025-05-23T15:30:00',
    type: 'meeting',
    subject: 'Administrative',
    location: 'Conference Room',
    description: 'Discussing curriculum updates and upcoming events.'
  },
  {
    id: '4',
    title: 'Data Structures Quiz',
    date: '2025-05-24T09:00:00',
    endTime: '2025-05-24T10:00:00',
    type: 'assessment',
    subject: 'Computer Science',
    location: 'Room 105',
    description: 'Quiz on arrays, linked lists, and stacks.'
  }
];

// Event type colors
const eventColors = {
  class: 'bg-blue-100 border-blue-400 text-blue-700',
  office_hours: 'bg-green-100 border-green-400 text-green-700',
  meeting: 'bg-purple-100 border-purple-400 text-purple-700',
  assessment: 'bg-amber-100 border-amber-400 text-amber-700',
  deadline: 'bg-red-100 border-red-400 text-red-700',
};

const CalendarPage: React.FC = () => {
  const [date, setDate] = useState<Date>(startOfToday());
  const [view, setView] = useState<'day' | 'week' | 'month'>('week');
  const [events, setEvents] = useState(initialEvents);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [isNewEventDialogOpen, setIsNewEventDialogOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    date: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    endTime: format(add(new Date(), { hours: 1 }), "yyyy-MM-dd'T'HH:mm"),
    type: 'class',
    subject: '',
    location: '',
    description: ''
  });
  const { toast } = useToast();

  // Helper to format date range for display
  const formatDateRange = () => {
    if (view === 'day') {
      return format(date, 'MMMM d, yyyy');
    } else if (view === 'week') {
      const weekStart = startOfWeek(date);
      const weekEnd = endOfWeek(date);
      return `${format(weekStart, 'MMM d')} - ${format(weekEnd, 'MMM d, yyyy')}`;
    } else {
      return format(date, 'MMMM yyyy');
    }
  };

  // Navigate through dates
  const navigate = (direction: 'prev' | 'next') => {
    if (view === 'day') {
      setDate(prev => add(prev, { days: direction === 'next' ? 1 : -1 }));
    } else if (view === 'week') {
      setDate(prev => add(prev, { weeks: direction === 'next' ? 1 : -1 }));
    } else {
      setDate(prev => add(prev, { months: direction === 'next' ? 1 : -1 }));
    }
  };

  // Get dates to display based on view
  const getDatesToShow = () => {
    if (view === 'day') {
      return [date];
    } else if (view === 'week') {
      return eachDayOfInterval({
        start: startOfWeek(date),
        end: endOfWeek(date)
      });
    }
    return [];
  };

  // Get events for the specified date
  const getEventsForDate = (day: Date) => {
    return events.filter(event => {
      const eventDate = new Date(event.date);
      return isSameDay(eventDate, day);
    });
  };

  // Create a new event
  const handleCreateEvent = () => {
    const id = (events.length + 1).toString();
    const createdEvent = { ...newEvent, id };
    
    setEvents([...events, createdEvent]);
    setIsNewEventDialogOpen(false);
    setNewEvent({
      title: '',
      date: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
      endTime: format(add(new Date(), { hours: 1 }), "yyyy-MM-dd'T'HH:mm"),
      type: 'class',
      subject: '',
      location: '',
      description: ''
    });
    
    toast({
      title: "Event Created",
      description: `"${createdEvent.title}" has been added to your calendar.`,
    });
  };

  // Hours for the day view (8 AM to 8 PM)
  const hours = Array.from({ length: 13 }, (_, i) => i + 8);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Calendar</h1>
          <p className="text-muted-foreground">Manage your schedule and events</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Dialog open={isNewEventDialogOpen} onOpenChange={setIsNewEventDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="hover-scale">
                <Plus className="h-4 w-4 mr-1" />
                New Event
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[550px]">
              <DialogHeader>
                <DialogTitle>Create New Event</DialogTitle>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid gap-2">
                  <Label htmlFor="title">Event Title</Label>
                  <Input 
                    id="title" 
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                    placeholder="Add title" 
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="start-time">Start Time</Label>
                    <Input 
                      id="start-time" 
                      type="datetime-local" 
                      value={newEvent.date}
                      onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="end-time">End Time</Label>
                    <Input 
                      id="end-time" 
                      type="datetime-local" 
                      value={newEvent.endTime}
                      onChange={(e) => setNewEvent({...newEvent, endTime: e.target.value})}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="event-type">Event Type</Label>
                    <Select 
                      value={newEvent.type} 
                      onValueChange={(value) => setNewEvent({...newEvent, type: value})}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="class">Class</SelectItem>
                        <SelectItem value="office_hours">Office Hours</SelectItem>
                        <SelectItem value="meeting">Meeting</SelectItem>
                        <SelectItem value="assessment">Assessment</SelectItem>
                        <SelectItem value="deadline">Deadline</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      value={newEvent.subject}
                      onChange={(e) => setNewEvent({...newEvent, subject: e.target.value})}
                      placeholder="Subject or course" 
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location">Location</Label>
                  <Input 
                    id="location" 
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                    placeholder="Add location" 
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea 
                    id="description" 
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                    placeholder="Add description" 
                    rows={3} 
                  />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsNewEventDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleCreateEvent} disabled={!newEvent.title.trim()}>
                  Create Event
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigate('prev')}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <h2 className="text-xl font-semibold min-w-[180px] text-center">
                  {formatDateRange()}
                </h2>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => navigate('next')}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              <div className="flex items-center">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger 
                    value="day" 
                    onClick={() => setView('day')}
                    className={view === 'day' ? 'data-[state=active]' : ''}
                  >
                    Day
                  </TabsTrigger>
                  <TabsTrigger 
                    value="week" 
                    onClick={() => setView('week')}
                    className={view === 'week' ? 'data-[state=active]' : ''}
                  >
                    Week
                  </TabsTrigger>
                  <TabsTrigger 
                    value="month" 
                    onClick={() => setView('month')}
                    className={view === 'month' ? 'data-[state=active]' : ''}
                  >
                    Month
                  </TabsTrigger>
                </TabsList>
              </div>
            </div>

            {view === 'month' && (
              <div className="flex flex-col">
                <Popover>
                  <PopoverTrigger asChild>
                    <div className="mt-2">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(newDate) => newDate && setDate(newDate)}
                        className="rounded-md border"
                        modifiers={{
                          hasEvent: (day) => events.some(event => isSameDay(new Date(event.date), day)),
                        }}
                        modifiersStyles={{
                          hasEvent: { 
                            color: 'var(--primary)',
                            fontWeight: 'bold',
                          },
                        }}
                      />
                    </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-80" align="center">
                    <div className="space-y-2">
                      <h3 className="font-medium">
                        Events for {format(date, 'MMMM d, yyyy')}
                      </h3>
                      <div className="max-h-60 overflow-y-auto space-y-2">
                        {getEventsForDate(date).length > 0 ? (
                          getEventsForDate(date).map((event) => (
                            <div 
                              key={event.id}
                              className={`p-2 rounded border-l-4 ${eventColors[event.type as keyof typeof eventColors]}`}
                              onClick={() => setSelectedEvent(event)}
                            >
                              <div className="text-sm font-medium">{event.title}</div>
                              <div className="text-xs flex items-center gap-1 mt-1">
                                <Clock className="h-3 w-3" />
                                {format(new Date(event.date), 'h:mm a')} - {format(new Date(event.endTime), 'h:mm a')}
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-sm text-muted-foreground text-center py-2">No events for this day</p>
                        )}
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>

                <div className="mt-6">
                  <h3 className="font-medium mb-2">Upcoming Events</h3>
                  <div className="space-y-2">
                    {events
                      .filter(event => new Date(event.date) >= startOfToday())
                      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
                      .slice(0, 5)
                      .map(event => (
                        <div 
                          key={event.id} 
                          className={`p-3 rounded-md border-l-4 ${eventColors[event.type as keyof typeof eventColors]} hover:bg-muted/50 cursor-pointer transition-colors`}
                          onClick={() => setSelectedEvent(event)}
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">{event.title}</div>
                              <div className="text-sm mt-1 text-muted-foreground">
                                {format(new Date(event.date), 'EEEE, MMMM d • h:mm a')}
                              </div>
                              <div className="text-xs mt-1 flex items-center gap-1">
                                <BookOpen className="h-3 w-3" />
                                {event.subject} • {event.location}
                              </div>
                            </div>
                            <div className="text-xs px-2 py-1 rounded-full bg-muted">
                              {event.type.replace('_', ' ')}
                            </div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>
              </div>
            )}

            {view === 'week' && (
              <div className="overflow-x-auto">
                <div className="min-w-[800px]">
                  <div className="grid grid-cols-7 gap-2 mb-2">
                    {getDatesToShow().map((day, i) => (
                      <div 
                        key={i}
                        className={`text-center p-2 font-medium rounded-md ${
                          isToday(day) ? "bg-primary text-primary-foreground" : ""
                        }`}
                      >
                        <div>{format(day, 'eee')}</div>
                        <div className="text-2xl">{format(day, 'd')}</div>
                      </div>
                    ))}
                  </div>

                  <div className="grid grid-cols-7 gap-2 h-[500px]">
                    {getDatesToShow().map((day, i) => {
                      const dayEvents = getEventsForDate(day);
                      return (
                        <div 
                          key={i} 
                          className={`border rounded-md p-1 h-full overflow-y-auto ${
                            isToday(day) ? "bg-muted/50 border-primary" : ""
                          }`}
                        >
                          {dayEvents.length > 0 ? (
                            dayEvents.map(event => (
                              <div 
                                key={event.id}
                                className={`p-2 mb-2 rounded text-sm ${eventColors[event.type as keyof typeof eventColors]} cursor-pointer`}
                                onClick={() => setSelectedEvent(event)}
                              >
                                <div className="font-medium truncate">{event.title}</div>
                                <div className="text-xs mt-1 flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {format(new Date(event.date), 'h:mm a')}
                                </div>
                                {event.location && (
                                  <div className="text-xs mt-1 truncate">{event.location}</div>
                                )}
                              </div>
                            ))
                          ) : (
                            <div className="text-xs text-center text-muted-foreground h-full flex items-center justify-center">
                              <span>No events</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {view === 'day' && (
              <div className="flex flex-col space-y-1 h-[600px] overflow-y-auto">
                {hours.map((hour) => {
                  const currentHourEvents = events.filter(event => {
                    const eventDate = new Date(event.date);
                    return isSameDay(eventDate, date) && eventDate.getHours() === hour;
                  });

                  return (
                    <div key={hour} className="flex border-t">
                      <div className="w-16 py-2 text-right pr-4 text-muted-foreground">
                        {hour % 12 === 0 ? 12 : hour % 12} {hour >= 12 ? 'PM' : 'AM'}
                      </div>
                      <div className="flex-1 min-h-[60px]">
                        {currentHourEvents.length > 0 ? (
                          <div className="pl-2 py-1 border-l">
                            {currentHourEvents.map(event => (
                              <div 
                                key={event.id} 
                                className={`rounded-md p-2 mb-1 ${eventColors[event.type as keyof typeof eventColors]} cursor-pointer`}
                                onClick={() => setSelectedEvent(event)}
                              >
                                <div className="font-medium">{event.title}</div>
                                <div className="text-xs mt-1 flex items-center gap-1">
                                  <Clock className="h-3 w-3" />
                                  {format(new Date(event.date), 'h:mm a')} - {format(new Date(event.endTime), 'h:mm a')}
                                </div>
                                <div className="flex items-center gap-2 text-xs mt-1">
                                  {event.subject && (
                                    <span className="flex items-center">
                                      <BookOpen className="h-3 w-3 mr-1" />
                                      {event.subject}
                                    </span>
                                  )}
                                  {event.location && (
                                    <span>• {event.location}</span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="h-full border-l"></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Event Details Dialog */}
      {selectedEvent && (
        <Dialog open={!!selectedEvent} onOpenChange={() => setSelectedEvent(null)}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{selectedEvent.title}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4 mt-2">
              <div className="flex items-center gap-2 text-sm">
                <CalendarClock className="h-4 w-4 text-muted-foreground" />
                <span>{format(new Date(selectedEvent.date), 'EEEE, MMMM d, yyyy')}</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <span>
                  {format(new Date(selectedEvent.date), 'h:mm a')} - {format(new Date(selectedEvent.endTime), 'h:mm a')}
                </span>
              </div>
              
              {selectedEvent.subject && (
                <div className="flex items-center gap-2 text-sm">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>{selectedEvent.subject}</span>
                </div>
              )}
              
              {selectedEvent.location && (
                <div className="flex items-center gap-2 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{selectedEvent.location}</span>
                </div>
              )}
              
              {selectedEvent.description && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm whitespace-pre-wrap">{selectedEvent.description}</p>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setSelectedEvent(null)}>Close</Button>
              <Button variant="destructive" onClick={() => {
                setEvents(events.filter(e => e.id !== selectedEvent.id));
                setSelectedEvent(null);
                toast({
                  title: "Event Deleted",
                  description: `"${selectedEvent.title}" has been removed from your calendar.`,
                });
              }}>
                Delete Event
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default CalendarPage;
