import { Client as MinioClient } from 'minio';

// Minio client configuration
const minioClient = new MinioClient({
  endPoint: 'localhost', // Change if your Minio server is not on localhost
  port: 9000, // Change if your Minio is running on a different port
  useSSL: false, // Set to true if SSL is enabled
  accessKey: 'minioadmin', // Replace with your actual Minio access key
  secretKey: 'minioadmin', // Replace with your actual Minio secret key
});

// Function to create a bucket
async function createBucket(bucketName: string): Promise<void> {
  // Check if the bucket already exists
  const bucketExists = await minioClient.bucketExists(bucketName);
  if (bucketExists) {
    console.log(`Bucket '${bucketName}' already exists.`);
    return;
  }

  // Create the bucket
  await minioClient.makeBucket(bucketName, 'eu-west-1'); // Replace 'us-east-1' with your region if needed
  console.log(`Bucket '${bucketName}' created successfully.`);
}

// Replace with your desired bucket name
const bucketName = 'rawvideos';

createBucket(bucketName).catch(console.error);
