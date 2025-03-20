document.addEventListener("DOMContentLoaded", function () {
    const breadcrumbContainer = document.getElementById("breadcrumb");
    if (!breadcrumbContainer) return;

    const pathArray = window.location.pathname.split('/').filter(Boolean);

    // Hide breadcrumb on the homepage
    if (pathArray.length === 0) {
        breadcrumbContainer.style.display = "none";
        return;
    }

    let breadcrumbHTML = `<a href="/">Home</a>`;
    let path = "";

    pathArray.forEach((segment, index) => {
        // Ignore numbers (pagination) and single blog post titles
        if (!isNaN(segment) || (pathArray[0] === "blog" && index > 0)) return;

        path += `/${segment}`;
        const isLast = index === pathArray.length - 1;
        breadcrumbHTML += ` &raquo; ${
            isLast
                ? `<span>${decodeURIComponent(segment)}</span>`
                : `<a href="${path}/">${decodeURIComponent(segment)}</a>`
        }`;
    });

    breadcrumbContainer.innerHTML = breadcrumbHTML;
});


document.addEventListener("DOMContentLoaded", function () {
    let span = document.querySelector("nav#breadcrumb span");
    let anchors = document.querySelectorAll(".breadcrumb a"); // Selects all <a> elements inside .breadcrumb

    if (span) {
        span.textContent = span.textContent.replace(/-/g, " ");
    }

    if (anchors.length > 0) { // If at least one <a> tag exists
        anchors.forEach(anchor => {
            anchor.textContent = anchor.textContent.replace(/-/g, " ");
        });
    }
});
