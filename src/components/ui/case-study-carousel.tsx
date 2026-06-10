import { useState, useEffect } from "react";
import { Play } from "lucide-react";

interface Video {
  id: string;
  youtubeId: string;
  title: string;
  thumbnail: string;
}

export function CaseStudyCarousel() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/videos')
      .then(res => res.json())
      .then(data => {
        // Fallback to hardcoded if API fails or returns empty during setup
        if (Array.isArray(data) && data.length > 0) {
          setVideos(data);
          setActiveVideo(data[0].youtubeId);
        } else {
          const fallback = [
            {
              id: "fallback-1",
              youtubeId: "yXT76R_12vo",
              title: "How We Turned Webinar Chaos into Predictable Revenue for Sandeep Bhansali",
              thumbnail: "https://img.youtube.com/vi/yXT76R_12vo/hqdefault.jpg"
            },
            {
              id: "fallback-2",
              youtubeId: "sbgCtEUHVKA",
              title: "The $180K Blueprint: Turning Expertise into a Scalable Business",
              thumbnail: "https://img.youtube.com/vi/sbgCtEUHVKA/hqdefault.jpg"
            }
          ];
          setVideos(fallback);
          setActiveVideo(fallback[0].youtubeId);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to load videos:', err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="py-24 text-center text-muted-foreground">Loading case studies...</div>;
  }

  return (
    <section id="case-study-carousel" className="py-24 bg-background">
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
              {activeVideo && (
                <iframe
                  src={`https://www.youtube.com/embed/${activeVideo}?rel=0&modestbranding=1`}
                  title="Client Success Story"
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
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
                  onClick={() => setActiveVideo(video.youtubeId)}
                  className={`flex gap-3 items-start p-2 rounded-xl transition-all duration-300 w-full text-left hover:bg-muted ${
                    activeVideo === video.youtubeId ? "bg-muted ring-1 ring-primary/50" : ""
                  }`}
                >
                  <div className="relative w-28 aspect-video flex-shrink-0 rounded-lg overflow-hidden bg-background border border-border">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    {activeVideo === video.youtubeId && (
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