import { AnimatedLoginForm } from "@/components/auth/login-form"

export default function LoginPage({ onLoginSuccess }: { onLoginSuccess?: () => void }) {
  return (
    <div className="flex min-h-svh w-screen flex-col items-center justify-center p-6 md:p-10">
      <div>
        <AnimatedLoginForm onLoginSuccess={onLoginSuccess} />
      </div>
    </div>
  )
}