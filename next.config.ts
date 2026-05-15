import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

  /*
    /h1s = Highlands Bldg #1 Snack
    /h1d = Highlands Bldg #1 Drink
    /mmhs = Mountain Motor House Inn Snack
  
  */

  redirects: async () => [
    {
      source: "/h1s",
      destination: "/inv/hl-1-snack.jpg",
      permanent: false,
    },
    {
      source: "/h1d",
      destination: "/inv/hl-1-drink.jpg",
      permanent: false,
    },
    {
      source: "/mmhs",
      destination: "/inv/mmhi-snack.jpg",
      permanent: false,
    },
  ],
};

export default nextConfig;
