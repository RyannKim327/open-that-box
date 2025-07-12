import { SignupForm } from "@/components/auth/signup-form"

export default function SignupPage({ onSignUpSuccess }: { onSignUpSuccess?: () => void }) {
  return (
    <div className="flex min-h-svh w-screen flex-col items-center justify-center p-6 md:p-10">
      <div>
        <SignupForm onSignUpSuccess={onSignUpSuccess} />
      </div>
    </div>
  )
}
