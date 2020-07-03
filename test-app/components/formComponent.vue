<template>
  <div>
    <div class="row">
      <a
          href="/"
          rel="noopener noreferrer"
          class="button--grey"
        >
          Back
        </a>
        </div>
        <br>
    <b-card style="min-width:40em">
    <b-form>
      <b-alert :show="isInvalid" variant="danger">Number is not in the sequence</b-alert>
      <b-alert  :show="!isRandomExists" dismissible variant="danger">Random Does Not Exist </b-alert>
      <b-alert :show="isTotalCount" variant="success">Total Count: {{total_count}}</b-alert>
      <b-form-group
        id="input-group-1"
        description="Max Number"
        label="Max Number"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="max_number"
          type="text"
          required
          placeholder="Enter Max Number"
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-3"
        description="Random Number"
        label="Random Number"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          v-model="random_number"
          type="text"
          required
          placeholder="Enter Random Number"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Sequences" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="fibonacci"
          placeholder="Sequence"
          :disabled="true"
        ></b-form-input>
      </b-form-group>

       <b-button  @click="getSequences" variant="primary">Add</b-button>
        <b-button @click="totalCount" variant="danger">Submit</b-button>
    </b-form>
    </b-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isInvalid: false,
        fibonacci: [],
        max_number: "",
        random_number: "",
        total_count: 0,
        isTotalCount: false,
        isRandomExists: false
      }
    },
    methods: {
      checkRandomNumber(){
        if(this.random_number){
          this.isRandomExists = this.fibonacci.includes(parseInt(this.random_number));
        }
      },
      totalCount(){
        this.total_count = 0;
        this.fibonacci.forEach(element => {
          this.total_count += element
        });
        this.isTotalCount = true;
      },
       getSequences(){
         let arr = [];  
           if(this.max_number && !isNaN(this.max_number)) {

            for(var i = 1; i <= this.max_number; i++)
            {
              
              if(arr.length > 1){
                arr.push(arr[i - 1] + arr[i - 2]);
              }
              else{
                arr.push(0,1)
              }
              
            }
            
            this.fibonacci = arr;
            this.checkRandomNumber();
           } else{
             this.isInvalid = true;
           }
            
        },
    },
      watch:{
        
      }
    }
  
</script>