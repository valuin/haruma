'use server';

import {
  LoginFormSchema,
  LoginState,
  SignUpFormSchema,
  SignUpState,
} from '@/lib/definitions';
import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

export async function signup(prevState: SignUpState, formData: FormData) {
  const supabase = await createClient();

  const validatedFields = SignUpFormSchema.safeParse({
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

  const { error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  redirect('/profile');
}

export async function login(prevState: LoginState, formData: FormData) {
  const supabase = await createClient();

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

  const { error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });

  if (error) {
    return {
      success: false,
      message: error.message,
    };
  }

  revalidatePath('/', 'layout');
  redirect('/profile');
}

export async function signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect('/login');
}
