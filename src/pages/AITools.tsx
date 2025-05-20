
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AISummarizer from '@/components/ai-tools/AISummarizer';
import PPTGenerator from '@/components/ai-tools/PPTGenerator';
import QuestionBankGenerator from '@/components/ai-tools/QuestionBankGenerator';
import { Sparkles } from 'lucide-react';

const AITools: React.FC = () => {
  return (
    <div className="animate-fade-in space-y-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-3xl font-bold">AI Tools</h1>
          <p className="text-muted-foreground">Enhance your teaching with powerful AI assistants</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2 items-center p-2 px-4 bg-secondary rounded-lg text-sm">
          <Sparkles className="h-4 w-4 text-edu-accent" />
          <span>Powered by advanced AI models</span>
        </div>
      </div>

      <Tabs defaultValue="summarizer" className="w-full">
        <TabsList className="grid grid-cols-3 w-full md:w-[400px]">
          <TabsTrigger value="summarizer">AI Summarizer</TabsTrigger>
          <TabsTrigger value="ppt">PPT Generator</TabsTrigger>
          <TabsTrigger value="questions">Question Bank</TabsTrigger>
        </TabsList>
        
        <TabsContent value="summarizer" className="mt-6 animate-fade-in">
          <AISummarizer />
        </TabsContent>
        
        <TabsContent value="ppt" className="mt-6 animate-fade-in">
          <PPTGenerator />
        </TabsContent>
        
        <TabsContent value="questions" className="mt-6 animate-fade-in">
          <QuestionBankGenerator />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AITools;
