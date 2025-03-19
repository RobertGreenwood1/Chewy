import React from 'react';
import { Truck } from 'lucide-react';
import { cn } from '../utils/cn';
import type { VanConfiguration } from '../types';

interface VanVisualizationProps {
  config: VanConfiguration;
  className?: string;
  view?: 'interior' | 'exterior' | 'rear' | 'reartop';
}

export const VanVisualization: React.FC<VanVisualizationProps> = ({ 
  config, 
  className,
  view = 'exterior'
}) => {
  const getVanSize = () => {
    if (config.chassisId === 'sprinter170') {
      return 'scale-100';
    }
    return 'scale-95';
  };

  // Determine the color based on configuration
  const getVanColor = () => {
    switch (config.color) {
      case 'white':
        return '#FFFFFF';
      case 'silver':
        return '#C0C0C0';
      case 'black':
        return '#222222';
      case 'blue':
        return '#1E3D59';
      default:
        return '#666666'; // Default gray color
    }
  };

  // Render the appropriate view based on the active view
  const renderView = () => {
    switch (view) {
      case 'interior':
        return renderInteriorView();
      case 'rear':
        return renderRearView();
      case 'reartop':
        return renderRearTopView();
      case 'exterior':
      default:
        return renderExteriorView();
    }
  }

  // Render the exterior (side) view
  const renderExteriorView = () => (
    <svg
      viewBox="0 0 800 500"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Van body */}
      <g transform="translate(0,0)">
        {/* Main body */}
        <path
          d="M200,350 L200,180 Q200,150 230,150 L600,150 Q650,150 650,200 L650,350 Z"
          fill={getVanColor()}
          stroke="#000"
          strokeWidth="2"
        />
        
        {/* Windshield */}
        <path
          d="M230,150 L260,100 Q270,80 290,80 L550,80 Q580,80 590,100 L600,150"
          fill="#A5D8FF"
          stroke="#000"
          strokeWidth="2"
        />
        
        {/* Hood */}
        <path
          d="M200,180 L150,180 Q120,180 120,220 L120,350 L200,350"
          fill={getVanColor()}
          stroke="#000"
          strokeWidth="2"
        />
        
        {/* Front bumper */}
        <rect
          x="100"
          y="340"
          width="70"
          height="20"
          rx="5"
          fill="#333"
        />
        
        {/* Headlights */}
        <ellipse
          cx="130"
          cy="250"
          rx="15"
          ry="15"
          fill="#FFF"
          stroke="#000"
        />
        
        {/* Front grille */}
        <rect
          x="120"
          y="270"
          width="40"
          height="40"
          rx="5"
          fill="#222"
        />
        <path
          d="M130,280 L150,280 M130,290 L150,290 M130,300 L150,300"
          stroke="#444"
          strokeWidth="2"
        />
        
        {/* Side windows */}
        <rect
          x="250"
          y="160"
          width="70"
          height="40"
          rx="5"
          fill="#A5D8FF"
          stroke="#000"
        />
        <rect
          x="350"
          y="160"
          width="70"
          height="40"
          rx="5"
          fill="#A5D8FF"
          stroke="#000"
        />
        <rect
          x="560"
          y="160"
          width="70"
          height="40"
          rx="5"
          fill="#A5D8FF"
          stroke="#000"
        />
        
        {/* Back doors */}
        <rect
          x="640"
          y="180"
          width="20"
          height="170"
          fill="#333"
        />
        <line
          x1="650"
          y1="180"
          x2="650"
          y2="350"
          stroke="#000"
          strokeWidth="2"
        />
        
        {/* Wheels */}
        <circle
          cx="180"
          cy="350"
          r="40"
          fill="#333"
          stroke="#000"
          strokeWidth="2"
        />
        <circle
          cx="180"
          cy="350"
          r="20"
          fill="#666"
        />
        <circle
          cx="580"
          cy="350"
          r="40"
          fill="#333"
          stroke="#000"
          strokeWidth="2"
        />
        <circle
          cx="580"
          cy="350"
          r="20"
          fill="#666"
        />
        
        {/* Mercedes logo on front */}
        <circle
          cx="140"
          cy="285"
          r="10"
          fill="#333"
          stroke="#DDD"
          strokeWidth="2"
        />
        
        {/* Red accent line */}
        <path
          d="M120,225 L200,225"
          stroke="red"
          strokeWidth="4"
        />

        {/* Draw customization options */}
        {config.selectedOptions.includes('solar') && (
          <rect
            x="250"
            y="140"
            width="300"
            height="10"
            fill="#1E90FF"
            stroke="#000"
            strokeWidth="1"
          />
        )}
      </g>
      
      {/* Fallback text when no configuration */}
      {!config.modelId && !config.chassisId && (
        <text
          x="400"
          y="250"
          textAnchor="middle"
          fontSize="24"
          fill="#666"
        >
          Choose a configuration to view your van
        </text>
      )}

      {/* View label */}
      <text
        x="30"
        y="30"
        fontFamily="sans-serif"
        fontSize="18"
        fill="white"
        stroke="#000"
        strokeWidth="0.5"
      >
        Exterior Side View
      </text>
    </svg>
  );

  // Render the interior view
  const renderInteriorView = () => (
    <svg
      viewBox="0 0 800 500"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Interior floor */}
      <rect
        x="100"
        y="150"
        width="600"
        height="300"
        fill="#333"
        stroke="#000"
        strokeWidth="2"
      />
      
      {/* Walls */}
      <rect
        x="100"
        y="50"
        width="600"
        height="100"
        fill={getVanColor()}
        stroke="#000"
        strokeWidth="2"
      />
      
      {/* Windows */}
      <rect
        x="150"
        y="70"
        width="80"
        height="60"
        fill="#A5D8FF"
        stroke="#000"
        strokeWidth="2"
      />
      <rect
        x="300"
        y="70"
        width="80"
        height="60"
        fill="#A5D8FF"
        stroke="#000"
        strokeWidth="2"
      />
      <rect
        x="450"
        y="70"
        width="80"
        height="60"
        fill="#A5D8FF"
        stroke="#000"
        strokeWidth="2"
      />
      <rect
        x="600"
        y="70"
        width="80"
        height="60"
        fill="#A5D8FF"
        stroke="#000"
        strokeWidth="2"
      />
      
      {/* Seating area */}
      <rect
        x="150"
        y="200"
        width="150"
        height="100"
        fill="#555"
        stroke="#000"
        strokeWidth="2"
      />
      
      {/* Draw customization options */}
      {config.selectedOptions.includes('kitchen') && (
        <g>
          <rect
            x="500"
            y="180"
            width="150"
            height="80"
            fill="#8B4513"
            stroke="#000"
            strokeWidth="2"
          />
          <rect
            x="520"
            y="200"
            width="60"
            height="40"
            fill="#C0C0C0"
            stroke="#000"
            strokeWidth="1"
          />
          <circle
            cx="580"
            cy="220"
            r="10"
            fill="#333"
          />
        </g>
      )}
      
      {config.selectedOptions.includes('bathroom') && (
        <rect
          x="350"
          y="200"
          width="100"
          height="100"
          fill="#87CEEB"
          stroke="#000"
          strokeWidth="2"
        />
      )}

      {/* View label */}
      <text
        x="30"
        y="30"
        fontFamily="sans-serif"
        fontSize="18"
        fill="white"
        stroke="#000"
        strokeWidth="0.5"
      >
        Interior View
      </text>
    </svg>
  );

  // Render the rear view
  const renderRearView = () => (
    <svg
      viewBox="0 0 800 500"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Rear body */}
      <rect
        x="200"
        y="100"
        width="400"
        height="300"
        fill={getVanColor()}
        stroke="#000"
        strokeWidth="2"
      />
      
      {/* Rear doors */}
      <line
        x1="400"
        y1="100"
        x2="400"
        y2="400"
        stroke="#000"
        strokeWidth="4"
      />
      
      {/* Door handles */}
      <rect
        x="380"
        y="250"
        width="10"
        height="20"
        fill="#555"
        stroke="#000"
      />
      <rect
        x="410"
        y="250"
        width="10"
        height="20"
        fill="#555"
        stroke="#000"
      />
      
      {/* Rear windows */}
      <rect
        x="250"
        y="130"
        width="100"
        height="100"
        fill="#A5D8FF"
        stroke="#000"
        strokeWidth="2"
      />
      <rect
        x="450"
        y="130"
        width="100"
        height="100"
        fill="#A5D8FF"
        stroke="#000"
        strokeWidth="2"
      />
      
      {/* Tail lights */}
      <rect
        x="250"
        y="350"
        width="50"
        height="20"
        fill="red"
        stroke="#000"
      />
      <rect
        x="500"
        y="350"
        width="50"
        height="20"
        fill="red"
        stroke="#000"
      />
      
      {/* Bumper */}
      <rect
        x="200"
        y="380"
        width="400"
        height="20"
        fill="#333"
        stroke="#000"
      />

      {/* View label */}
      <text
        x="30"
        y="30"
        fontFamily="sans-serif"
        fontSize="18"
        fill="white"
        stroke="#000"
        strokeWidth="0.5"
      >
        Rear View
      </text>
    </svg>
  );

  // Render the rear top view
  const renderRearTopView = () => (
    <svg
      viewBox="0 0 800 500"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      {/* Overhead view of the van */}
      <rect
        x="200"
        y="100"
        width="400"
        height="300"
        fill={getVanColor()}
        stroke="#000"
        strokeWidth="2"
        rx="20"
      />
      
      {/* Windshield */}
      <rect
        x="250"
        y="100"
        width="300"
        height="50"
        fill="#A5D8FF"
        stroke="#000"
        strokeWidth="2"
      />
      
      {/* Roof elements */}
      {config.selectedOptions.includes('solar') && (
        <rect
          x="250"
          y="170"
          width="300"
          height="150"
          fill="#1E90FF"
          stroke="#000"
          strokeWidth="2"
        />
      )}

      {/* View label */}
      <text
        x="30"
        y="30"
        fontFamily="sans-serif"
        fontSize="18"
        fill="white"
        stroke="#000"
        strokeWidth="0.5"
      >
        Roof View
      </text>
    </svg>
  );

  return (
    <div className={cn('relative bg-transparent', className)}>
      {/* The 3D van visualization would ideally be integrated here */}
      {/* For now, we'll use SVG representations based on the selected view */}
      <div className="w-full h-full flex items-center justify-center">
        <div
          className={cn(
            'relative transition-all duration-500 ease-in-out transform w-full h-full',
            getVanSize()
          )}
        >
          {renderView()}
        </div>
      </div>
    </div>
  );
};