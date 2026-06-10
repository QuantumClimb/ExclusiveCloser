import { PrismaClient } from '@prisma/client'
import type { VercelRequest, VercelResponse } from '@vercel/node'

const prisma = new PrismaClient()

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method === 'GET') {
    try {
      const videos = await prisma.video.findMany({
        orderBy: { createdAt: 'desc' }
      })
      return res.status(200).json(videos)
    } catch (error) {
      console.error('Error fetching videos:', error)
      return res.status(500).json({ error: 'Failed to fetch videos' })
    }
  }

  if (req.method === 'POST') {
    const { youtubeId, title, thumbnail, secret } = req.body
    
    // Simple password protection for admin actions
    if (secret !== process.env.ADMIN_SECRET) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    try {
      const video = await prisma.video.create({
        data: {
          youtubeId,
          title,
          thumbnail
        }
      })
      return res.status(201).json(video)
    } catch (error) {
      console.error('Error creating video:', error)
      return res.status(400).json({ error: 'Failed to create video' })
    }
  }

  if (req.method === 'DELETE') {
    const { id, secret } = req.query
    
    if (secret !== process.env.ADMIN_SECRET) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    try {
      await prisma.video.delete({
        where: { id: String(id) }
      })
      return res.status(200).json({ success: true })
    } catch (error) {
      console.error('Error deleting video:', error)
      return res.status(400).json({ error: 'Failed to delete video' })
    }
  }

  return res.status(405).json({ error: 'Method not allowed' })
}
