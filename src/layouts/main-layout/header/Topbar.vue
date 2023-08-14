<template>
  <div class="d-flex align-items-stretch flex-shrink-0 gap-3">
    <!--begin::Search-->
    <!-- <div class="d-flex align-items-stretch ms-1 ms-lg-3">
      <KTSearch></KTSearch>
    </div> -->
    <!--end::Search-->

    <!--begin::Activities-->
    <!-- <div class="d-flex align-items-center ms-1 ms-lg-3">
      <div
        class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
        id="kt_activities_toggle"
      >
        <KTIcon icon-name="chart-simple" icon-class="fs-1" />
      </div>
    </div> -->
    <!--end::Activities-->

    <!--begin::Notifications-->
    <!-- <div class="d-flex align-items-center ms-1 ms-lg-3">
      <div
        class="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <KTIcon icon-name="element-plus" icon-class="fs-1" />
      </div>
      <KTNotificationsMenu></KTNotificationsMenu>
    </div> -->
    <!--end::Notifications-->

    <!--begin::Chat-->
    <!-- <div class="d-flex align-items-center ms-1 ms-lg-3">
      <div
        class="btn btn-icon btn-active-light-primary position-relative w-30px h-30px w-md-40px h-md-40px"
        id="kt_drawer_chat_toggle"
      >
        <KTIcon icon-name="message-text-2" icon-class="fs-1" />

        <span
          class="bullet bullet-dot bg-success h-6px w-6px position-absolute translate-middle top-0 start-50 animation-blink"
        >
        </span>
      </div>
    </div> -->
    <!--end::Chat-->

    <!--begin::Quick links-->
    <!-- <div class="d-flex align-items-center ms-1 ms-lg-3">
      <div
        class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <KTIcon icon-name="element-11" icon-class="fs-1" />
      </div>
      <KTQuickLinksMenu></KTQuickLinksMenu>
    </div> -->
    <!--end::Quick links-->

    <!--begin::Theme mode-->
    <div class="d-flex align-items-center ms-1 ms-lg-3 gap-3">
      <img src="/media/icons/duotune/general/setting.svg" alt="">
      <!--begin::Menu toggle-->
      <a
        href="#"
        class="btn btn-icon btn-active-light-primary w-30px h-30px w-md-40px h-md-40px"
        data-kt-menu-trigger="{default:'click', lg: 'hover'}"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <KTIcon
          icon-name="night-day"
          icon-class="theme-light-show fs-2 fs-md-1"
        />
        <KTIcon icon-name="moon" icon-class="theme-dark-show fs-2 fs-md-1" />
      </a>
      <!--begin::Menu toggle-->
      <KTThemeModeSwitcher></KTThemeModeSwitcher>
    </div>
    <!--end::Theme mode-->

    <!--begin::User-->
    <div
      class="d-flex align-items-center ms-1 ms-lg-3"
      id="kt_header_user_menu_toggle"
    >
      <!--begin::Menu-->
      <div
        class="cursor-pointer symbol symbol-30px symbol-md-40px"
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
        data-kt-menu-flip="bottom"
      >
        <img :src="getAssetPath('media/avatars/300-1.jpg')" alt="metronic" class="rounded-circle" />
      </div>
      <KTUserMenu></KTUserMenu>
      <!--end::Menu-->
    </div>
    <!--end::User -->

    <!--begin::Heaeder menu toggle-->
    <div
      class="d-flex align-items-center d-lg-none ms-2 me-n3"
      title="Show header menu"
    >
      <div
        class="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px"
        id="kt_header_menu_mobile_toggle"
      >
        <KTIcon icon-name="text-align-left" icon-class="fs-1" />
      </div>
    </div>
    <!--end::Heaeder menu toggle-->
  </div>
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";
import KTSearch from "@/layouts/main-layout/search/Search.vue";
import KTNotificationsMenu from "@/layouts/main-layout/menus/NotificationsMenu.vue";
import KTQuickLinksMenu from "@/layouts/main-layout/menus/QuickLinksMenu.vue";
import KTUserMenu from "@/layouts/main-layout/menus/UserAccountMenu.vue";
import KTThemeModeSwitcher from "@/layouts/main-layout/theme-mode/ThemeModeSwitcher.vue";

export default defineComponent({
  name: "layout-topbar",
  components: {
    KTSearch,
    KTNotificationsMenu,
    KTQuickLinksMenu,
    KTUserMenu,
    KTThemeModeSwitcher,
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
