// YouTube API service for fetching playlist videos
// Note: You'll need to get a YouTube Data API key from Google Cloud Console

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  videoId: string;
  duration: string;
  description: string;
  publishedAt: string;
}

interface YouTubePlaylistResponse {
  items: Array<{
    snippet: {
      title: string;
      description: string;
      thumbnails: {
        maxres?: { url: string };
        high?: { url: string };
        medium?: { url: string };
        default?: { url: string };
      };
      resourceId: {
        videoId: string;
      };
      publishedAt: string;
    };
  }>;
}

class YouTubeService {
  private apiKey: string;
  private baseUrl = "https://www.googleapis.com/youtube/v3";

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  /**
   * Fetch videos from a YouTube playlist
   * @param playlistId - The YouTube playlist ID
   * @param maxResults - Maximum number of videos to fetch (default: 50)
   * @returns Promise<YouTubeVideo[]>
   */
  async getPlaylistVideos(
    playlistId: string,
    maxResults: number = 50
  ): Promise<YouTubeVideo[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error(
          `YouTube API error: ${response.status} ${response.statusText}`
        );
      }

      const data: YouTubePlaylistResponse = await response.json();

      // Get video durations
      const videoIds = data.items
        .map((item) => item.snippet.resourceId.videoId)
        .join(",");
      const durationData = await this.getVideoDurations(videoIds);

      return data.items.map((item, index) => ({
        id: item.snippet.resourceId.videoId,
        title: item.snippet.title,
        thumbnail: this.getBestThumbnail(item.snippet.thumbnails),
        videoId: item.snippet.resourceId.videoId,
        duration: durationData[index] || "0:00",
        description: item.snippet.description,
        publishedAt: item.snippet.publishedAt,
      }));
    } catch (error) {
      console.error("Error fetching YouTube playlist:", error);
      throw error;
    }
  }

  /**
   * Get video durations for multiple videos
   * @param videoIds - Comma-separated video IDs
   * @returns Promise<string[]> - Array of durations in ISO 8601 format
   */
  private async getVideoDurations(videoIds: string): Promise<string[]> {
    try {
      const response = await fetch(
        `${this.baseUrl}/videos?part=contentDetails&id=${videoIds}&key=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error(
          `YouTube API error: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data.items.map((item: any) =>
        this.formatDuration(item.contentDetails.duration)
      );
    } catch (error) {
      console.error("Error fetching video durations:", error);
      return [];
    }
  }

  /**
   * Get the best available thumbnail
   * @param thumbnails - Thumbnail object from YouTube API
   * @returns string - Thumbnail URL
   */
  private getBestThumbnail(thumbnails: any): string {
    return (
      thumbnails.maxres?.url ||
      thumbnails.high?.url ||
      thumbnails.medium?.url ||
      thumbnails.default?.url ||
      ""
    );
  }

  /**
   * Convert ISO 8601 duration to readable format
   * @param duration - ISO 8601 duration string (e.g., PT4M13S)
   * @returns string - Formatted duration (e.g., 4:13)
   */
  private formatDuration(duration: string): string {
    const match = duration.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!match) return "0:00";

    const hours = parseInt(match[1] || "0");
    const minutes = parseInt(match[2] || "0");
    const seconds = parseInt(match[3] || "0");

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}`;
    } else {
      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    }
  }

  /**
   * Extract playlist ID from YouTube playlist URL
   * @param url - YouTube playlist URL
   * @returns string | null - Playlist ID or null if not found
   */
  static extractPlaylistId(url: string): string | null {
    const match = url.match(/[?&]list=([^&]+)/);
    return match ? match[1] : null;
  }
}

export default YouTubeService;
export type { YouTubeVideo };
