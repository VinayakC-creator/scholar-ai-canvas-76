
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  Search, 
  Folder, 
  Upload, 
  FileText, 
  Image, 
  Presentation, 
  File, 
  Grid2x2, 
  List,
  Play,
  Plus
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import WorkspaceResourceGrid from '@/components/workspace/WorkspaceResourceGrid';
import WorkspaceResourceList from '@/components/workspace/WorkspaceResourceList';

const Workspace: React.FC = () => {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  
  const handleUploadClick = () => {
    toast({
      title: "Upload functionality",
      description: "This would open a file picker in a real implementation.",
    });
  };

  const handleNewFolder = () => {
    toast({
      title: "Create folder",
      description: "This would create a new folder in a real implementation.",
    });
  };
  
  const handlePresentMode = () => {
    toast({
      title: "Present Mode",
      description: "This would enter presentation mode for teaching in a real implementation.",
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold">Workspace</h1>
          <p className="text-muted-foreground">Manage and present your teaching resources</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="outline" className="hover-scale" onClick={handleNewFolder}>
            <Plus className="h-4 w-4 mr-1" />
            New Item
          </Button>
          <Button size="sm" variant="outline" className="hover-scale" onClick={handleUploadClick}>
            <Upload className="h-4 w-4 mr-1" />
            Upload
          </Button>
          <Button size="sm" className="hover-scale" onClick={handlePresentMode}>
            <Play className="h-4 w-4 mr-1" />
            Present Mode
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex flex-col md:flex-row gap-3 justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                className="pl-9"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex items-center space-x-2">
              <Button 
                variant={view === 'grid' ? 'default' : 'outline'} 
                size="icon" 
                className="h-9 w-9"
                onClick={() => setView('grid')}
              >
                <Grid2x2 className="h-4 w-4" />
              </Button>
              <Button 
                variant={view === 'list' ? 'default' : 'outline'} 
                size="icon" 
                className="h-9 w-9"
                onClick={() => setView('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="all" className="flex gap-1">
                <Folder className="h-4 w-4" />
                <span>All</span>
              </TabsTrigger>
              <TabsTrigger value="documents" className="flex gap-1">
                <FileText className="h-4 w-4" />
                <span>Documents</span>
              </TabsTrigger>
              <TabsTrigger value="presentations" className="flex gap-1">
                <Presentation className="h-4 w-4" />
                <span>Presentations</span>
              </TabsTrigger>
              <TabsTrigger value="images" className="flex gap-1">
                <Image className="h-4 w-4" />
                <span>Images</span>
              </TabsTrigger>
            </TabsList>
            
            <div className="mt-6">
              <TabsContent value="all" className="m-0">
                {view === 'grid' ? <WorkspaceResourceGrid filter="all" searchQuery={searchQuery} /> : <WorkspaceResourceList filter="all" searchQuery={searchQuery} />}
              </TabsContent>
              <TabsContent value="documents" className="m-0">
                {view === 'grid' ? <WorkspaceResourceGrid filter="documents" searchQuery={searchQuery} /> : <WorkspaceResourceList filter="documents" searchQuery={searchQuery} />}
              </TabsContent>
              <TabsContent value="presentations" className="m-0">
                {view === 'grid' ? <WorkspaceResourceGrid filter="presentations" searchQuery={searchQuery} /> : <WorkspaceResourceList filter="presentations" searchQuery={searchQuery} />}
              </TabsContent>
              <TabsContent value="images" className="m-0">
                {view === 'grid' ? <WorkspaceResourceGrid filter="images" searchQuery={searchQuery} /> : <WorkspaceResourceList filter="images" searchQuery={searchQuery} />}
              </TabsContent>
            </div>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default Workspace;
