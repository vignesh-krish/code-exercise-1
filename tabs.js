export const Tabs = function(parentSelector) {
  const tabs = parentSelector.querySelectorAll(".tabs li");
  const tabContent = parentSelector.querySelectorAll(".tabs .tab-content");
  tabs.forEach(e => e.addEventListener("click", switchTab));

  function switchTab(e) {
    tabs.forEach(e => e.classList.remove("active"));
    tabContent.forEach(e => e.classList.remove("active"));
    e.target.classList.add("active");
    const clickedTab = e.target.getAttribute("data-tab");
    parentSelector
      .querySelector(`[data-tab-content="${clickedTab}"]`)
      .classList.add("active");
  }
};
