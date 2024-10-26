'use server';

import bcrypt from 'bcrypt';
import { redirect } from 'next/navigation';
import { z } from 'zod';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@example.com',
    password: 'jd123',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'janedoe@example.com',
    password: 'jd123',
  },
];

const SignUpFormSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters long.' })
    .max(50, { message: 'Name should not exceed 50 characters.' })
    .trim(),
  phone: z
    .string()
    .regex(
      /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
      'Please enter a valid phone number.'
    )
    .trim(),
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
        name?: string[];
        phone?: string[];
        email?: string[];
        password?: string[];
      };
    }
  | undefined;

export async function signup(prevState: SignUpState, formData: FormData) {
  const validatedFields = SignUpFormSchema.safeParse({
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  const existingUser = users.filter((user) => user.email === email);

  if (existingUser.length > 0) {
    return {
      success: false,
      errors: {
        email: ['Email already exists, please use a different email or login.'],
      },
    };
  }

  console.log('User created');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', hashedPassword);

  redirect('/');
}

const LoginFormSchema = z.object({
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

export async function login(prevState: LoginState, formData: FormData) {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validatedFields.data;
  const existingUser = users.filter((user) => user.email === email);

  if (!existingUser[0]) {
    return {
      success: false,
      errors: {
        email: ['Email not found.'],
      },
    };
  }

  const passwordMatch = existingUser[0].password === password;
  if (!passwordMatch) {
    return {
      success: false,
      errors: {
        password: ['Incorrect password.'],
      },
    };
  }

  console.log('Login successful');
  console.log('User:', existingUser[0].email);
  console.log('Email:', email);
  console.log('Password:', password);

  redirect('/');
}
