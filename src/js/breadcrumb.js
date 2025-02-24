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
