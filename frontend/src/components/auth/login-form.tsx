import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { post } from "@/utils/access"

export default function LoginForm({
  className,
  onLoginSuccess,
  ...props
}) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const send_login = async () => {
    const response = await post("/login", {
      username, password
    })
    
    if (!response.error) {
      alert("Login successful!")
      localStorage.setItem("token", JSON.stringify(response))
      onLoginSuccess?.()
    } else if(response.error){
      alert(response.error)
    }
  }

  const handleSubmit = () => {
    send_login()
  }

  return (
    <div className={`flex flex-col gap-4 sm:gap-6 w-full max-w-6xl mx-auto ${className}`} {...props}>
      <Card className="overflow-hidden">
        <CardContent className="grid p-0 lg:grid-cols-2">
          <div className="p-4 sm:p-6 lg:p-8">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col items-center text-center">
                <h2 className="text-xl sm:text-2xl font-bold">Welcome back</h2>
                <p className="text-sm sm:text-base text-muted-foreground text-balance">
                  Login to your Acude account
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="grid gap-2 sm:gap-3">
                  <Label htmlFor="email" className="text-sm">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    className="h-10 sm:h-11"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="grid gap-2 sm:gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password" className="text-sm">Password</Label>
                    <a
                      href="#"
                      className="ml-auto text-xs sm:text-xs underline-offset-2 hover:underline transition-colors"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    required
                    className="h-10 sm:h-11"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full h-10 sm:h-11"
                  onClick={handleSubmit}
                >
                  Login
                </Button>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="relative text-center text-xs sm:text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
                  <span className="bg-card text-muted-foreground relative z-10 px-2">
                    Or continue with
                  </span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4">
                  <Button
                    variant="outline"
                    className="w-full h-10 sm:h-11"
                    type="button"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="currentColor"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="currentColor"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                    <span className="sr-only">Google</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-10 sm:h-11"
                    type="button"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    <span className="sr-only">Twitter</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full h-10 sm:h-11"
                    type="button"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    <span className="sr-only">GitHub</span>
                  </Button>
                </div>
                <div className="text-center text-xs sm:text-sm">
                  Don&apos;t have an account?{" "}
                  <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted relative hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg"
                alt="Image"
                className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
              />
            </div>
          </div>
        </CardContent>
      </Card>
      <div className="text-muted-foreground text-center text-xs sm:text-sm text-balance">
        By clicking continue, you agree to our{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">
          Privacy Policy
        </a>
        .
      </div>
    </div>
  )
}
