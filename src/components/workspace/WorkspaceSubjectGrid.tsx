
import React from 'react';
import { Folder } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getSemesterSubjects } from '@/data/subjectsData';

interface WorkspaceSubjectGridProps {
  semester: string;
  searchQuery: string;
}

const WorkspaceSubjectGrid: React.FC<WorkspaceSubjectGridProps> = ({ semester, searchQuery }) => {
  const navigate = useNavigate();
  const subjects = getSemesterSubjects(semester);
  
  // Filter subjects based on search query
  const filteredSubjects = subjects.filter(subject => 
    subject.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    subject.code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSubjectClick = (subjectId: string) => {
    navigate(`/workspace/${subjectId}`);
  };
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {filteredSubjects.length === 0 ? (
        <div className="col-span-full text-center py-10">
          <Folder className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
          <h3 className="font-medium">No subjects found</h3>
          <p className="text-sm text-muted-foreground">Try adjusting your search</p>
        </div>
      ) : (
        filteredSubjects.map((subject) => (
          <div 
            key={subject.id} 
            className="group border rounded-lg p-4 hover:bg-accent hover:border-accent transition-colors cursor-pointer"
            onClick={() => handleSubjectClick(subject.id)}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <Folder className="h-8 w-8 text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium">{subject.code}</h3>
                <p className="text-sm text-muted-foreground">{subject.name}</p>
              </div>
            </div>
            <div className="mt-2 text-xs text-muted-foreground">
              <p>{subject.modules.length} modules • {subject.totalChapters} chapters</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default WorkspaceSubjectGrid;
