import { z } from "zod";

const ButtonProps = z.object({
  event: z.object({
    click: z.function(),
  }),
  data: z.object({
    name: z.string(),
  }),
  className: z.optional(z.string()),
});

export type ButtonProps = z.infer<typeof ButtonProps>;
