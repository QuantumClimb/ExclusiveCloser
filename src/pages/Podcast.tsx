import React from 'react';
import { Navbar } from "@/components/ui/navbar";
import { UpdatedFooter } from "@/components/ui/updated-footer";
import { PageLayout } from '@/components/ui/page-layout';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { PlayCircle, Headphones, Mic, Users } from 'lucide-react';

const Podcast = () => {
  const episodes = [
    {
      number: "#47",
      title: "From ₹5L to ₹50L/Month: Scaling with Remote Closers",
      guest: "Rohan Mehta, SaaS Founder",
      duration: "42 min",
      description: "How Rohan built a remote sales team that 10x'd his revenue in 8 months.",
      topics: ["Remote hiring", "Sales systems", "Scaling challenges"]
    },
    {
      number: "#46", 
      title: "The Psychology of High-Ticket Closing",
      guest: "Priya Sharma, Top Closer",
      duration: "38 min",
      description: "Inside the mind of our highest-performing closer who averages ₹12L/month.",
      topics: ["Closing psychology", "Objection handling", "Mindset"]
    },
    {
      number: "#45",
      title: "Building Sales Culture in Remote Teams",
      guest: "Aniket Kumar, EC Co-founder",
      duration: "35 min", 
      description: "The systems and culture that keep remote sales teams motivated and performing.",
      topics: ["Team culture", "Performance tracking", "Leadership"]
    },
    {
      number: "#44",
      title: "From Employee to ₹15L/Month Closer",
      guest: "Vikash Singh, Senior Closer",
      duration: "41 min",
      description: "Vikash's journey from corporate employee to top-earning remote sales closer.",
      topics: ["Career transition", "Skill development", "Income growth"]
    }
  ];

  const platforms = [
    { name: "Spotify", icon: "🎵" },
    { name: "Apple Podcasts", icon: "🎧" },
    { name: "Google Podcasts", icon: "📱" },
    { name: "YouTube", icon: "📺" }
  ];

  const ctas = [
    { text: "Listen Now", icon: <PlayCircle className="w-5 h-5 mr-2" /> },
    { text: "Subscribe", variant: "outline" as const, icon: <Headphones className="w-5 h-5 mr-2" /> },
    { text: "Nominate a Guest", variant: "secondary" as const, icon: <Mic className="w-5 h-5 mr-2" /> }
  ];

  return (
    <div className="min-h-screen bg-background font-body">
      <Navbar />
      <PageLayout
        title="The Killer Sales Engine Podcast"
        subtitle="Where closers, coaches, and founders get real."
        intro="No fluff, no theory, just real conversations with people who are actually closing deals and scaling businesses. We talk to top closers earning ₹10L+/month, founders who've built remote sales teams, and the systems that make it all work."
        ctas={ctas}
      >
      <div className="container mx-auto max-w-6xl px-4 space-y-24">
        
        {/* What It's About */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">Show Purpose</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">What This Show Is About</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Raw, unfiltered conversations about what really works in high-ticket remote sales.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 border-border/50 text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-6">
                💰
              </div>
              <h3 className="text-xl font-semibold mb-4">Real Numbers</h3>
              <p className="text-muted-foreground">
                We share actual revenue numbers, close rates, and what top closers really earn.
              </p>
            </Card>
            
            <Card className="p-8 border-border/50 text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-6">
                🎯
              </div>
              <h3 className="text-xl font-semibold mb-4">Proven Systems</h3>
              <p className="text-muted-foreground">
                The exact frameworks, scripts, and processes that drive consistent results.
              </p>
            </Card>
            
            <Card className="p-8 border-border/50 text-center">
              <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center text-primary-foreground text-2xl mx-auto mb-6">
                🔥
              </div>
              <h3 className="text-xl font-semibold mb-4">Behind the Scenes</h3>
              <p className="text-muted-foreground">
                What really happens when you're scaling remote teams and closing high-ticket deals.
              </p>
            </Card>
          </div>
        </div>

        {/* Recent Episodes */}
        <div>
          <div className="text-center mb-16">
            <Badge className="mb-4">Latest Episodes</Badge>
            <h2 className="text-4xl font-heading font-bold mb-6">Recent Episodes</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most recent conversations with top performers in the remote sales space.
            </p>
          </div>
          
          <div className="space-y-6">
            {episodes.map((episode, index) => (
              <Card key={index} className="p-8 border-border/50 hover:border-primary/20 transition-colors">
                <div className="flex flex-col lg:flex-row gap-6">
                  <div className="lg:w-20 flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-gold rounded-lg flex items-center justify-center">
                      <PlayCircle className="w-8 h-8 text-primary-foreground" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div className="flex items-center gap-4 mb-2 sm:mb-0">
                        <Badge variant="outline">{episode.number}</Badge>
                        <span className="text-sm text-muted-foreground">{episode.duration}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2">{episode.title}</h3>
                    <p className="text-primary font-medium mb-3">{episode.guest}</p>
                    <p className="text-muted-foreground mb-4">{episode.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {episode.topics.map((topic, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Listen On */}
        <div>
          <Card className="p-8 border-border/50 bg-card/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold mb-4">Listen on Your Favorite Platform</h2>
              <p className="text-xl text-muted-foreground">
                Available wherever you get your podcasts.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platforms.map((platform, index) => (
                <Button key={index} variant="outline" className="p-6 h-auto flex flex-col gap-2">
                  <span className="text-2xl">{platform.icon}</span>
                  <span className="text-sm">{platform.name}</span>
                </Button>
              ))}
            </div>
          </Card>
        </div>

        {/* Guest Nomination */}
        <div>
          <Card className="p-8 border-border/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-heading font-bold mb-4">Know Someone Who Should Be On?</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're always looking for founders, closers, and sales leaders with real results to share their stories.
              </p>
            </div>
            
            <div className="max-w-md mx-auto">
              <div className="space-y-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Founders scaling with remote sales teams</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Top-performing closers earning ₹10L+/month</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span>Sales leaders managing remote teams</span>
                </div>
              </div>
              
              <Button className="w-full" size="lg">
                <Users className="w-5 h-5 mr-2" />
                Nominate a Guest
              </Button>
            </div>
          </Card>
        </div>

      </div>
      </PageLayout>
      <UpdatedFooter />
    </div>
  );
};

export default Podcast;