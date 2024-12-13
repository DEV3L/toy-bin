import { Card, CardMedia } from "@mui/material";
import { motion } from "framer-motion";

interface PrizeCardProps {
  prize: { name: string; description: string; image: string };
  isSpinning: boolean;
  spinSpeed: number;
}

export const PrizeCard = ({ prize, isSpinning, spinSpeed }: PrizeCardProps) => {
  return (
    <motion.div
      animate={isSpinning ? { y: [-150, 150] } : { y: 0 }}
      transition={{
        duration: spinSpeed,
        repeat: isSpinning ? Infinity : 0,
        ease: "linear",
        repeatType: "loop",
      }}
    >
      <Card className="flex items-center justify-center">
        <CardMedia
          component="img"
          image={`../items/${prize.image}`}
          alt={prize.name}
          style={{ width: "auto", height: "350px" }}
        />
      </Card>
    </motion.div>
  );
};
