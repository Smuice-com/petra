<template>
<footer class="container px-4 py-12 mx-auto border-t border-solid border-gray-300">
  <div class="grid grid-cols-2 gap-10 mb-3 md:grid-cols-3 lg:grid-cols-11 lg:gap-20">
    <div class="col-span-3">
      <a href="#" class="flex items-center">
        <Logo />
      </a>
      <p class="my-4 text-xs leading-normal text-gray-600">
        Empower your business with <strong> all the right tools</strong> to accept online payments and provide the best customer experience.

      </p>
    </div>
    <nav class="col-span-1 md:col-span-1 lg:col-span-2">
      <p class="mb-3 text-md font-semibold text-gray-900 tracking-wider">Product</p>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">Features</a>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">Pricing</a>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">Feedback</a>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">FAQs</a>
    </nav>
    <nav class="col-span-2 md:col-span-1 lg:col-span-2">
      <p class="mb-3 text-md font-semibold text-gray-900 tracking-wider">Support</p>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">Chat</a>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#"> Email Support </a>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">GDPR</a>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#"> Help </a>
    </nav>
    <nav class="col-span-1 md:col-span-1 lg:col-span-2">
      <p class="mb-3 text-md font-semibold text-gray-900 tracking-wider">Resources</p>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">Blog</a>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#"> Twitter </a>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">Alternatives</a>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">Why feature vote?</a>
    </nav>
    <nav class="col-span-1 md:col-span-1 lg:col-span-2">
      <p class="mb-3 text-md font-semibold text-gray-900 tracking-wider">Company</p>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">About Us</a>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">Privacy</a>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">Terms</a>
      <a class="flex mb-3 text-sm font-medium text-gray-600 transition md:mb-2 hover:text-gray-900" href="#">Status</a>
    </nav>
  </div>
  <div class="flex flex-col items-start justify-between pt-10 mt-10 border-t border-gray-100 md:flex-row md:items-center">
    <p class="mb-0 text-xs text-left text-gray-600 md:mb-0">Copyright &copy; 2020 Petra</p>
  </div>
  <Cookie />
</footer>

</template>

<script> 
import Logo from "~/components/Logo"
import Cookie from "~/components/Cookie"

export default {
  components: {
    Logo,
    Cookie,
  },
  data() {
    return {
      one: false,
      open: false,
      two: false
    };
  },
  methods: {
  }
};
</script>