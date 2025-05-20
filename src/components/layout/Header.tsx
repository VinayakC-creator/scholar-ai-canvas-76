
import React, { useState } from 'react';
import { Bell, Search, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import ThemeConfigurator from '@/components/ThemeConfigurator';
import { cn } from '@/lib/utils';

interface HeaderProps {
  toggleSidebar: () => void;
  collapsed: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, collapsed }) => {
  const [showConfigurator, setShowConfigurator] = useState(false);

  return (
    <header className={cn(
      "fixed top-0 right-0 z-20 h-16 border-b border-border bg-background transition-all duration-300",
      collapsed ? "left-[70px]" : "left-[250px]"
    )}>
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleSidebar} 
            className="lg:hidden"
          >
            {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
          
          <div className="hidden md:block">
            <div className="text-sm breadcrumbs">
              <ul className="flex items-center space-x-2">
                <li className="text-muted-foreground">Pages</li>
                <li className="before:content-['/'] before:mx-2 before:text-muted-foreground">Dashboard</li>
              </ul>
            </div>
            <h1 className="text-lg font-semibold">Dashboard</h1>
          </div>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              className="w-[200px] lg:w-[300px] pl-8 rounded-lg bg-background"
            />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-edu-accent p-0 text-xs flex items-center justify-center">
                  3
                </Badge>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[300px]">
              <div className="flex items-center justify-between px-3 py-2 border-b">
                <h3 className="font-medium">Notifications</h3>
                <Button variant="ghost" size="sm">Mark all read</Button>
              </div>
              <div className="max-h-[300px] overflow-y-auto">
                <DropdownMenuItem className="py-2 px-3 cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm">New Assignment Submission</p>
                      <span className="text-xs text-muted-foreground">10m ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Emily Davis submitted the Physics homework</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 px-3 cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm">Course Feedback Received</p>
                      <span className="text-xs text-muted-foreground">2h ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Michael Brown left feedback for your Biology course</p>
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem className="py-2 px-3 cursor-pointer">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <p className="font-medium text-sm">Calendar Event Reminder</p>
                      <span className="text-xs text-muted-foreground">1d ago</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Faculty meeting tomorrow at 10:00 AM</p>
                  </div>
                </DropdownMenuItem>
              </div>
              <div className="border-t p-2">
                <Button variant="ghost" className="w-full text-sm" size="sm">
                  View all notifications
                </Button>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => setShowConfigurator(!showConfigurator)}
          >
            <Settings className="h-5 w-5" />
          </Button>
          
          <div className="hidden md:flex items-center gap-3">
            <div className="h-8 w-8 rounded-full bg-edu-accent flex items-center justify-center text-white">
              JD
            </div>
          </div>
        </div>
      </div>
      
      {showConfigurator && (
        <ThemeConfigurator onClose={() => setShowConfigurator(false)} />
      )}
    </header>
  );
};

export default Header;
