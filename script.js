// Static realistic values based on global reports
const data = {
  globalUnemployment: 4.9,
  youthUnemployment: 12.4,
  jobGap: 408
};

document.getElementById("global-unemployment").textContent =
  data.globalUnemployment + "%";

document.getElementById("youth-unemployment").textContent =
  data.youthUnemployment + "%";

document.getElementById("job-gap").textContent =
  data.jobGap + "M";

const messages = [
  "Millions are employed — but not in jobs they actually want.",
  "The hardest job to get is your first one.",
  "Experience is required. Getting experience is the problem.",
  "Automation is rising faster than job creation.",
  "You're not competing locally anymore. You're competing globally."
];

document.getElementById("message").textContent =
  messages[Math.floor(Math.random() * messages.length)];
