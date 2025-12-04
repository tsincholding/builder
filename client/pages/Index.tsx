import { Button } from "@/components/ui/button";
import { Check, Zap, Shield, Globe, BarChart3, Cpu } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Deploy VMs in seconds with our optimized infrastructure",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade encryption and DDoS protection included",
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Data centers across 6 continents for optimal performance",
    },
    {
      icon: Cpu,
      title: "Full Control",
      description: "Complete root access and customizable configurations",
    },
    {
      icon: BarChart3,
      title: "Real-time Monitoring",
      description: "Advanced analytics and performance dashboards",
    },
  ];

  const plans = [
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      description: "Perfect for development and testing",
      specs: [
        "2 vCPU",
        "4GB RAM",
        "50GB SSD Storage",
        "1 TB Bandwidth",
        "Email Support",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Professional",
      price: "$59",
      period: "/month",
      description: "Ideal for production workloads",
      specs: [
        "8 vCPU",
        "32GB RAM",
        "250GB SSD Storage",
        "10 TB Bandwidth",
        "Priority Support",
        "Auto-scaling",
        "Custom Monitoring",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      description: "Maximum performance and reliability",
      specs: [
        "32 vCPU",
        "128GB RAM",
        "1TB SSD Storage",
        "Unlimited Bandwidth",
        "24/7 Phone Support",
        "Dedicated Account Manager",
        "Custom SLA",
        "Advanced Security Suite",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, TechStart",
      text: "NodeX has been game-changing for our infrastructure. The uptime is exceptional and support is top-notch.",
    },
    {
      name: "James Wilson",
      role: "Founder, DataFlow",
      text: "Seamless migration, incredible performance. We reduced our infrastructure costs by 40% with NodeX.",
    },
    {
      name: "Emma Rodriguez",
      role: "DevOps Lead, CloudWorks",
      text: "The control and flexibility NodeX provides is unmatched. Highly recommend for any serious operations.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="font-bold text-primary-foreground text-lg">N</span>
            </div>
            <span className="font-bold text-2xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              NodeX
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-medium hover:text-primary transition">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-primary transition">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-medium hover:text-primary transition">
              Testimonials
            </a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Get Started</Button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        {/* Background elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm">
              ✨ The future of cloud infrastructure
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight">
            Powerful Virtual Machines,{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Simplified
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            Deploy production-grade virtual machines in seconds. Enterprise-level
            performance with startup-friendly pricing. Join thousands of
            developers and companies running on NodeX.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/cart">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-base px-8">
                Start Free Trial
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 border-2"
            >
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-16 border-t border-border">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">99.99%</p>
              <p className="text-muted-foreground">Uptime SLA</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">50K+</p>
              <p className="text-muted-foreground">Active Instances</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">6</p>
              <p className="text-muted-foreground">Global Regions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Why Choose NodeX?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built for developers and enterprises who demand reliability,
              performance, and control
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-xl border border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 bg-background"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. Always flexible to scale as
              you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {plans.map((plan, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl transition-all duration-300 ${
                  plan.highlighted
                    ? "md:scale-105 bg-gradient-to-br from-primary/5 to-secondary/5 border-2 border-primary shadow-2xl shadow-primary/20"
                    : "bg-card border border-border hover:border-primary/30"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground mb-6 text-sm">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground ml-2">
                      {plan.period}
                    </span>
                  </div>

                  <Link to="/cart" className="block">
                <Button
                  className={`w-full mb-8 ${
                    plan.highlighted
                      ? "bg-primary hover:bg-primary/90"
                      : "bg-foreground/10 hover:bg-foreground/20 text-foreground"
                  }`}
                >
                  {plan.cta}
                </Button>
              </Link>

                  <div className="space-y-4">
                    {plan.specs.map((spec, specIdx) => (
                      <div key={specIdx} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        <span className="text-sm">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-t border-border"
      >
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-muted-foreground">
              See what our customers have to say
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-border bg-background hover:border-primary/50 transition-all"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-lg">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-12 text-white shadow-2xl shadow-primary/30">
            <div className="text-lg mb-8 opacity-95" style={{ color: "rgba(206, 206, 206, 1)" }}>
              <h1>
                Start your free trial today. No credit card required. Deploy your
                first VM in under a minute.
              </h1>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Ready to Elevate Your Infrastructure?
            </h2>
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-white/90 font-bold text-base px-8"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Security
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Terms
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition">
                    GitHub
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
            <div className="flex items-center gap-2 mb-4 sm:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="font-bold text-white text-sm">N</span>
              </div>
              <span className="font-bold text-lg">NodeX</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 NodeX. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
