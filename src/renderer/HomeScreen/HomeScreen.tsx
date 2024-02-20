import AddButton from '../AddButton/AddButton';

export default function HomeScreen() {
  return (
    <>
      <section className="flex w-screen h-screen bg-gradient-to-b from-primary-gradient to-secondary-gradient">
        <div className="flex items-center justify-center text-black  max-w-xs text-3xl">
          ERB + TAILWIND = ❤
        </div>
      </section>
      <AddButton />
    </>
  );
}
