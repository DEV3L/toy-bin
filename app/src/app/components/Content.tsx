"use client";

import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PrizeCard } from "./PrizeCard";
import { PrizeResultCard } from "./PrizeResultCard";
import { prizes } from "./prizes/prizes";

export const SmoothPrizeShuffler = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [spinSpeed, setSpinSpeed] = useState(0.5);

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedPrize(null);

    setSpinSpeed(0.1);

    setTimeout(() => {
      const winner = prizes[Math.floor(Math.random() * prizes.length)];
      // @ts-expect-error ignore type error
      setSelectedPrize(winner);
      setIsSpinning(false);
    }, 3500);
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      p={2}
      maxWidth="md"
      mx="auto"
    >
      {/* Title with Avatar */}
      <Box display="flex" alignItems="center" gap={2} className="mt-6 mb-4">
        <Avatar alt="Demo Logo" src="../items/demon-logo.jpg" />
        <Typography
          variant="h4"
          className="text-purple-600 mt-1"
          component="h1"
        >
          Demon Prize Wheel
        </Typography>
      </Box>

      <hr
        style={{ width: "100%", height: "1px", borderColor: "#673ab7" }}
        className="mb-4"
      />

      {/* Prize Display */}
      <Paper
        elevation={3}
        sx={{
          width: "100%",
          height: isSpinning ? "30rem" : "auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          position: "relative",
          padding: 2,
        }}
      >
        <AnimatePresence mode="wait">
          {isSpinning ? (
            <motion.div
              key="spinning"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div className="flex flex-col gap-2">
                {[...prizes, ...prizes].map((prize, index) => (
                  <PrizeCard
                    key={index}
                    prize={prize}
                    isSpinning={isSpinning}
                    spinSpeed={spinSpeed}
                  />
                ))}
              </motion.div>
            </motion.div>
          ) : selectedPrize ? (
            <PrizeResultCard selectedPrize={selectedPrize} />
          ) : (
            <Typography variant="h6" color="textSecondary" align="center">
              Press SPIN to try your luck!
            </Typography>
          )}
        </AnimatePresence>
      </Paper>

      {/* Spin Button */}
      <Button
        onClick={spin}
        disabled={isSpinning}
        variant="contained"
        color="primary"
        sx={{
          width: "7.5rem",
          height: "7.5rem",
          borderRadius: "50%",
          fontSize: "1.5rem",
          fontWeight: "bold",
          background: "linear-gradient(to bottom right, #673ab7, #2196f3)",
          "&:hover": {
            background: "linear-gradient(to bottom right, #5e35b1, #1e88e5)",
          },
          transition: "all 0.2s",
        }}
      >
        {isSpinning ? "Rizzing" : "SPIN!"}
      </Button>
    </Box>
  );
};
