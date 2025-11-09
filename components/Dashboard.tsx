import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullseye, faCheck, faExclamationTriangle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface DashboardProps {
  industry?: 'Financial' | 'Healthcare' | 'Law Firms' | 'Real Estate' | 'Logistics';
}

const dashboardContent = {
  Financial: {
    badge: 'Client Analytics',
    title: 'Real-Time Client Engagement',
    subtitle: 'Dashboard',
    description: 'Track client onboarding, retention rates, and advisory session engagement with comprehensive financial analytics',
    metrics: [
      { label: 'Client Onboarding Rate', value: '89%', change: '+22%', positive: true },
      { label: 'Client Retention', value: '78%', change: '+28%', positive: true },
      { label: 'Response Time', value: '12s', change: '-35%', positive: true },
    ],
    channels: [
      { channel: 'Account Updates', percentage: 93 },
      { channel: 'Investment Alerts', percentage: 90 },
      { channel: 'Document Requests', percentage: 87 },
      { channel: 'Consultation Reminders', percentage: 84 },
    ],
    insight: 'Detected client confusion about portfolio allocation. Suggested automated educational content and advisor callback.'
  },
  Healthcare: {
    badge: 'Patient Analytics',
    title: 'Real-Time Patient Engagement',
    subtitle: 'Dashboard',
    description: 'Track appointment confirmations, no-show rates, and patient satisfaction with real-time healthcare analytics',
    metrics: [
      { label: 'Appointment Confirmations', value: '94%', change: '+18%', positive: true },
      { label: 'No-Show Reduction', value: '67%', change: '+34%', positive: true },
      { label: 'Patient Response Time', value: '45s', change: '-22%', positive: true },
    ],
    channels: [
      { channel: 'Appointment Reminders', percentage: 92 },
      { channel: 'Prescription Alerts', percentage: 88 },
      { channel: 'Lab Result Notifications', percentage: 85 },
      { channel: 'Follow-up Calls', percentage: 79 },
    ],
    insight: 'Detected patient confusion about insurance coverage. Suggested automated benefits verification call.'
  },
  'Law Firms': {
    badge: 'Case Analytics',
    title: 'Real-Time Client Case Management',
    subtitle: 'Dashboard',
    description: 'Track consultation conversions, client retention, and case response times with comprehensive legal practice analytics',
    metrics: [
      { label: 'Consultation Conversion', value: '85%', change: '+32%', positive: true },
      { label: 'Client Retention', value: '91%', change: '+24%', positive: true },
      { label: 'Response Time', value: '15s', change: '-28%', positive: true },
    ],
    channels: [
      { channel: 'Case Updates', percentage: 95 },
      { channel: 'Document Requests', percentage: 92 },
      { channel: 'Court Date Reminders', percentage: 89 },
      { channel: 'Consultation Scheduling', percentage: 87 },
    ],
    insight: 'Detected client anxiety about case timeline. Suggested automated status updates and attorney callback scheduling.'
  },
  Logistics: {
    badge: 'Delivery Analytics',
    title: 'Real-Time Shipment Performance',
    subtitle: 'Dashboard',
    description: 'Track delivery success rates, customer satisfaction, and response times with comprehensive logistics analytics',
    metrics: [
      { label: 'On-Time Deliveries', value: '96%', change: '+15%', positive: true },
      { label: 'Customer Satisfaction', value: '4.8/5', change: '+0.4', positive: true },
      { label: 'Avg Notification Time', value: '2.1s', change: '-18%', positive: true },
    ],
    channels: [
      { channel: 'Delivery Updates', percentage: 94 },
      { channel: 'Exception Alerts', percentage: 89 },
      { channel: 'ETA Notifications', percentage: 91 },
      { channel: 'Proof of Delivery', percentage: 87 },
    ],
    insight: 'Detected delivery delay pattern on Route 42. Suggested proactive customer notifications and alternative routing.'
  },
  'Real Estate': {
    badge: 'Lead Analytics',
    title: 'Real-Time Lead Performance',
    subtitle: 'Dashboard',
    description: 'Track showing requests, lead conversions, and response times with comprehensive real estate analytics',
    metrics: [
      { label: 'Lead Response Rate', value: '98%', change: '+25%', positive: true },
      { label: 'Showing Conversion', value: '43%', change: '+19%', positive: true },
      { label: 'Lead Response Time', value: '8s', change: '-31%', positive: true },
    ],
    channels: [
      { channel: 'Property Inquiries', percentage: 96 },
      { channel: 'Showing Requests', percentage: 91 },
      { channel: 'Offer Notifications', percentage: 88 },
      { channel: 'Open House RSVPs', percentage: 84 },
    ],
    insight: 'Detected high interest in waterfront properties. Suggested automated alerts for new waterfront listings.'
  }
};

export default function Dashboard({ industry }: DashboardProps = {}) {
  const content = industry ? dashboardContent[industry] : {
    badge: 'Analytics & Insights',
    title: 'Real-Time Performance',
    subtitle: 'Dashboard',
    description: 'Track performance, coach your team, and measure ROI with comprehensive analytics',
    metrics: [
      { label: 'Active Campaigns', value: '24', change: '+12%', positive: true },
      { label: 'Conversion Rate', value: '47.3%', change: '+8.2%', positive: true },
      { label: 'Avg Response Time', value: '1.2s', change: '-15%', positive: true },
    ],
    channels: [
      { channel: 'Voice Calls', percentage: 85 },
      { channel: 'SMS', percentage: 72 },
      { channel: 'Email', percentage: 68 },
      { channel: 'Document AI', percentage: 91 },
    ],
    insight: 'Detected frustration in last call. Suggested transfer to human agent.'
  };

  return (
    <section className="relative py-32 px-6 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.15)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6 animate-fadeInUp">
            <div className="px-6 py-3 bg-gradient-to-r from-purple-500/10 to-orange-500/10 border-2 border-purple-500/20 rounded-full shadow-[0_4px_20px_rgba(139,92,246,0.1)]">
              <span className="text-sm font-bold bg-gradient-to-r from-purple-600 to-orange-600 text-transparent bg-clip-text uppercase tracking-widest">
                {content.badge}
              </span>
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight leading-[1.1] animate-fadeInUp">
            {content.title}{' '}
            <span className="bg-gradient-to-r from-purple-600 to-orange-600 text-transparent bg-clip-text">
              {content.subtitle}
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-wide font-light animate-fadeInUp">
            {content.description}
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {content.metrics.map((metric, index) => (
            <MetricCard
              key={index}
              label={metric.label}
              value={metric.value}
              change={metric.change}
              positive={metric.positive}
              color={index % 2 === 0 ? 'purple' : 'orange'}
            />
          ))}
        </div>

        {/* Dashboard Visualization */}
        <div className="mb-16 p-10 bg-white border-2 border-gray-200 rounded-3xl shadow-[0_20px_70px_rgba(139,92,246,0.08)] hover:shadow-[0_25px_90px_rgba(139,92,246,0.12)] transition-all duration-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Channel Performance */}
            <div className="relative">
              <div className="absolute -top-3 left-6">
                <div className="px-5 py-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold rounded-full shadow-lg">
                  Channel Analytics
                </div>
              </div>
              <div className="p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-100 rounded-2xl">
                <div className="space-y-6 mt-4">
                  {content.channels.map((item, index) => (
                    <ChannelBar 
                      key={index}
                      channel={item.channel} 
                      percentage={item.percentage} 
                      color={index % 2 === 0 ? 'purple' : 'orange'} 
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Agent Performance */}
            <div className="relative">
              <div className="absolute -top-3 left-6">
                <div className="px-4 py-1.5 bg-gradient-to-r from-orange-600 to-orange-700 text-white text-xs font-bold rounded-full shadow-lg">
                  Sentiment Analysis
                </div>
              </div>
              <div className="p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-2xl">
                <div className="space-y-5 mt-4">
                  <SentimentBar label="Positive" percentage={62} color="green" />
                  <SentimentBar label="Neutral" percentage={31} color="gray" />
                  <SentimentBar label="Negative" percentage={7} color="red" />
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-purple-50 to-orange-50 rounded-xl border border-purple-200/50">
                  <div className="text-xs text-gray-500 mb-2 font-bold uppercase tracking-wider">Latest AI Insight</div>
                  <div className="text-gray-900 text-sm font-semibold">
                    "{content.insight}"
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardFeature
            title="Lead Scoring"
            description="AI-powered lead qualification and prioritization"
            color="purple"
          />
          <DashboardFeature
            title="Call Coaching"
            description="Real-time feedback and coaching for human agents"
            color="orange"
          />
          <DashboardFeature
            title="Transfer Analytics"
            description="Track when and why AI transfers to humans"
            color="purple"
          />
          <DashboardFeature
            title="A/B Testing"
            description="Optimize messaging and timing automatically"
            color="orange"
          />
        </div>

        {/* Call Center Coaching */}
        <div className="mt-16 p-10 bg-white border border-gray-200 rounded-3xl shadow-2xl relative overflow-hidden">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-orange-50/50 pointer-events-none" />
          
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-orange-100 border border-purple-200 rounded-full mb-6">
                <FontAwesomeIcon icon={faBullseye} className="text-xl text-purple-600" />
                <span className="text-sm font-black text-transparent bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text">
                  AI-Powered Coaching
                </span>
              </div>
              
              <h3 className="text-4xl font-black text-black mb-4">
                Human Call Center Coaching
              </h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AIVI doesn't just replace your call center—it makes it better. Our AI analyzes
                conversations in real-time, providing coaching tips and suggesting when to transfer
                to human agents for better outcomes.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700 font-medium pt-1">
                    Real-time sentiment analysis during calls
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700 font-medium pt-1">
                    Automated coaching suggestions for human agents
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700 font-medium pt-1">
                    Intelligent transfer logic based on conversation context
                  </span>
                </li>
                <li className="flex items-start gap-3 group">
                  <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={faCheck} className="text-white text-sm" />
                  </div>
                  <span className="text-gray-700 font-medium pt-1">
                    Performance dashboards showing close rates by agent
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <CoachingAlert
                type="success"
                message="Great job! Customer expressed interest in premium package."
                action="Suggested: Offer limited-time discount"
              />
              <CoachingAlert
                type="warning"
                message="Customer sounds frustrated with wait time."
                action="Recommended: Apologize and offer callback option"
              />
              <CoachingAlert
                type="info"
                message="Customer mentioned competitor pricing."
                action="Tip: Highlight unique value propositions"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  color: 'purple' | 'orange';
}

function MetricCard({ label, value, change, positive, color }: MetricCardProps) {
  const gradient = color === 'purple'
    ? 'from-purple-500 to-purple-600'
    : 'from-orange-500 to-orange-600';
  
  const glowColor = color === 'purple'
    ? 'shadow-purple-500/15'
    : 'shadow-orange-500/15';

  return (
    <div className={`group relative p-8 bg-white border-2 border-gray-200 rounded-2xl hover:border-gray-300 transition-all duration-500 hover:shadow-2xl ${glowColor} hover:-translate-y-2 card-hover`}>
      {/* Top gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${gradient} rounded-t-2xl transition-all duration-500 group-hover:h-2`} />
      
      <div className="text-gray-500 text-xs font-bold mb-3 uppercase tracking-widest">{label}</div>
      <div className={`text-5xl md:text-6xl font-black bg-gradient-to-r ${gradient} text-transparent bg-clip-text mb-3 tracking-tight`}>
        {value}
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-sm font-bold px-2.5 py-1 rounded-lg ${positive ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
          {change}
        </span>
        <span className="text-xs text-gray-400 font-semibold">vs last month</span>
      </div>
    </div>
  );
}

interface ChannelBarProps {
  channel: string;
  percentage: number;
  color: 'purple' | 'orange';
}

function ChannelBar({ channel, percentage, color }: ChannelBarProps) {
  const bgColor = color === 'purple' ? 'bg-purple-500' : 'bg-orange-500';
  const bgGradient = color === 'purple' 
    ? 'bg-gradient-to-r from-purple-500 to-purple-600' 
    : 'bg-gradient-to-r from-orange-500 to-orange-600';

  return (
    <div className="group">
      <div className="flex justify-between text-sm mb-3">
        <span className="text-gray-700 font-semibold group-hover:text-gray-900 transition-colors">{channel}</span>
        <span className="text-black font-bold">{percentage}%</span>
      </div>
      <div className="h-3 bg-gray-100 rounded-full overflow-hidden shadow-inner">
        <div
          className={`h-full ${bgGradient} rounded-full transition-all duration-700 ease-out shadow-lg`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface SentimentBarProps {
  label: string;
  percentage: number;
  color: 'green' | 'gray' | 'red';
}

function SentimentBar({ label, percentage, color }: SentimentBarProps) {
  const colorClasses = {
    green: 'bg-green-500',
    gray: 'bg-gray-400',
    red: 'bg-red-500',
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-600 font-medium">{label}</span>
        <span className="text-black font-bold">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface DashboardFeatureProps {
  title: string;
  description: string;
  color: 'purple' | 'orange';
}

function DashboardFeature({ title, description, color }: DashboardFeatureProps) {
  const gradient = color === 'purple'
    ? 'from-purple-500 to-purple-600'
    : 'from-orange-500 to-orange-600';
  
  const hoverBorder = color === 'purple' ? 'hover:border-purple-300' : 'hover:border-orange-300';

  return (
    <div className={`group relative p-6 bg-gradient-to-br from-gray-50 to-white border border-gray-200 ${hoverBorder} rounded-2xl transition-all duration-300 hover:shadow-lg`}>
      {/* Top gradient accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
      
      <div className="relative">
        <h4 className="text-lg font-black text-black mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-purple-600 group-hover:to-orange-600 transition-all duration-300">
          {title}
        </h4>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

interface CoachingAlertProps {
  type: 'success' | 'warning' | 'info';
  message: string;
  action: string;
}

function CoachingAlert({ type, message, action }: CoachingAlertProps) {
  const styles = {
    success: 'border-green-300 bg-gradient-to-br from-green-50 to-white',
    warning: 'border-orange-300 bg-gradient-to-br from-orange-50 to-white',
    info: 'border-purple-300 bg-gradient-to-br from-purple-50 to-white',
  };

  const iconColors = {
    success: 'text-green-600',
    warning: 'text-orange-600',
    info: 'text-purple-600',
  };
  
  const iconBg = {
    success: 'bg-green-100',
    warning: 'bg-orange-100',
    info: 'bg-purple-100',
  };
  
  const iconMap = {
    success: faCheck,
    warning: faExclamationTriangle,
    info: faInfoCircle,
  };

  return (
    <div className={`group p-5 border rounded-2xl ${styles[type]} hover:shadow-lg transition-all duration-300`}>
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-10 h-10 ${iconBg[type]} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
          <FontAwesomeIcon icon={iconMap[type]} className={`${iconColors[type]}`} />
        </div>
        <div className="flex-1">
          <div className="text-black font-black mb-1">{message}</div>
          <div className="text-sm text-gray-600 font-medium">{action}</div>
        </div>
      </div>
    </div>
  );
}
