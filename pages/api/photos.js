import { v2 as cloudinary } from 'cloudinary';

cloudinary.config(process.env.CLOUDINARY_URL);

export default async function handler(req, res) {
  try {
    const result = await cloudinary.search
      .expression('folder:Hugo-Diving/*')
      .sort_by('public_id', 'desc')
      .max_results(500)
      .execute();

    res.status(200).json(result.resources);
  } catch (error) {
    console.error("Cloudinary error:", error);
    res.status(500).json({ error: error.message });
  }
}