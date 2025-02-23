const { getDefaultConfig } = require("expo/metro-config");

const config = getDefaultConfig(__dirname);

// Ensure Metro can process .glb, .gltf, fonts, and media files correctly
config.resolver.assetExts = [
  ...config.resolver.assetExts,
  "glb",
  "gltf",
  "ttf",
  "png",
  "jpg",
  "wav",
  "mp3",
];

// Allow Expo Router to handle symlinks (needed for `expo-router`)
config.resolver.sourceExts = [...config.resolver.sourceExts, "cjs"];

module.exports = config;
