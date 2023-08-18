<template>
    <!--begin::Modal - Create account-->
    <div :class="[modelValue ? 'show d-block' : '', 'modal fade']" id="kt_modal_status" ref="statusModalRef" tabindex="-1" aria-hidden="true">
        <!--begin::Modal dialog-->
        <div class="modal-dialog mw-440px">
            <!--begin::Modal content-->
            <div class="modal-content">
                <!--begin::Modal header-->
                <div class="modal-header">
                    <div class="modal-block d-flex justify-content-between">
                        <div class="d-flex align-items-baseline gap-4">
                            <KTIcon 
                                icon-name="address-book"
                                class="text-primary body"  
                            />
                            <p class="body">Check call</p>
                        </div>  

                        <div>
                            <button @click="handleCloseModal" class="cancel">x</button>
                        </div>
                    </div>

                    <div class="modal-block d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-baseline gap-4">
                            <span 
                                class="status-section"
                                :style="{ 
                                    backgroundColor: statuses[data?.status]?.color,
                                    border: data?.status === 'Resolved' ? '2px solid red' : 'none' 
                                }"
                            >
                                {{ data?.status }}
                            </span>
                        </div>  
                        
                        <div>
                            <div class="d-flex gap-4">
                                <img :src="data?.avatar" class="avatar">
                                <div class="d-flex flex-column">
                                    <h5 class="body bodylarge">{{ data?.callerName }}</h5>
                                    <p class="phoneNumber">{{ data?.phoneNumber }}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-block mt-12">
                        <div class="d-flex flex-column align-items-center gap-3">
                            <h6 class="heading-6">Open Time</h6>
                            <p class="text-muted bodysmall">{{ data?.openTime }}</p>
                        </div>
                        <div class="divider"></div>
                        <div class="d-flex flex-column align-items-center gap-3">
                            <h6 class="heading-6">Controller Time</h6>
                            <p class="text-muted bodysmall">{{ data?.controllerTime }}</p>
                        </div>
                        <div class="divider"></div>
                        <div class="d-flex flex-column align-items-center gap-3">
                            <h6 class="heading-6">Close Time</h6>
                            <p class="text-muted bodysmall">{{ data?.closeTime }}</p>
                        </div>
                    </div>

                    <!-- {{data}} -->
                </div>
                <!--end::Modal header-->

                <!--begin::Modal body-->

                <div v-if="data?.status === 'Completed'"  class="modal-body scroll-y m-5">

                    <div 
                        class="modal-block d-flex justify-content-between align-items-center"
                    >
                        <h6 class="heading-6">Source :</h6>
                        <div class="d-flex gap-3">
                            <KTIcon icon-name="phone" style="font-size: 25px;" />
                            <p class="text-muted bodysmall">App</p>
                        </div>  

                    </div>

                    <div 
                        class="modal-block d-flex justify-content-between align-items-center"
                    >
                        <h6 class="heading-6">Time to Complete :</h6>
                        <div class="d-flex gap-3">
                            <p class="text-muted bodysmall">45 seconds</p>
                        </div>  

                    </div>

                    <div 
                        class="modal-block d-flex justify-content-between align-items-center"
                    >
                        <h6 class="heading-6">Method :</h6>
                        <div class="d-flex gap-3">
                            <p class="text-muted bodysmall">Swipe</p>
                        </div>  

                    </div>


                </div>

                <div class="modal-body scroll-y m-5">
                    <div class="modal-block d-flex justify-content-between align-items-center">
                        <h6 class="heading-6" style="margin: 0;">Assignee</h6>
                        <div class="d-flex gap-3">
                            <img class="assignee-img" :src="data?.assigneeImg">
                            <p class="text-muted bodysmall" style="margin: 0;">{{ data?.assigneeName }}</p>
                        </div>                      
                    </div>

                    <div
                        v-if="data?.status === 'Resolved'" 
                        class="modal-block d-flex justify-content-between align-items-center mt-10"
                    >
                        <h6 class="heading-6" style="margin: 0;">Resolver</h6>
                        <div class="d-flex gap-3">
                            <img class="assignee-img" :src="data?.assigneeImg">
                            <p class="text-muted bodysmall" style="margin: 0;">{{ data?.assigneeName }}</p>
                        </div>                      
                    </div>

                    <div
                        v-if="data?.status === 'Resolved'" 
                        class="mt-10"
                    >
                        <h6 class="heading-6" style="margin: 0; margin-bottom: 24px;">Resolution note :</h6>
                        <textarea cols="46" rows="10" class="resolver-text-area">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                        </textarea>
                    </div>

                    <button 
                        v-if="data?.status !== 'Future' && data?.status !== 'Completed'"
                        class="submit-btn body"
                    >
                        {{ 
                            data?.status === 'In Window' || data?.status === 'In Critical Window' ? 'Confirm call' : 
                            data?.status === 'No show' ? 'Resolve' : 'Update note'  
                        }}
                    </button>
                </div>
                <!--end::Stepper-->
                <!--end::Modal body-->
            </div>
            <!--end::Modal content-->
        </div>
        <!--end::Modal dialog-->
    </div>
    <!--end::Modal - Create project-->
</template>
  
<script setup lang="ts">
import { defineComponent, defineProps, withDefaults, defineEmits, ref } from 'vue';

interface Props {
    modelValue: boolean
    data: object
    handleClose: () => void
}
const props = withDefaults(defineProps<Props>(), {
    modelValue: false,
    data: {},
    handleClose: function(){}
})
const emit = defineEmits(['update:modelValue']); 
const handleCloseModal = () => {
    emit("update:modelValue", false)
}
console.log(props);

const statuses = ref({
    "Future": {
        color: "#1F2636"
    },
    "In Window": {
        color: "#33415C"
    },
    "In Critical Window": {
        color: "#F6C000"
    },
    "No show": {
        color: "#D92121"
    },
    "Resolved": {
        color: "#47BE7D"
    },
    "Completed": {
        color: "#47BE7D"
    },
})

// export default defineComponent({
//     name: "status-modal",
//     components: {},
//     // props: { show: Boolean, data: Object },
//     setup() {
//         const props = defineProps({
//             show: { type: Boolean, default: true }
//         });
//         console.log(props, "asasas");
        
//         return {
//         };
//     },
// });
</script>
  