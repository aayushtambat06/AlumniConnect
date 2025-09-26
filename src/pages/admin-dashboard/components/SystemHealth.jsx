import React from 'react';
import Icon from '../../../components/AppIcon';

const SystemHealth = () => {
  const healthMetrics = [
    {
      id: 1,
      name: 'Server Status',
      status: 'healthy',
      value: '99.9%',
      description: 'Uptime last 30 days',
      icon: 'Server'
    },
    {
      id: 2,
      name: 'Database',
      status: 'healthy',
      value: '2.3ms',
      description: 'Average response time',
      icon: 'Database'
    },
    {
      id: 3,
      name: 'API Performance',
      status: 'warning',
      value: '156ms',
      description: 'Average API response',
      icon: 'Zap'
    },
    {
      id: 4,
      name: 'Storage Usage',
      status: 'healthy',
      value: '67%',
      description: 'Of allocated space',
      icon: 'HardDrive'
    },
    {
      id: 5,
      name: 'Active Sessions',
      status: 'healthy',
      value: '1,247',
      description: 'Current online users',
      icon: 'Users'
    },
    {
      id: 6,
      name: 'Error Rate',
      status: 'healthy',
      value: '0.02%',
      description: 'Last 24 hours',
      icon: 'AlertCircle'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'healthy':
        return 'text-success';
      case 'warning':
        return 'text-warning';
      case 'error':
        return 'text-error';
      default:
        return 'text-muted-foreground';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'healthy':
        return 'CheckCircle';
      case 'warning':
        return 'AlertTriangle';
      case 'error':
        return 'XCircle';
      default:
        return 'Circle';
    }
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-academic">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">System Health</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Real-time platform monitoring
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={20} className="text-success" />
            <span className="text-sm font-medium text-success">All Systems Operational</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {healthMetrics?.map((metric) => (
            <div key={metric?.id} className="p-4 border border-border rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Icon name={metric?.icon} size={18} className="text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">
                    {metric?.name}
                  </span>
                </div>
                <Icon 
                  name={getStatusIcon(metric?.status)} 
                  size={16} 
                  className={getStatusColor(metric?.status)} 
                />
              </div>
              <div className="space-y-1">
                <div className="text-xl font-bold text-foreground">
                  {metric?.value}
                </div>
                <div className="text-xs text-muted-foreground">
                  {metric?.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SystemHealth;