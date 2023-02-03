'useStrict';
//Query Selector
const qs = (sel) => document.querySelector(sel);
const qsa = (sel) => document.querySelectorAll(sel);
// Dom elements
const step = qsa('.step');
const header2 = qs('h2');
const para = qs('.description');
const nextBtn = qs('.btn--next');
const prvBtn = qs('.btn--go-back');
const labels = qsa('label');
const plans = qsa('.plan');
const yearOrMonth = qs('.plan--selector--container');
const planCircle = qs('.plan--circle');
const planMonth = qs('.plan--month');
const planYear = qs('.plan--year');
//Heading 2 text content array
const data = [
  {
    id: 1,
    heading: 'Personal info',
    description: 'Please provide your name, email address, and phone number',
  },
  {
    id: 2,
    heading: 'Select your plan',
    description: 'You have the option of monthly or yearly billing',
  },
  {
    id: 3,
    heading: 'Pick add-ons',
    description: 'Add-ons help enhance your gaming experience',
  },
  {
    id: 4,
    heading: 'Finishing up',
    description: 'Double-check everything looks Ok before confirming',
  },
];
let count = 0;
//Functions
const action = function (count) {
  header2.textContent = data[count].heading;
  para.textContent = data[count].description;
  step.forEach((ele) => ele.classList.remove('step-active'));
  step[count].classList.add('step-active');
  if (!count == '0') {
    labels.forEach((label) => label.classList.add('hidden'));
  } else {
    labels.forEach((label) => label.classList.remove('hidden'));
  }
};
//style
const selectedBillingPlan = {
  color: 'var(--Marine_blue)',
  fontSize: '0.9em',
  fontWeight: '500',
};
//EventListeners
nextBtn.addEventListener('click', () => {
  if (count < 3) {
    count++;
    action(count);
  }
});
prvBtn.addEventListener('click', () => {
  if (count >= 1) {
    count--;
    action(count);
  }
});

console.log(Object.keys(plans));

let month = true;
yearOrMonth.addEventListener('click', function () {
  if (!month) {
    planCircle.classList.remove('plan--circle--align--end');
    planYear.classList.remove('plan--selected');
    planMonth.classList.add('plan--selected');
    month = true;
  } else {
    planCircle.classList.add('plan--circle--align--end');
    planYear.classList.add('plan--selected');
    planMonth.classList.remove('plan--selected');
    month = false;
  }
});
