import { Prize } from "./prize";

export const getRarityStyles = (rarity: Prize["rarity"]) => {
  switch (rarity) {
    case "common":
      return {
        border: "1px solid gray",
        backgroundColor: "#f8f9fa", // Light neutral background
      };
    case "uncommon":
      return {
        border: "2px solid green",
        backgroundColor: "#e8f5e9", // Soft green tint
        boxShadow: "0 0 5px rgba(0, 128, 0, 0.5)", // Subtle green glow
      };
    case "rare":
      return {
        border: "2px solid blue",
        backgroundColor: "#e3f2fd", // Light blue tint
        boxShadow: "0 0 10px rgba(0, 0, 255, 0.5)", // Blue glow
      };
    case "legendary":
      return {
        border: "3px solid gold",
        backgroundColor: "#fff8e1", // Soft gold tint
        boxShadow: "0 0 15px rgba(255, 165, 0, 0.8)", // Orange glow
      };
    case "unique":
      return {
        border: "3px solid black",
        backgroundColor: "#000000", // Black background for Unique rarity
        boxShadow: "0 0 20px rgba(0, 0, 0, 0.9)", // Dark black glow
      };
    case "fail":
      return {
        border: "3px solid crimson",
        backgroundColor: "#ffe6e6", // Light crimson tint
        boxShadow: "0 0 18px rgba(255, 0, 0, 0.8)", // Red glow
      };
    case "bonus":
      return {
        border: "3px solid indigo",
        backgroundColor: "#ede7f6", // Lavender tint
        boxShadow: "0 0 12px rgba(75, 0, 130, 0.6)", // Purple glow
      };
    default:
      return {
        border: "1px solid white",
        backgroundColor: "#ffffff",
      };
  }
};
