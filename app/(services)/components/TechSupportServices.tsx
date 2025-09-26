import type React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const metadata: Metadata = {
  title:
    "Tech Support Services | Managed IT Solutions for Businesses in the USA",
  description:
    "Reliable Tech Support 24/7 Services in US, IT Hardware,Software Maintenance, Networking Support, Printer Support, Cloud Support Troubleshooting Support Services",
  keywords:
    "Best Tech Support Service in USA, Top Tech Support Services in USA, Cheap Tech Support Services in USA, Tech Support Strategy Services, Viruses, Wireless, Email,Data Backups, Crashes, Printers Support",
  robots: "index, follow",
  authors: [{ name: "L4RG Digital Plus LLC" }],
  openGraph: {
    title:
      "Tech Support Services | Managed IT Solutions for Businesses in the USA",
    description:
      "Reliable Tech Support 24/7 Services in US, IT Hardware,Software Maintenance, Networking Support, Printer Support, Cloud Support Troubleshooting Support Services",
  },
};

function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 md:px-6", className)}>
      {children}
    </div>
  );
}

export default function TechSupportServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        className="py-16 md:py-24 relative overflow-hidden"
        style={{
          backgroundColor: "#0f172a",
          backgroundImage:
            "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
          color: "#ffffff",
        }}
      >
        <div className="absolute inset-0 bg-[url('/tech-support-hero-pattern.png')] bg-cover bg-center opacity-10"></div>
        <Container className="relative z-10">
          <div className="text-center space-y-6 mb-12">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
              <div
                className="flex flex-col md:flex-row gap-4 text-sm"
                style={{ color: "#ffffff" }}
              >
                <a
                  href="tel:+919069689226"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#ffffff" }}
                >
                  📞 +91-906-968-9226
                </a>
                <a
                  href="mailto:l4rgdigitalplus@gmail.com"
                  className="hover:opacity-80 transition-opacity"
                  style={{ color: "#ffffff" }}
                >
                  ✉️ l4rgdigitalplus@gmail.com
                </a>
              </div>
              <Button variant="secondary" asChild>
                <Link href="#contact">Contact Now</Link>
              </Button>
            </div>

            <h1
              className="text-4xl md:text-6xl font-bold text-balance leading-tight"
              style={{ color: "#ffffff" }}
            >
              US Based IT Support Service Company
            </h1>
            <div
              className="text-2xl md:text-3xl font-semibold"
              style={{ color: "#93c5fd" }}
            >
              Starts from US $5/Hour - Save 70%
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm">
            {[
              "Experience of handling IT infrastructure of 1,100+ clients",
              "24/7 support",
              "Thirty minutes is the response time",
              "Ten years of experience in the field",
              "300+ clients served worldwide",
              "9,000+ hours served monthly",
              "Fifty+ highly qualified IT engineers",
              "Low price assurance",
              "Free trial period",
              "Complete satisfaction assured",
              "Workable trial project with no up-front costs",
            ].map((benefit, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full flex-shrink-0"></div>
                <span style={{ color: "#ffffff" }}>{benefit}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="py-16 bg-white">
        <Container>
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Share Your Requirement
            </h2>
            <form className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Name*
                  </label>
                  <Input placeholder="Enter your name" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email Address*
                  </label>
                  <Input type="email" placeholder="Enter your email" required />
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Contact Number*
                  </label>
                  <Input placeholder="Enter your phone number" required />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Duration
                  </label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Duration" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="less-than-1">
                        Less than 1 Month
                      </SelectItem>
                      <SelectItem value="1-to-3">1 to 3 Months</SelectItem>
                      <SelectItem value="3-to-6">3 to 6 Months</SelectItem>
                      <SelectItem value="6-to-12">6 to 12 Months</SelectItem>
                      <SelectItem value="more-than-1">
                        More than 1 Year
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Website*
                </label>
                <Input placeholder="Enter your website URL" required />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Work Requirement
                </label>
                <Textarea
                  placeholder="Describe your requirements..."
                  rows={4}
                />
              </div>

              <Button type="submit" className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50">
        <Container>
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Why Hire Technical Support Staff from USA
              </h2>
              <h3 className="text-xl text-slate-600 font-semibold">
                Prompt IT support for uninterrupted business
              </h3>
            </div>

            <div className="prose max-w-4xl mx-auto text-slate-700 space-y-4">
              <p>
                All modern companies are heavily reliant on IT systems for their
                uninterrupted functioning. Any fault in a firm's IT system could
                translate into significant losses. Moreover, managing the modern
                IT infrastructure is a challenge in itself with network
                architecture, hardware and company-specific software to manage.
              </p>

              <p>
                L4RG Digital Plus's dedicated{" "}
                <strong>USA tech support engineers</strong> provide tailored
                services for all your IT needs. They are well-versed with
                challenging problems in network architecture, sophisticated
                hardware and specialized software as well as any niche tech that
                your company relies on. L4RG Digi Plus has more than{" "}
                <strong>550 full-time IT support staff</strong> in USA on its
                payroll—with experience ranging from junior, mid-level to senior
                executives.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>
                    6 reasons why companies hire technical support engineers
                    from L4RG Digital Plus:
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Experts with minimum 5+ years of global experience",
                      "Expertise in major IT support software like Zendesk and Jira",
                      "Seamless integration of new tech in existing network",
                      "Top 1% IT experts chosen from across USA",
                      "State-of-the-art solutions for reinforcing IT infrastructure",
                      "24*7 personnel availability for IT support services",
                    ].map((reason, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{reason}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <div className="relative">
                <img
                  src="/tech-support-dashboard-interface.png"
                  alt="Tech support dashboard interface"
                  className="rounded-xl shadow-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 360° IT Support Services */}
      <section className="py-16">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              360° IT Support Services
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              Complex tech. Effective support
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "IT Support Solutions",
                description:
                  "Your business relies on the effectiveness of your tech platforms. L4RG Digital Plus's dedicated USA tech support engineers offer 24×7 IT support, including a dedicated IT help desk to ensure that your business never faces any downtime.",
                icon: "💻",
              },
              {
                title: "Cloud Computing",
                description:
                  "Whether your company is a cloud-based firm or you're trying to upgrade to cloud technology from a traditional system, our technical support specialists help you to do it effectively. They are adept at the use of cloud applications.",
                icon: "☁️",
              },
              {
                title: "Troubleshooting Support",
                description:
                  "Machines can malfunction. That's just the nature of the beast. However, outsourcing troubleshooting support services with L4RG Digital Plus in USA helps you to fix your tech problems effectively and without experiencing significant downtime.",
                icon: "🔧",
              },
              {
                title: "Technical Consulting",
                description:
                  "Have an outdated tech platform that needs updates or have a legacy infrastructure that is not keeping pace with your expansion? Our dedicated USA tech support engineers are perfect for such tasks with more than 1,100 jobs under their belt.",
                icon: "🎯",
              },
              {
                title: "Network Monitoring",
                description:
                  "Tech needs at a modern firm require constant monitoring to ensure they run smoothly. Our remote IT experts in USA ensure your network is in perfect shape always. Our experts help you monitor networking components like routers, firewalls, servers and VMs.",
                icon: "📡",
              },
              {
                title: "Network Security Solutions",
                description:
                  "Any network needs to be robust so as to fend off any attacks. Further, the ever evolving rules and regulations about customer data protection makes it imperative for firms to have a robust network security. Our IT support staff are perfect for the role.",
                icon: "🛡️",
              },
              {
                title: "SQL Server Consulting",
                description:
                  "L4RG Digital Plus's team of SQL Server consultants implement best practices throughout the development life cycle of your technology—proprietary or not—to ensure that your SQL server handles all kind of queries without failing.",
                icon: "🗄️",
              },
              {
                title: "Data Storage Solutions",
                description:
                  "Data is the new oil. Your business—whether data forms the core of its business or not—cannot do without storage and effective management of data. Hire our online tech support staff in USA for effective data solutions.",
                icon: "💾",
              },
              {
                title: "Data Backup & Recovery",
                description:
                  "Regardless of the nature of your business, your data is vital. Hire technical support engineers from L4RG Digi Plus in USA to create a bullet-proof backup system for data recovery, backup troubleshooting, backup management and other such data related issues.",
                icon: "🔄",
              },
            ].map((service, i) => (
              <Card
                key={i}
                className="hover:shadow-lg transition-all hover:scale-105"
              >
                <CardHeader>
                  <div className="text-4xl mb-3">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Outsource Section */}
      <section className="py-16 bg-slate-50">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Outsource IT Support Services to USA
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              Catering to 55% of the world's IT needs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Largest Talent Pool",
                description:
                  "3 million engineers graduate every year making USA the home of IT support outsourcing in the world.",
                icon: "👥",
              },
              {
                title: "Dedicated 24×7 Staff",
                description:
                  "Our remote IT support engineers are our full-time employees which gives you the assurance of a full-time staffer.",
                icon: "🕐",
              },
              {
                title: "Massive Cost Savings",
                description:
                  "Online IT support experts command a significant remuneration locally. Outsourcing to L4RG Digi Plus helps you save as much as up to 70% in costs.",
                icon: "💵",
              },
            ].map((benefit, i) => (
              <Card
                key={i}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="text-5xl mb-4">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Top Benefits of Hiring Technical Support Engineers from L4RG Digi
              Plus
            </h2>
            <p className="text-xl text-slate-600 font-semibold">
              No unwanted surprises. No hidden terms & conditions
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Free Trial",
                description:
                  "Assess your IT support staff for 1 week before making a hiring decision.",
                icon: "🆓",
              },
              {
                title: "Full-time Employees",
                description:
                  "Hire full-time IT support experts with L4RG Digi Plus. No more uncertainty of freelancers.",
                icon: "👨‍💼",
              },
              {
                title: "Triple-vetted Experts",
                description:
                  "L4RG Digi Plus triple vets all of its experts for technical and industry expertise.",
                icon: "✅",
              },
              {
                title: "Value for Money",
                description:
                  "Pay for just one remote technical support specialist and leverage the expertise of an entire team.",
                icon: "💰",
              },
              {
                title: "Zero Overheads",
                description:
                  "Pay only for your hired resource's work and nothing else. L4RG Digi Plus takes care of everything else.",
                icon: "📊",
              },
              {
                title: "Diverse Experience",
                description:
                  "L4RG Digi Plus has junior, mid-level as well as senior pros. Handpick the expert you need.",
                icon: "🎯",
              },
            ].map((benefit, i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="text-4xl mb-3">{benefit.icon}</div>
                  <CardTitle className="text-lg">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Choose from Our 3 Easy Hiring Models
            </h2>
            <p className="text-slate-600">
              Switch between the models effortlessly whenever you want
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Full-time",
                features: [
                  "8 hours a day",
                  "5 days a week",
                  "Dedicated resource",
                ],
                cta: "Hire Full-time",
              },
              {
                title: "Part-time",
                features: [
                  "4 hours a day",
                  "5 days a week",
                  "Dedicated resource",
                ],
                cta: "Hire Part-time",
              },
              {
                title: "Hourly",
                features: [
                  "60 hours a month",
                  "Pay-as-you-consume",
                  "Ideal for low volume work",
                ],
                cta: "Hire Hourly",
              },
            ].map((model, i) => (
              <Card
                key={i}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <CardTitle className="text-2xl">{model.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {model.features.map((feature, j) => (
                      <li key={j} className="text-slate-600">
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">{model.cta}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Hiring Was Never This Easy
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                step: "1",
                title: "Talk to us",
                description:
                  "Tell us your requirement for your IT support staff.",
                icon: "💬",
              },
              {
                step: "2",
                title: "Handpick your expert",
                description:
                  "L4RG Digi Plus shares impressive resumes as per your custom needs.",
                icon: "👤",
              },
              {
                step: "3",
                title: "Interview and hire",
                description: "Assess them and hire only when fully satisfied.",
                icon: "🤝",
              },
              {
                step: "4",
                title: "Get going",
                description:
                  "You can start working with your resource within 8 hours.",
                icon: "🚀",
              },
            ].map((step, i) => (
              <Card
                key={i}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mx-auto mb-2">
                    {step.step}
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-600">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button size="lg" asChild>
              <Link href="#contact">Hire IT Support Engineer</Link>
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-slate-50">
        <Container>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              IT Support Staff FAQs
            </h2>
            <p className="text-slate-600">All your queries answered</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {[
              {
                question:
                  "Is it possible to assess the skills of my remote staff?",
                answer:
                  "Absolutely. When you hire dedicated USA tech support engineers from L4RG Digi Plus, you are entitled to a 3-day free trial. This lets you gauge the quality of the resource before you outsource with us.",
              },
              {
                question: "What is the skill set of your IT support staff?",
                answer:
                  "L4RG Digi Plus's technical support staff have a varied skill set that includes cloud computing, troubleshooting, technical consulting, network monitoring, security solutions, etc.",
              },
              {
                question: "How do I communicate with my employee?",
                answer:
                  "With L4RG Digital Plus, communication is very easy. You can interact via phone, e-mail, instant messengers, video conferencing, Skype and MS Teams.",
              },
              {
                question: "Do you provide local time-zone support?",
                answer:
                  "At L4RG Digital Plus, we have round-the clock work model and all our resources are available to work as per your convenience and schedule.",
              },
              {
                question:
                  "How easy it is to scale up or down with L4RG Digi Plus?",
                answer:
                  "Keeping in tandem with diverse business needs, L4RG Digi Plus has made the process of scaling up or down extremely easy. Just drop an email to scale up or down anytime.",
              },
              {
                question:
                  "I have very sensitive legal data, can I trust its safety?",
                answer:
                  "We work in accordance with the EU's GDPR, Canada's PIPEDA and US' ECPA. Additionally, all our employees sign a mandatory non-disclosure agreement (NDA). We are also an ISO 27001-2013-certified and CMMiL3-assessed firm.",
              },
            ].map((faq, i) => (
              <details
                key={i}
                className="bg-white rounded-lg border p-4 hover:shadow-md transition-shadow"
              >
                <summary className="cursor-pointer font-semibold text-lg">
                  {faq.question}
                </summary>
                <p className="mt-3 text-slate-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <Container>
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Hire an IT Support Engineer with L4RG Digi Plus & join 3500
              companies that have already saved 70%
            </h2>
            <Button size="lg" variant="secondary" asChild>
              <Link href="#contact">Hire IT Support Engineer</Link>
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
