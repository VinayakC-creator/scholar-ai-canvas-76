
import React from 'react';
import { Folder, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getSemesterSubjects } from '@/data/subjectsData';

interface WorkspaceSubjectListProps {
  semester: string;
  searchQuery: string;
}

const WorkspaceSubjectList: React.FC<WorkspaceSubjectListProps> = ({ semester, searchQuery }) => {
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
    <div className="rounded-md border">
      {filteredSubjects.length === 0 ? (
        <div className="text-center py-10">
          <Folder className="h-10 w-10 mx-auto mb-2 text-muted-foreground" />
          <h3 className="font-medium">No subjects found</h3>
          <p className="text-sm text-muted-foreground">Try adjusting your search</p>
        </div>
      ) : (
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-muted/50 text-xs uppercase">
              <tr>
                <th scope="col" className="px-4 py-3">Code</th>
                <th scope="col" className="px-4 py-3">Subject Name</th>
                <th scope="col" className="px-4 py-3">Modules</th>
                <th scope="col" className="px-4 py-3">Chapters</th>
                <th scope="col" className="px-4 py-3 text-right">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredSubjects.map((subject) => (
                <tr 
                  key={subject.id} 
                  className="bg-white border-b hover:bg-accent/30 cursor-pointer"
                  onClick={() => handleSubjectClick(subject.id)}
                >
                  <td className="px-4 py-3 font-medium flex items-center gap-2">
                    <Folder className="h-5 w-5 text-blue-500" />
                    <span>{subject.code}</span>
                  </td>
                  <td className="px-4 py-3">{subject.name}</td>
                  <td className="px-4 py-3">{subject.modules.length}</td>
                  <td className="px-4 py-3">{subject.totalChapters}</td>
                  <td className="px-4 py-3 text-right">
                    <ChevronRight className="h-4 w-4 inline-block" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default WorkspaceSubjectList;
