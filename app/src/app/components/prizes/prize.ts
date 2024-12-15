export interface Prize {
  name: string;
  description: string;
  image: string;
  rarity:
    | "common"
    | "uncommon"
    | "rare"
    | "legendary"
    | "unique"
    | "bonus"
    | "fail";
  available: boolean;
}
