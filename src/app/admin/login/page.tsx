import { LoginForm } from './LoginForm';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary/50">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-headline">Admin Access</CardTitle>
          <CardDescription>Enter the password to access the dashboard.</CardDescription>
        </CardHeader>
        <LoginForm />
      </Card>
    </div>
  );
}
