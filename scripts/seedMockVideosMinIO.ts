import { Client as MinioClient } from 'minio';
import * as fs from 'fs';
import * as path from 'path';

// Define Minio connection parameters
const minioClient = new MinioClient({
  endPoint: 'localhost', // Change if your Minio server is not on localhost
  port: 9000, // Change if your Minio is running on a different port
  useSSL: false, // Set to true if SSL is enabled
  accessKey: 'minioadmin', // Replace with your actual Minio access key
  secretKey: 'minioadmin', // Replace with your actual Minio secret key
});

// Function to upload a video
async function uploadVideo(
  bucketName: string,
  videoPath: string,
  videoName: string,
): Promise<void> {
  // Ensure the bucket exists
  if (!(await minioClient.bucketExists(bucketName))) {
    await minioClient.makeBucket(bucketName);
  }

  // Check if file exists
  if (!fs.existsSync(videoPath)) {
    console.log(`File not found: ${videoPath}`);
    return;
  }

  // Upload the video
  await minioClient.fPutObject(bucketName, videoName, videoPath);
  console.log(`${videoName} is uploaded successfully to bucket ${bucketName}`);
}

// Replace with your bucket name, video path, and video name
const bucketName = 'rawvideos';
const videoPath = path.resolve(
  __dirname,
  '../../ressources/rawVideos/Succession.mp4',
);
const videoName = 'Succession.mp4';

uploadVideo(bucketName, videoPath, videoName).catch(console.error);
