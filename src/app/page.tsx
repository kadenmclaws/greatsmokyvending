import Image from "next/image";

const links = [
  // {
  //   label: "Mountain Motor House Inn Snack",
  //   description: "See latest lineup",
  //   href: "/inv/mmhi-snack.jpg",
  // },
  // {
  //   label: "Highlands Bldg One Snack",
  //   description: "See latest lineup",
  //   href: "/inv/hl-1-snack.jpg",
  // },
  {
    label: "Highlands Bldg One Drink",
    description: "See latest lineup",
    href: "/inv/hl-1-drink.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans dark:bg-zinc-900">
      {/* Header */}
      <header className="bg-white shadow-sm dark:bg-zinc-800">
        <div className="mx-auto max-w-4xl text-center px-6 py-6">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            <Image
              src="/logo.png"
              alt="Great Smoky Vending Logo"
              width={170}
              height={170}
              className="inline-block mr-3"
              loading="eager"
            />
          </h1>
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">
            Quality Vending Machines for Sevier County TN
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <p className="mb-10 text-lg leading-relaxed text-zinc-800 dark:text-zinc-300">
          We provide convenient and modern vending machine solutions for your
          business or organization, whether as a benefit for your employees or
          amenity to your customers. We keep a quick and easy online reference
          to current machine inventory, seen below. If you like what you see or
          need a vending machine solution, please reach out us by phone: (865)
          280-2107
        </p>

        {/* Button-like link grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(({ label, description, href }) => (
            <a
              key={href}
              href={href}
              // target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 hover:-translate-y-1 rounded-2xl border border-zinc-200 bg-white px-6 py-5 shadow-sm transition-all hover:border-zinc-400 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-500"
            >
              <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {label} →
              </span>
              <span className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {description}
              </span>
            </a>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-200 py-6 text-center text-sm text-zinc-400 dark:border-zinc-700 dark:text-zinc-500">
        © {new Date().getFullYear()} Great Smoky Vending. All rights reserved.
      </footer>
    </div>
  );
}
