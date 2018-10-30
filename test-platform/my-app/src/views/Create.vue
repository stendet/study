<template>
  <div class="home">
    <div class="dialog">
      <div class="dialog-header">
        <div class="tab" :class="(step === 1) ? 'active' : ''">
          Discribe yuor dream
        </div>
        <div class="tab" :class="(step === 2) ? 'active' : ''">
          Enter dream info
        </div>
        <div class="tab" :class="(step === 3) ? 'active' : ''">
          Share?
        </div>
      </div>
      <div class="dialog-content" v-if="step === 1">
        <b-form-textarea
            v-model="description"
            placeholder="Describe your dream in details"
            :rows="4"
            :max-rows="8">
        </b-form-textarea>
      </div>
      <div class="dialog-content" v-if="step === 2">
        <label>
          When you want it?
          <b-form-select v-model="when" :options="whenOptions" class="mb-3" />
        </label>
          How strong your wish?
        <b-form-input
          type="number"
          v-model="dreamPower"
          placeholder="Enter value form 1 to 10"
          min="1"
          max="10">
          
        </b-form-input>
      </div>
      <div class="dialog-content" v-if="step === 3">
        <b-form-group label="Want to share with others?">
          <b-form-radio-group
            v-model="share"
            :options="shareOptions"
            butt
            stacked>
          </b-form-radio-group>
        </b-form-group>
      </div>
      <div class="button-holder">

        <b-button @click="step -= 1" v-if="step > 1">
          Prev
        </b-button>
        <div></div>
        <b-button @click="step += 1" v-if="step < 3">
          Next
        </b-button>
        <b-button @click="step += 1" v-else>
          Complete
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Create",
  data() {
    return {
      step: 1,
      description: '',
      dreamPower: '5',
      when: 'afterweek',
      whenOptions: [
        { value: 'afterweek', text: 'After a week' },
        { value: 'aftermonth', text: 'After a month' },
        { value: 'afteryear', text: 'After a year' },
      ],
      share: 'No',
      shareOptions: [
        {value: 'yes', text: 'Yes'},
        {value: 'no', text: 'No'},
      ]
    };
  }
};
</script>

<style>
.custom-control-label::before {
  background-color: #a2c0df;
}
</style>


<style lang="scss" scoped>

$dialog-color: rgb(235, 235, 235);
$dialog-radius: 15px;
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  .dialog {
    display: flex;
    flex-direction: column;
    background-color: $dialog-color;
    width: 600px;
    height: 350px;
    border-radius: $dialog-radius;
    box-shadow: 0 0 20px darken($dialog-color, $amount: 30);

    .dialog-header {
      display: flex;
      justify-content: space-between;
      height: 60px;

      .tab {
        &:not(.active) {
          background-color: darken($dialog-color, $amount: 30);
          color: white;

          &:last-of-type {
            border-top-right-radius: $dialog-radius;
          }
          &:first-of-type {
            border-top-left-radius: $dialog-radius;            
          }
        }

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .dialog-content {
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      padding: 20px;
    }
    .button-holder {
      display: flex;
      justify-content: space-between;
      padding: 20px
    }
  }
}
</style>

