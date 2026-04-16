import { BaseQueryApi } from "@reduxjs/toolkit/query";

export type TMeta = {
  limit?: number;
  page?: number;
  total?: number;
  totalPage?: number;
  hasMore?: boolean;
  nextCursor?: string | null;
};

export type TError = {
  data: {
    message: string;
    success?: boolean;
    error?: unknown;
  };
  status: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  metadata?: TMeta;
  meta?: TMeta;
  success: boolean;
  message: string;
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi;

export type IImagePlatform = "imgbb" | "cloudinary" | "server" | "aws" | string;
export const I_IMAGE_PLATFORM_ARRAY = ["imgbb", "cloudinary", "server", "aws"];

export interface TFileDocument {
  id: string;
  mimetype: string;
  server_url?: string;
  filename?: string;
  originalUrl?: string;
  pre_url?: string;
  modifyFileName?: string;
  path?: string;
  url: string;
  durl?: string;
  fileUniqueId?: string;
  platform: IImagePlatform;
  fileType: string;
  cdn?: string;
  size: number;
  createdAt: string;
  updatedAt: string;
}
