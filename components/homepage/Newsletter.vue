<template>
  <section class="bg-gray-400">
    <div class="container px-4 py-32 mx-auto">
      <div class="w-full mx-auto text-left md:w-11/12 xl:w-8/12 md:text-center">
        <h1 class="mb-3 text-4xl font-bold text-gray-900 md:text-5xl md:leading-tight md:font-extrabold">Subscribe to our newsletter.</h1>
        <p class="mb-6 text-lg text-gray-500 md:text-xl md:leading-normal">
          Stay tuned for updates and new products every month.
        </p>
        <form class="grid w-full grid-cols-1 gap-3 pt-1 mx-auto mb-8 lg:grid-cols-6 md:w-7/12">
          <label class="col-auto lg:col-span-4">
            <span class="sr-only">Your Email</span>
            <input class="mt-0 border border-gray-700 p-3 w-full" type="email" placeholder="Enter your email to join" required="true" />
          </label>
          <button class="w-full col-auto bg-black text-white px-5 py-3 rounded-sm lg:col-span-2" type="submit">Get Started</button>
        </form>
      </div>
    </div>
  </section>
</template>