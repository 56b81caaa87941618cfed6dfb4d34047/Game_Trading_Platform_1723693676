/* Summary: The section has a blurred radial gradient background and a call-to-action (CTA) content block.
It is centered on the page and includes a gradient-based title, a subtitle, a paragraph of text, and a button with a gradient background.
*/
Vue.directive('register-image', {
  async bind(el, binding) {
    const imagePath = binding.value;

    try {
      // Load the image from the virtual file system
      const imageData = await window.pfs.readFile(imagePath);
      const blob = new Blob([imageData], { type: 'image/jpeg' });
      const imageUrl = URL.createObjectURL(blob);

      // Update the src attribute of the image element directly
      el.src = imageUrl;
    } catch (error) {
      console.error(`Error loading image from path ${imagePath}:`, error);
    }
  }
});

Vue.component("purple_background_cta_component_1723693679", {
    template: `
    <section id="cta-section-container">
        <div id="section-container" class="max-w-6xl mx-auto px-4 sm:px-6 bg-green-900">
            <div id="content-container" class="relative px-8 py-12 md:py-20 rounded-3xl overflow-hidden bg-green-800">
                <!-- Radial gradient -->
                <div id="radial-gradient" class="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square" aria-hidden="true">
                    <div id="radial-gradient-outer" class="absolute inset-0 translate-z-0 rounded-full blur-120 opacity-70 bg-green-700" :class="radialGradientPrimaryStyle"></div>
                    <div id="radial-gradient-inner" class="absolute w-1/4 h-1/4 translate-z-0 rounded-full blur-40 bg-green-600" :class="radialGradientSecondaryStyle">
                    </div>
                </div>
                <!-- Content -->
                <div id="asdf">
                    <img id="asdf-image" class="max-w-none" v-register-image="/images/metal-gear-ray.jpeg" width="512" height="512">
                </div>
            </div>
        </div>
    </section>`,
        data() {
            return {
                expanded: false, 
                tab: null,
                radialGradientPrimaryStyle: "bg-green-900",
                radialGradientSecondaryStyle: "bg-green-800",
                stopColorPrimaryStyle: "#064e3b",
                stopColorSecondaryStyle: "#065f46",
                transparentTextStyle: "text-transparent",
                contentSubtitleStyle: "bg-gradient-to-r from-green-900 to-green-700",
                contentCtaTitleStyle: "bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60",
                contentBodyStyle: "text-slate-400",
                contentCtaButtonPrimaryStyle:"text-slate-900",
                contentCtaButtonGradientStyle: "bg-gradient-to-r from-white/80 via-white to-white/80",
                contentCtaButtonHoverStyle: "hover:bg-white",
                contentCtaArrowStyle: "text-green-900"
            };
        },
    });
                    