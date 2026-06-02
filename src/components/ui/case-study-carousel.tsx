import { useState } from "react";
import { Play } from "lucide-react";

export function CaseStudyCarousel() {
  const videos = [
    {
      id: "IwGOYr4azR4",
      title: "Sandeep Bhansali - ₹16L → ₹2.3CR in 12 months",
      thumbnail: "https://img.youtube.com/vi/IwGOYr4azR4/maxresdefault.jpg"
    },
    {
      id: "5iuarxMXZCI",
      title: "Vishal Manocha - 1CR → 2CR per month",
      thumbnail: "https://img.youtube.com/vi/5iuarxMXZCI/maxresdefault.jpg"
    },
    {
      id: "ICLmnYUwpMQ",
      title: "Jyothi Nookla - 0 to ₹1.63CR in 6 Months",
      thumbnail: "https://img.youtube.com/vi/ICLmnYUwpMQ/maxresdefault.jpg"
    }
  ];

  const [activeVideo, setActiveVideo] = useState(videos[0].id);

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 px-4">
            What Happens When You{" "}
            <span className="bg-gradient-gold bg-clip-text text-transparent">
              Stop Selling Alone
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground px-4">
            Real founders. Real sales engines. Real growth.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
          {/* Main Video Player */}
          <div className="lg:col-span-2">
            <div className="aspect-video w-full rounded-2xl overflow-hidden bg-card border border-border shadow-lg">
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo}?rel=0&modestbranding=1`}
                title="Client Success Story"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 bg-card border border-border rounded-2xl p-4 flex flex-col h-full max-h-[500px] lg:max-h-none overflow-y-auto custom-scrollbar">
            <h3 className="font-heading font-bold text-lg mb-4 sticky top-0 bg-card py-2 z-10 border-b border-border">
              More Success Stories
            </h3>
            <div className="space-y-4">
              {videos.map((video) => (
                <button
                  key={video.id}
                  onClick={() => setActiveVideo(video.id)}
                  className={`flex gap-3 items-start p-2 rounded-xl transition-all duration-300 w-full text-left hover:bg-muted ${
                    activeVideo === video.id ? "bg-muted ring-1 ring-primary/50" : ""
                  }`}
                >
                  <div className="relative w-28 aspect-video flex-shrink-0 rounded-lg overflow-hidden bg-background border border-border">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    {activeVideo === video.id && (
                      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                        <Play className="w-6 h-6 text-white fill-white" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0 pt-1">
                    <p className="text-sm font-semibold text-foreground line-clamp-2 leading-tight">
                      {video.title}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}