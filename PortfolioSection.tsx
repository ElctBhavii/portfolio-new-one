import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useState } from "react";
import { ShortsModal } from "./ShortsModal";
import { LivestreamModal } from "./LivestreamModal";
import { GamingVideosModal } from "./GamingVideosModal";

export function PortfolioSection() {
  const [isShortsModalOpen, setIsShortsModalOpen] =
    useState(false);
  const [isLivestreamModalOpen, setIsLivestreamModalOpen] =
    useState(false);
  const [isGamingVideosModalOpen, setIsGamingVideosModalOpen] =
    useState(false);

  const projects = [
    {
      id: 1,
      title: "Shorts",
      category: "Gaming",
      thumbnail:
        "https://images.unsplash.com/photo-1614179924047-e1ab49a0a0cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBzZXR1cHxlbnwxfHx8fDE3NjcxMzQ1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Epic gaming moments with dynamic transitions and effects",
      isShorts: true,
    },
    {
      id: 2,
      title: "Gaming Videos",
      category: "Gaming",
      thumbnail:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB2aWRlb3xlbnwxfHx8fDE3NjcxMzQ1MjZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Collection of gameplay videos and gaming highlights",
      isGamingVideos: true,
    },
    {
      id: 5,
      title: "Gaming Livestream Highlights",
      category: "Gaming",
      thumbnail:
        "https://images.unsplash.com/photo-1706246448963-0b494178e293?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjBsaXZlc3RyZWFtfGVufDF8fHx8MTc2NzE2MTg1NHww&ixlib=rb-4.1.0&q=80&w=1080",
      description:
        "Best moments from live streams with engaging edits",
      isLivestream: true,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-teal-400">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent video editing projects
            across different genres and styles
          </p>
          <div className="w-20 h-1 bg-teal-400 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) =>
            project.isLivestream ? (
              <div
                key={project.id}
                onClick={() => setIsLivestreamModalOpen(true)}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-teal-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors duration-300" />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-teal-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ) : project.isGamingVideos ? (
              <div
                key={project.id}
                onClick={() => setIsGamingVideosModalOpen(true)}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-teal-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors duration-300" />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-teal-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ) : project.isShorts ? (
              <div
                key={project.id}
                onClick={() => setIsShortsModalOpen(true)}
                className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-teal-500/30 transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors duration-300" />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-teal-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <svg
                        className="w-8 h-8 text-white ml-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            ) : (
              <a
                key={project.id}
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-teal-500/30 transition-all duration-300 hover:scale-105 ${!project.videoUrl ? "pointer-events-none" : "cursor-pointer"}`}
              >
                <div className="relative aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors duration-300" />

                  {/* Play button overlay */}
                  {project.videoUrl && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-teal-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <svg
                          className="w-8 h-8 text-white ml-1"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </a>
            ),
          )}
        </div>
      </div>

      <ShortsModal
        isOpen={isShortsModalOpen}
        onClose={() => setIsShortsModalOpen(false)}
      />
      <LivestreamModal
        isOpen={isLivestreamModalOpen}
        onClose={() => setIsLivestreamModalOpen(false)}
      />
      <GamingVideosModal
        isOpen={isGamingVideosModalOpen}
        onClose={() => setIsGamingVideosModalOpen(false)}
      />
    </section>
  );
}