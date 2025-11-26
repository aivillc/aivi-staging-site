'use client';

import { useState } from 'react';

const metrics = [
  {
    id: 'leads',
    label: 'Qualified Leads',
    value: '8,432',
    change: '+18%',
    trend: 'up',
    color: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
  },
  {
    id: 'response',
    label: 'Response Rate',
    value: '42.8%',
    change: '+12.3%',
    trend: 'up',
    color: 'bg-gradient-to-br from-blue-400 to-blue-600',
  },
  {
    id: 'contacts',
    label: 'Active Contacts',
    value: '275M+',
    change: '+2.1M',
    trend: 'up',
    color: 'bg-gradient-to-br from-purple-400 to-purple-600',
  },
  {
    id: 'meetings',
    label: 'Meetings Booked',
    value: '1,847',
    change: '+31%',
    trend: 'up',
    color: 'bg-gradient-to-br from-amber-400 to-amber-600',
  },
];

const recentLeads = [
  { company: 'Acme Corp', leads: '156 leads', status: 'Qualified', rep: 'Sarah Johnson', date: '2 hours ago' },
  { company: 'TechStart Inc', leads: '89 leads', status: 'Contacted', rep: 'Mike Chen', date: '5 hours ago' },
  { company: 'Global Solutions', leads: '234 leads', status: 'Engaged', rep: 'Emma Davis', date: '1 day ago' },
  { company: 'Innovation Labs', leads: '127 leads', status: 'Qualified', rep: 'James Wilson', date: '1 day ago' },
  { company: 'Future Systems', leads: '98 leads', status: 'Contacted', rep: 'Lisa Anderson', date: '2 days ago' },
];

const performanceData = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 72 },
  { month: 'Mar', value: 68 },
  { month: 'Apr', value: 85 },
  { month: 'May', value: 92 },
  { month: 'Jun', value: 88 },
];

export default function AIVIMetrics() {
  const [hoveredMetric, setHoveredMetric] = useState<string | null>(null);

  const maxValue = Math.max(...performanceData.map(d => d.value));

  return (
    <section className="w-full bg-[#E8E5E0] px-3 sm:px-6 py-6">
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto bg-white rounded-2xl sm:rounded-3xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 animate-[fadeInUp_0.6s_ease-out]">
          <h2 className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] font-normal text-[#000000] mb-3 sm:mb-4 px-2">
            Lead Engagement Performance
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-[1.6] text-[#666666] max-w-[700px] mx-auto px-2">
            Track your lead performance success with real-time metrics and insights
          </p>
        </div>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              onMouseEnter={() => setHoveredMetric(metric.id)}
              onMouseLeave={() => setHoveredMetric(null)}
              className="relative bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer overflow-hidden group animate-[fadeInUp_0.6s_ease-out]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Animated background gradient */}
              <div className={`absolute inset-0 ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${metric.color} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300`}>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                  <span className="flex items-center gap-1 text-xs sm:text-sm font-semibold text-emerald-600">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                    {metric.change}
                  </span>
                </div>
                <div className="text-[11px] sm:text-[13px] font-medium text-[#666666] uppercase tracking-wider mb-2">
                  {metric.label}
                </div>
                <div className="text-[28px] sm:text-[36px] font-bold text-[#000000] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {metric.value}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts and Tables Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Performance Chart */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#000000] mb-4 sm:mb-6">
              Lead Performance Trend
            </h3>
            <div className="h-64 mb-8">
              <div className="flex items-end justify-between gap-4 h-full">
                {performanceData.map((data, index) => (
                  <div key={data.month} className="flex-1 flex flex-col items-center justify-end gap-3 h-full group">
                    <div className="relative w-full flex items-end justify-center" style={{ height: `${(data.value / maxValue) * 100}%` }}>
                      <div
                        className="w-full bg-gradient-to-t from-[#321ca3] to-[#5a3fd6] rounded-t-lg transition-all duration-500 hover:from-[#f84608] hover:to-[#ff6b35] cursor-pointer relative overflow-hidden group-hover:shadow-lg h-full"
                      >
                        {/* Animated shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                        {/* Value tooltip */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#000000] text-white px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                          {data.value}%
                        </div>
                      </div>
                    </div>
                    <span className="text-[13px] font-semibold text-[#666666] group-hover:text-[#000000] transition-colors">
                      {data.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
            <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#000000] mb-4 sm:mb-6">
              Recent Activity
            </h3>
            <div className="space-y-3">
              {recentLeads.slice(0, 5).map((lead, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-all duration-300 cursor-pointer group border border-transparent hover:border-gray-200 hover:shadow-md animate-[fadeInLeft_0.5s_ease-out]"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-white font-bold text-sm">
                      {lead.company.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[14px] text-[#000000] truncate">
                      {lead.company}
                    </div>
                    <div className="text-[12px] text-[#666666]">
                      {lead.rep} • {lead.date}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-[14px] text-emerald-600">
                      {lead.leads}
                    </div>
                    <div className={`text-[11px] px-2 py-0.5 rounded-full inline-block ${
                      lead.status === 'Qualified'
                        ? 'bg-emerald-100 text-emerald-700'
                        : lead.status === 'Engaged'
                        ? 'bg-amber-100 text-amber-700'
                        : 'bg-blue-100 text-blue-700'
                    }`}>
                      {lead.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Table */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border-2 border-gray-100 hover:border-gray-200 transition-all duration-300 hover:shadow-xl">
          <h3 className="text-[20px] sm:text-[24px] font-semibold text-[#000000] mb-4 sm:mb-6">
            Lead Pipeline
          </h3>
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 text-[13px] font-semibold text-[#666666] uppercase tracking-wider">
                    Company
                  </th>
                  <th className="text-left py-4 px-4 text-[13px] font-semibold text-[#666666] uppercase tracking-wider">
                    Leads Generated
                  </th>
                  <th className="text-left py-4 px-4 text-[13px] font-semibold text-[#666666] uppercase tracking-wider">
                    Status
                  </th>
                  <th className="text-left py-4 px-4 text-[13px] font-semibold text-[#666666] uppercase tracking-wider">
                    Rep
                  </th>
                  <th className="text-left py-4 px-4 text-[13px] font-semibold text-[#666666] uppercase tracking-wider">
                    Last Activity
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-100 hover:bg-white transition-all duration-300 group cursor-pointer animate-[fadeInUp_0.5s_ease-out]"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <span className="text-white font-bold text-xs">
                            {lead.company.charAt(0)}
                          </span>
                        </div>
                        <span className="font-semibold text-[14px] text-[#000000] group-hover:text-blue-600 transition-colors">
                          {lead.company}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-bold text-[15px] text-emerald-600">
                        {lead.leads}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-[12px] font-semibold inline-block ${
                        lead.status === 'Qualified'
                          ? 'bg-emerald-100 text-emerald-700'
                          : lead.status === 'Engaged'
                          ? 'bg-amber-100 text-amber-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[14px] text-[#666666]">
                      {lead.rep}
                    </td>
                    <td className="py-4 px-4 text-[13px] text-[#999999]">
                      {lead.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
