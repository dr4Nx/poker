import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { BadgeDollarSign } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import poker from "../assets/poker.png"

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Poker@Berkeley", href: "https://www.pokeratberkeley.org/" },
  { label: "GTO Wizard", href: "https://app.gtowizard.com/" },
  { label: "How To Play", href: "https://upswingpoker.com/poker-rules/" },
];

export const testimonials = [
  {
    user: "Evan Luo",
    company: "Berkeley First-Year & Website Designer",
    image: poker,
    text: "I love playing poker! It's probably my favorite game at the moment. I especially love meeting people at Poker @ Berkeley game nights.",
  },
  {
    user: "Nathan Dai",
    company: "Berkeley Clown",
    image: poker,
    text: "I hate losing money. It makes me mad. Poker sucks. Also, I think Evan is a GTO bot.",
  },
  {
    user: "Shreyas Thumathy",
    company: "Berkeley Transfer",
    image: poker,
    text: "I lost all my money the other night ($10). But I met some super cool people. I'll probably play again.",
  },
  {
    user: "Arshia Nayebnazar",
    company: "Berkeley Freshman",
    image: poker,
    text: "Evan taught me the game 3 weeks ago. He keeps trying to tell me to play for money. Does anyone know why?",
  },
  {
    user: "Michael Wilson",
    company: "Berkeley Alumni",
    image: poker,
    text: "I made $2000 off random Berkeley students. Probably my most profitable venture, honestly.",
  },
  {
    user: "Emily Davis",
    company: "Berkeley Alumni",
    image: poker,
    text: "I always made sure to sit at the table with this guy named Michael. He got super lucky playing against everyone else, but I could read him like a book.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Practice with GTO Wizard",
    description:
      "Play with the statistically best strategy against opponents. Build your unique playstyle and learn how to win.",
  },
  {
    icon: <BadgeDollarSign />,
    text: "Play For Any Amount",
    description:
      "Play against your friends or strangers. You can play for pennies or thousands; however much you think you can risk",
  },
  {
    icon: <ShieldHalf />,
    text: "Completely Fair",
    description:
      "Unlike blackjack or other rigged games, poker is zero-sum. What one loses is won by someone else; and it can be won back.",
  },
  {
    icon: <BatteryCharging />,
    text: "Infinite Fun",
    description:
      "You don't have to have a poker face on all the time! Play with friends after a long day to unwind.",
  },
  {
    icon: <PlugZap />,
    text: "Feel the Rush",
    description:
      "Go All-In in poker and feel the same rush of hoping for a call or praying for a fold no matter what you're betting.",
  },
  {
    icon: <GlobeLock />,
    text: "Analyze Afterwards",
    description:
      "Gain valuable insights into your hands by replaying them at home. Use what you learn to improve.",
  },
];

export const checklistItems = [
  {
    title: "Zero-sum",
    description:
      "Everyone gets a fair shot at victory. Unlike blackjack or slots, the deck can't be rigged against you.",
  },
  {
    title: "Online Resources",
    description:
      "With online tools like GTOWizard, anyone can learn how to play well.",
  },
  {
    title: "Dozens of Variations",
    description:
      "Don't want to think too hard? Play double board PLO bomb pots!",
  },
  {
    title: "Skill Factor",
    description:
      "Every player has the same amount of information. Whether you are a winning or losing player over time is in your control.",
  },
];

export const pricingOptions = [
  {
    title: "Low",
    price: "$0-$10",
    features: [
      "Learn to Play",
      "Casual Meets",
      "No Friendships Lost",
      "Low Risk, Play Loose",
    ],
  },
  {
    title: "Regular",
    price: "$20-$100",
    features: [
      "Make Some Money",
      "Meet New People",
      "More Serious Players",
      "Gain Experience",
    ],
  },
  {
    title: "Pro",
    price: "$250+",
    features: [
      "Private/Casino Games",
      "Earn Respect",
      "Win or Lose Big",
      "Play Against Experts",
    ],
  },
];

export const resourcesLinks = [
  { href: "https://upswingpoker.com/poker-rules/", text: "Getting Started" },
  { href: "https://app.gtowizard.com/", text: "GTOWizard" },
  { href: "https://www.youtube.com/@BradOwenPoker", text: "Brad Owen" },
  { href: "https://www.youtube.com/watch?v=OTkq4OsG_Yc&list=PLUl4u3cNGP61kfOW3zAIfpNhf0piao8oo", text: "MIT Poker Theory" },
  { href: "https://www.reddit.com/r/poker/", text: "r/poker" },
];

export const platformLinks = [
  { href: "https://www.pokeratberkeley.org/index.html", text: "Poker @ Berkeley" },
  { href: "https://stat198-poker.github.io/", text: "Poker DeCal" }
];

export const communityLinks = [
  { href: "https://www.pokeratberkeley.org/tournament.html", text: "Poker @ Berkeley Tournament" },
  { href: "https://www.cardplayer.com/poker-tournaments", text: "Tournaments" },
];
