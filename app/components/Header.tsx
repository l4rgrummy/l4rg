"use client";
import type React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Users,
  Target,
  Phone,
  MessageSquare,
  UserCheck,
  MapPin,
  Calendar,
  Mail,
  TrendingUp,
  Building2,
  Globe,
  Handshake,
  Database,
  Search,
  BarChart3,
  Briefcase,
  TrendingDown,
  Monitor,
  Shield,
  Brain,
  Cloud,
  CreditCard,
  Settings,
  Folder,
  HeadphonesIcon,
  Factory,
  Heart,
  Truck,
  Zap,
  Smartphone,
  Server,
  BookOpen,
  Mic,
  FileText,
  BookmarkCheck,
  Download,
  Play,
  Newspaper,
  FileDown,
} from "lucide-react";

// Custom gradient icon wrapper component
function GradientIcon({
  icon: Icon,
  gradient,
  className = "h-6 w-6",
}: {
  icon: React.ComponentType<{ className?: string }>;
  gradient: string;
  className?: string;
}) {
  return (
    <div
      className={`${className} rounded-lg flex items-center justify-center ${gradient}`}
    >
      <Icon className="h-4 w-4 text-white" />
    </div>
  );
}

function ListItem({
  title,
  children,
  href,
  icon: Icon,
  gradient,
  ...props
}: React.ComponentPropsWithoutRef<"div"> & {
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  gradient?: string;
}) {
  return (
    <div {...props} className="list-none">
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 focus:text-slate-900"
        >
          <div className="flex items-center gap-3 text-sm font-medium leading-none text-slate-900">
            {Icon && gradient && (
              <GradientIcon icon={Icon} gradient={gradient} />
            )}
            <div>
              <div className="font-medium">{title}</div>
              <p className="line-clamp-2 text-xs leading-snug text-slate-600 mt-1">
                {children}
              </p>
            </div>
          </div>
        </Link>
      </NavigationMenuLink>
    </div>
  );
}

export default function Header() {
  return (
    <header
      aria-label="Primary"
      className="bg-white sticky top-0 z-50 border-b border-gray-200"
    >
      <div className="container nav">
        <Link
          href="/"
          aria-label="L4RG Home"
          className="brand flex items-center gap-2 font-black text-slate-900"
        >
          <Image
            src="https://d3euc6irt3la1j.cloudfront.net/l4rg-digital-plus-logo.webp"
            alt="L4RG Digital Plus logo"
            width={120}
            height={32}
            priority
          />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden md:flex items-center h-full [&_ul]:list-none [&_li]:list-none"
        >
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  hideChevron
                  className={`${navigationMenuTriggerStyle()} px-3 py-2`}
                >
                  Sales Development
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-1 py-4 px-2 w-auto max-w-[900px] min-w-[700px] [&_ul]:list-none [&_li]:list-none">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                        Lead Generation
                      </h4>
                      <ListItem
                        href="/sales-development/b2b-lead-generation"
                        title="B2B Lead Generation"
                        icon={Target}
                        gradient="bg-gradient-to-br from-purple-500 to-purple-700"
                      >
                        Qualified business sales leads
                      </ListItem>
                      <ListItem
                        href="/sales-development/account-based-marketing"
                        title="Account-based Marketing"
                        icon={Building2}
                        gradient="bg-gradient-to-br from-blue-500 to-blue-700"
                      >
                        Targeted enterprise client acquisition
                      </ListItem>
                      <ListItem
                        href="/sales-development/outbound-lead-generation"
                        title="Outbound Lead Generation"
                        icon={TrendingUp}
                        gradient="bg-gradient-to-br from-green-500 to-green-700"
                      >
                        Proactive prospect outreach
                      </ListItem>
                      <ListItem
                        href="/sales-development/linkedin-lead-generation"
                        title="LinkedIn Lead Generation"
                        icon={Users}
                        gradient="bg-gradient-to-br from-indigo-500 to-indigo-700"
                      >
                        Social selling and networking
                      </ListItem>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                        SDR Services
                      </h4>
                      <ListItem
                        href="/sales-development/outsourced-sdr"
                        title="Outsourced SDR"
                        icon={UserCheck}
                        gradient="bg-gradient-to-br from-teal-500 to-teal-700"
                      >
                        Drive more pipeline, less overhead
                      </ListItem>
                      <ListItem
                        href="/sales-development/inbound-sdr"
                        title="Inbound SDR"
                        icon={TrendingDown}
                        gradient="bg-gradient-to-br from-pink-500 to-pink-700"
                      >
                        Trained staff for responsive lead management
                      </ListItem>
                      <ListItem
                        href="/sales-development/local-sdr"
                        title="Local SDR"
                        icon={MapPin}
                        gradient="bg-gradient-to-br from-orange-500 to-orange-700"
                      >
                        Custom research and data enrichment
                      </ListItem>
                      <ListItem
                        href="/sales-development/b2b-appointment-setting"
                        title="B2B Appointment Setting"
                        icon={Calendar}
                        gradient="bg-gradient-to-br from-cyan-500 to-cyan-700"
                      >
                        Qualified meetings with prospects
                      </ListItem>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                        Outreach Methods
                      </h4>
                      <ListItem
                        href="/sales-development/cold-emailing"
                        title="Cold Emailing"
                        icon={Mail}
                        gradient="bg-gradient-to-br from-red-500 to-red-700"
                      >
                        Personalized email campaigns
                      </ListItem>
                      <ListItem
                        href="/sales-development/cold-calling"
                        title="Cold Calling"
                        icon={Phone}
                        gradient="bg-gradient-to-br from-emerald-500 to-emerald-700"
                      >
                        Direct phone prospecting
                      </ListItem>
                      <ListItem
                        href="/sales-development/ai-sales-platform"
                        title="AI Sales Platform"
                        icon={Brain}
                        gradient="bg-gradient-to-br from-violet-500 to-violet-700"
                      >
                        Automated sales processes
                      </ListItem>
                      <ListItem
                        href="/sales-development/b2b-sales-training"
                        title="B2B Sales Training"
                        icon={BookOpen}
                        gradient="bg-gradient-to-br from-amber-500 to-amber-700"
                      >
                        Skill development programs
                      </ListItem>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  hideChevron
                  className={`${navigationMenuTriggerStyle()} px-3 py-2`}
                >
                  Go-To-Market
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 w-auto max-w-[900px] min-w-[700px] [&_ul]:list-none [&_li]:list-none">
                    <div className="space-y-2">
                      <ListItem
                        href="/go-to-market/gtm-setup"
                        title="GTM Set Up"
                        icon={Settings}
                        gradient="bg-gradient-to-br from-slate-500 to-slate-700"
                      >
                        Tailored go-to-market plans and strategy
                      </ListItem>
                      <ListItem
                        href="/go-to-market/scaled-outbound"
                        title="Scaled Outbound"
                        icon={TrendingUp}
                        gradient="bg-gradient-to-br from-green-500 to-green-700"
                      >
                        Advanced outbound systems for growth
                      </ListItem>
                      <ListItem
                        href="/go-to-market/enterprise-teams"
                        title="Enterprise Teams"
                        icon={Building2}
                        gradient="bg-gradient-to-br from-blue-500 to-blue-700"
                      >
                        Custom solutions for large teams
                      </ListItem>
                      <ListItem
                        href="/go-to-market/event-marketing"
                        title="Event Marketing Services"
                        icon={Calendar}
                        gradient="bg-gradient-to-br from-purple-500 to-purple-700"
                      >
                        Boost event turnouts and conversion
                      </ListItem>
                    </div>
                    <div className="space-y-2">
                      <ListItem
                        href="/go-to-market/webinar-marketing"
                        title="Webinar Marketing"
                        icon={Monitor}
                        gradient="bg-gradient-to-br from-teal-500 to-teal-700"
                      >
                        Drive online events engagement
                      </ListItem>
                      <ListItem
                        href="/go-to-market/cross-border-marketing"
                        title="Cross-border Marketing"
                        icon={Globe}
                        gradient="bg-gradient-to-br from-orange-500 to-orange-700"
                      >
                        Global market expansion
                      </ListItem>
                      <ListItem
                        href="/go-to-market/additional-channels"
                        title="Additional Channels"
                        icon={MessageSquare}
                        gradient="bg-gradient-to-br from-pink-500 to-pink-700"
                      >
                        Physical mail and syndicated content
                      </ListItem>
                      <ListItem
                        href="/go-to-market/sales-outsourcing"
                        title="Sales Outsourcing Service"
                        icon={Handshake}
                        gradient="bg-gradient-to-br from-yellow-500 to-yellow-700"
                      >
                        Complete sales process management
                      </ListItem>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  hideChevron
                  className={`${navigationMenuTriggerStyle()} px-3 py-2`}
                >
                  Data Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 w-auto max-w-[900px] min-w-[700px] [&_ul]:list-none [&_li]:list-none">
                    <div className="space-y-2">
                      <ListItem
                        href="/data-solutions/b2b-data"
                        title="B2B Data"
                        icon={Database}
                        gradient="bg-gradient-to-br from-blue-500 to-blue-700"
                      >
                        High-quality business data for prospecting
                      </ListItem>
                      <ListItem
                        href="/data-solutions/local-data"
                        title="Local Data"
                        icon={MapPin}
                        gradient="bg-gradient-to-br from-red-500 to-red-700"
                      >
                        Region-specific insights and contacts
                      </ListItem>
                      <ListItem
                        href="/data-solutions/audience-data"
                        title="Audience Data"
                        icon={BarChart3}
                        gradient="bg-gradient-to-br from-green-500 to-green-700"
                      >
                        Targeted datasets for buyer intent
                      </ListItem>
                    </div>
                    <div className="space-y-2">
                      <ListItem
                        href="/data-solutions/data-enrichment"
                        title="Data Enrichment"
                        icon={Search}
                        gradient="bg-gradient-to-br from-purple-500 to-purple-700"
                      >
                        Custom research and data enrichment
                      </ListItem>
                      <ListItem
                        href="/data-solutions/business-development"
                        title="Business Development"
                        icon={Briefcase}
                        gradient="bg-gradient-to-br from-orange-500 to-orange-700"
                      >
                        Complete business development solutions
                      </ListItem>
                      <ListItem
                        href="/data-solutions/inbound-lead-generation"
                        title="Inbound Lead Generation"
                        icon={TrendingDown}
                        gradient="bg-gradient-to-br from-teal-500 to-teal-700"
                      >
                        Capture and nurture incoming prospects
                      </ListItem>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  hideChevron
                  className={`${navigationMenuTriggerStyle()} px-3 py-2`}
                >
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 p-4 w-auto max-w-[900px] min-w-[700px] [&_ul]:list-none [&_li]:list-none">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                        Technology
                      </h4>
                      <ListItem
                        href="/industries/information-technology"
                        title="Information Technology"
                        icon={Monitor}
                        gradient="bg-gradient-to-br from-blue-500 to-blue-700"
                      >
                        Enterprise IT sales leads
                      </ListItem>
                      <ListItem
                        href="/industries/software"
                        title="Software"
                        icon={Monitor}
                        gradient="bg-gradient-to-br from-purple-500 to-purple-700"
                      >
                        B2B Software Leads
                      </ListItem>
                      <ListItem
                        href="/industries/saas"
                        title="SaaS"
                        icon={Cloud}
                        gradient="bg-gradient-to-br from-cyan-500 to-cyan-700"
                      >
                        Software buyer leads
                      </ListItem>
                      <ListItem
                        href="/industries/cybersecurity"
                        title="Cybersecurity"
                        icon={Shield}
                        gradient="bg-gradient-to-br from-red-500 to-red-700"
                      >
                        Security buyers prospecting
                      </ListItem>
                      <ListItem
                        href="/industries/ai-technology"
                        title="AI Technology"
                        icon={Brain}
                        gradient="bg-gradient-to-br from-violet-500 to-violet-700"
                      >
                        Drive demand for AI Products
                      </ListItem>
                      <ListItem
                        href="/industries/cloud-services"
                        title="Cloud Services"
                        icon={Cloud}
                        gradient="bg-gradient-to-br from-sky-500 to-sky-700"
                      >
                        Cloud adopter targeting
                      </ListItem>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                        Business Solutions
                      </h4>
                      <ListItem
                        href="/industries/fintech"
                        title="Financial Technology"
                        icon={CreditCard}
                        gradient="bg-gradient-to-br from-green-500 to-green-700"
                      >
                        Fintech lead generation
                      </ListItem>
                      <ListItem
                        href="/industries/crm-software"
                        title="CRM Software"
                        icon={Settings}
                        gradient="bg-gradient-to-br from-orange-500 to-orange-700"
                      >
                        CRM Software Sales Leads
                      </ListItem>
                      <ListItem
                        href="/industries/erp"
                        title="ERP"
                        icon={Folder}
                        gradient="bg-gradient-to-br from-amber-500 to-amber-700"
                      >
                        ERP Software Leads
                      </ListItem>
                      <ListItem
                        href="/industries/hr-tech"
                        title="HR Tech"
                        icon={Users}
                        gradient="bg-gradient-to-br from-pink-500 to-pink-700"
                      >
                        Human resources technology
                      </ListItem>
                      <ListItem
                        href="/industries/consulting"
                        title="Consulting"
                        icon={HeadphonesIcon}
                        gradient="bg-gradient-to-br from-indigo-500 to-indigo-700"
                      >
                        Professional services
                      </ListItem>
                      <ListItem
                        href="/industries/msp"
                        title="MSP"
                        icon={Settings}
                        gradient="bg-gradient-to-br from-slate-500 to-slate-700"
                      >
                        Managed service providers
                      </ListItem>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                        Specialized Sectors
                      </h4>
                      <ListItem
                        href="/industries/manufacturing"
                        title="Manufacturing"
                        icon={Factory}
                        gradient="bg-gradient-to-br from-gray-500 to-gray-700"
                      >
                        Industrial buyer leads
                      </ListItem>
                      <ListItem
                        href="/industries/healthcare"
                        title="Healthcare/Medical"
                        icon={Heart}
                        gradient="bg-gradient-to-br from-red-500 to-red-700"
                      >
                        Healthcare industry outreach
                      </ListItem>
                      <ListItem
                        href="/industries/logistics"
                        title="Logistics"
                        icon={Truck}
                        gradient="bg-gradient-to-br from-yellow-500 to-yellow-700"
                      >
                        Supply chain sales leads
                      </ListItem>
                      <ListItem
                        href="/industries/energy-solar"
                        title="Energy and Solar"
                        icon={Zap}
                        gradient="bg-gradient-to-br from-emerald-500 to-emerald-700"
                      >
                        Clean energy solutions
                      </ListItem>
                      <ListItem
                        href="/industries/telecom"
                        title="Telecom"
                        icon={Smartphone}
                        gradient="bg-gradient-to-br from-blue-500 to-blue-700"
                      >
                        Telecommunications industry
                      </ListItem>
                      <ListItem
                        href="/industries/data-centers"
                        title="Data Centers"
                        icon={Server}
                        gradient="bg-gradient-to-br from-purple-500 to-purple-700"
                      >
                        DC & Hosting firms outreach
                      </ListItem>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  hideChevron
                  className={`${navigationMenuTriggerStyle()} px-3 py-2`}
                >
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 w-auto max-w-[900px] min-w-[700px] [&_ul]:list-none [&_li]:list-none">
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                        Learn
                      </h4>
                      <ListItem
                        href="/resources/podcast"
                        title="Podcast"
                        icon={Mic}
                        gradient="bg-gradient-to-br from-purple-500 to-purple-700"
                      >
                        Sales Development podcast with experts
                      </ListItem>
                      <ListItem
                        href="/resources/blog"
                        title="Blog"
                        icon={FileText}
                        gradient="bg-gradient-to-br from-blue-500 to-blue-700"
                      >
                        All content produced by our team
                      </ListItem>
                      <ListItem
                        href="/resources/ciencepedia"
                        title="CIENCEpedia"
                        icon={BookOpen}
                        gradient="bg-gradient-to-br from-green-500 to-green-700"
                      >
                        Dictionary of sales terms and acronyms
                      </ListItem>
                      <ListItem
                        href="/resources/case-studies"
                        title="Case Studies"
                        icon={BookmarkCheck}
                        gradient="bg-gradient-to-br from-amber-500 to-amber-700"
                      >
                        Real success stories and results
                      </ListItem>
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900 mb-2 text-sm">
                        Downloads
                      </h4>
                      <ListItem
                        href="/resources/ebooks"
                        title="Ebooks"
                        icon={Download}
                        gradient="bg-gradient-to-br from-teal-500 to-teal-700"
                      >
                        Free lead gen guides
                      </ListItem>
                      <ListItem
                        href="/resources/product-videos"
                        title="Product Videos"
                        icon={Play}
                        gradient="bg-gradient-to-br from-red-500 to-red-700"
                      >
                        Our solutions in action
                      </ListItem>
                      <ListItem
                        href="/resources/news-updates"
                        title="News and Updates"
                        icon={Newspaper}
                        gradient="bg-gradient-to-br from-orange-500 to-orange-700"
                      >
                        Latest developments
                      </ListItem>
                      <ListItem
                        href="/resources/press-releases"
                        title="Press Releases"
                        icon={FileDown}
                        gradient="bg-gradient-to-br from-pink-500 to-pink-700"
                      >
                        Press releases and company updates
                      </ListItem>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  hideChevron
                  className={`${navigationMenuTriggerStyle()} px-3 py-2`}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4 w-auto max-w-[900px] min-w-[700px] [&_ul]:list-none [&_li]:list-none">
                    <div className="space-y-2">
                      <ListItem
                        href="/tech-support-services"
                        title="Tech Support Services"
                        icon={HeadphonesIcon}
                        gradient="bg-gradient-to-br from-gray-900 to-gray-700"
                      >
                        24/7 technical support and helpdesk solutions
                      </ListItem>
                      <ListItem
                        href="/linkedin-marketing-services-in-usa"
                        title="LinkedIn Marketing Services"
                        icon={Users}
                        gradient="bg-gradient-to-br from-indigo-500 to-indigo-700"
                      >
                        Build brand and pipeline on LinkedIn
                      </ListItem>
                      <ListItem
                        href="/facebook-marketing-services-in-usa"
                        title="Facebook Marketing Services"
                        icon={MessageSquare}
                        gradient="bg-gradient-to-br from-blue-500 to-blue-700"
                      >
                        Drive engagement and leads on Facebook
                      </ListItem>
                      <ListItem
                        href="/instagram-marketing-services-in-usa"
                        title="Instagram Marketing Services"
                        icon={Heart}
                        gradient="bg-gradient-to-br from-pink-500 to-pink-700"
                      >
                        Grow your audience with visual storytelling
                      </ListItem>
                      <ListItem
                        href="/tiktok-marketing-services-in-usa"
                        title="Tiktok Marketing"
                        icon={Play}
                        gradient="bg-gradient-to-br from-gray-500 to-gray-700"
                      >
                        Capture attention with short‑form video
                      </ListItem>
                      <ListItem
                        href="/snapchat-marketing-services-in-usa"
                        title="Snapchat Marketing"
                        icon={Zap}
                        gradient="bg-gradient-to-br from-yellow-500 to-yellow-700"
                      >
                        Reach younger audiences on Snapchat
                      </ListItem>
                      <ListItem
                        href="/twitter-marketing-services-in-usa"
                        title="Twitter Marketing"
                        icon={MessageSquare}
                        gradient="bg-gradient-to-br from-sky-500 to-sky-700"
                      >
                        Real‑time brand presence on Twitter
                      </ListItem>
                    </div>
                    <div className="space-y-2">
                      <ListItem
                        href="/google-ppc-services-in-usa"
                        title="Google PPC"
                        icon={Search}
                        gradient="bg-gradient-to-br from-red-500 to-red-700"
                      >
                        Performance-driven Google Ads campaigns
                      </ListItem>
                      <ListItem
                        href="/bing-ads-services-in-usa"
                        title="Bing Ads"
                        icon={Search}
                        gradient="bg-gradient-to-br from-green-500 to-green-700"
                      >
                        Reach audiences across Microsoft Advertising
                      </ListItem>
                      <ListItem
                        href="/pinterest-marketing-services-in-usa"
                        title="Pinterest Marketing"
                        icon={BookmarkCheck}
                        gradient="bg-gradient-to-br from-rose-500 to-rose-700"
                      >
                        Inspire intent with visual discovery
                      </ListItem>
                      <ListItem
                        href="/reddit-marketing-services-in-usa"
                        title="Reddit Marketing"
                        icon={MessageSquare}
                        gradient="bg-gradient-to-br from-orange-500 to-orange-700"
                      >
                        Engage niche communities authentically
                      </ListItem>
                      <ListItem
                        href="/web-development-services-in-usa"
                        title="Web Development Services"
                        icon={Monitor}
                        gradient="bg-gradient-to-br from-teal-500 to-teal-700"
                      >
                        Modern, fast, and SEO‑ready websites
                      </ListItem>
                      <ListItem
                        href="/app-development-services-in-usa"
                        title="App Development Services"
                        icon={Smartphone}
                        gradient="bg-gradient-to-br from-purple-500 to-purple-700"
                      >
                        iOS and Android apps built to scale
                      </ListItem>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div>
          <a
            className="btn secondary"
            href="#contact"
            aria-label="Open contact form"
          >
            Book a Consultation
          </a>
        </div>
      </div>
    </header>
  );
}
