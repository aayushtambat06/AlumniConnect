import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

const QuickActions = () => {
  const actions = [
    {
      title: "Search Alumni",
      description: "Find classmates and connections",
      icon: "Search",
      path: "/alumni-directory",
      color: "bg-blue-50 text-blue-600 border-blue-200",
      iconBg: "bg-blue-100"
    },
    {
      title: "Browse Mentors",
      description: "Connect with industry experts",
      icon: "GraduationCap",
      path: "/mentorship-center",
      color: "bg-green-50 text-green-600 border-green-200",
      iconBg: "bg-green-100"
    },
    {
      title: "View Messages",
      description: "Check your conversations",
      icon: "MessageSquare",
      path: "/messages",
      color: "bg-purple-50 text-purple-600 border-purple-200",
      iconBg: "bg-purple-100"
    },
    {
      title: "Update Profile",
      description: "Keep your information current",
      icon: "User",
      path: "/profile-setup",
      color: "bg-orange-50 text-orange-600 border-orange-200",
      iconBg: "bg-orange-100"
    }
  ];

  return (
    <div className="mb-8">
      <h2 className="text-xl font-semibold text-foreground mb-4">Quick Actions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {actions?.map((action, index) => (
          <Link
            key={index}
            to={action?.path}
            className={`${action?.color} border rounded-xl p-4 hover:shadow-academic-hover transition-academic group`}
          >
            <div className="flex items-center space-x-3">
              <div className={`${action?.iconBg} p-2 rounded-lg group-hover:scale-110 transition-academic`}>
                <Icon name={action?.icon} size={20} />
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-sm">{action?.title}</h3>
                <p className="text-xs opacity-80 mt-1">{action?.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;