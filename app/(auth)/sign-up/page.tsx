import AuthForm from '@/components/AuthForm';

const SignUp = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up" />
      <h1 className="text-red-500 text-4xl font-bold">Test Tailwind</h1>
    </section>
  );
};

export default SignUp;

