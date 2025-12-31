export default function OurStory() {
  return (
    <section className="w-full py-12 sm:py-16 font-manrope">
      <div className="max-w-[900px] mx-auto text-center px-4">
        <h2 className="text-[32px] sm:text-[42px] md:text-[48px] leading-[1.1] font-normal text-[#1A1A1A] mb-4">
          Our Story
        </h2>
        <p className="text-[20px] sm:text-[24px] font-medium bg-gradient-to-r from-[#f84608] to-[#321ca3] bg-clip-text text-transparent mb-8 sm:mb-10">
          The $1.2 Million Problem (Discovered Twice)
        </p>
        <div className="space-y-6 text-[17px] sm:text-[18px] md:text-[19px] leading-[1.7] text-[#666666] text-left">
          <p>
            In 2023, Giorgio and Olly were solving the same problem from opposite sides of the industry—without knowing it.
          </p>
          <p>
            Giorgio had just finished scaling Amazon Connect to 100,000 agents across 22 countries and building Five9&apos;s global expansion. Everywhere he looked, he saw the same pattern: companies spending $50-100 per lead were losing 55% of them to slow follow-up.
          </p>
          <p>
            At the same time, Olly was running a digital agency managing $100M in annual ad spend. His clients kept blaming &quot;bad lead quality&quot;—but the leads were fine. The problem was simple: by the time they called back 23 minutes later, competitors had already gotten there.
          </p>
          <p>
            When we met through a mutual contact center industry connection, we realized we were diagnosing the exact same $1.2M problem:
          </p>

          <div className="bg-[#f8f8f8] rounded-xl p-6 my-8 border border-[#e5e5e5]">
            <ul className="space-y-2 text-[16px] sm:text-[17px]">
              <li className="flex items-center gap-2">
                <span className="text-[#f84608]">•</span>
                <span>$1M/month on leads</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#f84608]">•</span>
                <span>55% never contacted (23-minute response time)</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#f84608]">•</span>
                <span className="font-semibold text-[#1A1A1A]">$550K wasted every single month</span>
              </li>
            </ul>
          </div>

          <p>
            Giorgio had the contact center AI expertise. Olly had the lead generation data. Together, we had the complete picture.
          </p>

          <p>
            Existing AI tools didn&apos;t solve this. They were either too generic (built for every industry, mastered none),
            single-vendor (locked to OpenAI, failed when it went down), voice-only (ignored SMS and email channels),
            or had no learning engine (static, didn&apos;t optimize).
          </p>
          <p>
            So we built AIVI—the AI Revenue Engine specifically for lead generation companies. Multi-channel (SMS, voice, email),
            AI-agnostic (routes to best provider automatically), with a learning engine that optimizes channel, timing,
            messaging, and routing continuously.
          </p>

          <div className="bg-gradient-to-r from-[#f84608]/10 to-[#321ca3]/10 rounded-xl p-6 my-8 border border-[#f84608]/20">
            <p className="text-[16px] sm:text-[17px] font-semibold text-[#1A1A1A] mb-3">The results speak for themselves:</p>
            <ul className="space-y-2 text-[16px] sm:text-[17px]">
              <li className="flex items-center gap-2">
                <span className="text-[#10b981]">✓</span>
                <span>SimplePath Financial: 50% → 73% contact rate</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10b981]">✓</span>
                <span>LoanPro: 2X close rate improvement</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#10b981]">✓</span>
                <span>Meridian: +$2.1M annually</span>
              </li>
            </ul>
          </div>

          <p>
            Today, we&apos;re processing 1.2M+ conversations and recovering millions in lost revenue for companies
            that refuse to waste another $50 lead.
          </p>
          <p className="text-[19px] sm:text-[20px] font-medium text-[#1A1A1A] text-center mt-8">
            This is just the beginning.
          </p>
        </div>
      </div>
    </section>
  );
}
