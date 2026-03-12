import z from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";

export const movieSchema = z.object({
  title: z
    .string({
      error: (iss) =>
        iss.input === undefined || iss.input === ""
          ? "Field is required."
          : "Invalid input.",
    })
    .min(2, "Title is required."),
  // year: z.coerce.number<number>().min(4, "Year is required."),
  year: z.coerce
    .number<number>("Year is required.")
    .refine(
      (val) => val === 0 || (val >= 1900 && val <= new Date().getFullYear()),
      {
        message: `Year must be 1900 or greater and not in the future`,
      },
    ),
  director: z.object({
    name: z.string().min(3, "Director name is required."),
    phoneNo: z
      .string()
      .optional()
      .refine((val) => {
        if (!val) return true; // Allow empty value
        return isValidPhoneNumber(val); // Validate phone number format
      }, "Invalid phone number format."),
  }),
});

export type movieSchemaForm = z.infer<typeof movieSchema>;
