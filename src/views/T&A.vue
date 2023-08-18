<template>
    <div class="px-7 py-5">
        <!--begin::Input group-->
        <div class="mb-10">
            <!--begin::Input-->
            <div class="d-flex gap-10 flex-end">
                <label for="date-filter" class="select-date form-select-solid d-flex justify-content-center align-items-center calendar-filter">
                    Today
                    <KTIcon icon-name="calendar" icon-class="fs-1 me-3 lh-0" />
                </label>
                <!-- <input id="date-filter" type="date" placeholder="Today"> -->
                <div v-for="(filter, index) in filters" :key="index">
                    <select class="form-select form-select-solid select2-hidden-accessible task-filer-dropdown">
                        <option :label="filter.label" value="1" selected>{{ filter.label }}</option>
                        <option label="Approved" value="1">Approved</option>
                        <option label="Pending" value="2">Pending</option>
                        <option label="In Process" value="3">In Process</option>
                        <option label="Rejected" value="4">Rejected</option>
                    </select>
                </div>
                <button class="export-btn select-date form-select-solid">
                    <KTIcon icon-name="file-down" icon-class="fs-1 me-3 lh-0" />
                    Export
                </button>
            </div>
            <!--end::Input-->
        </div>

        <Datatable :header="tableHeader" :data="tableData1" :items-per-page="5" :items-per-page-dropdown-enabled="false" class="table-data">
            <template v-slot:order="{ row: invoice }">
                {{ invoice.order }}
            </template>
            <template v-slot:site="{ row: invoice }">
                <span :class="`text-${invoice.color}`" class="text-primary body">
                    {{ invoice.site }}
                </span>
            </template>
            <template v-slot:officer="{ row: invoice }">
                <span :class="`text-${invoice.color}`" class="text-primary body">
                    {{ invoice.officer }}
                </span>
            </template>

            <template v-for="(header, idx) in  tableHeader.slice(2) " v-slot:[header.columnName]="{ row: invoice }">
                <div :key="idx" class="time-table-wrapper">
                    <span 
                        v-if="invoice[header.columnName]?.time" 
                        @click="() => openStatusModal(invoice[header.columnName])" 
                        :style="{
                            backgroundColor: statuses[invoice[header.columnName]?.status]?.color,
                            backgroundImage: `url(${callTypes[invoice[header.columnName]?.callType]})`,
                            left: `${(parseInt(invoice[header.columnName]?.time.split(':')[1])as number) / 0.6}%`
                        }"
                        class="time-log"
                    >
                        <img 
                            v-if="invoice[header.columnName]?.avatar && invoice[header.columnName]?.isAssigned" 
                            :src="invoice[header.columnName]?.avatar" 
                            class="timeline-image" 
                        />
                        <img 
                            v-else-if="!invoice[header.columnName]?.avatar && invoice[header.columnName]?.isAssigned" 
                            src="media/avatars/blank.png" 
                            class="timeline-image" 
                        />
                        <KTIcon
                            v-else
                            :icon-name="'plus-circle'"
                            style="font-size: 30px;"
                        />
                        <div
                            v-if="
                                invoice[header.columnName]?.status === 'Resolved' || 
                                invoice[header.columnName]?.status === 'Completed'
                            " 
                            class="timeline-state-wrapper"
                            :style="{ border: invoice[header.columnName]?.status === 'Resolved' ? `2px solid red` : 'none'  }"
                        >
                            <KTIcon 
                                :icon-name="timelineStates[invoice[header.columnName]?.timelineState]"  
                            />
                        </div>
                    </span>
                </div>
            </template>
            <!-- <template v-slot:status="{ row: invoice }">
                <span :class="`badge badge-light-${invoice.status.state}`">{{
                    invoice.status.label
                }}</span>
            </template> -->
        </Datatable>
    </div>
    <StatusTable v-model="isOpen" :data="selectedStatus" />
</template>

<script setup lang="ts">
import { defineComponent, ref, reactive } from 'vue';
import Datatable from "@/components/kt-datatable/KTDataTable.vue";
import StatusTable from "@/components/modals/tables/status-modal.vue"

interface Filter {
    status: string;
    author: boolean;
    customer: boolean;
    notifications: boolean;
}
const filters = reactive([
    { label: "Status" },
    { label: "Site" },
    { label: "Client" },
    { label: "Officer" },
    { label: "Assigne" }
]);

const hours = new Array(24).fill(null).map((item, idx) => idx + 1 <= 12 ? `${idx + 1}: 00AM` : `${(idx + 1) % 12}: 00PM`);

console.log({ hours });
let isOpen = ref(false);
let selectedStatus = ref(null);
console.log({selectedStatus});

const openStatusModal = (data) => {

    console.log('DATA ', data);
    

    isOpen.value = true;
    selectedStatus.value = data;
}

const tableHeader = ref([
    {
        columnName: "ID",
        columnLabel: "order",
        sortEnabled: false,
    },
    {
        columnName: "Site",
        columnLabel: "site",
        sortEnabled: false,
    },
    {
        columnName: "Officer",
        columnLabel: "officer",
        sortEnabled: false,
    },
    ...hours.map((item) => ({
        columnName: item,
        columnLabel: item,
        sortEnabled: false,
    }))
]);

const statuses = ref({
    "Future": {
        color: "#1F2636"
    },
    "In Window": {
        // color: "#33415C"
        color: "#33415ceb"
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
        // color: "#47BE7D"

        color: "#47be7de0"
    },
});

const timelineStates = ref({
    "always": "note",
    "byHotline": "phone",
    "byControlRoom": "note",
    "byApp": "phone",
});

const callTypes = ref({
    'Check in': 'media/icons/duotune/arrows/checkin.svg',
    'Check out': 'media/icons/duotune/arrows/checkout.svg',
    'Check out yellow': 'media/icons/duotune/arrows/checkoutYellow.svg',
    'Check out green': 'media/icons/duotune/arrows/checkoutGreen.svg'
});

const tableData1 = ref([
    {
        order: "102445766",
        color: "site-color",
        site: "Cadburys B’Ham",
        officer: "JAMES123456",
        "1: 00AM": {
            callerName: 'Azhar Jamal',
            phoneNumber: '0778888766977',
            title: "asds",
            time: "01:00",
            status: 'Resolved',
            callType: '',
            timelineState: "always",
            avatar: 'media/avatars/300-12.jpg',
            isAssigned: true,
            openTime: '11:20am',
            controllerTime: '11:30am',
            closeTime: '11:35am',
            assigneeImg: 'media/avatars/300-25.jpg',
            assigneeName: 'John Doe'
        },
        "2: 00AM": {
            callerName: 'Azhar Jamal',
            phoneNumber: '077888899977',
            title: "asds",
            time: "02:15",
            status: 'Completed',
            callType: 'Check out green',
            timelineState: "byControlRoom",
            avatar: 'media/avatars/300-12.jpg',
            isAssigned: false,
            openTime: '11:20am',
            controllerTime: '11:30am',
            closeTime: '11:35am',
            assigneeImg: 'media/avatars/300-25.jpg',
            assigneeName: 'Jack Jones'
        }
    },
    
    {
        order: "102445788",
        color: "site-color",
        site: "Cadburys B’Ham",
        officer: "JAMES12345",
        
        "1: 00AM": {
            callerName: 'Azhar Jamal',
            phoneNumber: '077888891232',
            title: "asds",
            time: "01:39",
            status: 'No show',
            callType: '',
            timelineState: "",
            avatar: '',
            isAssigned: true,
            openTime: '11:20am',
            controllerTime: '11:30am',
            closeTime: '11:35am',
            assigneeImg: 'media/avatars/300-25.jpg',
            assigneeName: 'James Doe'
        },
        "2: 00AM": {
            callerName: 'Azhar Jamal',
            phoneNumber: '077812399977',
            title: "asds",
            time: "02:15",
            status: 'In Critical Window',
            callType: 'Check out yellow',
            timelineState: "byHotline",
            avatar: 'media/avatars/300-12.jpg',
            isAssigned: false,
            openTime: '11:20am',
            controllerTime: '11:30am',
            closeTime: '11:35am',
            assigneeImg: 'media/avatars/300-25.jpg',
            assigneeName: 'Jack Jones'
        }
    },
    {
        order: "102445788",
        color: "site-color",
        site: "Cadburys B’Ham",
        officer: "GIANT75346",
        "3: 00AM": {
            callerName: 'Azhar Jamal',
            phoneNumber: '0778888766977',
            title: "asds",
            time: "03:45",
            status: "Future",
            callType: 'Check out',
            timelineState: "byControlRoom",
            avatar: 'media/avatars/300-13.jpg',
            isAssigned: true,
            openTime: '11:20am',
            controllerTime: '11:30am',
            closeTime: '11:35am',
            assigneeImg: 'media/avatars/300-25.jpg',
            assigneeName: 'Jack Johnes'
        },
        "2: 00AM": {
            callerName: 'Azhar Jamal',
            phoneNumber: '077888899977',
            title: "asds",
            time: "02:55",
            status: "In Window",
            callType: 'Check out',
            timelineState: "byApp",
            avatar: 'media/avatars/300-14.jpg',
            isAssigned: true,
            openTime: '11:20am',
            controllerTime: '11:30am',
            closeTime: '11:35am',
            assigneeImg: 'media/avatars/300-25.jpg',
            assigneeName: 'John Jack'
        }
    },
    // {
    //     date: "Oct 24, 2020",
    //     order: "423445721",
    //     details: "Seller Fee",
    //     color: "site-color",
    //     site: "Cadburys B’Ham",
    //     status: {
    //         label: "Pending",
    //         state: "warning",
    //     },
    // },
    // {
    //     date: "Oct 08, 2020",
    //     order: "312445984",
    //     details: "Cartoon Mobile Emoji Phone Pack",
    //     color: "site-color",
    //     site: "Cadburys London",
    //     status: {
    //         label: "Pending",
    //         state: "warning",
    //     },
    // },
    // {
    //     date: "Sep 15, 2020",
    //     order: "312445984",
    //     details: "Iphone 12 Pro Mockup  Mega Bundle",
    //     color: "site-color",
    //     site: "Cadburys London",
    //     status: {
    //         label: "Pending",
    //         state: "warning",
    //     },
    // },
    // {
    //     date: "May 30, 2020",
    //     order: "523445943",
    //     details: "Seller Fee",
    //     color: "site-color",
    //     site: "Cadburys London",
    //     status: {
    //         label: "Pending",
    //         state: "warning",
    //     },
    // },
    // {
    //     date: "Apr 22, 2020",
    //     order: "231445943",
    //     details: "Parcel Shipping / Delivery Service App",
    //     color: "site-color",
    //     site: "Cadburys London",
    //     status: {
    //         label: "Pending",
    //         state: "warning",
    //     },
    // },
    // {
    //     date: "Feb 09, 2020",
    //     order: "426445943",
    //     details: "Visual Design Illustration",
    //     color: "site-color",
    //     site: "Cadburys B’Ham",
    //     status: {
    //         label: "Pending",
    //         state: "warning",
    //     },
    // },
    // {
    //     date: "Nov 01, 2020",
    //     order: "984445943",
    //     details: "Abstract Vusial Pack",
    //     color: "site-color",
    //     site: "Cadburys B’Ham",
    //     status: {
    //         label: "Pending",
    //         state: "warning",
    //     },
    // },
    // {
    //     date: "Jan 04, 2020",
    //     order: "324442313",
    //     details: "Seller Fee",
    //     color: "site-color",
    //     site: "Cadburys London",
    //     status: {
    //         label: "Pending",
    //         state: "warning",
    //     },
    // },
]);


// export default defineComponent({
//     name: 't&a',
//     components: {
//         Dropdown1,
//         Dropdown2,
//         Dropdown3,
//         Dropdown4
//     },
//     setup() {
//         const data = ref<Filter>({
//             status: "1",
//             author: true,
//             customer: true,
//             notifications: true,
//         });
//         const filters = reactive([
//             { label: "Status" },
//             { label: "Site" },
//             { label: "site" },
//             { label: "Assigne" }
//         ]);
//         const tableHeader = ref([
//             {
//                 columnName: "Order id",
//                 columnLabel: "order",
//                 sortEnabled: false,
//             },
//             {
//                 columnName: "Amount",
//                 columnLabel: "amount",
//                 sortEnabled: false,
//             },
//             {
//                 columnName: "Status",
//                 columnLabel: "status",
//                 sortingField: "status.label",
//                 sortEnabled: false,
//             },
//             {
//                 columnName: "Date",
//                 columnLabel: "date",
//                 sortEnabled: false,
//             },
//             {
//                 columnName: "Invoice",
//                 columnLabel: "invoice",
//                 sortEnabled: false,
//             },
//         ]);
//     }
// })
</script>