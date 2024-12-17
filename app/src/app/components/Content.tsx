"use client";

import { Checkbox, Divider, FormControlLabel, Stack } from "@mui/material";

import { Avatar, Box, Button, Paper, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { PrizeCard } from "./PrizeCard";
import { PrizeResultCard } from "./PrizeResultCard";
import { participation1Prizes } from "./prizes/Participation1Prizes";
import { season1Prizes } from "./prizes/Season1Prizes";
import { season2Prizes } from "./prizes/Season2Prizes";
import { season3Prizes } from "./prizes/Season3Prizes";
import { season4Prizes } from "./prizes/Season4Prizes";
import { bonusPlusSpin, bonusSpinAgain } from "./prizes/SpecialBonus";
import { fails } from "./prizes/SpecialFails";
import { Prize } from "./prizes/prize";

export const prizes = [
  ...season1Prizes,
  ...season2Prizes,
  ...season3Prizes,
  ...fails,
  ...bonusPlusSpin,
];

export const SmoothPrizeShuffler = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [selectedPrize, setSelectedPrize] = useState(null);
  const [spinSpeed, setSpinSpeed] = useState(0.5);
  const [includeDemon, setIncludeDemon] = useState(true);
  const [includeSlowbro, setIncludeSlowbro] = useState(false);
  const [isNoSprinkles, setIsNoSprinkles] = useState(false);

  const specialPrizes = [...bonusPlusSpin, ...bonusSpinAgain, ...fails];
  const demonPrizes = includeDemon
    ? [...season1Prizes, ...season2Prizes, ...season3Prizes]
    : [];

  const includeSlowbroPrizes = includeSlowbro ? [...season4Prizes] : [];

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedPrize(null);

    setSpinSpeed(0.1);

    setTimeout(() => {
      let prizesToUse: Prize[] = [];

      if (isNoSprinkles) {
        prizesToUse = [...specialPrizes, ...participation1Prizes].filter(
          (prize) => prize.available
        );
      } else {
        prizesToUse = [
          ...specialPrizes,
          ...demonPrizes,
          ...includeSlowbroPrizes,
        ].filter((prize) => prize.available);
      }
      const winner =
        prizesToUse[Math.floor(Math.random() * prizesToUse.length)];
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
      <Box display="flex" alignItems="center" gap={2} className="mt-6 mb-2">
        <Avatar alt="Demo Logo" src="../items/demon-logo.png" />
        <Typography
          variant="h4"
          className="text-purple-600 mt-1"
          component="h1"
        >
          Demon Prize Wheel
        </Typography>
      </Box>

      <Divider sx={{ width: "100%", borderColor: "#673ab7" }} />

      <Stack direction="row" spacing={2} justifyContent="center">
        <FormControlLabel
          control={
            <Checkbox
              checked={includeDemon}
              onChange={(e) => setIncludeDemon(e.target.checked)}
              color="primary"
            />
          }
          label="Include Demon Items"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={includeSlowbro}
              onChange={(e) => setIncludeSlowbro(e.target.checked)}
              color="primary"
            />
          }
          label="Include Slowbro Items"
        />
      </Stack>

      <Stack direction="row" spacing={2} justifyContent="center">
        <FormControlLabel
          control={
            <Checkbox
              checked={isNoSprinkles}
              onChange={(e) => setIsNoSprinkles(e.target.checked)}
              color="primary"
            />
          }
          label="No Sprinkles"
        />
      </Stack>

      <Divider
        sx={{ width: "100%", borderColor: "#673ab7" }}
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
