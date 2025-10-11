import { type Campaign } from './Campaign.js';
import { type Collection } from './Collection.js';
import { type Downloadable } from './Downloadable.js';
import { type AttachmentMediaItem, type AudioMediaItem, type DefaultImageMediaItem, type VideoMediaItem, type PostCoverImageMediaItem, type PostThumbnailMediaItem } from './MediaItem.js';
import { type Tier } from './Reward.js';

export type PostCollection = Collection<Post>;

// Known postType values
export const PostType = {
  Image: 'image_file',
  Video: 'video_external_file',
  Audio: 'audio_file',
  Text: 'text_only',
  Poll: 'poll',
  Link: 'link',
  VideoEmbed: 'video_embed',
  Podcast: 'podcast'
} as const;

export interface Post {
  type: 'post';
  id: string;
  /**
   * @privateRemarks
   *
   * `data.attibutes.post_type`
   *
   * Known types:
   * - image_file
   * - video_external_file
   * - audio_file
   * - text_only
   * - poll
   * - link
   *   - only embedded link info is saved. Link is not followed / downloaded (except YouTube).
   * - video_embed
   *   - only embedded video info is saved. Video itself is not downloaded (except YouTube or
   *     Vimeo through patreon-dl-vimeo.js).
   * - podcast
   */
  postType: string;
  isViewable: boolean;
  url: string | null;
  title: string | null;
  content: string | null;
  teaserText: string | null;
  publishedAt: string | null;
  editedAt: string | null;
  commentCount: number;
  coverImage: Downloadable<PostCoverImageMediaItem> | null;
  thumbnail: Downloadable<PostThumbnailMediaItem> | null;
  tiers: Tier[];

  /**
   * @privateRemarks
   * `data.attibutes.embed`
   */
  embed: Downloadable<PostEmbed> | null;

  /**
   * @privateRemarks
   * `data.relationships.attachments`
   */
  attachments: Downloadable<AttachmentMediaItem>[];

  /**
   * @privateRemarks
   * Obtained from parsing links found in post content.
   * See Parser#parseInlineMedia()
   */
  linkedAttachments?: LinkedAttachment[];

  /**
   * @privateRemarks
   * `data.relationships.audio`
   */
  audio: Downloadable<AudioMediaItem> | null;

  /**
   * @privateRemarks
   * `data.relationships.audio_prevew`
   */
  audioPreview: Downloadable<AudioMediaItem> | null;

  /**
   * @privateRemarks
   * `data.relationships.images`
   */
  images: Downloadable<DefaultImageMediaItem>[];

  /**
   * @privateRemarks
   * Not included in `data.relationships`
   * Converted from `data.attributes.video_preview`
   */
  videoPreview: Downloadable<VideoMediaItem> | null;

  /**
   * @privateRemarks
   * Not included in `data.relationships`
   * Converted from `data.attributes.post_file` with
   * `data.attributes.post_type` matching 'video_external_file' / 'podcast'
   */
  video: Downloadable<VideoMediaItem> | null;

  campaign: Campaign | null;

  raw: object;
}

export interface PostEmbed {
  id: `${string}-embed`;
  postId: string;
  postURL: string | null;
  type: 'videoEmbed' | 'linkEmbed' | 'unknownEmbed';
  description: string | null;
  html: string | null;
  provider: string | null;
  providerURL: string | null;
  subject: string | null;
  url: string | null;
  thumbnailURL: string | null;
}

export type LinkedAttachment = {
  type: 'linkedAttachment';
  url: string;
  postId: string;
  mediaId: string;
  downloadable?: Downloadable<AttachmentMediaItem>;
}

export type YouTubePostEmbed = PostEmbed & { provider: 'YouTube' }
