import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const SkillsStep = ({ data, onUpdate, onNext, onPrevious }) => {
  const [selectedSkills, setSelectedSkills] = useState(data?.skills || [
    { name: 'JavaScript', level: 'expert', category: 'technical' },
    { name: 'React', level: 'expert', category: 'technical' },
    { name: 'Project Management', level: 'intermediate', category: 'soft' }
  ]);
  
  const [selectedIndustries, setSelectedIndustries] = useState(data?.industries || ['technology']);
  const [customSkill, setCustomSkill] = useState('');
  const [skillLevel, setSkillLevel] = useState('beginner');
  const [skillCategory, setSkillCategory] = useState('technical');

  const skillSuggestions = [
    // Technical Skills
    'JavaScript', 'Python', 'Java', 'React', 'Node.js', 'SQL', 'AWS', 'Docker',
    'Machine Learning', 'Data Analysis', 'Cybersecurity', 'Mobile Development',
    'UI/UX Design', 'DevOps', 'Blockchain', 'Cloud Computing',
    
    // Soft Skills
    'Leadership', 'Communication', 'Project Management', 'Team Building',
    'Problem Solving', 'Critical Thinking', 'Negotiation', 'Public Speaking',
    'Strategic Planning', 'Change Management', 'Mentoring', 'Cross-functional Collaboration'
  ];

  const industryOptions = [
    { value: 'technology', label: 'Technology' },
    { value: 'finance', label: 'Finance & Banking' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'education', label: 'Education' },
    { value: 'consulting', label: 'Consulting' },
    { value: 'marketing', label: 'Marketing & Advertising' },
    { value: 'retail', label: 'Retail & E-commerce' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'real-estate', label: 'Real Estate' },
    { value: 'media', label: 'Media & Entertainment' },
    { value: 'nonprofit', label: 'Non-profit' },
    { value: 'government', label: 'Government' },
    { value: 'startup', label: 'Startup' },
    { value: 'other', label: 'Other' }
  ];

  const skillLevels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    { value: 'expert', label: 'Expert' }
  ];

  const skillCategories = [
    { value: 'technical', label: 'Technical' },
    { value: 'soft', label: 'Soft Skills' },
    { value: 'language', label: 'Languages' },
    { value: 'certification', label: 'Certifications' }
  ];

  const handleAddSkill = () => {
    if (customSkill?.trim() && !selectedSkills?.find(skill => skill?.name?.toLowerCase() === customSkill?.toLowerCase())) {
      const newSkill = {
        name: customSkill?.trim(),
        level: skillLevel,
        category: skillCategory
      };
      setSelectedSkills([...selectedSkills, newSkill]);
      setCustomSkill('');
    }
  };

  const handleRemoveSkill = (skillName) => {
    setSelectedSkills(selectedSkills?.filter(skill => skill?.name !== skillName));
  };

  const handleSkillSuggestionClick = (skillName) => {
    if (!selectedSkills?.find(skill => skill?.name === skillName)) {
      const newSkill = {
        name: skillName,
        level: 'intermediate',
        category: skillName?.includes('JavaScript') || skillName?.includes('Python') || skillName?.includes('React') ? 'technical' : 'soft'
      };
      setSelectedSkills([...selectedSkills, newSkill]);
    }
  };

  const handleNext = () => {
    const updateData = {
      skills: selectedSkills,
      industries: selectedIndustries
    };
    onUpdate(updateData);
    onNext();
  };

  const getSkillLevelColor = (level) => {
    switch (level) {
      case 'beginner': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'intermediate': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'advanced': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'expert': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'technical': return 'Code';
      case 'soft': return 'Users';
      case 'language': return 'Globe';
      case 'certification': return 'Award';
      default: return 'Tag';
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 border-academic">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Skills & Expertise</h3>
        <p className="text-muted-foreground">Showcase your skills and select industries you're interested in.</p>
      </div>
      {/* Industry Selection */}
      <div className="mb-8">
        <Select
          label="Industries of Interest"
          description="Select industries you're interested in or have experience with"
          options={industryOptions}
          value={selectedIndustries}
          onChange={setSelectedIndustries}
          multiple
          searchable
          clearable
          required
        />
      </div>
      {/* Skills Section */}
      <div className="mb-6">
        <h4 className="text-lg font-medium text-foreground mb-4">Your Skills</h4>
        
        {/* Current Skills */}
        {selectedSkills?.length > 0 && (
          <div className="mb-6">
            <div className="flex flex-wrap gap-3">
              {selectedSkills?.map((skill, index) => (
                <div key={index} className="flex items-center space-x-2 bg-background border border-border rounded-lg px-3 py-2">
                  <Icon name={getCategoryIcon(skill?.category)} size={16} className="text-muted-foreground" />
                  <span className="font-medium text-foreground">{skill?.name}</span>
                  <span className={`px-2 py-1 text-xs rounded-full border ${getSkillLevelColor(skill?.level)}`}>
                    {skill?.level}
                  </span>
                  <button
                    onClick={() => handleRemoveSkill(skill?.name)}
                    className="text-muted-foreground hover:text-destructive transition-colors"
                  >
                    <Icon name="X" size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Add Custom Skill */}
        <div className="border border-border rounded-lg p-4 mb-6">
          <h5 className="font-medium text-foreground mb-3">Add a Skill</h5>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-3">
            <Input
              placeholder="Enter skill name"
              value={customSkill}
              onChange={(e) => setCustomSkill(e?.target?.value)}
              onKeyPress={(e) => e?.key === 'Enter' && handleAddSkill()}
            />
            <Select
              options={skillLevels}
              value={skillLevel}
              onChange={setSkillLevel}
              placeholder="Level"
            />
            <Select
              options={skillCategories}
              value={skillCategory}
              onChange={setSkillCategory}
              placeholder="Category"
            />
            <Button 
              onClick={handleAddSkill}
              iconName="Plus"
              iconPosition="left"
              disabled={!customSkill?.trim()}
            >
              Add Skill
            </Button>
          </div>
        </div>

        {/* Skill Suggestions */}
        <div>
          <h5 className="font-medium text-foreground mb-3">Popular Skills</h5>
          <p className="text-sm text-muted-foreground mb-3">Click to add any of these popular skills:</p>
          <div className="flex flex-wrap gap-2">
            {skillSuggestions?.filter(skill => !selectedSkills?.find(s => s?.name === skill))?.slice(0, 15)?.map((skill, index) => (
                <button
                  key={index}
                  onClick={() => handleSkillSuggestionClick(skill)}
                  className="px-3 py-1 text-sm bg-muted hover:bg-accent hover:text-accent-foreground rounded-full transition-colors border border-border"
                >
                  {skill}
                </button>
              ))}
          </div>
        </div>
      </div>
      {/* Skills Summary */}
      {selectedSkills?.length > 0 && (
        <div className="bg-muted/50 rounded-lg p-4 mb-6">
          <h5 className="font-medium text-foreground mb-2">Skills Summary</h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Total Skills:</span>
              <span className="ml-2 font-medium text-foreground">{selectedSkills?.length}</span>
            </div>
            <div>
              <span className="text-muted-foreground">Technical:</span>
              <span className="ml-2 font-medium text-foreground">
                {selectedSkills?.filter(s => s?.category === 'technical')?.length}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Soft Skills:</span>
              <span className="ml-2 font-medium text-foreground">
                {selectedSkills?.filter(s => s?.category === 'soft')?.length}
              </span>
            </div>
            <div>
              <span className="text-muted-foreground">Expert Level:</span>
              <span className="ml-2 font-medium text-foreground">
                {selectedSkills?.filter(s => s?.level === 'expert')?.length}
              </span>
            </div>
          </div>
        </div>
      )}
      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrevious} iconName="ArrowLeft" iconPosition="left">
          Previous
        </Button>
        <Button 
          onClick={handleNext} 
          iconName="ArrowRight" 
          iconPosition="right"
          disabled={selectedSkills?.length === 0 || selectedIndustries?.length === 0}
        >
          Continue to Mentorship
        </Button>
      </div>
    </div>
  );
};

export default SkillsStep;