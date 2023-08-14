<template>
  <!--begin::Col-->
  <div class="col-md-6 col-xxl-4">
    <!--begin::Card-->
    <div class="" :class="cardClasses">
      <!--begin::Card body-->
      <div class="card-body d-flex flex-start flex-column p-0">
        <!--begin::Avatar-->

        <KTIcon
          :icon-name="icon"
          :icon-class="`fs-2tx text-${color} me-4 mb-3`"
        />

        <div v-if="initials">

          <div v-if="avatar" class="mb-5">
            <img :src="avatar" alt="image" />
            <div
              v-if="online"
              class="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3"
            ></div>
          </div>
          <div v-else class="mb-5">
            <span
              :class="`text-${color} bg-light-${color}`"
              class="symbol-label fs-1x fw-semobold"
              >{{ initials }}</span
            >
            <div
              v-if="online"
              class="bg-success position-absolute rounded-circle translate-middle start-100 top-100 border border-4 border-white h-15px w-15px ms-n3 mt-n3"
            ></div>
          </div>
        </div>

        <!--end::Avatar-->

        <!--begin::Name-->

        <!-- <a
          href="#"
          class="fs-4 text-gray-800 text-hover-primary fw-bold mb-0"
          >{{ name }}</a
        > -->

          <h1>{{ name }}</h1>

        <!--end::Name-->

        <!--begin::Position-->
        <div class="fw-semobold text-muted mb-6 card-description">{{ position }}</div>
        <!--end::Position-->

        <!--begin::Info-->
        <!-- <div class="d-flex flex-center flex-wrap mb-5">
          
          <div
            class="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"
          >
            <div class="fs-6 fw-bold text-gray-700">{{ avgEarnings }}</div>
            <div class="fw-semobold text-gray-400">Avg. Earnings</div>
          </div>
        


          <div
            class="border border-dashed rounded min-w-125px py-3 px-4 mx-3 mb-3"
          >
            <div class="fs-6 fw-bold text-gray-700">{{ totalSales }}</div>
            <div class="fw-semobold text-gray-400">Total Sales</div>
          </div>
        
        </div> -->
        <!--end::Info-->

        <!--begin::Follow-->
        <div class="d-flex gap-6">

          <a v-if="connected" href="#" class="btn card-btn btn-light-primary">
          {{ buttonText1 }}
          </a>
          <a v-else href="#" class="btn card-btn btn-light-primary">
          {{ buttonText1 }}
          </a>
  
          <a v-if="connected" href="#" class="btn card-btn btn-light-primary">
            {{ buttonText2 }}
          </a>
          <a v-else href="#" class="btn card-btn btn-light-primary">
            {{ buttonText2 }}
          </a>

        </div>

        <!--end::Follow-->
      </div>
      <!--begin::Card body-->
    </div>
    <!--begin::Card-->
  </div>
  <!--end::Col-->
</template>

<script lang="ts">
import { getAssetPath } from "@/core/helpers/assets";
import { defineComponent } from "vue";

export default defineComponent({
  name: "card-3",
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

    connected: Boolean,

    icon: String,

    buttonText1: String,

    buttonText2: String
  },
  setup() {
    return {
      getAssetPath,
    };
  },
});
</script>
