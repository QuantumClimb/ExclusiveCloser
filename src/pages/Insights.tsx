import React from 'react';
import { Navbar } from "@/components/ui/navbar";
import { UpdatedFooter } from "@/components/ui/updated-footer";
import { PageLayout } from '@/components/ui/page-layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Briefcase, TrendingUp, Wrench, Download, BookOpen } from 'lucide-react';

const Insights = () => {
  const categories = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Company News",
      description: "Latest updates, announcements, and team milestones from Exclusive Closer",
      count: "12 updates",
      color: "bg-blue-500/10 text-blue-400"
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Remote Sales Opportunities",
      description: "Free to apply job listings for closers, setters, and sales leaders",
      count: "15 positions",
      color: "bg-green-500/10 text-green-400"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Sales Leadership Insights", 
      description: "Field-tested frameworks, strategies, and case studies from successful founders",
      count: "28 articles",
      color: "bg-purple-500/10 text-purple-400"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Tools & Resources",
      description: "Reviews on sales tools, books, courses, and free training breakdowns",
      count: "22 resources",
      color: "bg-orange-500/10 text-orange-400"
    }
  ];

  const featuredArticles = [
    {
      category: "Sales Strategy",
      title: "The NEPQ Framework: How to Close High-Ticket Deals",
      excerpt: "Master the questions that uncover pain and create urgency in your sales conversations.",
      readTime: "8 min read",
      author: "Aniket Kumar"
    },
    {
      category: "Case Study",
      title: "How Sandeep Scaled from ₹16L to ₹2.3CR in 12 Months",
      excerpt: "Complete breakdown of the systems and talent that drove 10x revenue growth.",
      readTime: "12 min read",
      author: "Success Team"
    },
    {
      category: "Remote Sales",
      title: "Building High-Performance Remote Sales Teams in 2024",
      excerpt: "The infrastructure, culture, and processes that make remote sales teams thrive.",
      readTime: "10 min read",
      author: "Aniket Kumar"
    },
    {
      category: "Tools",
      title: "CRM Setup Guide for High-Ticket Coaches",
      excerpt: "Step-by-step guide to building a sales CRM that actually converts leads.",
      readTime: "15 min read",
      author: "Sales Team"
    }
  ];

  const ctas = [
    { text: "Join Remote Sales Warrior Masterclass", icon: <Users className="w-5 h-5 mr-2" /> },
    { text: "Apply to Work with EC", variant: "outline" as const, icon: <Briefcase className="w-5 h-5 mr-2" /> },
    { text: "Download Free Resources", variant: "secondary" as const, icon: <Download className="w-5 h-5 mr-2" /> }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <PageLayout
         title="Insights from the Sales Trenches"
         subtitle="Sales strategies, client wins, job posts, and more."
         intro="Stay updated on everything Exclusive Closer - from field-tested sales leadership frameworks to team milestones and new job listings. This isn't your typical sales blog filled with fluff. These are real strategies, tools, and stories from the frontlines of high-ticket remote sales."
      ctas={ctas}
    >
      <div className="container mx-auto max-w-6xl px-4 space-y-24">
        
        {/* Content Categories */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">Content Hub</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">What You'll Find in Our Insights Hub</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Content categories include company news, announcements, remote sales opportunities, sales leadership insights & strategies, case studies & founder interviews, and reviews on tools, books, and sales courses.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="p-6 border-border/50 hover:border-primary/20 transition-colors cursor-pointer group">
                <div className={`w-16 h-16 rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{category.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-primary font-medium">{category.count}</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Articles */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">Latest Content</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Featured Articles</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and impactful content from the last month.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredArticles.map((article, index) => (
              <Card key={index} className="p-8 border-border/50 hover:border-primary/20 transition-colors cursor-pointer group">
                <div className="mb-4">
                  <Badge variant="secondary" className="mb-3">{article.category}</Badge>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>By {article.author}</span>
                  <span>{article.readTime}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Page Structure Explanation */}
        <div>
          <Card className="p-8 border-border/50 bg-card/50">
            <div className="text-center mb-8">
              <Badge className="mb-4">How It Works</Badge>
              <h2 className="text-3xl font-heading font-bold mb-6">Page Structure</h2>
              <p className="text-xl text-muted-foreground">
                Our insights hub is organized for easy navigation and discovery
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Main Insights Page</h3>
                <p className="text-muted-foreground">Browse category thumbnails as large clickable blocks to find your area of interest</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Category Pages</h3>
                <p className="text-muted-foreground">View articles relevant to specific verticals like Sales Strategy, Tools, or Job Opportunities</p>
              </div>
              
              <div>
                <div className="w-12 h-12 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground font-bold text-lg mx-auto mb-4">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Article Pages</h3>
                <p className="text-muted-foreground">Full blog format with images, author info, tags, and related posts plus CTAs to take action</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Article CTAs */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">Take Action</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Ready to Level Up?</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Every article includes opportunities to join our training, download resources, or explore working with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 border-border/50 text-center">
              <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading font-bold mb-2">Join the Remote Sales Warrior Masterclass</h3>
              <p className="text-sm text-muted-foreground mb-4">Free training on building high-performance remote sales teams</p>
              <Button className="w-full bg-gradient-gold">Join Masterclass</Button>
            </Card>
            
            <Card className="p-6 border-border/50 text-center">
              <Download className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading font-bold mb-2">Download Free Resources</h3>
              <p className="text-sm text-muted-foreground mb-4">Templates, checklists, and guides to scale your sales operations</p>
              <Button variant="outline" className="w-full">Get Resources</Button>
            </Card>
            
            <Card className="p-6 border-border/50 text-center">
              <Briefcase className="w-12 h-12 mx-auto mb-4 text-primary" />
              <h3 className="font-heading font-bold mb-2">Apply to Work with EC</h3>
              <p className="text-sm text-muted-foreground mb-4">Join our team or explore partnership opportunities</p>
              <Button variant="secondary" className="w-full">Apply Now</Button>
            </Card>
          </div>
        </div>

      </div>
      </PageLayout>
      <UpdatedFooter />
    </div>
  );
};

export default Insights;