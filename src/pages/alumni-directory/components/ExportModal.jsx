import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';
import Select from '../../../components/ui/Select';

const ExportModal = ({ isOpen, onClose, connectedAlumni, onExport }) => {
  const [selectedAlumni, setSelectedAlumni] = useState([]);
  const [exportFormat, setExportFormat] = useState('csv');
  const [includeFields, setIncludeFields] = useState({
    name: true,
    email: true,
    phone: false,
    company: true,
    role: true,
    location: true,
    graduationYear: true,
    skills: false,
    linkedinUrl: false
  });
  const [isExporting, setIsExporting] = useState(false);

  const formatOptions = [
    { value: 'csv', label: 'CSV File' },
    { value: 'excel', label: 'Excel File' },
    { value: 'pdf', label: 'PDF Report' },
    { value: 'vcard', label: 'vCard Contacts' }
  ];

  const handleSelectAll = (checked) => {
    if (checked) {
      setSelectedAlumni(connectedAlumni?.map(alumni => alumni?.id));
    } else {
      setSelectedAlumni([]);
    }
  };

  const handleAlumniSelect = (alumniId, checked) => {
    if (checked) {
      setSelectedAlumni(prev => [...prev, alumniId]);
    } else {
      setSelectedAlumni(prev => prev?.filter(id => id !== alumniId));
    }
  };

  const handleFieldToggle = (field, checked) => {
    setIncludeFields(prev => ({
      ...prev,
      [field]: checked
    }));
  };

  const handleExport = async () => {
    setIsExporting(true);
    try {
      const exportData = {
        alumniIds: selectedAlumni,
        format: exportFormat,
        fields: includeFields
      };
      await onExport(exportData);
      onClose();
    } catch (error) {
      console.error('Export failed:', error);
    } finally {
      setIsExporting(false);
    }
  };

  const selectedCount = selectedAlumni?.length;
  const totalCount = connectedAlumni?.length;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-popover border border-border rounded-lg shadow-academic-hover w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <div>
            <h2 className="text-xl font-semibold text-foreground">Export Contacts</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Export contact information for your connected alumni
            </p>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            iconName="X"
          />
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-140px)]">
          <div className="space-y-6">
            {/* Export Format */}
            <div>
              <Select
                label="Export Format"
                description="Choose the format for your exported data"
                options={formatOptions}
                value={exportFormat}
                onChange={setExportFormat}
              />
            </div>

            {/* Alumni Selection */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-medium text-foreground">Select Alumni</h3>
                <Checkbox
                  label={`Select All (${totalCount})`}
                  checked={selectedCount === totalCount}
                  onChange={(e) => handleSelectAll(e?.target?.checked)}
                />
              </div>
              
              <div className="max-h-48 overflow-y-auto border border-border rounded-lg">
                {connectedAlumni?.map((alumni) => (
                  <div
                    key={alumni?.id}
                    className="flex items-center space-x-3 p-3 border-b border-border last:border-b-0 hover:bg-muted"
                  >
                    <Checkbox
                      checked={selectedAlumni?.includes(alumni?.id)}
                      onChange={(e) => handleAlumniSelect(alumni?.id, e?.target?.checked)}
                    />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{alumni?.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {alumni?.currentRole} at {alumni?.company}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-xs text-muted-foreground mt-2">
                {selectedCount} of {totalCount} alumni selected
              </p>
            </div>

            {/* Fields to Include */}
            <div>
              <h3 className="text-sm font-medium text-foreground mb-4">Include Fields</h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(includeFields)?.map(([field, checked]) => (
                  <Checkbox
                    key={field}
                    label={field?.charAt(0)?.toUpperCase() + field?.slice(1)?.replace(/([A-Z])/g, ' $1')}
                    checked={checked}
                    onChange={(e) => handleFieldToggle(field, e?.target?.checked)}
                  />
                ))}
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="bg-muted p-4 rounded-lg">
              <div className="flex items-start space-x-3">
                <Icon name="Shield" size={16} color="var(--color-primary)" className="mt-0.5" />
                <div>
                  <h4 className="text-sm font-medium text-foreground">Privacy Notice</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Only information from alumni you're connected with will be exported. 
                    Please respect their privacy and use this data responsibly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border bg-muted">
          <div className="text-sm text-muted-foreground">
            {selectedCount > 0 ? (
              `Ready to export ${selectedCount} contact${selectedCount !== 1 ? 's' : ''}`
            ) : (
              'Select alumni to export'
            )}
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              variant="default"
              onClick={handleExport}
              disabled={selectedCount === 0}
              loading={isExporting}
              iconName="Download"
              iconPosition="left"
            >
              Export {exportFormat?.toUpperCase()}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportModal;