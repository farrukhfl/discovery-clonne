import CarousalBannerWrapper from "@/components/CarousalBannerWrapper";
import MoviesCarousel from "@/components/MoviesCarousel";
import { getPopularMovies, getTopRatedMovies, getUpcomingMovies } from "@/lib/getMovies";

export default async function Home() {

  const upcomingMovies = await getUpcomingMovies()
  const topRatedMovies = await getTopRatedMovies()
  const popularMovies = await getPopularMovies()


  return (
    <main>
      <h1>Disney</h1>
    <div className="flex flex-col space-y-2 xl:-mt-48">

    <CarousalBannerWrapper />
    <MoviesCarousel movies={upcomingMovies}  title="Upcoming" />
    <MoviesCarousel movies={topRatedMovies}  title="Top Rated"/>
    <MoviesCarousel movies={popularMovies}  title="Popular"/>


    </div>

    </main>
  )
}
