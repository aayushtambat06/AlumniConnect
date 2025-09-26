import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EngagementChart = () => {
  const monthlyData = [
    { month: 'Jan', users: 1240, connections: 890, events: 12 },
    { month: 'Feb', users: 1380, connections: 1120, events: 15 },
    { month: 'Mar', users: 1520, connections: 1340, events: 18 },
    { month: 'Apr', users: 1680, connections: 1580, events: 22 },
    { month: 'May', users: 1850, connections: 1720, events: 25 },
    { month: 'Jun', users: 2020, connections: 1890, events: 28 },
    { month: 'Jul', users: 2180, connections: 2050, events: 30 },
    { month: 'Aug', users: 2340, connections: 2210, events: 32 },
    { month: 'Sep', users: 2500, connections: 2380, events: 35 }
  ];

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-popover border border-border rounded-lg p-3 shadow-academic">
          <p className="font-medium text-foreground mb-2">{label}</p>
          {payload?.map((entry, index) => (
            <p key={index} className="text-sm" style={{ color: entry?.color }}>
              {entry?.name}: {entry?.value?.toLocaleString()}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-card border border-border rounded-lg shadow-academic">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Engagement Analytics</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Monthly platform activity trends
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Active Users</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm text-muted-foreground">Connections</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full"></div>
              <span className="text-sm text-muted-foreground">Events</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" />
              <XAxis 
                dataKey="month" 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <YAxis 
                stroke="var(--color-muted-foreground)"
                fontSize={12}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="users" 
                fill="var(--color-primary)" 
                name="Active Users"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="connections" 
                fill="var(--color-accent)" 
                name="New Connections"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="events" 
                fill="var(--color-success)" 
                name="Events Created"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default EngagementChart;