<template>
  <div>
    <Hero />
    <Clients />
    <CallToAction />
    <FeaturedSectionSteps />
    <Features />
    <Testimonials />
    <FeaturedBlogs />
    <Newsletter />
  </div>
</template>

<script>
import Hero from "~/components/homepage/Hero"
import Clients from "~/components/homepage/Clients"
import CallToAction from "~/components/homepage/CallToAction"
import FeaturedSectionSteps from "~/components/homepage/FeaturedSectionSteps"
import Features from "~/components/homepage/Features"
import Testimonials from "~/components/homepage/Testimonials"
import FeaturedBlogs from "~/components/homepage/FeaturedBlogs"
import Newsletter from "~/components/homepage/Newsletter"


export default {
  components: {
    Hero,
    Clients,
    CallToAction,
    Features,
    FeaturedBlogs,
    Testimonials,
    Newsletter,
    FeaturedSectionSteps
  }
}
</script>