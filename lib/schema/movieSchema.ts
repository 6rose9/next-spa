import z from "zod";

export const movieSchema = z.object({
  title: z
    .string({
      error: (iss) =>
        iss.input === undefined || iss.input === ""
          ? "Field is required."
          : "Invalid input.",
    })
    .min(2, "Title is required."),
  year: z.coerce.number<number>().min(4, "Year is required."),
  director: z.object({
    name: z.string().min(3, "Director name is required."),
    phoneNo: z.string().min(9, "Phone number is required."),
  }),
});

export type movieSchemaForm = z.infer<typeof movieSchema>;
