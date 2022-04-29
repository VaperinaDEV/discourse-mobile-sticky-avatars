import StickyAvatarsMobile from "../lib/mobile-sticky-avatars";

export default {
  name: "mobile-sticky-avatars",
  after: "inject-objects",

  initialize(container) {
    this._stickyAvatars = StickyAvatarsMobile.init(container);
  },

  teardown() {
    this._stickyAvatars?.destroy();
  },
};
