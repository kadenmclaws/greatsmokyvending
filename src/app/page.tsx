import Image from "next/image";

const links = [
  {
    label: "Mountain Motor House Inn Snack",
    description: "See latest lineup",
    href: "/inv/mmhi-snack.jpg",
  },
  {
    label: "Highlands Bldg #1 Snack",
    description: "See latest lineup",
    href: "/inv/hl-1-snack.jpg",
  },
  {
    label: "Highlands Bldg #1 Drink",
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
        <p className="mb-10 text-lg leading-relaxed text-zinc-900 dark:text-zinc-200">
          We provide convenient and modern vending machine solutions for your
          business or organization, whether as a benefit for your employees or
          amenity to your customers.
        </p>
        <p className="mb-6 text-lg text-zinc-900 dark:text-zinc-50">
          We are looking for additional locations to service in the Sevier
          County area. If you are a business owner or manager interested in
          hosting a vending machine, please reach out to us by phone: (865)
          280-2107
          <br />
          <br />
          Thank you!
          <br />
        </p>
        <hr className="my-8 border-zinc-300 dark:border-zinc-700" />
        <p className="mb-6 text-lg text-zinc-900 dark:text-zinc-50">
          We keep a quick and easy online reference to current machine
          inventory, seen below:
        </p>

        {/* Button-like link grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map(({ label, description, href }) => (
            <a
              key={href}
              href={href}
              // target="_blank"
              rel="noopener noreferrer"
              className="relative flex overflow-auto flex-col gap-2 hover:-translate-y-1 rounded-2xl border border-zinc-300 bg-white shadow-sm transition-all hover:border-zinc-400 hover:shadow-md dark:border-zinc-700 dark:bg-zinc-800 dark:hover:border-zinc-500"
            >
              <div className="aspect-4/3 relative">
                <Image
                  src={href}
                  alt={label}
                  // width={400}
                  // height={300}
                  fill
                  // layout="responsive"
                  className="rounded-t-2xl object-cover"
                  sizes="575px"
                />
              </div>
              <div className=" px-6 py-5">
                <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                  {label}
                </span>
                <br />
                <span className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Click to see current selections →
                </span>
              </div>
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
