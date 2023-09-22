import { Exercises, Hero, SearchExercises } from "../components/fragments"
import UserLayout from "../components/layouts/UserLayout"

const LandingPage = () => {
    return (
        <UserLayout>
            <Hero />
            <SearchExercises />
            <Exercises />
        </UserLayout>
    )
}

export default LandingPage