/*Vue.directive('register-image', {
  async inserted(el, binding) {
    const imagePath = `${window.miDir}/Game_Trading_Platform_1723693676/binding.value`;
    console.log("_____________Image Path: ", imagePath);
    try {
      // Load the image from the virtual file system
      const imageData = await window.pfs.readFile(imagePath);
      const blob = new Blob([imageData], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);

      // Update the src attribute of the image element directly
      el.src = imageUrl;
      console.log("_____________Image Loaded Successfully");
    } catch (error) {
      console.error(`Error loading image from path ${imagePath}:`, error);
    }
  }
});*/

Vue.component("simple_hero_component_1723746410", {
    template: `
        <section id="hero-section" class="bg-white dark:bg-gray-900 flex-1">
            <div id="hero-container" class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
                <div id="hero-text-container" class="mr-auto place-self-center lg:col-span-7">
                    
                    <div id="hero-title-container-text" class="flex">
                        <h1 id="hero-title" class="flex-1 max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Level Up Your Gaming Experience</h1>
                    </div>

                    <div id="hero-subtitle-container" class="flex">
                        <p id="hero-subtitle" class="flex-1 max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Your One-Stop Shop for All Things Gaming</p>
                    </div>

                    <div id="hero-buttons-container" class="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
                        <div id="hero-button-1-container" class="flex">
                            <a id="hero-button-1" href="https://github.com/themesberg/landwind" class="flex-1  items-center justify-center w-full px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 rounded-lg sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">Browse Games</a>
                        </div>

                        <div id="hero-button-2-container" class="flex">
                            <a id="hero-button-2" href="https://www.figma.com/community/file/1125744163617429490" class="flex-1  items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Sell Your Games</a>
                        </div>
                    </div>
                    
                </div>
                <div id="hero-image-container" class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <!--<img id="hero-image" v-registerimage="/images/metal-gear-ray.jpeg" alt="Hero Image"/>-->
                     <img id="hero-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKb7JcDPe4-gj74KcNdPxJ46TW_Yo0Im832w&s"/>
                </div>
            </div>
        </section>            
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
    directives: {
      registerimage: {
        inserted: function (el, binding) {
          const imagePath = `${window.miDir}/Game_Trading_Platform_1723693676/binding.value`;
          console.log("_____________Image Path: ", imagePath);
          try {
            // Load the image from the virtual file system
            const imageData = window.fs.readFile(imagePath);
            const blob = new Blob([imageData], { type: 'image/jpeg' }); 
            const imageUrl = URL.createObjectURL(blob);

            // Update the src attribute of the image element directly
            el.src = imageUrl;
            console.log("_____________Image Loaded Successfully");
          } catch (error) {
            console.error(`Error loading image from path ${imagePath}:`, error);
          }
        }
      }
    }
});
