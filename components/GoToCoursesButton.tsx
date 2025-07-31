// components/GoToCoursesButton.tsx
"use client";

import { useRouter } from "next/navigation";

export default function GoToCoursesButton() {
  const router = useRouter();
  return <button onClick={() => router.push("/courses")}>Go to Courses</button>;
}
