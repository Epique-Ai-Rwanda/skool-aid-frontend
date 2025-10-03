'use client';
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, User, BookOpen, Monitor, Award, Settings, BarChart } from 'lucide-react';

const FlowDiagram = () => {
  const [expandedFlow, setExpandedFlow] = useState('teacher-ai');
  const [selectedRole, setSelectedRole] = useState('teacher');

  const roles = [
    { id: 'student', name: 'Student', icon: User, color: 'bg-blue-500' },
    { id: 'teacher', name: 'Teacher', icon: BookOpen, color: 'bg-green-500' },
    { id: 'school-admin', name: 'School Admin', icon: Settings, color: 'bg-purple-500' },
    { id: 'reb-admin', name: 'REB Admin', icon: BarChart, color: 'bg-orange-500' }
  ];

  const flows = {
    teacher: [
      {
        id: 'teacher-ai',
        title: '1. Teacher Creates AI-Assisted Lesson',
        steps: [
          { step: '1', actor: 'Teacher', action: 'Logs into Educator\'s Toolkit (web)', system: 'User Management Service', detail: 'Authentication via JWT' },
          { step: '2', actor: 'Teacher', action: 'Clicks "Create New Lesson" and enters topic: "Photosynthesis"', system: 'Content Management Service', detail: 'Initiates lesson creation' },
          { step: '3', actor: 'Teacher', action: 'Clicks "Generate with AI"', system: 'AI Gateway Service', detail: 'Request sent to AI Gateway' },
          { step: '4', actor: 'System', action: 'AI Gateway crafts prompt and sends to OpenAI/Gemini', system: 'External AI (OpenAI/Gemini)', detail: 'Structured prompt engineering' },
          { step: '5', actor: 'System', action: 'AI returns lesson plan with objectives, activities, and resources', system: 'AI Gateway Service', detail: 'Content moderation applied' },
          { step: '6', actor: 'Teacher', action: 'Reviews, edits, and personalizes the lesson', system: 'Content Management Service', detail: 'Teacher customizes AI output' },
          { step: '7', actor: 'Teacher', action: 'Clicks "Save Lesson"', system: 'Content Management Service', detail: 'Lesson stored in PostgreSQL, media in S3' },
          { step: '8', actor: 'System', action: 'Lesson now available in teacher\'s library', system: 'Notification Service', detail: 'Teacher notified of successful save' }
        ]
      },
      {
        id: 'teacher-live',
        title: '2. Teacher Conducts Live Interactive Lesson',
        steps: [
          { step: '1', actor: 'Teacher', action: 'Arrives at classroom, powers on Interactive Hub', system: 'Device Management Service', detail: 'Screen authenticates and registers online' },
          { step: '2', actor: 'Teacher', action: 'Logs in on the touchscreen', system: 'User Management Service', detail: 'Teacher identity verified' },
          { step: '3', actor: 'Teacher', action: 'Selects "Photosynthesis" lesson from library', system: 'Content Management Service', detail: 'Lesson content loaded to screen' },
          { step: '4', actor: 'Teacher', action: 'Chooses "Presentation Mode" - starts teaching', system: 'Session Orchestration Service', detail: 'Read-only session created' },
          { step: '5', actor: 'Students', action: 'Watch the main screen, no laptop interaction needed', system: 'N/A', detail: 'Traditional lecture style' },
          { step: '6', actor: 'Teacher', action: 'Switches to "Interactive Mode" for quiz', system: 'Session Orchestration Service', detail: 'Interactive session created with unique code' },
          { step: '7', actor: 'Teacher', action: 'Displays session code: "JOIN-4582" on screen', system: 'Real-time Collaboration Service', detail: 'WebSocket server ready' },
          { step: '8', actor: 'Students', action: 'Open laptops, go to platform, enter code "JOIN-4582"', system: 'Session Orchestration Service', detail: 'Students authenticate and join' },
          { step: '9', actor: 'System', action: 'WebSocket connections established for all students', system: 'Real-time Collaboration Service', detail: 'Bidirectional sync active' },
          { step: '10', actor: 'Teacher', action: 'Launches quiz on screen', system: 'Assessment Service', detail: 'Quiz questions distributed to all students' },
          { step: '11', actor: 'Students', action: 'Answer questions on their laptops in real-time', system: 'Assessment Service', detail: 'Answers streamed back via WebSocket' },
          { step: '12', actor: 'System', action: 'Live results appear on teacher\'s screen', system: 'Real-time Collaboration + Analytics', detail: 'Instant feedback and class performance' }
        ]
      },
      {
        id: 'teacher-exam',
        title: '3. Teacher Creates and Assigns Exam',
        steps: [
          { step: '1', actor: 'Teacher', action: 'Goes to Educator\'s Toolkit > Assessments', system: 'Assessment Service', detail: 'Navigate to exam builder' },
          { step: '2', actor: 'Teacher', action: 'Clicks "Create Exam" for "Photosynthesis Unit"', system: 'Assessment Service', detail: 'Exam creation wizard starts' },
          { step: '3', actor: 'Teacher', action: 'Clicks "AI Generate Questions"', system: 'AI Gateway Service', detail: 'AI analyzes lesson content' },
          { step: '4', actor: 'System', action: 'AI generates 20 questions (MCQ, True/False, Short Answer)', system: 'AI Gateway Service', detail: 'Questions returned and displayed' },
          { step: '5', actor: 'Teacher', action: 'Reviews, edits questions, adds 5 custom questions', system: 'Assessment Service', detail: 'Teacher curates final exam' },
          { step: '6', actor: 'Teacher', action: 'Configures: Time limit (45 min), Randomize questions, Browser lockdown', system: 'Assessment Service', detail: 'Academic integrity settings' },
          { step: '7', actor: 'Teacher', action: 'Assigns to "Biology Class A" with deadline', system: 'Assessment Service + Notification', detail: 'Exam scheduled and students notified' },
          { step: '8', actor: 'Students', action: 'Receive notification: "New Exam Available"', system: 'Notification Service', detail: 'Email/in-app alert sent' }
        ]
      }
    ],
    student: [
      {
        id: 'student-lesson',
        title: '1. Student Accesses Lesson Materials',
        steps: [
          { step: '1', actor: 'Student', action: 'Opens laptop, navigates to Skool-Aid platform', system: 'N/A', detail: 'Goes to platform URL' },
          { step: '2', actor: 'Student', action: 'Logs in with credentials', system: 'User Management Service', detail: 'Authentication via JWT' },
          { step: '3', actor: 'Student', action: 'Views dashboard with assigned courses', system: 'Content Management Service', detail: 'Personalized course list loaded' },
          { step: '4', actor: 'Student', action: 'Clicks "Biology" > "Photosynthesis" lesson', system: 'Content Management Service', detail: 'Lesson content retrieved' },
          { step: '5', actor: 'Student', action: 'Reads digital textbook with embedded videos', system: 'Media Processing Service', detail: 'Content delivered via CDN' },
          { step: '6', actor: 'Student', action: 'Clicks "Download for Offline"', system: 'Content Management Service', detail: 'Lesson cached locally (IndexedDB)' },
          { step: '7', actor: 'System', action: 'Materials now available offline', system: 'Browser Cache', detail: 'Student can access without internet' }
        ]
      },
      {
        id: 'student-exam',
        title: '2. Student Takes an Exam',
        steps: [
          { step: '1', actor: 'Student', action: 'Sees notification: "Exam due in 2 hours"', system: 'Notification Service', detail: 'Reminder alert' },
          { step: '2', actor: 'Student', action: 'Goes to "Assessments" tab, clicks "Start Exam"', system: 'Assessment Service', detail: 'Exam session initiated' },
          { step: '3', actor: 'System', action: 'Browser lockdown activated (fullscreen, no tab switching)', system: 'Assessment Service', detail: 'Anti-cheating measures active' },
          { step: '4', actor: 'System', action: 'Questions randomized for this student', system: 'Assessment Service', detail: 'Pulls from question pool' },
          { step: '5', actor: 'Student', action: 'Answers questions, timer counts down', system: 'Assessment Service', detail: 'Progress auto-saved every 30 seconds' },
          { step: '6', actor: 'Student', action: 'Clicks "Submit Exam" or time expires', system: 'Assessment Service', detail: 'Answers finalized' },
          { step: '7', actor: 'System', action: 'Auto-grades objective questions, flags subjective ones', system: 'Assessment Service', detail: 'Instant grading where possible' },
          { step: '8', actor: 'System', action: 'Notifies teacher: "Student submitted exam"', system: 'Notification Service', detail: 'Teacher alerted for manual grading' },
          { step: '9', actor: 'Student', action: 'Sees provisional score (objective questions only)', system: 'Assessment Service', detail: 'Awaiting teacher review for full grade' }
        ]
      },
      {
        id: 'student-accessibility',
        title: '3. Student with Visual Impairment Uses Platform',
        steps: [
          { step: '1', actor: 'Student', action: 'Logs in, screen reader automatically detects platform', system: 'User Management Service', detail: 'WCAG 2.1 AA compliant interface' },
          { step: '2', actor: 'Student', action: 'Navigates using keyboard shortcuts', system: 'Content Management Service', detail: 'All features keyboard-accessible' },
          { step: '3', actor: 'Student', action: 'Opens lesson, screen reader reads content aloud', system: 'Content Management Service', detail: 'Proper ARIA labels and semantic HTML' },
          { step: '4', actor: 'Student', action: 'Encounters a diagram', system: 'Content Management Service', detail: 'Alt text describes diagram in detail' },
          { step: '5', actor: 'Student', action: 'Activates "High Contrast Mode"', system: 'User Management Service', detail: 'User preference saved' },
          { step: '6', actor: 'Student', action: 'Takes quiz using voice-to-text', system: 'Assessment Service', detail: 'Voice commands captured and converted' },
          { step: '7', actor: 'System', action: 'All interactions logged for equal opportunity', system: 'Analytics Service', detail: 'Ensuring accessible experience' }
        ]
      }
    ],
    'school-admin': [
      {
        id: 'admin-setup',
        title: '1. School Admin Sets Up New Classroom',
        steps: [
          { step: '1', actor: 'Admin', action: 'Logs into Admin Portal', system: 'User Management Service', detail: 'Admin authentication' },
          { step: '2', actor: 'Admin', action: 'Goes to "Devices" > "Register New Hub"', system: 'Device Management Service', detail: 'Device registration flow' },
          { step: '3', actor: 'Admin', action: 'Enters device serial number and location: "Room 3A"', system: 'Device Management Service', detail: 'Device mapped to classroom' },
          { step: '4', actor: 'System', action: 'Generates device certificate and QR code', system: 'Device Management Service', detail: 'Secure device credentials' },
          { step: '5', actor: 'Admin', action: 'Scans QR code on Interactive Hub during first boot', system: 'Device Management Service', detail: 'Device authenticates and activates' },
          { step: '6', actor: 'Admin', action: 'Assigns teacher "Ms. Uwera" to Room 3A', system: 'User Management Service', detail: 'Teacher-device association' },
          { step: '7', actor: 'Admin', action: 'Bulk uploads student list (CSV)', system: 'User Management Service', detail: 'Students accounts created' },
          { step: '8', actor: 'System', action: 'Sends login credentials to students via email/SMS', system: 'Notification Service', detail: 'Welcome messages sent' }
        ]
      },
      {
        id: 'admin-monitor',
        title: '2. School Admin Monitors System Health',
        steps: [
          { step: '1', actor: 'Admin', action: 'Views "School Dashboard"', system: 'Analytics Service', detail: 'Real-time school metrics' },
          { step: '2', actor: 'System', action: 'Shows: 15 active sessions, 8 offline devices, 342 students online', system: 'Device Management + Session Orchestration', detail: 'Live system status' },
          { step: '3', actor: 'Admin', action: 'Notices "Room 5B Hub" is offline', system: 'Device Management Service', detail: 'Device health alert' },
          { step: '4', actor: 'Admin', action: 'Creates support ticket: "Screen not responding"', system: 'Device Management Service', detail: 'Issue logged for tech support' },
          { step: '5', actor: 'Admin', action: 'Views weekly report: Exam completion rate 87%', system: 'Analytics Service', detail: 'Performance insights' }
        ]
      }
    ],
    'reb-admin': [
      {
        id: 'reb-overview',
        title: '1. REB Admin Reviews National Performance',
        steps: [
          { step: '1', actor: 'REB Admin', action: 'Logs into REB Portal', system: 'User Management Service', detail: 'National-level access' },
          { step: '2', actor: 'REB Admin', action: 'Views "National Dashboard"', system: 'Analytics Service', detail: 'Aggregated data from all schools' },
          { step: '3', actor: 'System', action: 'Shows: 150 schools, 45,000 students, average score 72%', system: 'Analytics Service', detail: 'Country-wide metrics' },
          { step: '4', actor: 'REB Admin', action: 'Filters by district: "Kigali City"', system: 'Analytics Service', detail: 'Regional drill-down' },
          { step: '5', actor: 'REB Admin', action: 'Identifies schools with low engagement', system: 'Analytics Service', detail: 'Data-driven insights' },
          { step: '6', actor: 'REB Admin', action: 'Exports report for MINEDUC', system: 'Analytics Service', detail: 'PDF/Excel export' },
          { step: '7', actor: 'REB Admin', action: 'Approves new curriculum content submitted by teachers', system: 'Content Management Service', detail: 'Quality assurance workflow' }
        ]
      }
    ]
  };

  const Flow = ({ flow, isExpanded, onToggle }) => (
    <div className="mb-4 border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-4 py-3 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
      >
        <span className="font-semibold text-left">{flow.title}</span>
        {isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
      </button>
      {isExpanded && (
        <div className="p-4 bg-white">
          {flow.steps.map((step, idx) => (
            <div key={idx} className="mb-4 last:mb-0">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-sm text-gray-700">{step.actor}:</span>
                    <span className="text-sm">{step.action}</span>
                  </div>
                  <div className="ml-0 pl-3 border-l-2 border-gray-200">
                    <div className="text-xs text-blue-600 font-medium mb-1">
                      → {step.system}
                    </div>
                    <div className="text-xs text-gray-500 italic">
                      {step.detail}
                    </div>
                  </div>
                </div>
              </div>
              {idx < flow.steps.length - 1 && (
                <div className="ml-4 mt-2 mb-2 border-l-2 border-dashed border-gray-300 h-4"></div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-br from-blue-50 to-indigo-50 min-h-screen font-poppins">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Skool-Aid System Flows</h1>
        <p className="text-gray-600">Complete user journeys and system interactions</p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Select User Role</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {roles.map(role => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => {
                  setSelectedRole(role.id);
                  setExpandedFlow(flows[role.id][0].id);
                }}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedRole === role.id
                    ? 'border-blue-500 bg-blue-50 shadow-md'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow'
                }`}
              >
                <div className={`w-12 h-12 rounded-full ${role.color} text-white flex items-center justify-center mx-auto mb-2`}>
                  <Icon size={24} />
                </div>
                <div className="text-sm font-semibold text-center">{role.name}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          {roles.find(r => r.id === selectedRole)?.name} Workflows
        </h2>
        {flows[selectedRole].map(flow => (
          <Flow
            key={flow.id}
            flow={flow}
            isExpanded={expandedFlow === flow.id}
            onToggle={() => setExpandedFlow(expandedFlow === flow.id ? null : flow.id)}
          />
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Legend</h2>
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-blue-500"></div>
            <span><strong>Step Number:</strong> Sequential order of actions</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-blue-100 border border-blue-300"></div>
            <span className="text-blue-600"><strong>→ System:</strong> Which microservice handles this step</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-100 border border-gray-300"></div>
            <span className="text-gray-500 italic"><strong>Detail:</strong> Technical implementation notes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlowDiagram;