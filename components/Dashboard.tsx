export default function Dashboard() {
  return (
    <section className="relative py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">
            Real-Time{' '}
            <span className="bg-gradient-to-r from-purple-500 to-orange-500 text-transparent bg-clip-text">
              Analytics & Insights
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Track performance, coach your team, and measure ROI with comprehensive dashboards
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16 p-8 bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              label="Active Campaigns"
              value="24"
              change="+12%"
              positive
              color="purple"
            />
            <MetricCard
              label="Conversion Rate"
              value="47.3%"
              change="+8.2%"
              positive
              color="orange"
            />
            <MetricCard
              label="Avg Response Time"
              value="1.2s"
              change="-15%"
              positive
              color="purple"
            />
          </div>

          {/* Mock Dashboard Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Channel Performance */}
            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl">
              <h4 className="text-lg font-black text-black mb-4">
                Channel Performance
              </h4>
              <div className="space-y-4">
                <ChannelBar channel="Voice Calls" percentage={85} color="purple" />
                <ChannelBar channel="SMS" percentage={72} color="orange" />
                <ChannelBar channel="Email" percentage={68} color="purple" />
                <ChannelBar channel="Document AI" percentage={91} color="orange" />
              </div>
            </div>

            {/* Agent Performance */}
            <div className="p-6 bg-white border-2 border-gray-200 rounded-xl">
              <h4 className="text-lg font-black text-black mb-4">
                AI Agent Sentiment
              </h4>
              <div className="space-y-4">
                <SentimentBar label="Positive" percentage={62} color="green" />
                <SentimentBar label="Neutral" percentage={31} color="gray" />
                <SentimentBar label="Negative" percentage={7} color="red" />
              </div>
              <div className="mt-6 p-4 bg-purple-50 rounded-lg border-2 border-purple-200">
                <div className="text-sm text-gray-600 mb-2 font-medium">Latest Insight</div>
                <div className="text-black text-sm font-medium">
                  "Detected frustration in last call. Suggested transfer to human agent."
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
        <div className="mt-16 p-10 bg-gradient-to-br from-purple-50 to-orange-50 border-2 border-purple-300 rounded-3xl shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black text-black mb-4">
                Human Call Center Coaching
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                AIVI doesn't just replace your call center—it makes it better. Our AI analyzes
                conversations in real-time, providing coaching tips and suggesting when to transfer
                to human agents for better outcomes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl font-black">✓</span>
                  <span className="text-gray-700 font-medium">
                    Real-time sentiment analysis during calls
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl font-black">✓</span>
                  <span className="text-gray-700 font-medium">
                    Automated coaching suggestions for human agents
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl font-black">✓</span>
                  <span className="text-gray-700 font-medium">
                    Intelligent transfer logic based on conversation context
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-500 text-xl font-black">✓</span>
                  <span className="text-gray-700 font-medium">
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
    ? 'from-purple-500 to-purple-700'
    : 'from-orange-500 to-orange-700';

  return (
    <div className="relative p-6 bg-white border-2 border-gray-200 rounded-xl hover:shadow-lg transition-all">
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${gradient} rounded-l-xl`} />
      <div className="pl-3">
        <div className="text-gray-500 text-sm font-medium mb-1">{label}</div>
        <div className="text-4xl font-black text-black mb-1">{value}</div>
        <div className={`text-sm font-bold ${positive ? 'text-green-600' : 'text-red-600'}`}>
          {change} vs last month
        </div>
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

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-600 font-medium">{channel}</span>
        <span className="text-black font-bold">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full ${bgColor} rounded-full transition-all duration-500`}
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
  const borderColor = color === 'purple' ? 'border-purple-300' : 'border-orange-300';
  const hoverBorder = color === 'purple' ? 'hover:border-purple-500' : 'hover:border-orange-500';
  const gradient = color === 'purple'
    ? 'from-purple-500 to-purple-700'
    : 'from-orange-500 to-orange-700';

  return (
    <div className={`relative p-6 bg-white border-2 ${borderColor} ${hoverBorder} rounded-xl transition-all hover:shadow-lg`}>
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${gradient} rounded-l-xl`} />
      <h4 className="text-lg font-black text-black mb-2 pl-3">{title}</h4>
      <p className="text-sm text-gray-600 pl-3">{description}</p>
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
    success: 'border-green-400 bg-green-50',
    warning: 'border-orange-400 bg-orange-50',
    info: 'border-purple-400 bg-purple-50',
  };

  const textColors = {
    success: 'text-green-600',
    warning: 'text-orange-600',
    info: 'text-purple-600',
  };

  return (
    <div className={`p-4 border-2 rounded-xl ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <span className={`text-2xl font-black ${textColors[type]}`}>
          {type === 'success' ? '✓' : type === 'warning' ? '⚠' : 'ℹ'}
        </span>
        <div className="flex-1">
          <div className="text-black font-bold mb-1">{message}</div>
          <div className="text-sm text-gray-600 font-medium">{action}</div>
        </div>
      </div>
    </div>
  );
}
