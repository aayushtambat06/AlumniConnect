import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';


const CareerTimelineStep = ({ data, onUpdate, onNext, onPrevious }) => {
  const [experiences, setExperiences] = useState(data?.experiences || [
    {
      id: 1,
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      startDate: '2022-01',
      endDate: '',
      current: true,
      description: 'Developing scalable web applications using React and Node.js. Leading a team of 3 junior developers and implementing best practices for code quality and performance optimization.',
      type: 'full-time'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [errors, setErrors] = useState({});

  const employmentTypes = [
    { value: 'full-time', label: 'Full-time' },
    { value: 'part-time', label: 'Part-time' },
    { value: 'contract', label: 'Contract' },
    { value: 'internship', label: 'Internship' },
    { value: 'freelance', label: 'Freelance' },
    { value: 'volunteer', label: 'Volunteer' }
  ];

  const [newExperience, setNewExperience] = useState({
    title: '',
    company: '',
    location: '',
    startDate: '',
    endDate: '',
    current: false,
    description: '',
    type: 'full-time'
  });

  const handleInputChange = (field, value) => {
    setNewExperience(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateExperience = (exp) => {
    const newErrors = {};
    
    if (!exp?.title?.trim()) newErrors.title = 'Job title is required';
    if (!exp?.company?.trim()) newErrors.company = 'Company name is required';
    if (!exp?.location?.trim()) newErrors.location = 'Location is required';
    if (!exp?.startDate) newErrors.startDate = 'Start date is required';
    if (!exp?.current && !exp?.endDate) newErrors.endDate = 'End date is required';
    if (!exp?.description?.trim()) newErrors.description = 'Description is required';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleAddExperience = () => {
    if (validateExperience(newExperience)) {
      const experience = {
        ...newExperience,
        id: Date.now()
      };
      
      const updatedExperiences = [...experiences, experience];
      setExperiences(updatedExperiences);
      setNewExperience({
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
        type: 'full-time'
      });
      setShowAddForm(false);
      setErrors({});
    }
  };

  const handleEditExperience = (id) => {
    const experience = experiences?.find(exp => exp?.id === id);
    setNewExperience(experience);
    setEditingId(id);
    setShowAddForm(true);
  };

  const handleUpdateExperience = () => {
    if (validateExperience(newExperience)) {
      const updatedExperiences = experiences?.map(exp => 
        exp?.id === editingId ? { ...newExperience } : exp
      );
      setExperiences(updatedExperiences);
      setNewExperience({
        title: '',
        company: '',
        location: '',
        startDate: '',
        endDate: '',
        current: false,
        description: '',
        type: 'full-time'
      });
      setShowAddForm(false);
      setEditingId(null);
      setErrors({});
    }
  };

  const handleDeleteExperience = (id) => {
    setExperiences(experiences?.filter(exp => exp?.id !== id));
  };

  const handleNext = () => {
    if (experiences?.length === 0) {
      setErrors({ general: 'Please add at least one work experience' });
      return;
    }
    onUpdate({ experiences });
    onNext();
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date?.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  };

  const calculateDuration = (startDate, endDate, current) => {
    const start = new Date(startDate);
    const end = current ? new Date() : new Date(endDate);
    const months = (end?.getFullYear() - start?.getFullYear()) * 12 + (end?.getMonth() - start?.getMonth());
    
    if (months < 12) {
      return `${months} month${months !== 1 ? 's' : ''}`;
    } else {
      const years = Math.floor(months / 12);
      const remainingMonths = months % 12;
      return `${years} year${years !== 1 ? 's' : ''}${remainingMonths > 0 ? ` ${remainingMonths} month${remainingMonths !== 1 ? 's' : ''}` : ''}`;
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 border-academic">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Career Timeline</h3>
        <p className="text-muted-foreground">Build your professional journey by adding your work experiences.</p>
      </div>
      {errors?.general && (
        <div className="mb-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg">
          <p className="text-sm text-destructive">{errors?.general}</p>
        </div>
      )}
      {/* Existing Experiences */}
      <div className="space-y-4 mb-6">
        {experiences?.map((exp, index) => (
          <div key={exp?.id} className="border border-border rounded-lg p-4 bg-background">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-1">
                  <h4 className="font-semibold text-foreground">{exp?.title}</h4>
                  <span className="px-2 py-1 text-xs bg-accent/20 text-accent-foreground rounded-full">
                    {exp?.type}
                  </span>
                </div>
                <p className="text-primary font-medium">{exp?.company}</p>
                <p className="text-sm text-muted-foreground">{exp?.location}</p>
                <p className="text-sm text-muted-foreground">
                  {formatDate(exp?.startDate)} - {exp?.current ? 'Present' : formatDate(exp?.endDate)} 
                  <span className="ml-2">({calculateDuration(exp?.startDate, exp?.endDate, exp?.current)})</span>
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  iconName="Edit" 
                  onClick={() => handleEditExperience(exp?.id)}
                />
                <Button 
                  variant="ghost" 
                  size="sm" 
                  iconName="Trash2" 
                  onClick={() => handleDeleteExperience(exp?.id)}
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{exp?.description}</p>
          </div>
        ))}
      </div>
      {/* Add/Edit Experience Form */}
      {showAddForm && (
        <div className="border border-border rounded-lg p-4 mb-6 bg-muted/30">
          <h4 className="font-semibold text-foreground mb-4">
            {editingId ? 'Edit Experience' : 'Add New Experience'}
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              label="Job Title"
              type="text"
              placeholder="e.g. Software Engineer"
              value={newExperience?.title}
              onChange={(e) => handleInputChange('title', e?.target?.value)}
              error={errors?.title}
              required
            />

            <Input
              label="Company"
              type="text"
              placeholder="e.g. Google Inc."
              value={newExperience?.company}
              onChange={(e) => handleInputChange('company', e?.target?.value)}
              error={errors?.company}
              required
            />

            <Input
              label="Location"
              type="text"
              placeholder="e.g. San Francisco, CA"
              value={newExperience?.location}
              onChange={(e) => handleInputChange('location', e?.target?.value)}
              error={errors?.location}
              required
            />

            <Select
              label="Employment Type"
              options={employmentTypes}
              value={newExperience?.type}
              onChange={(value) => handleInputChange('type', value)}
              required
            />

            <Input
              label="Start Date"
              type="month"
              value={newExperience?.startDate}
              onChange={(e) => handleInputChange('startDate', e?.target?.value)}
              error={errors?.startDate}
              required
            />

            {!newExperience?.current && (
              <Input
                label="End Date"
                type="month"
                value={newExperience?.endDate}
                onChange={(e) => handleInputChange('endDate', e?.target?.value)}
                error={errors?.endDate}
                required
              />
            )}
          </div>

          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={newExperience?.current}
                onChange={(e) => {
                  handleInputChange('current', e?.target?.checked);
                  if (e?.target?.checked) {
                    handleInputChange('endDate', '');
                  }
                }}
                className="rounded border-border text-primary focus:ring-primary"
              />
              <span className="text-sm text-foreground">I currently work here</span>
            </label>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-foreground mb-2">
              Description <span className="text-destructive">*</span>
            </label>
            <textarea
              className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
              rows="3"
              placeholder="Describe your role, responsibilities, and achievements..."
              value={newExperience?.description}
              onChange={(e) => handleInputChange('description', e?.target?.value)}
            />
            {errors?.description && <p className="text-sm text-destructive mt-1">{errors?.description}</p>}
          </div>

          <div className="flex justify-end space-x-3">
            <Button 
              variant="outline" 
              onClick={() => {
                setShowAddForm(false);
                setEditingId(null);
                setNewExperience({
                  title: '',
                  company: '',
                  location: '',
                  startDate: '',
                  endDate: '',
                  current: false,
                  description: '',
                  type: 'full-time'
                });
                setErrors({});
              }}
            >
              Cancel
            </Button>
            <Button 
              onClick={editingId ? handleUpdateExperience : handleAddExperience}
              iconName={editingId ? "Save" : "Plus"}
              iconPosition="left"
            >
              {editingId ? 'Update Experience' : 'Add Experience'}
            </Button>
          </div>
        </div>
      )}
      {/* Add New Experience Button */}
      {!showAddForm && (
        <Button 
          variant="outline" 
          onClick={() => setShowAddForm(true)}
          iconName="Plus"
          iconPosition="left"
          className="mb-6"
        >
          Add Work Experience
        </Button>
      )}
      {/* Navigation */}
      <div className="flex justify-between">
        <Button variant="outline" onClick={onPrevious} iconName="ArrowLeft" iconPosition="left">
          Previous
        </Button>
        <Button onClick={handleNext} iconName="ArrowRight" iconPosition="right">
          Continue to Skills
        </Button>
      </div>
    </div>
  );
};

export default CareerTimelineStep;