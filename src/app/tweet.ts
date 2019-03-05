export interface Tweet {
  created_at: string,
  id: number,
  text: string,
  user: string,
  favoriteCount?: number,
  isLiked?: boolean
}
