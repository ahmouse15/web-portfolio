//API wrapper for ghost CMS backend
import { Post, TSGhostContentAPI } from "@ts-ghost/content-api";
import { UUID } from "crypto";

// Create API instance with site credentials
const api = new TSGhostContentAPI(
  process.env.GHOST_URL || "",
  process.env.GHOST_CONTENT_API_KEY || "",
  "v5.0"
); 

export async function getPosts(limit?: number) {
  let result = await api.posts
    .browse({
      limit: limit || "all"
    })
    .fetch();

    if (result.success) return result.data;
    else return null;
}

export async function readPost(slug: string): Promise<Post | null> {
  let result = await api.posts
    .read({
      slug: slug
    })
    .fetch();
    
    if (result.success) return result.data;
    else return null;
}

export async function getAuthor(id: string) {

}
