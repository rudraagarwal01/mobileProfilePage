document.addEventListener("DOMContentLoaded", function() {
    const mentorsTab = document.querySelector(".rp-tab.mentors-tab");
    const profileTab = document.querySelector(".rp-tab.profile-tab");
    const mentorsContent = document.querySelector(".rp-tab-content.mentors-content");
    const profileContent = document.querySelector(".rp-tab-content.profile-content");

    if (mentorsTab && profileTab && mentorsContent && profileContent) {
        mentorsTab.addEventListener("click", () => {
            mentorsTab.classList.add("active");
            profileTab.classList.remove("active");
            mentorsContent.classList.add("active");
            profileContent.classList.remove("active");
        });

        profileTab.addEventListener("click", () => {
            profileTab.classList.add("active");
            mentorsTab.classList.remove("active");
            profileContent.classList.add("active");
            mentorsContent.classList.remove("active");
        });
    }
});
