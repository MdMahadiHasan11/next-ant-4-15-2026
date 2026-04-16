import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>FlyGhor | Flight Booking</title>
        <meta
          name="description"
          content="Find and book cheap flights, hotels, and holiday packages. Compare flight deals and hotel prices to destinations worldwide with FlyGhor."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p className="text-4xl font-bold text-center mt-20">
          Welcome to FlyGhor
        </p>
        <p className="text-center mt-4 text-lg text-gray-600">
          Find your perfect flight with personalized recommendations.
        </p>
      </main>
    </>
  );
}
