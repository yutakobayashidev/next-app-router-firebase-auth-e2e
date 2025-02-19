"use client";

import { signInWithGoogle } from "@/libs/firebase/auth";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const onGoogleLogin = async () => {
    const currentUser = await signInWithGoogle();

    if (currentUser != null) {
      router.refresh();
    }
  };

  return <button onClick={onGoogleLogin}>Sign in with Google</button>;
}
