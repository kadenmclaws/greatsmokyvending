const links = [
  {
    label: "Foo Bar Machines",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque imperdiet.",
    href: "https://example.com/foo-bar",
  },
  {
    label: "Lorem Ipsum Snacks",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.",
    href: "https://example.com/lorem-ipsum",
  },
  {
    label: "Dolor Sit Beverages",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    href: "https://example.com/dolor-sit",
  },
  {
    label: "Amet Consectetur Candy",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.",
    href: "https://example.com/amet-consectetur",
  },
  {
    label: "Adipiscing Elit Chips",
    description:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    href: "https://example.com/adipiscing-elit",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans dark:bg-zinc-900">
      {/* Header */}
      <header className="bg-white shadow-sm dark:bg-zinc-800">
        <div className="mx-auto max-w-4xl px-6 py-6">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Great Smoky Vending
          </h1>
          <p className="mt-1 text-zinc-500 dark:text-zinc-400">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-4xl px-6 py-12">
        <p className="mb-10 text-lg leading-relaxed text-zinc-600 dark:text-zinc-300">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>

        {/* Button-like link grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(({ label, description, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-2 rounded-2xl border border-zinc-200 bg-white px-6 py-5 shadow-sm transition-all hover:border-zinc-400 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-500"
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
