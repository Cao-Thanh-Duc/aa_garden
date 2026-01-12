/** @type {import('next').NextConfig} */
const nextConfig = {
  // Có thể để trống hoặc thêm cấu hình ảnh nếu cần sau này
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
};

export default nextConfig;