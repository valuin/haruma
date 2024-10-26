import { z } from 'zod';

export const SignUpFormSchema = z.object({
  email: z.string().email({ message: 'Invalid email address.' }).trim(),
  password: z
    .string()
    .min(8, { message: 'Be at least 8 characters long.' })
    .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
    .regex(/[0-9]/, { message: 'Contain at least one number.' })
    .trim(),
});

export type SignUpState =
  | {
      success: boolean;
      message?: string | null;
      errors?: {
        email?: string[];
        password?: string[];
      };
    }
  | undefined;

export const LoginFormSchema = z.object({
  email: z
    .string()
    .email({
      message: 'Please enter your email.',
    })
    .trim(),
  password: z
    .string()
    .min(1, {
      message: 'Please enter your password.',
    })
    .trim(),
});

export type LoginState =
  | {
      success: boolean;
      message?: string | null;
      errors?: {
        email?: string[];
        password?: string[];
      };
    }
  | undefined;
