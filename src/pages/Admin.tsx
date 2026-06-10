import { useState, useEffect } from "react";
import { Trash2, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Video {
  id: string;
  youtubeId: string;
  title: string;
  thumbnail: string;
}

export default function Admin() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [secret, setSecret] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [newYoutubeId, setNewYoutubeId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchVideos();
    }
  }, [isAuthenticated]);

  const fetchVideos = () => {
    fetch('/api/videos')
      .then(res => res.json())
      .then(data => setVideos(Array.isArray(data) ? data : []))
      .catch(console.error);
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (secret.trim()) {
      setIsAuthenticated(true);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newYoutubeId || !newTitle) return;

    setLoading(true);
    const thumbnail = `https://img.youtube.com/vi/${newYoutubeId}/hqdefault.jpg`;
    
    try {
      const res = await fetch('/api/videos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ youtubeId: newYoutubeId, title: newTitle, thumbnail, secret })
      });

      if (res.ok) {
        setNewYoutubeId("");
        setNewTitle("");
        fetchVideos();
      } else {
        alert("Failed to add video. Check your secret.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;

    try {
      const res = await fetch(`/api/videos?id=${id}&secret=${secret}`, {
        method: 'DELETE'
      });

      if (res.ok) {
        fetchVideos();
      } else {
        alert("Failed to delete video.");
      }
    } catch (err) {
      console.error(err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background px-4">
        <form onSubmit={handleLogin} className="w-full max-w-sm p-8 bg-card border border-border rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Admin Password</label>
            <input
              type="password"
              className="w-full p-2 border border-border rounded-lg bg-background"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">Login</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Manage Case Studies</h1>
          <Button variant="outline" onClick={() => setIsAuthenticated(false)}>Logout</Button>
        </div>

        <div className="bg-card border border-border rounded-xl p-6 mb-8 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Add New Video</h2>
          <form onSubmit={handleAdd} className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="YouTube Video ID (e.g., dQw4w9WgXcQ)"
              className="flex-1 p-2 border border-border rounded-lg bg-background"
              value={newYoutubeId}
              onChange={(e) => setNewYoutubeId(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Display Title"
              className="flex-1 p-2 border border-border rounded-lg bg-background"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              required
            />
            <Button type="submit" disabled={loading}>
              <Plus className="w-4 h-4 mr-2" />
              {loading ? "Adding..." : "Add Video"}
            </Button>
          </form>
        </div>

        <div className="space-y-4">
          {videos.length === 0 ? (
            <p className="text-muted-foreground text-center py-8 bg-card rounded-xl border border-border">No videos found.</p>
          ) : (
            videos.map(video => (
              <div key={video.id} className="flex items-center gap-4 bg-card border border-border p-4 rounded-xl shadow-sm">
                <img src={video.thumbnail} alt={video.title} className="w-24 aspect-video object-cover rounded-lg" />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{video.title}</h3>
                  <p className="text-sm text-muted-foreground font-mono">{video.youtubeId}</p>
                </div>
                <Button variant="destructive" size="icon" onClick={() => handleDelete(video.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
