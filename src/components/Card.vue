    <script setup lang="ts">
    import { ref, onMounted } from 'vue';

    // Reactive references for inputs
    const billInput = ref<HTMLInputElement | null>(null);
    const numberOfPeople = ref<HTMLInputElement | null>(null);
    const allInputs = ref<HTMLInputElement | null>(null);

    const tipAmount = ref<number>(0.00);
    const total = ref<number>(0.00);

    function getTip(tipPercent: number) {
        const bill = billInput.value?.value ? parseFloat(billInput.value.value) : 0;
        const people = numberOfPeople.value?.value ? parseFloat(numberOfPeople.value.value) : 1;

        // Calculate tip and total
        const calculatedTip = (bill * tipPercent) / 100;
        const calculatedTotal = (bill + calculatedTip) / people;

        tipAmount.value = calculatedTip;
        total.value = calculatedTotal;
    }

    function reset() {
        billInput.value!.value = "";
        numberOfPeople.value!.value = "";
        tipAmount.value = 0.00;
        total.value = 0.00;
    }

        // Reactive references for the custom input and button visibility
    const customInputVisible = ref(false);
    const customButtonVisible = ref(true);

    function toggleCustomInput() {
        customInputVisible.value = !customInputVisible.value;
        customButtonVisible.value = !customButtonVisible.value;
}


    // Ensure DOM elements are available after mounting
    onMounted(() => {

        billInput.value = document.querySelector<HTMLInputElement>(".bill");
        numberOfPeople.value = document.querySelector<HTMLInputElement>(".people");
    });
    </script>

    <template>
    <div class="bg-white flex flex-col md:justify-between w-screen p-8 h-[80vh] rounded-t-3xl">
        <div>
        <div>
            <h1 class="text-d-grayish">Bill</h1>
            <div class="pb-3">
            <img src="../assets/images/icon-dollar.svg" alt="dollar sign" class="translate-y-[24px] translate-x-[10px]" />
            <input
                type="number"
                placeholder="0"
                class="bill text-components-bg outline-none bg-vl-cyan rounded-[5px] w-full h-8 px-2 text-right caret-grayish"
                
            />
            </div>
        </div>
        <div>
            <h1 class="text-d-grayish pb-3">Select Tip %</h1>
            <div class="percentage-container gap-2 pb-3">
                <button class="bg-components-bg text-white py-1 px-3 hover:text-components-bg hover:bg-inner-text w-full rounded-md h-[2.2rem]" @click="getTip(5)">5%</button>
                <button class="bg-components-bg text-white py-1 px-3 hover:text-components-bg hover:bg-inner-text w-full rounded-md h-[2.2rem]" @click="getTip(10)">10%</button>
                <button class="bg-components-bg text-white py-1 px-3 hover:text-components-bg hover:bg-inner-text w-full rounded-md h-[2.2rem]" @click="getTip(15)">15%</button>
                <button class="bg-components-bg text-white py-1 px-3 hover:text-components-bg hover:bg-inner-text w-full rounded-md h-[2.2rem]" @click="getTip(25)">25%</button>
                <button class="bg-components-bg text-white py-1 px-3 hover:text-components-bg hover:bg-inner-text w-full rounded-md h-[2.2rem]" @click="getTip(50)">50%</button>
                <button
                    v-if="customButtonVisible"
                    class="text-grayish text-center border-2 border-grayish rounded-md"
                    @click="toggleCustomInput"
                >
                    Custom
                </button>
                <!-- Conditionally rendered custom input field -->
                <input
                    v-if="customInputVisible"
                    type="number"
                    class="customInput w-full outline-none border-grayish border-2 rounded-lg px-3 py-1 text-components-bg"
                    placeholder="Enter custom tip"
                />
            </div>
        </div>
        <div>
            <h1 class="text-d-grayish">Number of people</h1>
            <div class="pb-3">
            <img src="../assets/images/icon-person.svg" alt="people sign" class="translate-y-[24px] translate-x-[10px]" />
            <input
                type="number"
                placeholder="1"
                class="people text-components-bg outline-none bg-vl-cyan rounded-[5px] w-full h-8 px-2 text-right caret-grayish"
                
            />
            </div>
        </div>
        </div>
        <div class="bg-components-bg flex flex-col w-full px-8 py-4 rounded-xl gap-3 text-white">
        <div class="flex flex-row justify-between">
            <div>
            <h2>Tip Amount</h2>
            <p class="text-d-grayish text-sm">/ person</p>
            </div>
            <div>
            <h1 class="text-inner-text text-lg">$<span>{{ tipAmount.toFixed(2) }}</span></h1>
            </div>
        </div>
        <div class="flex flex-row justify-between">
            <div>
            <h2>Total</h2>
            <p class="text-d-grayish text-sm">/ person</p>
            </div>
            <div>
            <h1 class="text-inner-text">$<span>{{ total.toFixed(2) }}</span></h1>
            </div>
        </div>
        <button @click="reset()" class="bg-inner-text text-components-bg py-1 px-3 hover:text-components-bg hover:bg-inner-text w-full rounded-md h-[2.2rem]">
            RESET
        </button>
        </div>
    </div>
    </template>
