import { SvgIconComponent } from "@mui/icons-material";
import { ReactNode } from "react";
import { z } from "zod";

const LandingCardProps = z.object({
  title: z.string(),
  description: z.string(),
  icon: z.custom<ReactNode>(),
  className: z.optional(z.string()),
  index: z.optional(z.number()),
});

export type LandingCardProps = z.infer<typeof LandingCardProps>;
