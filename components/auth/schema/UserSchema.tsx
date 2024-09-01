import { z } from "zod";

const requiredString = (
  min: number,
  max: number,
  minMsg: string,
  maxMsg: string
) => z.string().trim().min(min, minMsg).max(max, maxMsg);

const UserSchema = z.object({
  email: z.string().trim().email("Invalid email."),
  first_name: requiredString(
    2,
    55,
    "First name is too short.",
    "First name is too long."
  ),
  last_name: requiredString(
    2,
    55,
    "Last name is too short.",
    "Last name is too long."
  ),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters.")
    .regex(/[a-z]/, "Lowercase letter required.")
    .regex(/[A-Z]/, "Uppercase letter required.")
    .regex(/[0-9]/, "Digit required.")
    .regex(/[@$!%*?&]/, "Special character required."),
});

export default UserSchema;
