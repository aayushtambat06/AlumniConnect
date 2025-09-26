import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const BasicInfoStep = ({ data, onUpdate, onNext }) => {
  const [formData, setFormData] = useState({
    firstName: data?.firstName || '',
    lastName: data?.lastName || '',
    email: data?.email || 'john.doe@email.com',
    phone: data?.phone || '',
    location: data?.location || '',
    graduationYear: data?.graduationYear || '',
    degree: data?.degree || '',
    major: data?.major || '',
    profilePhoto: data?.profilePhoto || '',
    bio: data?.bio || '',
    linkedinUrl: data?.linkedinUrl || '',
    websiteUrl: data?.websiteUrl || ''
  });

  const [errors, setErrors] = useState({});
  const [photoPreview, setPhotoPreview] = useState(data?.profilePhoto || '');

  const graduationYears = Array.from({ length: 50 }, (_, i) => {
    const year = new Date()?.getFullYear() - i;
    return { value: year?.toString(), label: year?.toString() };
  });

  const degreeOptions = [
    { value: 'bachelor', label: 'Bachelor\'s Degree' },
    { value: 'master', label: 'Master\'s Degree' },
    { value: 'phd', label: 'Ph.D.' },
    { value: 'associate', label: 'Associate Degree' },
    { value: 'certificate', label: 'Certificate Program' }
  ];

  const majorOptions = [
    { value: 'computer-science', label: 'Computer Science' },
    { value: 'business', label: 'Business Administration' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'medicine', label: 'Medicine' },
    { value: 'law', label: 'Law' },
    { value: 'education', label: 'Education' },
    { value: 'psychology', label: 'Psychology' },
    { value: 'marketing', label: 'Marketing' },
    { value: 'finance', label: 'Finance' },
    { value: 'other', label: 'Other' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors?.[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handlePhotoUpload = (event) => {
    const file = event?.target?.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const photoUrl = e?.target?.result;
        setPhotoPreview(photoUrl);
        handleInputChange('profilePhoto', photoUrl);
      };
      reader?.readAsDataURL(file);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData?.firstName?.trim()) newErrors.firstName = 'First name is required';
    if (!formData?.lastName?.trim()) newErrors.lastName = 'Last name is required';
    if (!formData?.phone?.trim()) newErrors.phone = 'Phone number is required';
    if (!formData?.location?.trim()) newErrors.location = 'Location is required';
    if (!formData?.graduationYear) newErrors.graduationYear = 'Graduation year is required';
    if (!formData?.degree) newErrors.degree = 'Degree is required';
    if (!formData?.major) newErrors.major = 'Major is required';
    if (!formData?.bio?.trim()) newErrors.bio = 'Bio is required';

    setErrors(newErrors);
    return Object.keys(newErrors)?.length === 0;
  };

  const handleNext = () => {
    if (validateForm()) {
      onUpdate(formData);
      onNext();
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 border-academic">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-foreground mb-2">Basic Information</h3>
        <p className="text-muted-foreground">Let's start with your basic details and academic background.</p>
      </div>
      {/* Profile Photo Upload */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-3">Profile Photo</label>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-muted border-2 border-border">
              {photoPreview ? (
                <Image 
                  src={photoPreview} 
                  alt="Profile preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <Icon name="User" size={32} className="text-muted-foreground" />
                </div>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handlePhotoUpload}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
          </div>
          <div>
            <Button variant="outline" size="sm" iconName="Upload">
              Upload Photo
            </Button>
            <p className="text-xs text-muted-foreground mt-1">JPG, PNG up to 5MB</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Input
          label="First Name"
          type="text"
          placeholder="Enter your first name"
          value={formData?.firstName}
          onChange={(e) => handleInputChange('firstName', e?.target?.value)}
          error={errors?.firstName}
          required
        />

        <Input
          label="Last Name"
          type="text"
          placeholder="Enter your last name"
          value={formData?.lastName}
          onChange={(e) => handleInputChange('lastName', e?.target?.value)}
          error={errors?.lastName}
          required
        />

        <Input
          label="Email Address"
          type="email"
          placeholder="your.email@example.com"
          value={formData?.email}
          onChange={(e) => handleInputChange('email', e?.target?.value)}
          disabled
          description="Email cannot be changed after registration"
        />

        <Input
          label="Phone Number"
          type="tel"
          placeholder="+1 (555) 123-4567"
          value={formData?.phone}
          onChange={(e) => handleInputChange('phone', e?.target?.value)}
          error={errors?.phone}
          required
        />

        <Input
          label="Current Location"
          type="text"
          placeholder="City, State/Country"
          value={formData?.location}
          onChange={(e) => handleInputChange('location', e?.target?.value)}
          error={errors?.location}
          required
        />

        <Select
          label="Graduation Year"
          placeholder="Select graduation year"
          options={graduationYears}
          value={formData?.graduationYear}
          onChange={(value) => handleInputChange('graduationYear', value)}
          error={errors?.graduationYear}
          required
          searchable
        />

        <Select
          label="Degree Type"
          placeholder="Select your degree"
          options={degreeOptions}
          value={formData?.degree}
          onChange={(value) => handleInputChange('degree', value)}
          error={errors?.degree}
          required
        />

        <Select
          label="Major/Field of Study"
          placeholder="Select your major"
          options={majorOptions}
          value={formData?.major}
          onChange={(value) => handleInputChange('major', value)}
          error={errors?.major}
          required
          searchable
        />
      </div>
      <div className="mb-6">
        <label className="block text-sm font-medium text-foreground mb-2">
          Professional Bio <span className="text-destructive">*</span>
        </label>
        <textarea
          className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent resize-none"
          rows="4"
          placeholder="Tell us about yourself, your career journey, and what you're passionate about..."
          value={formData?.bio}
          onChange={(e) => handleInputChange('bio', e?.target?.value)}
        />
        {errors?.bio && <p className="text-sm text-destructive mt-1">{errors?.bio}</p>}
        <p className="text-xs text-muted-foreground mt-1">
          {formData?.bio?.length}/500 characters
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Input
          label="LinkedIn Profile"
          type="url"
          placeholder="https://linkedin.com/in/yourprofile"
          value={formData?.linkedinUrl}
          onChange={(e) => handleInputChange('linkedinUrl', e?.target?.value)}
        />

        <Input
          label="Personal Website"
          type="url"
          placeholder="https://yourwebsite.com"
          value={formData?.websiteUrl}
          onChange={(e) => handleInputChange('websiteUrl', e?.target?.value)}
        />
      </div>
      <div className="flex justify-end">
        <Button onClick={handleNext} iconName="ArrowRight" iconPosition="right">
          Continue to Career Timeline
        </Button>
      </div>
    </div>
  );
};

export default BasicInfoStep;