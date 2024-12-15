import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Prize } from "./prizes/prize";
import { getRarityStyles } from "./prizes/prizeRarity";

interface PrizeResultCardProps {
  selectedPrize: Prize | null;
}

export const PrizeResultCard = ({ selectedPrize }: PrizeResultCardProps) => {
  if (!selectedPrize) return null;

  const rarityStyles = getRarityStyles(selectedPrize.rarity);

  return (
    <motion.div
      key="result"
      className="flex justify-center p-4 w-full"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", duration: 0.6 }}
    >
      <Card className="w-full max-w-md">
        <CardContent>
          <motion.div
            className="text-2xl font-bold text-purple-600 mb-2"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Typography variant="h5" component="div">
              {selectedPrize.name}
            </Typography>
          </motion.div>
          <motion.div
            className="text-gray-600"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Typography variant="body2" color="textSecondary">
              {selectedPrize.description}
            </Typography>
          </motion.div>
          <motion.div
            className="text-gray-600 mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <img
              style={rarityStyles}
              src={`../items/${selectedPrize.image}`}
              alt={selectedPrize.name}
              className="w-full h-auto"
            />
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};
