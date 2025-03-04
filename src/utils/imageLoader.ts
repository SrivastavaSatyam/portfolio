export const getImagePath = (path: string): string => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio';
  const isProduction = process.env.NODE_ENV === 'production';
  return isProduction ? `${basePath}${path}` : path;
}; 