<template>
  <!--begin::Col-->

  <div>
    <KTIcon :icon-name=icon :icon-class="`fs-2 fs-lg-1 text-${color}`" />
    <h5 class="title">{{ title }}</h5>
    <p class="text-muted bodysmall">{{ description }}</p>
  </div>

  <!-- <div class="">
    <div class="card">
      <div class="card-body d-flex flex-start flex-column p-9">
      
        <div class="mb-5">
          <div class="symbol symbol-75px symbol-circle">
            <img v-if="avatar" :src="avatar" alt="" />
            <span
              v-else
              :class="`bg-light-${color} text-${color}`"
              class="symbol-label fs-5 fw-bold"
              >{{ initials }}</span
            >
            <div
              v-if="online"
              class="symbol-badge bg-success start-100 top-100 border-4 h-15px w-15px ms-n3 mt-n3"
            ></div>
          </div>
        </div>

        <a
          href="#"
          class="fs-4 text-gray-800 text-hover-primary fw-bold mb-0"
          >{{ name }}</a
        >

        <div class="fw-semobold text-gray-400 mb-6">{{ position }}</div>

        <div class="d-flex flex-center flex-wrap mb-5">
          <div
            class="border border-gray-300 border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"
          >
            <div class="fs-6 fw-bold text-gray-700">{{ avgEarnings }}</div>
            <div class="fw-semobold text-gray-400">Avg. Earnings</div>
          </div>

          <div
            class="border border-gray-300 border-dashed rounded min-w-125px py-3 mx-3 px-4 mb-3"
          >
            <div class="fs-6 fw-bold text-gray-700">{{ totalSales }}</div>
            <div class="fw-semobold text-gray-400">Total Sales</div>
          </div>
        </div>

        <button
          class="btn btn-sm btn-light-primary fw-bold"
          data-kt-drawer-toggle="true"
          data-kt-drawer-target="#kt_drawer_chat"
          @click="openDrawer()"
        >
          Send Message
        </button>
      
      
      </div>
    </div>
  </div> -->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DrawerComponent } from "@/assets/ts/components/_DrawerComponent";

export default defineComponent({
  name: "card-4",
  components: {},
  props: {
    cardClasses: String,

    avatar: String,

    online: Boolean,

    initials: String,

    color: String,

    name: String,

    position: String,

    avgEarnings: String,

    totalSales: String,

    icon: String,

    title: String,

    description: String,
  },
  setup() {
    const openDrawer = () => {
      DrawerComponent?.getInstance("kt_drawer_chat")?.toggle();
    };

    return {
      openDrawer,
    };
  },
});
</script>
