'use client';

import { useState } from 'react';

const metrics = [
  {
    id: 'leads',
    label: 'Qualified Leads',
    value: '8,432',
    change: '+18%',
    trend: 'up',
    color: 'orange',
  },
  {
    id: 'response',
    label: 'Response Rate',
    value: '42.8%',
    change: '+12.3%',
    trend: 'up',
    color: 'purple',
  },
  {
    id: 'contacts',
    label: 'Active Contacts',
    value: '275M+',
    change: '+2.1M',
    trend: 'up',
    color: 'orange',
  },
  {
    id: 'meetings',
    label: 'Meetings Booked',
    value: '1,847',
    change: '+31%',
    trend: 'up',
    color: 'purple',
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
    <section
      className="w-full bg-[#E8E5E0] px-3 sm:px-6 py-6"
      aria-labelledby="metrics-heading"
    >
      <div className="w-full max-w-[calc(100%-24px)] sm:max-w-[calc(100%-48px)] mx-auto bg-white/80 backdrop-blur-sm rounded-2xl sm:rounded-3xl border border-[#321ca3]/10 p-6 sm:p-8 md:p-12 lg:p-16">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="metrics-heading"
            className="text-[28px] sm:text-[36px] md:text-[48px] leading-[1.2] font-normal text-[#000000] mb-3 sm:mb-4 px-2"
          >
            Real-Time Performance Dashboard
          </h2>
          <p className="text-[15px] sm:text-[17px] leading-[1.6] text-[#000000] max-w-[700px] mx-auto px-2">
            Track lead engagement success with real-time metrics and actionable insights
          </p>
        </div>

        {/* KPI Cards Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12"
          role="list"
          aria-label="Key performance indicators"
        >
          {metrics.map((metric) => (
            <article
              key={metric.id}
              role="listitem"
              onMouseEnter={() => setHoveredMetric(metric.id)}
              onMouseLeave={() => setHoveredMetric(null)}
              className={`relative rounded-xl sm:rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 cursor-pointer border bg-white hover:bg-[#FAFAFA] ${
                metric.color === 'orange'
                  ? 'border-[#f84608]/20 hover:border-[#f84608]/40'
                  : 'border-[#321ca3]/20 hover:border-[#321ca3]/40'
              }`}
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center ${
                  metric.color === 'orange'
                    ? 'bg-[#f84608]'
                    : 'bg-[#321ca3]'
                }`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <span className={`flex items-center gap-1 text-xs sm:text-sm font-semibold ${
                  metric.color === 'orange' ? 'text-[#f84608]' : 'text-[#321ca3]'
                }`}>
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 9.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 7.414V15a1 1 0 11-2 0V7.414L6.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                  <span aria-label={`Change: ${metric.change}`}>{metric.change}</span>
                </span>
              </div>
              <div className="text-[11px] sm:text-[13px] font-medium uppercase tracking-wider mb-2 text-black/70">
                {metric.label}
              </div>
              <div className={`text-[28px] sm:text-[36px] font-bold ${
                metric.color === 'orange' ? 'text-[#f84608]' : 'text-[#321ca3]'
              }`}>
                {metric.value}
              </div>
            </article>
          ))}
        </div>

        {/* Charts and Tables Grid */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Performance Chart */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#321ca3]/10">
            <h3 className="text-[20px] sm:text-[24px] font-semibold text-black mb-4 sm:mb-6">
              Lead Performance Trend
            </h3>
            <div className="h-64 mb-8" role="img" aria-label="Bar chart showing lead performance from January to June">
              <div className="flex items-end justify-between gap-4 h-full">
                {performanceData.map((data, index) => (
                  <div key={data.month} className="flex-1 flex flex-col items-center justify-end gap-3 h-full group">
                    <div className="relative w-full flex items-end justify-center" style={{ height: `${(data.value / maxValue) * 100}%` }}>
                      <div
                        className={`w-full rounded-t-lg transition-all duration-300 cursor-pointer h-full ${
                          index % 2 === 0
                            ? 'bg-[#f84608] hover:bg-[#f84608]/80'
                            : 'bg-[#321ca3] hover:bg-[#321ca3]/80'
                        }`}
                        role="graphics-symbol"
                        aria-label={`${data.month}: ${data.value}%`}
                      >
                        {/* Value tooltip */}
                        <div className={`absolute -top-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap text-white ${
                          index % 2 === 0 ? 'bg-[#f84608]' : 'bg-[#321ca3]'
                        }`}>
                          {data.value}%
                        </div>
                      </div>
                    </div>
                    <span className="text-[13px] font-semibold text-[#321ca3]/60 group-hover:text-[#321ca3] transition-colors">
                      {data.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Activity Feed */}
          <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#f84608]/10">
            <h3 className="text-[20px] sm:text-[24px] font-semibold text-black mb-4 sm:mb-6">
              Recent Activity
            </h3>
            <ul className="space-y-3" aria-label="Recent lead activity">
              {recentLeads.slice(0, 5).map((lead, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/50 transition-all duration-300 cursor-pointer group border border-transparent hover:border-[#f84608]/20"
                >
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    index % 2 === 0 ? 'bg-[#f84608]' : 'bg-[#321ca3]'
                  }`} aria-hidden="true">
                    <span className="text-white font-bold text-sm">
                      {lead.company.charAt(0)}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-[14px] text-black truncate">
                      {lead.company}
                    </div>
                    <div className="text-[12px] text-[#321ca3]/50">
                      {lead.rep} &bull; {lead.date}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="font-bold text-[14px] text-[#f84608]">
                      {lead.leads}
                    </div>
                    <div className={`text-[11px] px-2 py-0.5 rounded-full inline-block ${
                      lead.status === 'Qualified'
                        ? 'bg-[#321ca3]/10 text-[#321ca3]'
                        : lead.status === 'Engaged'
                        ? 'bg-[#f84608]/10 text-[#f84608]'
                        : 'bg-gradient-to-r from-[#321ca3]/10 to-[#f84608]/10 text-[#321ca3]'
                    }`}>
                      {lead.status}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Detailed Table */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-[#321ca3]/10">
          <h3 className="text-[20px] sm:text-[24px] font-semibold text-black mb-4 sm:mb-6">
            Lead Pipeline
          </h3>
          <div className="overflow-x-auto -mx-2 sm:mx-0">
            <table className="w-full" aria-label="Lead pipeline details">
              <thead>
                <tr className="border-b-2 border-[#321ca3]/20">
                  <th scope="col" className="text-left py-4 px-4 text-[13px] font-semibold text-[#321ca3]/70 uppercase tracking-wider">
                    Company
                  </th>
                  <th scope="col" className="text-left py-4 px-4 text-[13px] font-semibold text-[#321ca3]/70 uppercase tracking-wider">
                    Leads Generated
                  </th>
                  <th scope="col" className="text-left py-4 px-4 text-[13px] font-semibold text-[#321ca3]/70 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="text-left py-4 px-4 text-[13px] font-semibold text-[#321ca3]/70 uppercase tracking-wider">
                    Rep
                  </th>
                  <th scope="col" className="text-left py-4 px-4 text-[13px] font-semibold text-[#321ca3]/70 uppercase tracking-wider">
                    Last Activity
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentLeads.map((lead, index) => (
                  <tr
                    key={index}
                    className="border-b border-[#321ca3]/10 hover:bg-white/50 transition-all duration-300 group cursor-pointer"
                  >
                    <td className="py-4 px-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${
                          index % 2 === 0 ? 'bg-[#f84608]' : 'bg-[#321ca3]'
                        }`} aria-hidden="true">
                          <span className="text-white font-bold text-xs">
                            {lead.company.charAt(0)}
                          </span>
                        </div>
                        <span className="font-semibold text-[14px] text-black group-hover:text-[#f84608] transition-colors">
                          {lead.company}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span className="font-bold text-[15px] text-[#f84608]">
                        {lead.leads}
                      </span>
                    </td>
                    <td className="py-4 px-4">
                      <span className={`px-3 py-1 rounded-full text-[12px] font-semibold inline-block ${
                        lead.status === 'Qualified'
                          ? 'bg-[#321ca3]/10 text-[#321ca3]'
                          : lead.status === 'Engaged'
                          ? 'bg-[#f84608]/10 text-[#f84608]'
                          : 'bg-gradient-to-r from-[#321ca3]/10 to-[#f84608]/10 text-[#321ca3]'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-[14px] text-[#321ca3]/60">
                      {lead.rep}
                    </td>
                    <td className="py-4 px-4 text-[13px] text-[#321ca3]/40">
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
