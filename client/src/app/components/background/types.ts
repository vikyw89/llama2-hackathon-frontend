import { z } from "zod";

const BackgroundProps = z.object({
  className: z.optional(z.string()),
});

export type BackgroundProps = z.infer<typeof BackgroundProps>;
