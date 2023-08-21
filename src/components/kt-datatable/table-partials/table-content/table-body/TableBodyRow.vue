<template>
  <div
      :style="{
          left: `${getCurrentTime()}px`
      }"
      style="height: 400px; border-left: 2px solid #E96000; position: absolute;"
  >
  </div>

  <tbody class="fw-semibold text-gray-600">
    <template v-for="(row, i) in data" :key="i">
      <tr 
        :style=" { backgroundColor: checkStatus(row) ? 'rgba(241, 65, 65, 0.2)' : 'none' }"
      >
        <td v-if="checkboxEnabled">

          <div
            class="form-check form-check-sm form-check-custom form-check-solid"
          >
            <input
              class="form-check-input"
              type="checkbox"
              :value="row[checkboxLabel]"
              v-model="selectedItems"
              @change="onChange"
            />
          </div>

        </td>
        <template v-for="(properties, j) in header" :key="j">
          <td 
            :style="{ 
              color: j === 0 && checkStatus(row) ? 'rgba(217, 33, 33, 1)' : '',
              paddingLeft: j === 0 ? '10px' : 'initial' 
            }"
            :class="{ 'text-end': j === header.length - 1 }"
          >
            <slot :name="`${properties.columnLabel}`" :row="row">
              {{ row }}
            </slot>
          </td>
        </template>
      </tr>
    </template>
  </tbody>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from "vue";
import { object } from "yup";

export default defineComponent({
  name: "table-body-row",
  components: {},
  props: {
    header: { type: Array as () => Array<any>, required: true },
    data: { type: Array as () => Array<any>, required: true },
    currentlySelectedItems: { type: Array, required: false, default: () => [] },
    checkboxEnabled: { type: Boolean, required: false, default: false },
    checkboxLabel: {
      type: String as () => string,
      required: false,
      default: "id",
    },
  },
  emits: ["on-select"],
  setup(props, { emit }) {
    const selectedItems = ref<Array<any>>([]);

      const result = `${ new Date().getHours()}: ${new Date().getMinutes() }`;

      console.log('RESULT ', result.split(':')[0]);

    watch(
      () => [...props.currentlySelectedItems],
      (currentValue) => {
        if (props.currentlySelectedItems.length !== 0) {
          selectedItems.value = [
            ...new Set([...selectedItems.value, ...currentValue]),
          ];
        } else {
          selectedItems.value = [];
        }
      }
    );

    const onChange = () => {
      emit("on-select", selectedItems.value);
    };

    console.log('TABLE BODY ', props.data);

    const checkStatus = (row) => {
      let status = false;
      Object.keys(row).forEach(item => {

        if(typeof row[item] === 'object' && row[item].status === 'No show' ) {

          console.log('ROW ITEM OBJECT ', row[item]);

          status = true;
        }
      });

      return status;
    }

    const getCurrentTime = () => {
      const hoursDistance = 200,
            currentHour = (parseInt(result.split(':')[0]) + 2.7) * hoursDistance,
            currentMinute = Math.ceil(parseInt(result.split(':')[1]) / 0.6) * hoursDistance / 100;
            console.log('Hour ', currentHour);
            console.log('Minute ', currentMinute);
      return currentHour + currentMinute;
    }

    props.data.forEach(value => {

      checkStatus(value);

    });


    return {
      selectedItems,
      onChange,
      checkStatus,
      result,
      getCurrentTime
    };
  },
});
</script>
